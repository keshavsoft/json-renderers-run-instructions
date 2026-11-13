import runSingleInstructions from "json-instruction-single";
import runDoubleInstructions from "json-instruction-double";

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
    };
    console.log("aaaaaaaaa : ", single, double);


    if (single.length > 0) {
        runSingleInstructions(single, registry, showLog);
    }
    if (double.length > 0) {
        runDoubleInstructions({
            instructions: double,
            registry
        });
    };

    return registry;
};

export default runInstructions;