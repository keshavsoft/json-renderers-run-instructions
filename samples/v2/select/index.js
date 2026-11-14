import runInstructions from "../../../src/index.js";

import columns from "./common/columns.json" with { type: "json" };
import data from "./common/data.json" with { type: "json" };
import { definitions } from "../../../node_modules/spec-repo/src/index.js";

const start = () => {
    try {
        const def = definitions?.table?.simple;
        const defForSelect = definitions?.select;

        const registry = {
            data: { columns, data },
            base: defForSelect?.base
        };

        const spec = runInstructions({
            single: defForSelect?.single,
            double: defForSelect?.double,
            registry,
            showLog: false
        });

        console.log("aaaa : ", spec?.base.children[0]);
    } catch (error) {
        console.error("V5 Table initialization failed:", error);
    }
};

start();