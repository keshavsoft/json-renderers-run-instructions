const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);

const toKebabCase = value => value.replace(/[A-Z]/g, ch => `-${ch.toLowerCase()}`);

const normalizeFeatureRequests = (options) => {
    if (!isObject(options)) return [];

    const features = new Map();

    for (const [rawKey, rawValue] of Object.entries(options)) {
        if (rawKey.startsWith("show") && rawKey.length > 4) {
            const featureKey = rawKey.charAt(4).toLowerCase() + rawKey.slice(5);
            if (options[featureKey] === undefined) {
                features.set(featureKey, rawValue);
            }
            continue;
        }

        features.set(rawKey, rawValue);
    }

    return Array.from(features.entries());
};

const addStep = (sequence, seen, instructionKey) => {
    if (seen.has(instructionKey)) return;
    seen.add(instructionKey);
    sequence.push({
        key: instructionKey,
        instructionKey
    });
};

const resolveOptionSteps = ({ options = {}, instructions = {} } = {}) => {
    if (!isObject(options) || !isObject(instructions)) return [];

    const sequence = [];
    const seen = new Set();
    const instructionKeys = Object.keys(instructions);

    for (const [featureKey, request] of normalizeFeatureRequests(options)) {
        const rootKey = `set-${featureKey}`;
        const prefix = `${featureKey}-`;

        if (request === true) {
            if (instructions[rootKey] !== undefined) {
                addStep(sequence, seen, rootKey);
            }
            for (const key of instructionKeys) {
                if (key.startsWith(prefix)) {
                    addStep(sequence, seen, key);
                }
            }
            continue;
        }

        if (!isObject(request)) continue;

        const switchKeys = Object.entries(request)
            .filter(([, enabled]) => enabled === true)
            .map(([switchKey]) => `${prefix}${toKebabCase(switchKey)}`)
            .filter(key => instructions[key] !== undefined);

        if (switchKeys.length === 0) continue;

        if (instructions[rootKey] !== undefined) {
            addStep(sequence, seen, rootKey);
        }
        for (const key of switchKeys) {
            addStep(sequence, seen, key);
        }
    }

    return sequence;
};

export { resolveOptionSteps };
export default resolveOptionSteps;
