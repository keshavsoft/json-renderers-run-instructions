import writePath from "json-write-path";

const writeResult = (context, destinationPath, result, showLog = false) => {
    if (!destinationPath) return;

    if (!destinationPath.filePath || destinationPath.filePath.length === 0) {
        const target = context[destinationPath.fileName];
        if (Array.isArray(target)) {
            target.push(...(Array.isArray(result) ? result : [result]));
        } else {
            context[destinationPath.fileName] = result;
        }
        return;
    }

    writePath(context, destinationPath, result, showLog);
};

export default writeResult;
