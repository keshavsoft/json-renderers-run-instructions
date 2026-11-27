import singleInstructions from "declarative-instructions-single";
import multiInstructions from "declarative-instructions-multi";
import { isObject } from "./normalizeOptions.js";

const toKebabCase = value => value.replace(/[A-Z]/g, ch => `-${ch.toLowerCase()}`);

const findTypedDescriptor = (key) => {
    if (singleInstructions[key] !== undefined) return { type: "single", key };
    if (multiInstructions[key] !== undefined) return { type: "multi", key };
    return null;
};

/**
 * Translates one `[featureKey, request]` entry into ordered `{ type, key }` descriptors
 * resolved across `declarative-instructions-single` and `declarative-instructions-multi`.
 */
const resolveFeatureKeys = ({ featureKey, request } = {}) => {
    const rootKey = `set-${featureKey}`;
    const prefix = `${featureKey}-`;
    const descriptors = [];

    if (request === true) {
        const rootStep = findTypedDescriptor(rootKey);
        if (rootStep) descriptors.push(rootStep);

        const allKeys = new Set([
            ...Object.keys(singleInstructions),
            ...Object.keys(multiInstructions)
        ]);
        for (const key of allKeys) {
            if (!key.startsWith(prefix)) continue;
            const step = findTypedDescriptor(key);
            if (step) descriptors.push(step);
        }
        return descriptors;
    }

    if (!isObject(request)) return descriptors;

    const switchSteps = Object.entries(request)
        .filter(([, enabled]) => enabled === true)
        .map(([switchKey]) => findTypedDescriptor(`${prefix}${toKebabCase(switchKey)}`))
        .filter(Boolean);

    if (switchSteps.length === 0) return descriptors;

    const rootStep = findTypedDescriptor(rootKey);
    if (rootStep) descriptors.push(rootStep);
    descriptors.push(...switchSteps);

    return descriptors;
};

export { resolveFeatureKeys };
export default resolveFeatureKeys;
