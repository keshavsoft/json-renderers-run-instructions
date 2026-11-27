import normalizeOptions, { isObject } from "./normalizeOptions.js";
import resolveFeatureKeys from "./resolveFeatureKeys.js";

/**
 * Converts caller `options` into ordered, deduplicated `{ type, key }` step descriptors.
 */
const resolveOptionSteps = ({ options = {} } = {}) => {
    if (!isObject(options)) return [];

    const sequence = [];
    const seen = new Set();

    for (const [featureKey, request] of normalizeOptions(options)) {
        const descriptors = resolveFeatureKeys({ featureKey, request });

        for (const descriptor of descriptors) {
            const seenId = `${descriptor.type}:${descriptor.key}`;
            if (seen.has(seenId)) continue;
            seen.add(seenId);
            sequence.push(descriptor);
        }
    }

    return sequence;
};

export { resolveOptionSteps };
export default resolveOptionSteps;
