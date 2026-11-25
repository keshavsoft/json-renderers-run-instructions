import fromCollection from "json-transformer-funcs-one-dimension";
import applyTemplate from "json-transformer-funcs-primitive";
import rowOnColumn from "json-transformer-funcs-row-on-column";
import columnOnRow from "./columnOnRow.js";

export const matrixTransformers = {
    rowOnColumn,
    columnOnRow
};

export const singleTransformers = {
    fromCollection,
    applyTemplate
};

export {
    fromCollection,
    applyTemplate,
    rowOnColumn,
    columnOnRow
};
