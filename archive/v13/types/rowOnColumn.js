import rowOnColumnFunc from "json-transformer-funcs-row-on-column";
import writeResult from "./helpers/writeResult.js";

const runRowOnColumn = ({ instruction, context, spec, showLog = false }) => {
    const columnSpec = spec[instruction?.templateKey?.columnKey];
    const rowSpec = spec[instruction?.templateKey?.rowKey];

    const columns = context.data?.columns ?? context.columns ?? [];
    const rows = context.data?.data ?? (Array.isArray(context.data) ? context.data : context.rows ?? []);

    const result = rowOnColumnFunc({
        columns,
        data: rows,
        columnSpec,
        rowSpec
    });

    writeResult(context, instruction.destinationPath, result, showLog);
    return result;
};

export default runRowOnColumn;
