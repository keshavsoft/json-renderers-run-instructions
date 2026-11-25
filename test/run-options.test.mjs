import test from "node:test";
import assert from "node:assert/strict";

import runOptions from "../src/v16/runOptions/index.js";
import {
    getEnabledSwitches,
    getFeatureRequest,
    shouldInitializeFeature
} from "../src/v16/runOptions/helpers.js";

test("feature requests support direct keys and show-prefixed keys", () => {
    assert.equal(getFeatureRequest({ search: true }, "search"), true);
    assert.equal(getFeatureRequest({ showSearch: true }, "search"), true);
});

test("enabled switches support boolean and object feature requests", () => {
    const switches = {
        initialize: "searchFrame",
        showLabel: "searchLabel",
        showInput: "searchInput"
    };

    assert.deepEqual(
        getEnabledSwitches(switches, true).map(({ switchKey }) => switchKey),
        ["showLabel", "showInput"]
    );

    assert.deepEqual(
        getEnabledSwitches(switches, { showLabel: true }).map(({ switchKey }) => switchKey),
        ["showLabel"]
    );

    assert.equal(shouldInitializeFeature(switches, { showLabel: true }), true);
    assert.equal(shouldInitializeFeature(switches, {}), false);
});

test("runOptions returns unchanged input for invalid arguments", () => {
    const base = { tagName: "table" };

    assert.equal(runOptions({ base, options: null, optionDefs: {} }), base);
    assert.equal(runOptions({ base: null, options: {}, optionDefs: {} }), null);
});
