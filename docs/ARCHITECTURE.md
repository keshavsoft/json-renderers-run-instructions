# V22 runtime story: json-renderers-run-instructions

This package turns a component definition, its data, and optional feature choices into a completed JSON specification tree.

## Its responsibility

The runtime coordinates existing catalogs and executors. It does not define table templates, implement row and column transformations, or mount browser DOM.

- <code>declarative-definitions</code> selects the component variant and describes its required instruction types.
- <code>declarative-spec</code> provides the starting specification tree.
- <code>json-renderers-run-instructions-steps</code> executes the ordered single and multi descriptors.
- This package resolves options into additional descriptors and returns the completed tree.

## The render sequence

The V22 entry point in <code>src/v22/index.js</code> follows this sequence:

1. Look up the definition at <code>definitions[instructionMainKey][instructionSubKey]</code>.
2. Read the definition’s <code>baseFromSpec</code> and clone that template with <code>structuredClone</code>.
3. Take required descriptors from <code>definition["instructions-type"]</code>.
4. Walk the optional <code>options</code> tree. For each enabled choice, resolve a matching single or multi instruction key and avoid adding the same descriptor twice.
5. Append those option descriptors after the required descriptors and pass the ordered list, cloned base, and data to the steps runner.
6. Return the completed base tree.

The result is a JSON specification. A separate renderer such as <code>json-to-dom</code> can mount that tree in a browser.

## Quick start

This follows the V16 <code>table.withFooter</code> sample:

~~~~js
import renderFunc from "json-renderers-run-instructions";

const tableSpec = renderFunc({
  instructionMainKey: "table",
  instructionSubKey: "withFooter",
  data: { columns, data },
  options: {
    search: {
      showLabel: true,
      showHelper: true,
      showInput: true
    },
    serial: true
  }
});
~~~~

In a browser bundle, the same function is registered at:

~~~~js
window.ks.jsonRenderers.runInstructions.render.renderFunc
~~~~

Pass its returned JSON tree to a DOM renderer when a browser view is needed.

## API

The default export accepts an object with these fields:

| Field | Purpose |
| --- | --- |
| <code>instructionMainKey</code> | Component family, such as <code>table</code>. |
| <code>instructionSubKey</code> | Variant within that family, such as <code>simple</code> or <code>withFooter</code>. |
| <code>data</code> | Values read by the selected instruction definitions. |
| <code>options</code> | Optional nested feature choices. Omit it when no optional features are needed. |
| <code>showLog</code> | Enables diagnostic logging; defaults to <code>false</code>. |

The runtime returns the completed base specification. It throws a descriptive error when the selected definition or its base spec cannot be found.

## Source and samples

- [V22 entry point](src/v22/index.js)
- [Option-to-instruction resolver](src/v22/runOptions/index.js)
- [V16 sample launch page](samples/v16/index.html)
- [API guide](docs/pages/api-guide.html)
- [Execution story](docs/pages/the-story.html)
- [Architecture](docs/pages/architecture.html)

## Install

~~~~bash
npm install json-renderers-run-instructions
~~~~

## License

MIT © KeshavSoft.

