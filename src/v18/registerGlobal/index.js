import meta from "./meta.js";

const registerGlobal = (renderFunc) => {
    if (typeof globalThis === "undefined" || !renderFunc) return;

    globalThis.ks ??= {};
    globalThis.ks.jsonRenderers ??= {};
    globalThis.ks.jsonRenderers.runInstructions ??= {};

    globalThis.ks.jsonRenderers.runInstructions.render = {
        meta,
        renderFunc
    };
};

export default registerGlobal;