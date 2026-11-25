import { spec, instructions, definitions } from "spec-repo";

import executeInstruction from "./types/index.js";
import runOptions from "./runOptions/index.js";
import registerGlobal from "./registerGlobal/index.js";

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

    const base = structuredClone(spec[definition.baseFromSpec]);
    const context = { base, data };

    const instructionsToRun = definition.instructions ?? [];
    instructionsToRun.forEach(keyOrObj => {
        const instruction = typeof keyOrObj === "string" ? instructions[keyOrObj] : keyOrObj;
        if (instruction) {
            executeInstruction({ instruction, context, spec, showLog });
        }
    });

    const optionDefs = (definition.options && typeof definition.options === "object")
        ? definition.options
        : (definitions[instructionMainKey]?.options ?? instructions.options?.[definition.options] ?? {});

    runOptions({
        base: context.base,
        options,
        optionDefs,
        instructions,
        spec,
        executeInstruction: ({ instruction }) => executeInstruction({ instruction, context, spec, showLog }),
        showLog
    });

    return context.base;
};

export default startFunc;

registerGlobal(startFunc);
