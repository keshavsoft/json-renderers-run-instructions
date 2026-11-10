import runSingleInstructions from "json-instruction-single";
import runDoubleInstructions from "json-instruction-double";

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

export default runInstructions;