import applyTemplate from "json-transformer-funcs-primitive";
import writeResult from "./helpers/writeResult.js";

const runColumnOnRow = ({ instruction, context, spec, showLog = false }) => {
    const columnSpec = spec[instruction?.templateKey?.columnKey];
    const rowSpec = spec[instruction?.templateKey?.rowKey];

    const columns = context.data?.columns ?? context.columns ?? [];
    const rows = context.data?.data ?? (Array.isArray(context.data) ? context.data : context.rows ?? []);

    const result = columns.map(column => {
        const container = applyTemplate(column, columnSpec);

        let optionsList = [];
        if (Array.isArray(column.options) && column.options.length > 0) {
            optionsList = column.options.map(opt =>
                typeof opt === "object" ? opt : { rowValue: opt }
            );
        } else if (Array.isArray(rows) && rows.length > 0) {
            optionsList = rows.map(r => ({
                ...r,
                rowValue: r[column.columnName] ?? r.value ?? r
            }));
        }

        container.children = optionsList.map(item => applyTemplate(item, rowSpec));
        return container;
    });

    writeResult(context, instruction.destinationPath, result, showLog);
    return result;
};

export default runColumnOnRow;
