import applyTemplate from "json-transformer-funcs-primitive";

/**
 * Pure transformer: maps columns onto rows (e.g. for selects with options or datalists).
 * Symmetrical counterpart to rowOnColumn.
 */
const columnOnRow = ({
    columns = [],
    rows = [],
    columnSpec,
    rowSpec
} = {}) => {
    return columns.map(column => {
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
};

export default columnOnRow;
