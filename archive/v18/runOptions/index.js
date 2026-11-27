const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);

const getFeatureRequest = (options, featureKey) => {
    if (!isObject(options)) return null;
    if (options[featureKey] !== undefined) return options[featureKey];

    const prefixedKey = `show${featureKey.charAt(0).toUpperCase()}${featureKey.slice(1)}`;
    return options[prefixedKey] ?? null;
};

const shouldRunStep = (step, request) => {
    if (request === true) return true;
    if (!isObject(request)) return false;

    if (Array.isArray(step.whenAny)) {
        return step.whenAny.some(switchKey => request[switchKey] === true);
    }

    return typeof step.when === "string" && request[step.when] === true;
};

const resolveOptionSteps = ({ options = {}, optionDefs = {} } = {}) => {
    if (!isObject(optionDefs)) return [];

    const sequence = [];

    for (const [featureKey, featureSteps] of Object.entries(optionDefs)) {
        if (!Array.isArray(featureSteps)) continue;

        const request = getFeatureRequest(options, featureKey);
        if (request !== true && !isObject(request)) continue;

        for (const step of featureSteps) {
            if (!step?.instructionKey || !shouldRunStep(step, request)) continue;

            sequence.push({
                key: step.key ?? `${featureKey}-${step.instructionKey}`,
                instructionKey: step.instructionKey
            });
        }
    }

    return sequence;
};

export { resolveOptionSteps };
export default resolveOptionSteps;
