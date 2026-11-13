import runInstructions from "../../../src/index.js";

import columns from "./common/columns.json" with { type: "json" };
import data from "./common/data.json" with { type: "json" };
import { definitions } from "../../../node_modules/spec-repo/src/index.js";

const start = () => {
    try {
        const def = definitions?.table?.simple;

        const registry = {
            data: { columns, data },
            base: def?.base
        };

        const spec = runInstructions({
            single: def?.single,
            double: def?.double,
            registry
        });

        console.log("aaaa : ", spec);

        // Pure 1-statement consumption via V5 engine
        // const spec = runInstructions({
        //     type: "table.simple",
        //     data,
        //     columns,
        //     options: { showSerial: true, showSearch: false, showOptions: false },
        //     targetHtmlId,
        //     classToApply: "",
        //     appendPosition: "replace",
        //     showLog: true
        // });
    } catch (error) {
        console.error("V5 Table initialization failed:", error);
    }
};

start();