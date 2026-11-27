// import { spec, instructions } from "spec-repo";

import spec from "declarative-spec";
import instructions from "declarative-instructions";

import writePath from "json-write-path";
import { query } from "jsonpathly";
import applyFeature from "./applyFeature.js";
import {
    getFeatureRequest,
    isEnabledFeature,
    isObject
} from "./helpers.js";

const isObjectCheck = value => value !== null && typeof value === "object" && !Array.isArray(value);

const getFeatureOptions = (options, featureKey) => {
    if (!isObjectCheck(options)) return null;
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

        const featureRequest = getFeatureRequest(options, featureKey);
        console.log("featureRequest : ", featureRequest);

        if (!isEnabledFeature(featureRequest)) continue;

        applyFeature({
            featureKey,
            featureSwitches,
            featureRequest,
            base,
            showLog
        });
    }

    return base;
};

export default runOptions;
