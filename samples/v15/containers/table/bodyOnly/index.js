import columns from "./columns.json" with { type: "json" };
import data from "./data.json" with { type: "json" };
import "../../../../../docs/dist/v15/min.js";

const start = () => {
    try {
        const spec = window.ks.jsonRenderers.runInstructions.render.renderFunc({
            instructionMainKey: "table",
            instructionSubKey: "bodyOnly",
            data: { columns, data },
            options: {
                serial: true
            }
        });

        console.log("table.bodyOnly spec:", spec);

        window.ks.jsonToDom.appendToDom({
            jsonSpec: spec,
            targetHtmlId: "dom-render-container",
            appendPosition: "append",
            showLog: true
        });
    } catch (err) {
        console.error("Error in table.bodyOnly:", err);
    }
};

start();

