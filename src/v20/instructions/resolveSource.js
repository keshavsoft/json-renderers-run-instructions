import { query } from "jsonpathly";

const resolveSource = (sourcePath, state) => {
    if (!sourcePath) return null;

    const root = state[sourcePath.fileName];
    if (root === undefined) {
        throw new Error(`Instruction source not found: ${sourcePath.fileName}`);
    }

    if (sourcePath.jsonPath) {
        const matches = query(root, sourcePath.jsonPath, { returnArray: true });
        if (matches.length === 0) return Array.isArray(root) ? root : [];
        return matches.length === 1 ? matches[0] : matches;
    }

    if (Array.isArray(sourcePath.filePath) && sourcePath.filePath.length > 0) {
        return sourcePath.filePath.reduce((value, key) => value?.[key], root);
    }

    return root;
};

export default resolveSource;
