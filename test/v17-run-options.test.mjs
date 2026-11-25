import test from "node:test";
import assert from "node:assert/strict";

import runOptions from "../src/v17/runOptions/index.js";
import {
    resolveFeatureRequest,
    resolveFeaturePlan
} from "../src/v17/runOptions/resolveFeature.js";

test("v17 resolves direct and show-prefixed feature requests", () => {
    assert.equal(resolveFeatureRequest({ search: true }, "search"), true);
    assert.equal(resolveFeatureRequest({ showSearch: true }, "search"), true);
});

test("v17 resolves initialization and enabled feature switches", () => {
    const plan = resolveFeaturePlan(
        "search",
        {
            initialize: "searchFrame",
            showLabel: "searchLabel",
            showHelper: "searchHelper",
            showInput: "searchInput"
        },
        {
            showLabel: true,
            showHelper: true
        }
    );

    assert.equal(plan.initializeInstruction, "searchFrame");
    assert.deepEqual(
        plan.enabledSwitches.map(({ switchKey }) => switchKey),
        ["showLabel", "showHelper"]
    );
});

test("v17 boolean feature requests enable every available switch", () => {
    const plan = resolveFeaturePlan(
        "search",
        {
            initialize: "searchFrame",
            showLabel: "searchLabel",
            showInput: "searchInput"
        },
        true
    );

    assert.equal(plan.initializeInstruction, "searchFrame");
    assert.equal(plan.enabledSwitches.length, 2);
});

test("v17 runOptions validates inputs", () => {
    const base = { tagName: "table" };

    assert.equal(runOptions({ base, options: null, optionDefs: {} }), base);
    assert.equal(runOptions({ base: null, options: {}, optionDefs: {} }), null);
});
