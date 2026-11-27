# json-renderers-run-instructions

A high-level runtime that turns a component definition, data, and options into a completed JSON UI specification.

## The story

A caller chooses a component family and variant, such as <code>table.simple</code>. The runtime looks up that definition, clones its base specification, combines the required instruction descriptors with descriptors derived from the caller’s options, and delegates the work to <code>json-renderers-run-instructions-steps</code>. It returns the completed JSON tree.

The runtime coordinates the pipeline. Definitions describe the component recipe; the spec catalog supplies the starting tree and templates; single and multi instruction catalogs describe the operations; the step runner applies them. This package returns JSON and does not mount browser DOM.

## Quick start

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

This follows the current V16 table sample. The result is a JSON specification; a separate renderer such as <code>json-to-dom</code> can mount it in a browser.

## Runtime sequence

1. Resolve the component definition using <code>instructionMainKey</code> and <code>instructionSubKey</code>.
2. Clone the definition’s <code>baseFromSpec</code> template so each render starts with a fresh tree.
3. Read the required instruction descriptors from <code>instructions-type</code>.
4. Walk the options object and append matching single or multi instruction descriptors.
5. Pass the ordered descriptors, cloned base, and data to the step runner; return the mutated base.

## API

The default export accepts:

| Parameter | Purpose |
| --- | --- |
| <code>instructionMainKey</code> | Component family, for example <code>table</code>. |
| <code>instructionSubKey</code> | Variant within that family, for example <code>simple</code> or <code>withFooter</code>. |
| <code>data</code> | Input values used by the selected instructions. |
| <code>options</code> | Optional nested feature choices. Omit it when no optional features are needed. |
| <code>showLog</code> | Optional logging flag, defaulting to <code>false</code>. |

The function returns the completed JSON specification. In a browser bundle, it is also registered at <code>window.ks.jsonRenderers.runInstructions.render.renderFunc</code>.

## Explore the current sample

The highest sample set is [V16](samples/v16/index.html). It includes tables, forms, lists, menus, direct controls, and composed layouts such as a dashboard with a table.

- [API guide](docs/pages/api-guide.html)
- [Execution story](docs/pages/the-story.html)
- [Architecture](docs/pages/architecture.html)
- [Sample gallery](docs/pages/samples-showcase.html)

## Install

~~~~bash
npm install json-renderers-run-instructions
~~~~

## License

MIT © KeshavSoft.

