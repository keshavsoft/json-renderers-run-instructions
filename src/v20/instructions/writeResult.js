import writePath from "json-write-path";
import { query } from "jsonpathly";

const hasDestination = (state, destinationPath) => {
    if (!destinationPath?.jsonPath) return true;

    const root = state[destinationPath.fileName];
    return root !== undefined && query(root, destinationPath.jsonPath, { returnArray: true }).length > 0;
};

const writeResult = (state, destinationPath, result, showLog = false) => {
    if (!destinationPath) return;
    if (!hasDestination(state, destinationPath)) return;

    if (!Array.isArray(destinationPath.filePath) || destinationPath.filePath.length === 0) {
        const target = state[destinationPath.fileName];
        if (Array.isArray(target)) {
            target.push(...(Array.isArray(result) ? result : [result]));
        } else {
            state[destinationPath.fileName] = result;
        }
        return;
    }

    writePath(state, destinationPath, result, showLog);
};

export { hasDestination };
export default writeResult;
