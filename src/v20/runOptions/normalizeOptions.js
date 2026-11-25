const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);

/**
 * Normalizes modern grouped options and legacy `show*` shorthand flags
 * into `[featureKey, request]` pairs, preferring explicit modern keys.
 */
const normalizeOptions = (options = {}) => {
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

export { isObject, normalizeOptions };
export default normalizeOptions;
