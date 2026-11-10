// node_modules/json-write-path/src/v4/utils/toArray.js
var e = (e) => Array.isArray(e) ? e : [e], t = (e, t, n) => {
	e[t] = n;
}, n = {
	set: t,
	push: (t, n, r) => {
		t[n].push(...e(r));
	},
	unshift: (t, n, r) => {
		t[n].unshift(...e(r));
	},
	pushToRows: (t, n, r) => {
		t[n].forEach((t) => {
			t.children.push(...structuredClone(e(r)));
		});
	},
	unshiftToRows: (t, n, r) => {
		t[n].forEach((t) => {
			t.children.unshift(...structuredClone(e(r)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, r = (e) => typeof e == "object" && !!e && !Array.isArray(e), i = (e, t) => {
	if (!r(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = d(t, i);
	return n;
}, a = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => d(t, e));
}, o = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, s = (e, t) => o(e, t), c = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, l = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, u = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: l,
		applyTemplate: e
	});
}, d = (e, t, n) => {
	let r = e, l = t;
	c(r, l, n);
	let u = structuredClone(l);
	return typeof u == "string" ? o(u, r) : (typeof u != "object" || !u || ("textContent" in u && (u.textContent = s(u?.textContent, r)), "attributes" in u && (u.attributes = i(u?.attributes, r)), "children" in u && (u.children = a(u?.children, r))), u);
};
u(d);
// node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var f = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, p = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, m = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: p,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, h = (e, t) => {
	let n = e, r = t;
	return f(n, r), n.map((e) => d(e, r));
};
m((e, t) => {
	let n = e;
	return f(n, t), n.map((e) => d(e, e[t]));
}, h);
// node_modules/json-transformer-funcs-two-dimensions/src/v8/addRowData.js
var g = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), _ = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inColumns must be an Array");
	if (e.length === 0) throw Error("inColumns cannot be empty");
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (!n || typeof n != "object") throw TypeError(`inColumns[${t}] must be an object`);
		if (typeof n.columnName != "string" || !n.columnName.trim()) throw TypeError(`inColumns[${t}].columnName must be a non-empty string`);
	}
	if (!Array.isArray(t)) throw TypeError("inData must be an Array");
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (!n || typeof n != "object") throw TypeError(`inData[${e}] must be an object`);
	}
	return !0;
}, v = ({ columns: e, data: t, columnSpec: n, rowSpec: r }) => {
	_(e, t);
	let i = e;
	return t.map((e) => {
		let t = d(e, r);
		return t.children = h(g(i, e), n), t;
	});
}, y = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = y(n, t);
		if (e) return e;
	}
	return null;
}, b = (e, t, n) => {
	let r = t.fileName, i = y(e[r], t.dataRole), a = t.dataRole ? i : e[t.fileName], o = [...t.filePath ?? []], s = o.pop();
	return {
		parent: o.reduce((e, t) => e[t], a),
		key: s
	};
}, x = (e, r, i, a) => {
	a && console.log("v4 index :", e, r, i);
	let { parent: o, key: s } = b(e, r, a);
	(n[r.action] || t)(o, s, i);
}, S = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = S(n, t);
		if (e) return e;
	}
	return null;
}, C = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? S(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, w = {
	buildBodyTr: {
		tagName: "tr",
		attributes: { class: "align-middle" },
		children: []
	},
	buildColGroup: {
		tagName: "col",
		attributes: { width: "${width}" }
	},
	buildHeader: {
		tagName: "th",
		textContent: "${columnName}",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	buildFooter: {
		tagName: "td",
		children: [{
			tagName: "input",
			attributes: {
				type: "text",
				placeholder: "enter ${columnName}",
				name: "${columnName}",
				id: "${columnName}",
				list: "${columnName}",
				class: "form-control"
			}
		}]
	},
	buildBodyCell: {
		tagName: "td",
		textContent: "${rowValue}",
		attributes: { class: "py-3 px-3 text-secondary" }
	},
	button: {
		tagName: "button",
		textContent: "${columnName}",
		attributes: { class: "btn btn-primary btn-sm" }
	},
	buttonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "${agg:count}",
			attributes: { class: "btn btn-primary btn-sm" }
		}]
	},
	optionsButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "show",
			attributes: { class: "btn btn-primary btn-sm ks-btn-show" }
		}]
	},
	buildOption: {
		tagName: "option",
		textContent: "${rowValue}",
		attributes: { value: "${rowValue}" }
	},
	buildSelect: {
		tagName: "select",
		attributes: { id: "LedgerName" },
		children: []
	},
	buildDataList: {
		tagName: "datalist",
		attributes: { "data-name": "${columnName}" },
		children: []
	},
	emptyCell: {
		tagName: "td",
		children: []
	},
	headerSerialCell: {
		tagName: "th",
		textContent: "#",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForSerial: {
		tagName: "col",
		attributes: { width: "50px" }
	},
	colGroupForOption: {
		tagName: "col",
		attributes: { width: "100px" }
	},
	headerForOption: {
		tagName: "th",
		textContent: "options",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	tdWithButtonSaveWarning: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "save",
			attributes: { class: "btn btn-warning btn-sm ks-btn-save" }
		}]
	},
	tableSearch: {
		tagName: "div",
		attributes: { class: "row mb-3 justify-content-end" },
		children: [{
			tagName: "div",
			attributes: { class: "col-md-4" },
			children: [{
				tagName: "div",
				attributes: { class: "input-group" },
				children: [{
					tagName: "span",
					attributes: { class: "input-group-text bg-white" },
					children: [{
						tagName: "i",
						attributes: { class: "bi bi-search" },
						textContent: "🔍"
					}]
				}, {
					tagName: "input",
					attributes: {
						type: "text",
						id: "tableSearch",
						class: "form-control",
						placeholder: "Search table..."
					}
				}]
			}]
		}]
	}
}, T = {
	applyTemplate: d,
	fromCollection: h
}, E = (e, t, n) => e?.sourcePath === null ? null : C(t, e.sourcePath), D = (e, t, n) => {
	let r = t?.spec ?? w, i = e.templateKey, a = e?.func, o = r[i], s = E(e, t, n), c = a === null ? o : T[e.func](s, o);
	return s === null ? o : c;
}, O = (e, t, n) => {
	let r = n;
	r && console.log("runSingleInstruction 1 :", e, t);
	let i = D(e, t, n);
	r && console.log("runSingleInstruction 2 :", i), x(t, e.destinationPath, i);
}, k = (e, t, n, r) => {
	e.forEach((e) => {
		O(e, t, n, r);
	});
}, A = {
	applyTemplate: d,
	fromCollection: h,
	twoDimensional: v
}, j = (e, t, n, r) => {
	console.log("localShowLog : ", n);
	let i = t?.spec ?? w, a = A[e.func]({
		columns: t.data.columns,
		data: t.data.data,
		columnSpec: i.buildBodyCell,
		rowSpec: i.buildBodyTr
	});
	x(t, e.destinationPath, a);
}, M = (e, t, n, r) => {
	e.forEach((e) => {
		j(e, t, n, r);
	});
}, N = ({ single: e = [], double: t = [], registry: n = {}, showLog: r = !1 } = {}) => {
	if (!Array.isArray(e)) throw TypeError("single instructions must be an array");
	if (!Array.isArray(t)) throw TypeError("double instructions must be an array");
	if (!n || typeof n != "object" || Array.isArray(n)) throw TypeError("registry must be an object");
	return e.length > 0 && k(e, n, r), t.length > 0 && M(t, n), n;
};
export { N as default, N as runInstructions };
