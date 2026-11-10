# json-renderers-run-instructions

> **Universal, declarative instruction runner for JSON-driven specification builders.**  
> Decouples instruction dispatch from component semantics — zero DOM, pure data transformation.

[![npm version](https://img.shields.io/npm/v/json-renderers-run-instructions.svg?color=cb3837&logo=npm)](https://www.npmjs.com/package/json-renderers-run-instructions)
[![npm downloads](https://img.shields.io/npm/dm/json-renderers-run-instructions.svg?color=2563eb)](https://www.npmjs.com/package/json-renderers-run-instructions)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![CDN Bundle](https://img.shields.io/badge/CDN-dist%2Fmin.js-orange.svg)](https://keshavsoft.github.io/json-renderers-run-instructions/dist/min.js)

---

## 📖 The Story: Why This Exists

### The Monolithic Problem
In early declarative architectures, specification builders (such as `json-renderers-build-table`) were monolithic. The logic that iterated over columns, stamped table headers, computed cells, and mounted elements to the DOM was tightly fused with the instruction execution mechanism.

This created three architectural hurdles:
1. **Tight Coupling**: You could not run declarative JSON instructions for other UI structures (lists, forms, cards, navigation trees) without importing table-specific baggage.
2. **Untestable Side Effects**: Mixing instruction traversal with spec repository lookups (`spec-repo`) made unit tests dependent on specific schema definitions.
3. **Rigid Pipelines**: Transforming two-dimensional structures (such as rows × columns) required bespoke nested loops duplicated across every new component builder.

### The Extraction: Pure Instruction Runtime
`json-renderers-run-instructions` extracts the core execution engine into a standalone, ultra-lean runtime. 

- **It knows nothing about HTML or the DOM.**
- **It knows nothing about tables, cells, or CSS.**
- **It knows nothing about `spec-repo` definitions.**

Its sole responsibility is deterministic instruction dispatch: taking declarative **1D (Single)** and **2D (Double)** instruction sequences and executing them against a **Shared Registry**.

---

## 🏗️ Architecture & Concept

### The Shared Registry Pattern
Instead of passing data through fragile intermediate stages, `runInstructions` operates on an in-memory **Registry** blackboard. The caller provisions the inputs (source arrays, options) and an initial specification shell (`base`). The instruction runners mutate and populate the specification in-place.

```
                  ┌───────────────────────────────┐
                  │           Registry            │
                  │  ┌──────────────┬──────────┐  │
                  │  │ data / source│ options  │  │
                  │  ├──────────────┴──────────┤  │
                  │  │     base (target spec)  │  │
                  │  └─────────────────────────┘  │
                  └───────────────┬───────────────┘
                                  │
          ┌───────────────────────┴───────────────────────┐
          │                                               │
          ▼ Phase 1: 1D Traversal                         ▼ Phase 2: 2D Traversal
┌───────────────────────────────────┐           ┌───────────────────────────────────┐
│     json-instruction-single       │           │     json-instruction-double       │
│                                   │           │                                   │
│  - Column headers                 │           │  - Matrix generation (rows×cols)  │
│  - Colgroup widths                │           │  - Nested cell calculations       │
│  - Linear arrays                  │           │  - 2D grid population             │
└─────────────────┬─────────────────┘           └─────────────────┬─────────────────┘
                  │                                               │
                  └───────────────────────┬───────────────────────┘
                                          │
                                          ▼
                         ┌─────────────────────────────────┐
                         │   Completed JSON Specification  │
                         │   (Ready for json-to-dom / API) │
                         └─────────────────────────────────┘
```

---

## 📦 Installation

### Via npm
```bash
npm install json-renderers-run-instructions
```

### Via Browser CDN (ES Module)
```html
<script type="module">
  import { runInstructions } from "https://keshavsoft.github.io/json-renderers-run-instructions/dist/min.js";
</script>
```

---

## 🚀 Quick Start

```javascript
import { runInstructions } from "json-renderers-run-instructions";

// 1. Prepare target base specification and source data
const base = {
    tagName: "table",
    children: [
        { tagName: "thead", children: [{ tagName: "tr", children: [] }] },
        { tagName: "tbody", children: [] }
    ]
};

const registry = {
    data: {
        columns: [{ columnName: "item" }, { columnName: "qty" }],
        data: [{ item: "Apples", qty: 10 }, { item: "Oranges", qty: 25 }]
    },
    base,
    showSerial: true
};

// 2. Define single (1D) and double (2D) instructions
const single = [
    // Array of instructions executed by json-instruction-single
];

const double = [
    // Array of instructions executed by json-instruction-double
];

// 3. Execute instructions against the registry
runInstructions({
    single,
    double,
    registry,
    showLog: false
});

// `registry.base` now contains the fully resolved specification!
console.log(registry.base);
```

---

## 📚 API Reference

### `runInstructions({ single, double, registry, showLog })`

Executes single- and double-target instruction arrays against the shared registry.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `single` | `Array` | `[]` | List of 1D single-target instructions passed to `json-instruction-single`. |
| `double` | `Array` | `[]` | List of 2D double-target instructions passed to `json-instruction-double`. |
| `registry` | `Object` | `{}` | Shared state blackboard holding `data`, `base`, and optional configurations. |
| `showLog` | `boolean` | `false` | Enable console diagnostic logs during execution. |

**Returns**: The mutated `registry` object.

**Throws**:
- `TypeError("single instructions must be an array")`
- `TypeError("double instructions must be an array")`
- `TypeError("registry must be an object")`

---

## 🧩 The Instruction Pipeline

### 1. Single Instructions (`json-instruction-single`)
Single instructions handle linear, one-dimensional collections. They read from a 1D source path in the registry (e.g., `data.columns`) and stamp out corresponding element specifications (e.g., `<col>`, `<th>`).

### 2. Double Instructions (`json-instruction-double`)
Double instructions handle nested Cartesian products and 2D grid spaces. They iterate over an outer collection (e.g., data rows) and an inner collection (e.g., column definitions), stamping out multidimensional specs (e.g., `<tr>` rows holding `<td>` cells).

---

## 🌐 Related Ecosystem Projects

| Package | Purpose |
|---|---|
| **[`json-instruction-single`](https://www.npmjs.com/package/json-instruction-single)** | Low-level 1D single-target instruction executor. |
| **[`json-instruction-double`](https://www.npmjs.com/package/json-instruction-double)** | Low-level 2D grid / matrix instruction executor. |
| **[`json-renderers-from-instructions`](https://github.com/keshavsoft/json-renderers-from-instructions)** | Instruction-driven table specification builder built on top of this runner. |
| **[`@keshavsoft/json-to-dom`](https://www.npmjs.com/package/@keshavsoft/json-to-dom)** | Zero-dependency DOM mounting engine for rendered JSON specifications. |

---

## 📄 License

MIT © [KeshavSoft](https://github.com/keshavsoft)
