import {
    getEnabledSwitches,
    shouldInitializeFeature
} from "./helpers.js";
import applyInstructionBundle from "./applyInstructionBundle.js";

const applyFeature = ({ featureKey, featureSwitches, featureRequest, base, showLog }) => {
    const enabledSwitches = getEnabledSwitches(featureSwitches, featureRequest);

    if (shouldInitializeFeature(featureSwitches, featureRequest)) {
        applyInstructionBundle(featureSwitches.initialize, base, showLog);
    }

    for (const { switchKey, instructionKey } of enabledSwitches) {
        if (showLog) console.log(`Enabled switch: ${featureKey}.${switchKey}`);
        applyInstructionBundle(instructionKey, base, showLog);
    }
};

export default applyFeature;
