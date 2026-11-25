import single from "./single.js";
import rowOnColumn from "./rowOnColumn.js";
import columnOnRow from "./columnOnRow.js";
import { shouldSkip } from "./helpers/guards.js";

const typeMap = {
    single,
    rowOnColumn,
    columnOnRow
};

const executeInstruction = ({ instruction, context, spec, showLog = false }) => {
    if (!instruction) return null;

    if (Array.isArray(instruction)) {
        return instruction.map(step => executeInstruction({ instruction: step, context, spec, showLog }));
    }

    if (shouldSkip(instruction, context, showLog)) {
        return null;
    }

    const type = instruction.type ?? (instruction.templateKey?.columnKey ? "rowOnColumn" : "single");
    const executor = typeMap[type];

    if (!executor) {
        throw new Error(`Unknown instruction type: ${type}`);
    }

    return executor({ instruction, context, spec, showLog });
};

export default executeInstruction;
