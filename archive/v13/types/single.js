import applyTemplate from "json-transformer-funcs-primitive";
import fromCollection from "json-transformer-funcs-one-dimension";
import resolveSource from "./helpers/resolveSource.js";
import writeResult from "./helpers/writeResult.js";

const transformers = {
    applyTemplate,
    fromCollection
};

const runSingle = ({ instruction, context, spec, showLog = false }) => {
    const template = instruction.templateKey ? spec[instruction.templateKey] : null;
    const source = resolveSource(instruction.sourcePath, context);

    let result;
    if (instruction.func === null || instruction.func === undefined) {
        result = structuredClone(template);
    } else {
        const fn = transformers[instruction.func];
        if (!fn) throw new Error(`Unknown function: ${instruction.func}`);
        result = fn(source, template);
    }

    writeResult(context, instruction.destinationPath, result, showLog);
    return result;
};

export default runSingle;
