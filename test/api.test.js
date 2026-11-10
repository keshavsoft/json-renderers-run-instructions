import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("v1 exposes the generic instruction and DOM adapter functions", () => {
    const source = fs.readFileSync(new URL("../src/v1/index.js", import.meta.url), "utf8");
    assert.match(source, /export const runInstructions/);
    assert.match(source, /export const renderJsonToDom/);
    assert.doesNotMatch(source, /from ["']spec-repo["']/);
});
