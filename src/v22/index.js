import definitions from "declarative-definitions";
import spec from "declarative-spec";
import runInstructions from "json-renderers-run-instructions-steps";

import resolveOptionSteps from "./runOptions/index.js";
import registerGlobal from "./registerGlobal/index.js";

/**
 * Resolves a component definition, clones its spec canvas, attaches optional feature steps,
 * and delegates execution to `json-renderers-run-instructions-steps` (v14).
 */
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

    const baseTemplate = spec[definition.baseFromSpec];
    if (baseTemplate === undefined) {
        throw new Error(`Base spec not found: ${definition.baseFromSpec}`);
    }

    const base = structuredClone(baseTemplate);
    const baseSteps = definition["instructions-type"] ?? [];
    const optionSteps = options ? resolveOptionSteps({ options }) : [];
    const instructions = [...baseSteps, ...optionSteps];

    if (showLog) console.log("[v22] instructions : ", instructions);

    return runInstructions({
        instructions,
        base,
        data,
        showLog
    });
};

export default startFunc;

registerGlobal(startFunc);
