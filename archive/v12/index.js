import writePath from "json-write-path";
import { query } from "jsonpathly";
import { spec, instructions, definitions } from "spec-repo";

import { matrixTransformers, singleTransformers } from "./transformers/index.js";
import runOptions from "./runOptions/index.js";
import registerGlobal from "./registerGlobal/index.js";

const resolveSource = (sourcePath, context) => {
    if (!sourcePath) return null;

    const root = context[sourcePath.fileName];
    if (root === undefined) {
        throw new Error(`Context entry not found: ${sourcePath.fileName}`);
    }

    if (sourcePath.jsonPath) {
        const matches = query(root, sourcePath.jsonPath, { returnArray: true });
        if (matches.length === 0) {
            if (Array.isArray(root)) return root;
            return [];
        }
        return matches.length === 1 ? matches[0] : matches;
    }

    if (Array.isArray(sourcePath.filePath) && sourcePath.filePath.length > 0) {
        return sourcePath.filePath.reduce((curr, key) => (curr ? curr[key] : undefined), root);
    }

    return root;
};

const checkDestinationExists = (destinationPath, context) => {
    if (!destinationPath) return true;
    const root = context[destinationPath.fileName];
    if (root === undefined) return false;

    if (destinationPath.jsonPath) {
        const matches = query(root, destinationPath.jsonPath, { returnArray: true });
        return matches.length > 0;
    }

    return true;
};

const writeResult = (context, destinationPath, result, showLog = false) => {
    if (!destinationPath) return;

    if (!destinationPath.filePath || destinationPath.filePath.length === 0) {
        const target = context[destinationPath.fileName];
        if (Array.isArray(target)) {
            target.push(...(Array.isArray(result) ? result : [result]));
        } else {
            context[destinationPath.fileName] = result;
        }
        return;
    }

    writePath(context, destinationPath, result, showLog);
};

const transformMatrix = ({ instruction, context, spec }) => {
    const fn = matrixTransformers[instruction.type] ?? matrixTransformers.rowOnColumn;
    const columnSpec = spec[instruction?.templateKey?.columnKey];
    const rowSpec = spec[instruction?.templateKey?.rowKey];

    const columns = context.data?.columns ?? context.columns ?? [];
    const rows = context.data?.data ?? (Array.isArray(context.data) ? context.data : context.rows ?? []);

    return fn({ columns, data: rows, rows, columnSpec, rowSpec });
};

const transformSingle = ({ instruction, context, spec }) => {
    const template = instruction.templateKey ? spec[instruction.templateKey] : null;
    const source = resolveSource(instruction.sourcePath, context);

    if (instruction.func === null || instruction.func === undefined) {
        return structuredClone(template);
    }

    const fn = singleTransformers[instruction.func];
    if (!fn) {
        throw new Error(`Unknown function: ${instruction.func}`);
    }

    return fn(source, template);
};

const executeInstruction = ({ instruction, context, spec, showLog = false }) => {
    if (!instruction) return null;

    if (Array.isArray(instruction)) {
        return instruction.map(step => executeInstruction({ instruction: step, context, spec, showLog }));
    }

    // Auto-normalize legacy dataRole to jsonPath
    if (instruction.destinationPath?.dataRole && !instruction.destinationPath?.jsonPath) {
        instruction.destinationPath.jsonPath = `$..*[?@.attributes['data-role'] == '${instruction.destinationPath.dataRole}']`;
    }

    // Skip if instruction has skipIf condition and target already exists
    if (instruction.skipIf && query(context.base, instruction.skipIf, { returnArray: true }).length > 0) {
        return null;
    }

    // If destination node does not exist in current base, safely skip
    if (!checkDestinationExists(instruction.destinationPath, context)) {
        if (showLog) {
            console.warn(`Destination node not found for ${instruction.destinationPath?.jsonPath}, skipping instruction.`);
        }
        return null;
    }

    const isMatrix = instruction.type === "rowOnColumn" ||
                     instruction.type === "columnOnRow" ||
                     Boolean(instruction.templateKey?.columnKey);

    const result = isMatrix
        ? transformMatrix({ instruction, context, spec })
        : transformSingle({ instruction, context, spec });

    writeResult(context, instruction.destinationPath, result, showLog);

    return result;
};

const startFunc = ({
    instructionMainKey,
    instructionSubKey,
    data,
    options,
    showLog = false
} = {}) => {
    const definition = definitions[instructionMainKey]?.[instructionSubKey];
    if (!definition) {
        throw new Error(`Definition not found: ${instructionMainKey}.${instructionSubKey}`);
    }

    const baseKey = definition.baseFromSpec;
    const instructionsToRun = definition.instructions ?? [];
    const optionDefs = (definition.options && typeof definition.options === "object")
        ? definition.options
        : (definitions[instructionMainKey]?.options ?? instructions.options?.[definition.options] ?? {});

    const base = structuredClone(spec[baseKey]);
    const context = { base, data };

    instructionsToRun.forEach(instructionKeyOrObj => {
        if (showLog) console.log("instruction : ", instructionKeyOrObj);

        const instruction = typeof instructionKeyOrObj === "string"
            ? instructions[instructionKeyOrObj]
            : instructionKeyOrObj;

        if (!instruction) {
            if (showLog) console.warn(`Instruction not found: ${instructionKeyOrObj}`);
            return;
        }

        executeInstruction({ instruction, context, spec, showLog });
    });

    runOptions({
        base: context?.base,
        options,
        optionDefs,
        instructions,
        spec,
        executeInstruction: ({ instruction }) => executeInstruction({ instruction, context, spec, showLog }),
        showLog
    });

    return context?.base;
};

export default startFunc;

registerGlobal(startFunc);
