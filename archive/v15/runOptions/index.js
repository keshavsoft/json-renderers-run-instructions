import { spec, instructions } from "spec-repo";
import writePath from "json-write-path";
import { query } from "jsonpathly";

const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);

const getFeatureOptions = (options, featureKey) => {
    if (!isObject(options)) return null;
    if (options[featureKey] !== undefined) return options[featureKey];
    const prefixed = `show${featureKey.charAt(0).toUpperCase()}${featureKey.slice(1)}`;
    if (options[prefixed] !== undefined) return options[prefixed];
    return null;
};

const applyOption = (instructionKey, base) => {
    const list = instructions[instructionKey];
    if (!list) return;

    for (const step of list) {
        if (step.skipIf && query(base, step.skipIf, { returnArray: true }).length > 0) continue;
        const template = spec[step.templateKey];
        try {
            writePath({ base }, step.destinationPath, template);
        } catch {
            // Optional target node not in base (e.g. footer on table without footer)
        }
    }
};

/**
 * Task 2: Applies key-value feature options (search, serial, actions) to base.
 */
const runOptions = ({
    options = {},
    optionDefs = {},
    base,
    showLog = false
} = {}) => {
    if (!base || !isObject(options) || !isObject(optionDefs)) {
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

        // 1. Run initialize option if present (e.g. "searchFrame")
        if (featureSwitches.initialize) {
            applyOption(featureSwitches.initialize, base);
        }

        // 2. Run enabled switch options (e.g. "searchLabel", "searchInput")
        for (const [switchKey, instructionKey] of Object.entries(featureSwitches)) {
            if (switchKey === "initialize") continue;

            const isEnabled = isBool || userFeature[switchKey] === true;
            if (isEnabled) {
                applyOption(instructionKey, base);
            }
        }
    }

    return base;
};

export default runOptions;
