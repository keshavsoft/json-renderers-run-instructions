import runSingleInstructions from "json-instruction-single";
import runDoubleInstructions from "json-instruction-double";
import jsonToDom from "@keshavsoft/json-to-dom";

/**
 * Executes the single- and double-target instruction lists against a shared registry.
 * This module deliberately knows nothing about tables or table definitions.
 */
export const runInstructions = ({
    single = [],
    double = [],
    registry = {},
    showLog = false
} = {}) => {
    if (!Array.isArray(single)) {
        throw new TypeError("single instructions must be an array");
    }
    if (!Array.isArray(double)) {
        throw new TypeError("double instructions must be an array");
    }
    if (!registry || typeof registry !== "object" || Array.isArray(registry)) {
        throw new TypeError("registry must be an object");
    }

    if (single.length > 0) {
        runSingleInstructions(single, registry, showLog);
    }
    if (double.length > 0) {
        runDoubleInstructions(double, registry);
    }

    return registry;
};

/**
 * Mounts a generated JSON specification into the DOM.
 * The caller owns spec generation and supplies the completed JSON spec.
 */
export const renderJsonToDom = ({
    jsonSpec,
    targetHtmlId,
    appendPosition,
    showLog = false
} = {}) => {
    if (!jsonSpec || typeof jsonSpec !== "object" || Array.isArray(jsonSpec)) {
        throw new TypeError("jsonSpec must be a JSON object");
    }

    return jsonToDom({
        jsonSpec,
        targetHtmlId,
        appendPosition,
        showLog
    });
};

export default {
    runInstructions,
    renderJsonToDom
};
