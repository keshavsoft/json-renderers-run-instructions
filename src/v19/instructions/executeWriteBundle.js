import { query } from "jsonpathly";
import writePath from "json-write-path";

import { hasDestination } from "./writeResult.js";

const executeWriteBundle = ({ key, steps, state, spec, showLog = false }) => {
    for (const step of steps) {
        if (step.skipIf && query(state.base, step.skipIf, { returnArray: true }).length > 0) continue;
        if (!hasDestination(state, step.destinationPath)) continue;

        const template = spec[step.templateKey];
        if (template === undefined) {
            throw new Error(`Instruction spec not found: ${step.templateKey} (from ${key})`);
        }

        writePath(state, step.destinationPath, structuredClone(template), showLog);
        if (showLog) console.log(step.narration ?? `Ran instruction: ${key}`);
    }
};

export default executeWriteBundle;
