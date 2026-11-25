import { query } from "jsonpathly";

const resolveSource = (sourcePath, context) => {
    if (!sourcePath) return null;

    const root = context[sourcePath.fileName];
    if (root === undefined) {
        throw new Error(`Context entry not found: ${sourcePath.fileName}`);
    }

    if (sourcePath.jsonPath) {
        const matches = query(root, sourcePath.jsonPath, { returnArray: true });
        if (matches.length === 0) {
            if (Array.isArray(root)) return root;
            return [];
        }
        return matches.length === 1 ? matches[0] : matches;
    }

    if (Array.isArray(sourcePath.filePath) && sourcePath.filePath.length > 0) {
        return sourcePath.filePath.reduce((curr, key) => (curr ? curr[key] : undefined), root);
    }

    return root;
};

export default resolveSource;
