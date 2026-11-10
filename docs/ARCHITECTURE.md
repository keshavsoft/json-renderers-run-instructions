# Architecture Deep-Dive: json-renderers-run-instructions

## 1. Design Motivation: Decoupling the Runtime

The primary goal of `json-renderers-run-instructions` is **architectural purity**:
separating **how** instructions are executed from **what** domain structure (table, card, form, tree) is being generated.

```
+--------------------------------------------------------------+
|                     Domain Layer                             |
|  (e.g., json-renderers-from-instructions, buildTableSpec)    |
|  - Table semantics: columns, data rows, colgroup             |
|  - Uses templates and specs from spec-repo                   |
+------------------------------+-------------------------------+
                               |
                               | passes { single, double, registry }
                               v
+--------------------------------------------------------------+
|                 Execution Runtime Layer                      |
|            (json-renderers-run-instructions)                 |
|  - Zero DOM dependencies                                     |
|  - Zero domain knowledge (no idea what a table is)           |
|  - Deterministic instruction execution                      |
+------------------------------+-------------------------------+
                               |
            +------------------+------------------+
            |                                     |
            v                                     v
+-----------------------+             +-----------------------+
| json-instruction-single|             | json-instruction-double|
| (1D Array Pipeline)   |             | (2D Grid / Matrix)    |
+-----------------------+             +-----------------------+
```

---

## 2. The Shared Registry Model

The registry is an in-memory blackboard object:

```typescript
interface Registry {
  // Source inputs
  data: {
    columns: Array<any>;
    data: Array<any>;
    [key: string]: any;
  };
  
  // Destination target spec tree (mutated in place)
  base: {
    tagName: string;
    attributes?: Record<string, any>;
    children?: Array<any>;
    [key: string]: any;
  };

  // Additional options or flags
  [optionKey: string]: any;
}
```

### Why In-Place Mutation of Registry?
1. **Memory efficiency**: Generating large DOM specifications (e.g., 500 rows × 20 columns = 10,000 cell objects) with immutable copy operations (`structuredClone` on every instruction step) leads to severe memory pressure and GC pauses.
2. **Determinism**: The execution order is strictly synchronous: Single instructions first (1D preparation), then Double instructions (2D matrix generation).
3. **Inspectability**: At any step, passing `showLog: true` prints the state of the registry for easy debugging.

---

## 3. Instruction Phases

### Phase 1: Single Instructions (1D)
- Powered by `json-instruction-single`.
- Used when an operation maps from a 1D collection (such as `columns`) to target spec nodes (such as `<col>` or `<th>`).
- Each instruction specifies:
  - Source path inside the registry.
  - Template or transformer function.
  - Target path inside `registry.base.children`.

### Phase 2: Double Instructions (2D)
- Powered by `json-instruction-double`.
- Used when an operation involves a 2D Cartesian space (e.g. `data rows` × `columns`).
- Maps each row and column into row elements (`<tr>`) and cell elements (`<td>`).
- Computes cell values, applies attributes, and mounts them under `registry.base`.

---

## 4. Testing & Verification

Because `json-renderers-run-instructions` is pure JavaScript with zero DOM dependencies, tests run in standard Node.js without any headless browsers or virtual DOM libraries:

```bash
npm test
```
