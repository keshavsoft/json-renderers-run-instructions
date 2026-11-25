import normalizeOptions, { isObject } from "./normalizeOptions.js";
import resolveFeatureKeys from "./resolveFeatureKeys.js";

/**
 * Converts caller `options` into ordered, deduplicated instruction steps.
 */
const resolveOptionSteps = ({ options = {}, instructions = {} } = {}) => {
    if (!isObject(options) || !isObject(instructions)) return [];

    const instructionKeys = Object.keys(instructions);
    const sequence = [];
    const seen = new Set();

    for (const [featureKey, request] of normalizeOptions(options)) {
        const featureKeys = resolveFeatureKeys({
            featureKey,
            request,
            instructions,
            instructionKeys
        });

        for (const instructionKey of featureKeys) {
            if (seen.has(instructionKey)) continue;
            seen.add(instructionKey);
            sequence.push({
                key: instructionKey,
                instructionKey
            });
        }
    }

    return sequence;
};

export { resolveOptionSteps };
export default resolveOptionSteps;
