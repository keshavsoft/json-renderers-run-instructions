import { spec, definitions } from "spec-repo";
import runInstructions from "json-renderers-run-instructions-steps";

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

    // The Canvas
    const base = structuredClone(spec[definition.baseFromSpec]);

    // Task 1: Execute blueprint instructions (Array-based, from dedicated steps package)
    runInstructions({
        instructions: definition.instructions ?? [],
        base,
        data,
        showLog
    });

    // Task 2: Apply feature options (Key-Value switch-based)
    const optionDefs = (definition.options && typeof definition.options === "object")
        ? definition.options
        : (definitions[instructionMainKey]?.options ?? {});

    runOptions({
        options,
        optionDefs,
        base,
        data,
        showLog
    });

    return base;
};

export default startFunc;

registerGlobal(startFunc);
