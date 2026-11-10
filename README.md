# json-renderers-run-instructions

Reusable runtime extracted from `json-renderers-build-table`.

## v1 exports

- `runInstructions({ single, double, registry, showLog })` — executes single- and double-target instruction arrays against a caller-provided registry.
- `renderJsonToDom({ jsonSpec, targetHtmlId, appendPosition, showLog })` — mounts a completed JSON spec using `@keshavsoft/json-to-dom`.

This package is generic. It does not import `spec-repo`, understand tables, or construct table definitions. Table-specific spec generation remains in `json-renderers-build-table`.

## Source discipline

The public entry point is `src/index.js`; the implementation lives in `src/v1/`.
