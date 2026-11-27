import spec from "declarative-spec";
import instructions from "declarative-instructions";

import writePath from "json-write-path";
import { query } from "jsonpathly";

const hasDestination = (base, step) => {
    if (!step.destinationPath?.jsonPath) return true;

    return query(base, step.destinationPath.jsonPath, { returnArray: true }).length > 0;
};

const shouldSkipInstruction = (base, step) => {
    if (!step.skipIf) return false;

    return query(base, step.skipIf, { returnArray: true }).length > 0;
};

const applyInstructionBundle = (instructionKey, base, showLog = false) => {
    const steps = instructions[instructionKey];

    if (!Array.isArray(steps)) {
        if (showLog) console.warn(`Unknown option instruction: ${instructionKey}`);
        return;
    }

    for (const step of steps) {
        if (shouldSkipInstruction(base, step)) continue;
        if (!hasDestination(base, step)) continue;

        const template = spec[step.templateKey];
        if (template === undefined) {
            if (showLog) console.warn(`Unknown option template: ${step.templateKey}`);
            continue;
        }

        writePath({ base }, step.destinationPath, template);

        if (showLog) {
            console.log(step.narration ?? `Applied option instruction: ${instructionKey}`);
        }
    }
};

export default applyInstructionBundle;
