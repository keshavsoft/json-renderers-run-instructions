import itemsData from "./items.json" with { type: "json" };
import "../../../../docs/dist/v15/min.js";

const start = () => {
    try {
        const spec = window.ks.jsonRenderers.runInstructions.render.renderFunc({
            instructionMainKey: "accordion",
            instructionSubKey: "simple",
            data: itemsData
        });

        console.log("accordion.simple spec:", spec);

        window.ks.jsonToDom.appendToDom({
            jsonSpec: spec,
            targetHtmlId: "dom-render-container",
            document
        });
    } catch (err) {
        console.error("Error rendering accordion:", err);
        const container = document.getElementById("dom-render-container");
        if (container) {
            container.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
        }
    }
};

window.addEventListener("DOMContentLoaded", start);

