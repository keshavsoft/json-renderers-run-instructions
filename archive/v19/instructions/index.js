import executeBuildInstruction from "./executeBuildInstruction.js";
import executeWriteBundle from "./executeWriteBundle.js";

const runInstructionSequence = ({
    sequence = [],
    base,
    data,
    instructions,
    spec,
    showLog = false
} = {}) => {
    const state = { base, data };

    for (const step of sequence) {
        const instructionKey = typeof step === "string" ? step : step.instructionKey;
        const instruction = instructions[instructionKey];

        if (!instruction) {
            throw new Error(`Instruction not found: ${instructionKey}`);
        }

        if (showLog) console.log(`[v19] ${step.key ?? instructionKey}`);

        if (Array.isArray(instruction)) {
            executeWriteBundle({ key: instructionKey, steps: instruction, state, spec, showLog });
            continue;
        }

        executeBuildInstruction({ key: instructionKey, instruction, state, spec, showLog });
    }

    return state.base;
};

export default runInstructionSequence;
