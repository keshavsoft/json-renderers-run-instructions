import { isObject } from "./normalizeOptions.js";

const toKebabCase = value => value.replace(/[A-Z]/g, ch => `-${ch.toLowerCase()}`);

/**
 * Translates one `[featureKey, request]` entry into ordered instruction keys present in `instructions`.
 */
const resolveFeatureKeys = ({ featureKey, request, instructions = {}, instructionKeys = [] } = {}) => {
    const rootKey = `set-${featureKey}`;
    const prefix = `${featureKey}-`;
    const keys = [];

    if (request === true) {
        if (instructions[rootKey] !== undefined) {
            keys.push(rootKey);
        }
        for (const key of instructionKeys) {
            if (key.startsWith(prefix)) {
                keys.push(key);
            }
        }
        return keys;
    }

    if (!isObject(request)) return keys;

    const switchKeys = Object.entries(request)
        .filter(([, enabled]) => enabled === true)
        .map(([switchKey]) => `${prefix}${toKebabCase(switchKey)}`)
        .filter(key => instructions[key] !== undefined);

    if (switchKeys.length === 0) return keys;

    if (instructions[rootKey] !== undefined) {
        keys.push(rootKey);
    }
    keys.push(...switchKeys);

    return keys;
};

export { resolveFeatureKeys };
export default resolveFeatureKeys;
