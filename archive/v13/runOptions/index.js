const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);

const getFeatureOptions = (options, featureKey) => {
    if (!isObject(options)) return null;
    if (options[featureKey] !== undefined) return options[featureKey];
    const prefixed = `show${featureKey.charAt(0).toUpperCase()}${featureKey.slice(1)}`;
    if (options[prefixed] !== undefined) return options[prefixed];
    return null;
};

/**
 * 2-level loop for applying option switches from definitions.json:
 * Level 1: Loop over feature groups (search, serial, options)
 * Level 2: Loop over switches inside the feature (showLabel, showHelper, showInput...)
 */
const runOptions = ({
    base,
    options = {},
    optionDefs = {},
    instructions = {},
    spec = {},
    executeInstruction,
    showLog = false
} = {}) => {
    if (!base || !isObject(options) || !isObject(optionDefs) || typeof executeInstruction !== "function") {
        return base;
    }

    for (const [featureKey, featureSwitches] of Object.entries(optionDefs)) {
        if (!isObject(featureSwitches)) continue;

        const userFeature = getFeatureOptions(options, featureKey);
        if (!userFeature) continue;

        const isBool = typeof userFeature === "boolean" && userFeature === true;
        const isObj = isObject(userFeature);
        if (!isBool && !isObj) continue;

        const hasActiveSwitch = Object.entries(featureSwitches).some(
            ([switchKey]) => switchKey !== "initialize" && (isBool || userFeature[switchKey] === true)
        );
        if (!hasActiveSwitch) continue;

        if (featureSwitches.initialize && instructions[featureSwitches.initialize]) {
            executeInstruction({
                instruction: instructions[featureSwitches.initialize]
            });
        }

        for (const [switchKey, instructionKey] of Object.entries(featureSwitches)) {
            if (switchKey === "initialize") continue;

            const isEnabled = isBool || userFeature[switchKey] === true;
            if (isEnabled && instructions[instructionKey]) {
                executeInstruction({
                    instruction: instructions[instructionKey]
                });
            }
        }
    }

    return base;
};

export { runOptions };
export default runOptions;
