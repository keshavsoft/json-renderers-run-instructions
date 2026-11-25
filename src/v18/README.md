# v18 instruction sequence experiment

This version keeps the public options grouped by feature, then resolves enabled
option steps into one ordered instruction sequence.

1. Clone the component base spec.
2. Add the component's normal build instruction keys to the sequence.
3. Resolve requested option switches into named keys such as `set-search` and
   `options-show-button`.
4. Run each key in order. Object instructions build from data; array
   instructions apply writes to the current spec.

The JSON files in `data/` are local snapshots copied from the declarative
definition, instruction, and spec repositories. The copied table option
definitions are reshaped here as ordered steps with `when` / `whenAny` gates.
This lets the runner be worked on before those repositories adopt the new
option sequence format.

The stable package entry point continues to use v17. This experiment is
available through the `./v18` package subpath and registers its browser global
at `ks.jsonRenderers.runInstructions.v18`.
