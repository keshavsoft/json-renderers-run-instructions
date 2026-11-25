import itemsData from "./items.json" with { type: "json" };
import "../../../../docs/dist/v15/min.js";

const start = () => {
    try {
        const renderFunc = window.ks.jsonRenderers.runInstructions.render.renderFunc;

        // 1. List Group
        const specGroup = renderFunc({
            instructionMainKey: "list",
            instructionSubKey: "group",
            data: itemsData.group
        });

        window.ks.jsonToDom.appendToDom({
            jsonSpec: specGroup,
            targetHtmlId: "list-group-container",
            document
        });

        // 2. Ordered List
        const specOrdered = renderFunc({
            instructionMainKey: "list",
            instructionSubKey: "ordered",
            data: itemsData.ordered
        });

        window.ks.jsonToDom.appendToDom({
            jsonSpec: specOrdered,
            targetHtmlId: "list-ordered-container",
            document
        });

    } catch (err) {
        console.error("Error rendering list:", err);
    }
};

window.addEventListener("DOMContentLoaded", start);

