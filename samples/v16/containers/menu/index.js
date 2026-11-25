import menuData from "./items.json" with { type: "json" };
import "../../../../docs/dist/v15/min.js";

const start = () => {
    try {
        const renderFunc = window.ks.jsonRenderers.runInstructions.render.renderFunc;

        // 1. Simple Navigation Menu
        const specSimple = renderFunc({
            instructionMainKey: "menu",
            instructionSubKey: "simple",
            data: menuData.simple
        });

        window.ks.jsonToDom.appendToDom({
            jsonSpec: specSimple,
            targetHtmlId: "menu-simple-container",
            document
        });

        // 2. Menu Cards Grid
        const specCards = renderFunc({
            instructionMainKey: "menu",
            instructionSubKey: "cards",
            data: menuData.cards
        });

        window.ks.jsonToDom.appendToDom({
            jsonSpec: specCards,
            targetHtmlId: "menu-cards-container",
            document
        });

    } catch (err) {
        console.error("Error rendering menu:", err);
    }
};

window.addEventListener("DOMContentLoaded", start);

