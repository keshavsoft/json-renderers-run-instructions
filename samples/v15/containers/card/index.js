import cardData from "./data.json" with { type: "json" };
import "../../../../docs/dist/v15/min.js";

const start = () => {
    try {
        const renderFunc = window.ks.jsonRenderers.runInstructions.render.renderFunc;

        // 1. Simple Card
        const specSimple = renderFunc({
            instructionMainKey: "card",
            instructionSubKey: "simple",
            data: cardData.simple
        });

        window.ks.jsonToDom.appendToDom({
            jsonSpec: specSimple,
            targetHtmlId: "card-simple-container",
            document
        });

        // 2. Card With Header
        const specHeader = renderFunc({
            instructionMainKey: "card",
            instructionSubKey: "withHeader",
            data: cardData.withHeader
        });

        window.ks.jsonToDom.appendToDom({
            jsonSpec: specHeader,
            targetHtmlId: "card-header-container",
            document
        });

        // 3. Card With Header and Footer
        const specFooter = renderFunc({
            instructionMainKey: "card",
            instructionSubKey: "withFooter",
            data: cardData.withFooter
        });

        window.ks.jsonToDom.appendToDom({
            jsonSpec: specFooter,
            targetHtmlId: "card-footer-container",
            document
        });

    } catch (err) {
        console.error("Error rendering cards:", err);
    }
};

window.addEventListener("DOMContentLoaded", start);

