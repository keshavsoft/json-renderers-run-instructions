const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);

const getFeatureRequest = (options, featureKey) => {
    if (!isObject(options)) return null;

    if (options[featureKey] !== undefined) {
        return options[featureKey];
    }

    const prefixedKey = `show${featureKey.charAt(0).toUpperCase()}${featureKey.slice(1)}`;
    return options[prefixedKey] !== undefined ? options[prefixedKey] : null;
};

const isEnabledFeature = featureRequest => {
    if (featureRequest === true) return true;
    return isObject(featureRequest);
};

const getEnabledSwitches = (featureSwitches, featureRequest) => {
    if (!isObject(featureSwitches)) return [];

    return Object.entries(featureSwitches)
        .filter(([switchKey]) => switchKey !== "initialize")
        .filter(([switchKey]) => featureRequest === true || featureRequest[switchKey] === true)
        .map(([switchKey, instructionKey]) => ({ switchKey, instructionKey }));
};

const shouldInitializeFeature = (featureSwitches, featureRequest) => {
    if (!featureSwitches.initialize) return false;
    if (featureRequest === true) return true;

    return getEnabledSwitches(featureSwitches, featureRequest).length > 0;
};

export {
    getEnabledSwitches,
    getFeatureRequest,
    isEnabledFeature,
    isObject,
    shouldInitializeFeature
};
