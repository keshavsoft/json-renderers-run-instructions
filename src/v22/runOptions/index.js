import singleInstructions from "declarative-instructions-single";
import multiInstructions from "declarative-instructions-multi";

const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);

const allInstructionKeys = Array.from(new Set([
    ...Object.keys(singleInstructions),
    ...Object.keys(multiInstructions)
]));

const findDescriptor = (key) => {
    if (singleInstructions[key] !== undefined) return { type: "single", key };
    if (multiInstructions[key] !== undefined) return { type: "multi", key };
    return null;
};

const collectSteps = ({ node, prefix, sequence, seen }) => {
    const pushStep = (descriptor) => {
        if (!descriptor) return;
        const id = `${descriptor.type}:${descriptor.key}`;
        if (seen.has(id)) return;
        seen.add(id);
        sequence.push(descriptor);
    };

    for (const [key, value] of Object.entries(node)) {
        if (value === false || value === null || value === undefined) continue;

        const nextPrefix = `${prefix}-${key}`;
        pushStep(findDescriptor(nextPrefix));

        if (isObject(value)) {
            collectSteps({ node: value, prefix: nextPrefix, sequence, seen });
        } else if (value === true) {
            const branchPrefix = `${nextPrefix}-`;
            for (const candidateKey of allInstructionKeys) {
                if (candidateKey.startsWith(branchPrefix)) {
                    pushStep(findDescriptor(candidateKey));
                }
            }
        }
    }
};

/**
 * Walks caller `options` recursively using the strict `options-...` tree path discipline,
 * attaching matching single/multi descriptors and skipping missing nodes.
 */
const resolveOptionSteps = ({ options = {} } = {}) => {
    if (!isObject(options)) return [];

    const sequence = [];
    const seen = new Set();
    collectSteps({ node: options, prefix: "options", sequence, seen });
    return sequence;
};

export { resolveOptionSteps };
export default resolveOptionSteps;
