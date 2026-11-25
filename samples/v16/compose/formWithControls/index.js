import composeData from "./data.json" with { type: "json" };
import "../../../../docs/dist/v15/min.js";

const start = () => {
    try {
        const renderFunc = window.ks.jsonRenderers.runInstructions.render.renderFunc;

        // 1. Build Form Container
        const formSpec = renderFunc({
            instructionMainKey: "form",
            instructionSubKey: "simple",
            data: { columns: composeData.formColumns }
        });

        // 2. Build Select Controls (direct)
        const selectSpec = renderFunc({
            instructionMainKey: "select",
            instructionSubKey: "simple",
            data: { columns: composeData.selectColumns }
        });

        // 3. Build DataList Control (direct)
        const dataListSpec = renderFunc({
            instructionMainKey: "dataList",
            instructionSubKey: "simple",
            data: { columns: composeData.dataListColumns }
        });

        // Mount Form Container into DOM
        window.ks.jsonToDom.appendToDom({
            jsonSpec: formSpec,
            targetHtmlId: "form-container",
            document
        });

        // Mount Select Controls into the dedicated controls slot
        window.ks.jsonToDom.appendToDom({
            jsonSpec: selectSpec,
            targetHtmlId: "select-controls-slot",
            document
        });

        // Mount DataList Control into DOM
        window.ks.jsonToDom.appendToDom({
            jsonSpec: dataListSpec,
            targetHtmlId: "datalist-slot",
            document
        });

        console.log("Composed Form with Select & DataList rendered successfully!");
    } catch (err) {
        console.error("Error in compose/formWithControls:", err);
    }
};

window.addEventListener("DOMContentLoaded", start);

