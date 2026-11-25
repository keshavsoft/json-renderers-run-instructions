import definitions from "declarative-definitions";
import instructions from "declarative-instructions";
import spec from "declarative-spec";

import resolveOptionSteps from "./runOptions/index.js";
import runInstructionSequence from "./instructions/index.js";
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

    // Start with the component's base JSON spec.
    const baseTemplate = spec[definition.baseFromSpec];
    if (baseTemplate === undefined) {
        throw new Error(`Base spec not found: ${definition.baseFromSpec}`);
    }

    const base = structuredClone(baseTemplate);

    // Resolve external options directly into instruction keys defined in declarative-instructions.
    const optionsArray = resolveOptionSteps({ options, instructions });
    if (showLog) console.log("optionsArray : ", optionsArray);

    const instructionSequence = [
        ...(definition.instructions ?? []).map(key => ({
            key,
            instructionKey: key
        })),
        ...optionsArray
    ];
    if (showLog) console.log("instructionSequence : ", instructionSequence);

    return runInstructionSequence({
        sequence: instructionSequence,
        base,
        data,
        instructions,
        spec,
        showLog
    });
};

export default startFunc;

registerGlobal(startFunc);
