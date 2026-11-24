import columns from "./columns.json" with { type: "json" };
import "../../../../docs/dist/v15/min.js";

const start = () => {
    try {
        const spec = window.ks.jsonRenderers.runInstructions.render.renderFunc({
            instructionMainKey: "dataList",
            instructionSubKey: "simple",
            data: { columns }
        });

        console.log("dataList.simple spec:", spec);

        window.ks.jsonToDom.appendToDom({
            jsonSpec: spec,
            targetHtmlId: "dom-render-container",
            document
        });
    } catch (err) {
        console.error("Error rendering dataList.simple:", err);
        const container = document.getElementById("dom-render-container");
        if (container) {
            container.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
        }
    }
};

window.addEventListener("DOMContentLoaded", start);

