import applyTemplate from "json-transformer-funcs-primitive";
import fromCollection from "json-transformer-funcs-one-dimension";
import { columnOnRow, rowOnColumn } from "json-transformer-funcs-two-dimensions";

import resolveSource from "./resolveSource.js";
import writeResult from "./writeResult.js";

const getTemplate = (spec, key) => {
    const template = spec[key];
    if (template === undefined) {
        throw new Error(`Instruction spec not found: ${key}`);
    }
    return template;
};

const executeBuildInstruction = ({ key, instruction, state, spec, showLog = false }) => {
    const templateKey = instruction.templateKey;
    let result;

    switch (instruction.type) {
        case "single": {
            const source = resolveSource(instruction.sourcePath, state);
            const template = getTemplate(spec, templateKey);
            result = instruction.func === "fromCollection"
                ? fromCollection(source ?? [], template)
                : applyTemplate(source, template, showLog);
            break;
        }
        case "rowOnColumn":
            result = rowOnColumn({
                columns: state.data?.columns,
                data: state.data,
                columnSpec: getTemplate(spec, templateKey.columnKey),
                rowSpec: getTemplate(spec, templateKey.rowKey)
            });
            break;
        case "columnOnRow":
            result = columnOnRow({
                columns: state.data?.columns,
                data: state.data,
                columnSpec: getTemplate(spec, templateKey.columnKey),
                rowSpec: getTemplate(spec, templateKey.rowKey)
            });
            break;
        default:
            throw new Error(`Unsupported instruction type for ${key}: ${instruction.type}`);
    }

    writeResult(state, instruction.destinationPath, result, showLog);
    if (showLog) console.log(instruction.narration ?? `Ran instruction: ${key}`);
};

export default executeBuildInstruction;
