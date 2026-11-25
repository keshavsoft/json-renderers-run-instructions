import { query } from "jsonpathly";

const checkDestinationExists = (destinationPath, context) => {
    if (!destinationPath) return true;
    const root = context[destinationPath.fileName];
    if (root === undefined) return false;

    if (destinationPath.jsonPath) {
        const matches = query(root, destinationPath.jsonPath, { returnArray: true });
        return matches.length > 0;
    }

    return true;
};

export const shouldSkip = (instruction, context, showLog = false) => {
    // Auto-normalize legacy dataRole to jsonPath
    if (instruction.destinationPath?.dataRole && !instruction.destinationPath?.jsonPath) {
        instruction.destinationPath.jsonPath = `$..*[?@.attributes['data-role'] == '${instruction.destinationPath.dataRole}']`;
    }

    // Skip if instruction has skipIf condition and target already exists
    if (instruction.skipIf && query(context.base, instruction.skipIf, { returnArray: true }).length > 0) {
        return true;
    }

    // If destination node does not exist in current base, safely skip
    if (!checkDestinationExists(instruction.destinationPath, context)) {
        if (showLog) {
            console.warn(`Destination node not found for ${instruction.destinationPath?.jsonPath}, skipping instruction.`);
        }
        return true;
    }

    return false;
};

export default shouldSkip;
