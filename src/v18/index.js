import definitions from "./data/definitions.json" with { type: "json" };
import instructions from "./data/instructions.json" with { type: "json" };
import spec from "./data/spec.json" with { type: "json" };

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

    // Public options stay grouped. Internally, resolve them into ordered steps.
    const optionDefs = (definition.options && typeof definition.options === "object")
        ? definition.options
        : (definitions[instructionMainKey]?.options ?? {});

    const optionsArray = resolveOptionSteps({ options, optionDefs });
    console.log("optionsArray : ", optionsArray);

    const instructionSequence = [
        ...(definition.instructions ?? []).map(key => ({
            key,
            instructionKey: key
        })),
        ...optionsArray
    ];
    console.log("instructionSequence : ", instructionSequence);

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
