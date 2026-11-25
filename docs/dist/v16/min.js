var e = {
	table: {
		headerOnly: {
			baseFromSpec: "tableHeaderOnly",
			instructions: ["buildColgroup", "buildHeader"],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: { initialize: "serialRoot" }
			}
		},
		simple: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		withFooter: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildFooter",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		bodyOnly: {
			baseFromSpec: "tableBodyOnly",
			instructions: ["buildBody"],
			options: { serial: { showSerial: "serialChild" } }
		}
	},
	select: { simple: {
		baseFromSpec: "selectBase",
		instructions: ["buildSelectWithOptions"],
		options: {}
	} },
	dataList: { simple: {
		baseFromSpec: "dataListSimple",
		instructions: ["buildDataListWithOptions"],
		options: {}
	} },
	selectOptionsOnly: { simple: {
		baseFromSpec: "selectOptionsOnlyBase",
		instructions: ["buildOptionsArray"],
		options: {}
	} },
	searchInput: { simple: {
		baseFromSpec: "searchInputBase",
		instructions: [],
		options: {}
	} },
	form: { simple: {
		baseFromSpec: "formSimple",
		instructions: ["buildFormField"],
		options: {}
	} },
	accordion: {
		simple: {
			baseFromSpec: "accordionSimple",
			instructions: ["buildAccordionItems"],
			options: {}
		},
		flush: {
			baseFromSpec: "accordionFlush",
			instructions: ["buildAccordionItems"],
			options: {}
		}
	},
	card: {
		simple: {
			baseFromSpec: "cardSimple",
			instructions: ["buildCardBody"],
			options: {}
		},
		withHeader: {
			baseFromSpec: "cardWithHeader",
			instructions: ["buildCardHeader", "buildCardBody"],
			options: {}
		},
		withFooter: {
			baseFromSpec: "cardWithFooter",
			instructions: [
				"buildCardHeader",
				"buildCardBody",
				"buildCardFooter"
			],
			options: {}
		},
		imageTop: {
			baseFromSpec: "cardImageTop",
			instructions: ["buildCardBody"],
			options: {}
		}
	},
	list: {
		simple: {
			baseFromSpec: "listSimple",
			instructions: ["buildListItems"],
			options: {}
		},
		group: {
			baseFromSpec: "listGroup",
			instructions: ["buildListGroupItems"],
			options: {}
		},
		ordered: {
			baseFromSpec: "listOrdered",
			instructions: ["buildListGroupItems"],
			options: {}
		}
	},
	menu: {
		simple: {
			baseFromSpec: "menuSimple",
			instructions: ["buildMenuItems"],
			options: {}
		},
		cards: {
			baseFromSpec: "menuCardsBase",
			instructions: ["buildMenuCards"],
			options: {}
		}
	}
}, t = {
	name: "declarative-definitions",
	version: "1.0.1"
};
// node_modules/declarative-definitions/src/v2/index.js
((e) => {
	typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.declarative ??= {}, globalThis.ks.declarative.definitions = {
		meta: t,
		data: e
	});
})(e);
var n = {
	tableSearchBar: {
		tagName: "div",
		attributes: { class: "row mb-3 align-items-center" },
		children: [
			{
				tagName: "div",
				attributes: { class: "col-md-4 d-flex align-items-center" },
				children: [{
					tagName: "h6",
					attributes: {
						class: "mb-0 fw-semibold text-secondary",
						id: "table-title"
					},
					textContent: "Items"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4 text-center d-flex align-items-center justify-content-center" },
				children: [{
					tagName: "span",
					attributes: {
						id: "search-feedback",
						class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
					},
					textContent: "Showing all records"
				}]
			},
			{
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
			}
		]
	},
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
		attributes: {
			id: "${columnName}",
			name: "${columnName}",
			"data-name": "${columnName}",
			class: "form-select shadow-sm mb-3"
		},
		children: []
	},
	buildDataList: {
		tagName: "datalist",
		attributes: {
			id: "${columnName}",
			"data-name": "${columnName}"
		},
		children: []
	},
	buildFormField: {
		tagName: "div",
		attributes: { class: "mb-3" },
		children: [{
			tagName: "label",
			textContent: "${columnName}",
			attributes: {
				for: "${columnName}",
				class: "form-label fw-semibold text-capitalize"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "${columnName}",
				name: "${columnName}",
				placeholder: "Enter ${columnName}...",
				class: "form-control"
			}
		}]
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
	},
	tableWithSearch: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-withSearch-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-withSearch-table-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-simple-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-simple-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-simple-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-simple-body-id"
						},
						children: []
					}
				]
			}]
		}]
	},
	tableSimple: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				}
			]
		}]
	},
	tableWithFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableBodyOnly: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-tag-id"
		},
		children: [{
			tagName: "tbody",
			attributes: {
				"data-role": "table-body",
				id: "table-body-id"
			},
			children: []
		}]
	},
	tableBodyOnly1: {
		tagName: "tbody",
		attributes: {
			"data-role": "table-body",
			id: "table-body-only-id"
		},
		children: []
	},
	tableFooterOnly: {
		tagName: "tfoot",
		attributes: {
			"data-role": "table-footer",
			id: "table-footer-only-id"
		},
		children: [{
			tagName: "tr",
			attributes: {
				"data-role": "table-footer-row",
				id: "table-footer-only-footer-row-id"
			},
			children: []
		}]
	},
	tableHeaderOnly: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-colgroup-id"
				},
				children: []
			}, {
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-row-id"
					},
					children: []
				}]
			}]
		}]
	},
	tableHeaderOnly1: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-header-only-id"
		},
		children: [
			{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-header-only-colgroup-id"
				},
				children: []
			},
			{
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-only-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-only-header-row-id"
					},
					children: []
				}]
			},
			{
				tagName: "tbody",
				attributes: {
					"data-role": "table-body",
					id: "table-header-only-body-id"
				},
				children: []
			}
		]
	},
	tableHeaderAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-simple-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-simple-table-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-simple-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-simple-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-simple-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-simple-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-simple-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-simple-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	selectBase: {
		tagName: "div",
		attributes: {
			"data-role": "select-container",
			id: "select-base-id"
		},
		children: []
	},
	dataListBase: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-base-id"
		},
		children: []
	},
	dataListSimple: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-simple-id"
		},
		children: []
	},
	selectOptionsOnlyBase: [],
	searchInputBase: {
		tagName: "div",
		attributes: {
			class: "d-flex align-items-center gap-2",
			id: "search-input-base-id"
		},
		children: [{
			tagName: "label",
			textContent: "${label}",
			attributes: {
				class: "form-label mb-0 text-nowrap fw-semibold",
				for: "${id}",
				id: "search-input-label-id"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "search",
				placeholder: "${placeholder}",
				class: "form-control",
				id: "search-input-field-id"
			}
		}]
	},
	formBase: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-base-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-base-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-base-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-base-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-base-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-base-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-base-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-base-submit-button-id"
					}
				}]
			}
		]
	},
	formSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-simple-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-simple-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-simple-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-simple-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-simple-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-simple-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-simple-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-simple-submit-button-id"
					}
				}]
			}
		]
	},
	searchToolbar: {
		tagName: "div",
		attributes: {
			class: "row mb-3 align-items-center",
			"data-role": "search-toolbar"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 d-flex align-items-center",
					"data-role": "search-label-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 text-center d-flex align-items-center justify-content-center",
					"data-role": "search-helper-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4",
					"data-role": "search-input-slot"
				},
				children: []
			}
		]
	},
	searchLabel: {
		tagName: "h6",
		textContent: "Items",
		attributes: {
			class: "mb-0 fw-semibold text-secondary",
			id: "table-title"
		}
	},
	searchHelper: {
		tagName: "span",
		textContent: "Showing all records",
		attributes: {
			id: "search-feedback",
			class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
		}
	},
	searchInput: {
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
	},
	optionsEditButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "edit",
			attributes: { class: "btn btn-secondary btn-sm ks-btn-edit" }
		}]
	},
	optionsDeleteButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "delete",
			attributes: { class: "btn btn-danger btn-sm ks-btn-delete" }
		}]
	},
	headerForEditOption: {
		tagName: "th",
		textContent: "edit",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	headerForDeleteOption: {
		tagName: "th",
		textContent: "delete",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForEditOption: {
		tagName: "col",
		attributes: { width: "80px" }
	},
	colGroupForDeleteOption: {
		tagName: "col",
		attributes: { width: "90px" }
	},
	tableWithFooterParent: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-footer-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-with-footer-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-with-footer-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-with-footer-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-with-footer-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-with-footer-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-with-footer-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-with-footer-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableWithSearchAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-search-footer-parent-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-with-footer-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-with-footer-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-with-footer-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-with-footer-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-with-footer-body-id"
						},
						children: []
					},
					{
						tagName: "tfoot",
						attributes: {
							"data-role": "table-footer",
							id: "table-with-footer-footer-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-footer-row",
								id: "table-with-footer-footer-row-id"
							},
							children: []
						}]
					}
				]
			}]
		}]
	},
	accordionSimple: {
		tagName: "div",
		attributes: {
			class: "accordion shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	accordionFlush: {
		tagName: "div",
		attributes: {
			class: "accordion accordion-flush shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	buildAccordionItem: {
		tagName: "div",
		attributes: {
			class: "accordion-item",
			"data-role": "accordion-item"
		},
		children: [{
			tagName: "h2",
			attributes: {
				class: "accordion-header",
				id: "heading-${id}"
			},
			children: [{
				tagName: "button",
				attributes: {
					class: "accordion-button collapsed",
					type: "button",
					"data-bs-toggle": "collapse",
					"data-bs-target": "#collapse-${id}",
					"aria-expanded": "false",
					"aria-controls": "collapse-${id}"
				},
				textContent: "${title}"
			}]
		}, {
			tagName: "div",
			attributes: {
				id: "collapse-${id}",
				class: "accordion-collapse collapse",
				"aria-labelledby": "heading-${id}",
				"data-bs-parent": "#accordion-parent-id",
				"data-role": "accordion-collapse"
			},
			children: [{
				tagName: "div",
				attributes: { class: "accordion-body text-secondary" },
				textContent: "${content}"
			}]
		}]
	},
	cardSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithHeader: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-header bg-white py-3 fw-bold border-bottom",
				"data-role": "card-header"
			},
			children: []
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithFooter: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 fw-bold border-bottom",
					"data-role": "card-header"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					"data-role": "card-body"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light py-3 border-top",
					"data-role": "card-footer"
				},
				children: []
			}
		]
	},
	cardImageTop: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3 overflow-hidden",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "img",
			attributes: {
				class: "card-img-top",
				src: "${imageSrc}",
				alt: "${imageAlt}",
				"data-role": "card-img"
			}
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	buildCardBodyTemplate: {
		tagName: "div",
		attributes: { class: "card-content" },
		children: [{
			tagName: "h5",
			attributes: { class: "card-title fw-bold text-dark mb-2" },
			textContent: "${title}"
		}, {
			tagName: "p",
			attributes: { class: "card-text text-secondary mb-3" },
			textContent: "${text}"
		}]
	},
	buildCardHeaderTemplate: {
		tagName: "span",
		attributes: { class: "card-header-title text-dark" },
		textContent: "${headerTitle}"
	},
	buildCardFooterTemplate: {
		tagName: "small",
		attributes: { class: "text-muted" },
		textContent: "${footerText}"
	},
	listSimple: {
		tagName: "ul",
		attributes: {
			class: "list-unstyled mb-0",
			id: "list-parent-id",
			"data-role": "list-parent"
		},
		children: []
	},
	listGroup: {
		tagName: "ul",
		attributes: {
			class: "list-group shadow-sm",
			id: "list-group-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	listOrdered: {
		tagName: "ol",
		attributes: {
			class: "list-group list-group-numbered shadow-sm",
			id: "list-ordered-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	menuSimple: {
		tagName: "ul",
		attributes: {
			class: "nav nav-pills flex-column bg-white p-3 rounded-3 shadow-sm border",
			id: "menu-parent-id",
			"data-role": "menu-parent"
		},
		children: []
	},
	menuCardsBase: {
		tagName: "div",
		attributes: {
			class: "row g-4",
			id: "menu-cards-parent-id",
			"data-role": "menu-cards-parent"
		},
		children: []
	},
	buildListItemTemplate: {
		tagName: "li",
		attributes: {
			class: "py-2 px-3 border-bottom d-flex align-items-center text-secondary",
			"data-role": "list-item"
		},
		textContent: "${text}"
	},
	buildListGroupItemTemplate: {
		tagName: "li",
		attributes: {
			class: "list-group-item d-flex justify-content-between align-items-center py-3",
			"data-role": "list-group-item"
		},
		children: [{
			tagName: "span",
			textContent: "${text}"
		}, {
			tagName: "span",
			attributes: { class: "badge bg-primary rounded-pill px-3 py-2" },
			textContent: "${badge}"
		}]
	},
	buildMenuItemTemplate: {
		tagName: "li",
		attributes: {
			class: "nav-item mb-1",
			"data-role": "menu-item"
		},
		children: [{
			tagName: "a",
			attributes: {
				class: "nav-link text-dark fw-medium",
				href: "${href}"
			},
			textContent: "${text}"
		}]
	},
	buildMenuCardItemTemplate: {
		tagName: "div",
		attributes: {
			class: "col-md-4 col-sm-6",
			"data-role": "menu-card-col"
		},
		children: [{
			tagName: "div",
			attributes: { class: "card h-100 shadow-sm border rounded-3" },
			children: [{
				tagName: "div",
				attributes: { class: "card-body p-4 d-flex flex-column" },
				children: [
					{
						tagName: "h5",
						attributes: { class: "card-title fw-bold text-primary mb-2" },
						textContent: "${title}"
					},
					{
						tagName: "p",
						attributes: { class: "card-text text-muted small flex-grow-1" },
						textContent: "${description}"
					},
					{
						tagName: "a",
						attributes: {
							class: "btn btn-outline-primary btn-sm mt-3",
							href: "${href}"
						},
						textContent: "${actionText}"
					}
				]
			}]
		}]
	}
}, r = n, i = {
	tableSearchBar: {
		tagName: "div",
		attributes: { class: "row mb-3 align-items-center" },
		children: [
			{
				tagName: "div",
				attributes: { class: "col-md-4 d-flex align-items-center" },
				children: [{
					tagName: "h6",
					attributes: {
						class: "mb-0 fw-semibold text-secondary",
						id: "table-title"
					},
					textContent: "Items"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4 text-center d-flex align-items-center justify-content-center" },
				children: [{
					tagName: "span",
					attributes: {
						id: "search-feedback",
						class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
					},
					textContent: "Showing all records"
				}]
			},
			{
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
			}
		]
	},
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
		attributes: {
			id: "${columnName}",
			name: "${columnName}",
			"data-name": "${columnName}",
			class: "form-select shadow-sm mb-3"
		},
		children: []
	},
	buildDataList: {
		tagName: "datalist",
		attributes: {
			id: "${columnName}",
			"data-name": "${columnName}"
		},
		children: []
	},
	buildFormField: {
		tagName: "div",
		attributes: { class: "mb-3" },
		children: [{
			tagName: "label",
			textContent: "${columnName}",
			attributes: {
				for: "${columnName}",
				class: "form-label fw-semibold text-capitalize"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "${columnName}",
				name: "${columnName}",
				placeholder: "Enter ${columnName}...",
				class: "form-control"
			}
		}]
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
	},
	tableWithSearch: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-withSearch-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-withSearch-table-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-simple-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-simple-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-simple-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-simple-body-id"
						},
						children: []
					}
				]
			}]
		}]
	},
	tableSimple: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				}
			]
		}]
	},
	tableWithFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableBodyOnly: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-tag-id"
		},
		children: [{
			tagName: "tbody",
			attributes: {
				"data-role": "table-body",
				id: "table-body-id"
			},
			children: []
		}]
	},
	tableBodyOnly1: {
		tagName: "tbody",
		attributes: {
			"data-role": "table-body",
			id: "table-body-only-id"
		},
		children: []
	},
	tableFooterOnly: {
		tagName: "tfoot",
		attributes: {
			"data-role": "table-footer",
			id: "table-footer-only-id"
		},
		children: [{
			tagName: "tr",
			attributes: {
				"data-role": "table-footer-row",
				id: "table-footer-only-footer-row-id"
			},
			children: []
		}]
	},
	tableHeaderOnly: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-colgroup-id"
				},
				children: []
			}, {
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-row-id"
					},
					children: []
				}]
			}]
		}]
	},
	tableHeaderOnly1: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-header-only-id"
		},
		children: [
			{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-header-only-colgroup-id"
				},
				children: []
			},
			{
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-only-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-only-header-row-id"
					},
					children: []
				}]
			},
			{
				tagName: "tbody",
				attributes: {
					"data-role": "table-body",
					id: "table-header-only-body-id"
				},
				children: []
			}
		]
	},
	tableHeaderAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-simple-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-simple-table-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-simple-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-simple-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-simple-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-simple-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-simple-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-simple-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	selectBase: {
		tagName: "div",
		attributes: {
			"data-role": "select-container",
			id: "select-base-id"
		},
		children: []
	},
	dataListBase: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-base-id"
		},
		children: []
	},
	dataListSimple: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-simple-id"
		},
		children: []
	},
	selectOptionsOnlyBase: [],
	searchInputBase: {
		tagName: "div",
		attributes: {
			class: "d-flex align-items-center gap-2",
			id: "search-input-base-id"
		},
		children: [{
			tagName: "label",
			textContent: "${label}",
			attributes: {
				class: "form-label mb-0 text-nowrap fw-semibold",
				for: "${id}",
				id: "search-input-label-id"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "search",
				placeholder: "${placeholder}",
				class: "form-control",
				id: "search-input-field-id"
			}
		}]
	},
	formBase: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-base-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-base-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-base-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-base-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-base-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-base-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-base-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-base-submit-button-id"
					}
				}]
			}
		]
	},
	formSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-simple-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-simple-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-simple-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-simple-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-simple-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-simple-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-simple-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-simple-submit-button-id"
					}
				}]
			}
		]
	},
	searchToolbar: {
		tagName: "div",
		attributes: {
			class: "row mb-3 align-items-center",
			"data-role": "search-toolbar"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 d-flex align-items-center",
					"data-role": "search-label-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 text-center d-flex align-items-center justify-content-center",
					"data-role": "search-helper-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4",
					"data-role": "search-input-slot"
				},
				children: []
			}
		]
	},
	searchLabel: {
		tagName: "h6",
		textContent: "Items",
		attributes: {
			class: "mb-0 fw-semibold text-secondary",
			id: "table-title"
		}
	},
	searchHelper: {
		tagName: "span",
		textContent: "Showing all records",
		attributes: {
			id: "search-feedback",
			class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
		}
	},
	searchInput: {
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
	},
	optionsEditButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "edit",
			attributes: { class: "btn btn-secondary btn-sm ks-btn-edit" }
		}]
	},
	optionsDeleteButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "delete",
			attributes: { class: "btn btn-danger btn-sm ks-btn-delete" }
		}]
	},
	headerForEditOption: {
		tagName: "th",
		textContent: "edit",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	headerForDeleteOption: {
		tagName: "th",
		textContent: "delete",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForEditOption: {
		tagName: "col",
		attributes: { width: "80px" }
	},
	colGroupForDeleteOption: {
		tagName: "col",
		attributes: { width: "90px" }
	},
	tableWithFooterParent: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-footer-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-with-footer-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-with-footer-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-with-footer-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-with-footer-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-with-footer-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-with-footer-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-with-footer-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableWithSearchAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-search-footer-parent-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-with-footer-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-with-footer-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-with-footer-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-with-footer-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-with-footer-body-id"
						},
						children: []
					},
					{
						tagName: "tfoot",
						attributes: {
							"data-role": "table-footer",
							id: "table-with-footer-footer-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-footer-row",
								id: "table-with-footer-footer-row-id"
							},
							children: []
						}]
					}
				]
			}]
		}]
	},
	accordionSimple: {
		tagName: "div",
		attributes: {
			class: "accordion shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	accordionFlush: {
		tagName: "div",
		attributes: {
			class: "accordion accordion-flush shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	buildAccordionItem: {
		tagName: "div",
		attributes: {
			class: "accordion-item",
			"data-role": "accordion-item"
		},
		children: [{
			tagName: "h2",
			attributes: {
				class: "accordion-header",
				id: "heading-${id}"
			},
			children: [{
				tagName: "button",
				attributes: {
					class: "accordion-button collapsed",
					type: "button",
					"data-bs-toggle": "collapse",
					"data-bs-target": "#collapse-${id}",
					"aria-expanded": "false",
					"aria-controls": "collapse-${id}"
				},
				textContent: "${title}"
			}]
		}, {
			tagName: "div",
			attributes: {
				id: "collapse-${id}",
				class: "accordion-collapse collapse",
				"aria-labelledby": "heading-${id}",
				"data-bs-parent": "#accordion-parent-id",
				"data-role": "accordion-collapse"
			},
			children: [{
				tagName: "div",
				attributes: { class: "accordion-body text-secondary" },
				textContent: "${content}"
			}]
		}]
	},
	cardSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithHeader: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-header bg-white py-3 fw-bold border-bottom",
				"data-role": "card-header"
			},
			children: []
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithFooter: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 fw-bold border-bottom",
					"data-role": "card-header"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					"data-role": "card-body"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light py-3 border-top",
					"data-role": "card-footer"
				},
				children: []
			}
		]
	},
	cardImageTop: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3 overflow-hidden",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "img",
			attributes: {
				class: "card-img-top",
				src: "${imageSrc}",
				alt: "${imageAlt}",
				"data-role": "card-img"
			}
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	buildCardBodyTemplate: {
		tagName: "div",
		attributes: { class: "card-content" },
		children: [{
			tagName: "h5",
			attributes: { class: "card-title fw-bold text-dark mb-2" },
			textContent: "${title}"
		}, {
			tagName: "p",
			attributes: { class: "card-text text-secondary mb-3" },
			textContent: "${text}"
		}]
	},
	buildCardHeaderTemplate: {
		tagName: "span",
		attributes: { class: "card-header-title text-dark" },
		textContent: "${headerTitle}"
	},
	buildCardFooterTemplate: {
		tagName: "small",
		attributes: { class: "text-muted" },
		textContent: "${footerText}"
	},
	listSimple: {
		tagName: "ul",
		attributes: {
			class: "list-unstyled mb-0",
			id: "list-parent-id",
			"data-role": "list-parent"
		},
		children: []
	},
	listGroup: {
		tagName: "ul",
		attributes: {
			class: "list-group shadow-sm",
			id: "list-group-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	listOrdered: {
		tagName: "ol",
		attributes: {
			class: "list-group list-group-numbered shadow-sm",
			id: "list-ordered-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	menuSimple: {
		tagName: "ul",
		attributes: {
			class: "nav nav-pills flex-column bg-white p-3 rounded-3 shadow-sm border",
			id: "menu-parent-id",
			"data-role": "menu-parent"
		},
		children: []
	},
	menuCardsBase: {
		tagName: "div",
		attributes: {
			class: "row g-4",
			id: "menu-cards-parent-id",
			"data-role": "menu-cards-parent"
		},
		children: []
	},
	buildListItemTemplate: {
		tagName: "li",
		attributes: {
			class: "py-2 px-3 border-bottom d-flex align-items-center text-secondary",
			"data-role": "list-item"
		},
		textContent: "${text}"
	},
	buildListGroupItemTemplate: {
		tagName: "li",
		attributes: {
			class: "list-group-item d-flex justify-content-between align-items-center py-3",
			"data-role": "list-group-item"
		},
		children: [{
			tagName: "span",
			textContent: "${text}"
		}, {
			tagName: "span",
			attributes: { class: "badge bg-primary rounded-pill px-3 py-2" },
			textContent: "${badge}"
		}]
	},
	buildMenuItemTemplate: {
		tagName: "li",
		attributes: {
			class: "nav-item mb-1",
			"data-role": "menu-item"
		},
		children: [{
			tagName: "a",
			attributes: {
				class: "nav-link text-dark fw-medium",
				href: "${href}"
			},
			textContent: "${text}"
		}]
	},
	buildMenuCardItemTemplate: {
		tagName: "div",
		attributes: {
			class: "col-md-4 col-sm-6",
			"data-role": "menu-card-col"
		},
		children: [{
			tagName: "div",
			attributes: { class: "card h-100 shadow-sm border rounded-3" },
			children: [{
				tagName: "div",
				attributes: { class: "card-body p-4 d-flex flex-column" },
				children: [
					{
						tagName: "h5",
						attributes: { class: "card-title fw-bold text-primary mb-2" },
						textContent: "${title}"
					},
					{
						tagName: "p",
						attributes: { class: "card-text text-muted small flex-grow-1" },
						textContent: "${description}"
					},
					{
						tagName: "a",
						attributes: {
							class: "btn btn-outline-primary btn-sm mt-3",
							href: "${href}"
						},
						textContent: "${actionText}"
					}
				]
			}]
		}]
	}
}, a = {
	buildColgroup: {
		type: "single",
		narration: "Build column widths",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildColGroup",
		func: "fromCollection"
	},
	buildHeader: {
		type: "single",
		narration: "Build table header",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildHeader",
		func: "fromCollection"
	},
	buildFooter: {
		type: "single",
		narration: "Build table footer",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFooter",
		func: "fromCollection"
	},
	buildBody: {
		type: "rowOnColumn",
		narration: "Build table body",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		templateKey: {
			rowKey: "buildBodyTr",
			columnKey: "buildBodyCell"
		}
	},
	serial: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial number cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshiftSerialToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "buildBodyCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	search: [{
		narration: "Prepend the search row to top of the table.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-parent']"
		},
		sourcePath: null,
		templateKey: "tableSearch",
		func: null
	}],
	buildFormField: {
		type: "single",
		narration: "Build form fields from columns",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'form-body']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFormField",
		func: "fromCollection"
	},
	buildSelectWithOptions: {
		type: "columnOnRow",
		narration: "Build selects with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildSelect",
			rowKey: "buildOption"
		}
	},
	buildSelectOptions: {
		type: "single",
		narration: "Build select options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildOptionsArray: {
		type: "single",
		narration: "Build options array",
		destinationPath: {
			fileName: "base",
			filePath: []
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildDataListWithOptions: {
		type: "columnOnRow",
		narration: "Build datalists with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildDataList",
			rowKey: "buildOption"
		}
	},
	searchFrame: [{
		narration: "Insert the search toolbar frame before the table when a search feature is enabled.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$"
		},
		sourcePath: null,
		templateKey: "searchToolbar",
		func: null,
		skipIf: "$..*[?@.attributes['data-role'] == 'search-toolbar']"
	}],
	searchLabel: [{
		narration: "Insert the search label into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-label-slot']"
		},
		sourcePath: null,
		templateKey: "searchLabel",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'table-title']"
	}],
	searchHelper: [{
		narration: "Insert the search helper text into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-helper-slot']"
		},
		sourcePath: null,
		templateKey: "searchHelper",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'search-feedback']"
	}],
	searchInput: [{
		narration: "Insert the search input into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-input-slot']"
		},
		sourcePath: null,
		templateKey: "searchInput",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'tableSearch']"
	}],
	serialRoot: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	serialChild: [{
		narration: "Prepend the serial number cell into each table body row.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshiftSerialToRows",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		sourcePath: null,
		templateKey: "buildBodyCell",
		func: null
	}],
	optionsShowButton: [
		{
			narration: "Append the options column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForOption",
			func: null
		},
		{
			narration: "Append the options header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForOption",
			func: null
		},
		{
			narration: "Append the options button cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsButtonCell",
			func: null
		},
		{
			narration: "Append the options footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "tdWithButtonSaveWarning",
			func: null
		}
	],
	optionsEditButton: [
		{
			narration: "Append edit column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForEditOption",
			func: null
		},
		{
			narration: "Append edit header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForEditOption",
			func: null
		},
		{
			narration: "Append edit button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsEditButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the edit action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	optionsDeleteButton: [
		{
			narration: "Append delete column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForDeleteOption",
			func: null
		},
		{
			narration: "Append delete header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForDeleteOption",
			func: null
		},
		{
			narration: "Append delete button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsDeleteButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the delete action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	buildAccordionItems: {
		type: "single",
		narration: "Build accordion items from array",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildAccordionItem",
		func: "fromCollection"
	},
	buildCardBody: {
		type: "single",
		narration: "Build card body content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-body']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardBodyTemplate",
		func: "applyTemplate"
	},
	buildCardHeader: {
		type: "single",
		narration: "Build card header content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-header']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardHeaderTemplate",
		func: "applyTemplate"
	},
	buildCardFooter: {
		type: "single",
		narration: "Build card footer content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-footer']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardFooterTemplate",
		func: "applyTemplate"
	},
	buildListItems: {
		type: "single",
		narration: "Build simple list items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListItemTemplate",
		func: "fromCollection"
	},
	buildListGroupItems: {
		type: "single",
		narration: "Build list-group items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListGroupItemTemplate",
		func: "fromCollection"
	},
	buildMenuItems: {
		type: "single",
		narration: "Build navigation menu items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuItemTemplate",
		func: "fromCollection"
	},
	buildMenuCards: {
		type: "single",
		narration: "Build menu cards grid",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuCardItemTemplate",
		func: "fromCollection"
	}
}, o = (e) => typeof e == "object" && !!e && !Array.isArray(e), s = (e, t) => {
	if (!o(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = m(t, i);
	return n;
}, c = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => m(t, e));
}, l = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, u = (e, t) => l(e, t), d = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, f = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, p = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: f,
		applyTemplate: e
	});
}, m = (e, t, n) => {
	let r = e, i = t;
	d(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? l(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = u(a?.textContent, r)), "attributes" in a && (a.attributes = s(a?.attributes, r)), "children" in a && (a.children = c(a?.children, r))), a);
};
p(m);
// ../json-renderers-run-instructions-steps/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var ee = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, h = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, te = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: h,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, g = (e, t) => {
	let n = e, r = t;
	return ee(n, r), n.map((e) => m(e, r));
};
te((e, t) => {
	let n = e;
	return ee(n, t), n.map((e) => m(e, e[t]));
}, g);
// ../json-renderers-run-instructions-steps/node_modules/json-transformer-funcs-two-dimensions/src/v9/index.js
var _ = ({ outer: e = [], outerSpec: t, getInner: n, innerSpec: r } = {}) => e.map((e) => {
	let i = m(e, t), a = n ? n(e) : [];
	return i.children = a.length > 0 ? g(a, r) : [], i;
}), ne = ({ columns: e = [], data: t = [], columnSpec: n, rowSpec: r } = {}) => _({
	outer: Array.isArray(t) ? t : t?.data ?? t?.rows ?? [],
	outerSpec: r,
	innerSpec: n,
	getInner: (t) => e.map((e) => ({
		...e,
		rowValue: t[e.columnName]
	}))
}), v = ({ columns: e = [], data: t = [], rows: n, columnSpec: r, rowSpec: i } = {}) => {
	let a = n ?? (Array.isArray(t) ? t : t?.data ?? t?.rows ?? []);
	return _({
		outer: e,
		outerSpec: r,
		innerSpec: i,
		getInner: (e) => Array.isArray(e.options) && e.options.length > 0 ? e.options.map((e) => typeof e == "object" ? e : { rowValue: e }) : a.map((t) => ({
			...t,
			rowValue: t[e.columnName] ?? t.value ?? t
		}))
	});
}, y = (e) => Array.isArray(e) ? e : [e], re = (e, t, n) => {
	e[t] = n;
}, ie = {
	set: re,
	push: (e, t, n) => {
		e[t].push(...y(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...y(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(y(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(y(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, ae = Object.defineProperty, oe = Object.getOwnPropertySymbols, se = Object.prototype.hasOwnProperty, ce = Object.prototype.propertyIsEnumerable, le = Math.pow, ue = (e, t, n) => t in e ? ae(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, de = (e, t) => {
	for (var n in t ||= {}) se.call(t, n) && ue(e, n, t[n]);
	if (oe) for (var n of oe(t)) ce.call(t, n) && ue(e, n, t[n]);
	return e;
}, b = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, fe = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, x = () => void 0, pe = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = C(e);
		return r === C(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = ve(e), a = ve(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, me = (e, t, n = x) => {
	let r = [];
	if (!pe(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!pe(he(e.x, t), he(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !S(o, i) || !S(a, i)) return !1;
			let s = a[i];
			if (!S(o, i) || !pe(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, S = (e, t) => Object.prototype.hasOwnProperty.call(e, t), he = (e, t) => S(e, t) ? e[t] : void 0, ge = 16383, _e = 1e3, ve = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > _e) throw new fe(`Member name too long (maximum ${_e} characters)`);
	return t;
}, C = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, ye = (e) => e instanceof RangeError && /call stack/i.test(e.message), w = (e) => Array.isArray(e), be = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), T = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, xe = (e) => typeof e == "number", E = (e) => typeof e == "string", Se = (e) => e === void 0, D = (e) => e !== void 0;
function Ce(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function we(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function Te(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var Ee = class extends SyntaxError {
	constructor(e, t, n, r) {
		super(e), this.expected = t, this.found = n, this.location = r, this.name = "SyntaxError";
	}
	format(e) {
		let t = "Error: " + this.message;
		if (this.location) {
			let n = null, r = e.find((e) => e.source === this.location.source);
			r && (n = r.text.split(/\r\n|\n|\r/g));
			let i = this.location.start, a = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(i) : i, o = this.location.source + ":" + a.line + ":" + a.column;
			if (n) {
				let e = this.location.end, r = "".padEnd(a.line.toString().length, " "), s = n[i.line - 1], c = (i.line === e.line ? e.column : s.length + 1) - i.column || 1;
				t += "\n --> " + o + "\n" + r + " |\n" + a.line + " | " + s + "\n" + r + " | " + "".padEnd(i.column - 1, " ") + "".padEnd(c, "^");
			} else t += "\n at " + o;
		}
		return t;
	}
	static buildMessage(e, t) {
		function n(e) {
			return e.codePointAt(0).toString(16).toUpperCase();
		}
		let r = Object.prototype.hasOwnProperty.call(RegExp.prototype, "unicode") ? /* @__PURE__ */ RegExp("[\\p{C}\\p{Mn}\\p{Mc}]", "gu") : null;
		function i(e) {
			return r ? e.replace(r, (e) => "\\u{" + n(e) + "}") : e;
		}
		function a(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		function o(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		let s = {
			literal(e) {
				return "\"" + a(e.text) + "\"";
			},
			class(e) {
				let t = e.parts.map((e) => Array.isArray(e) ? o(e[0]) + "-" + o(e[1]) : o(e));
				return "[" + (e.inverted ? "^" : "") + t.join("") + "]" + (e.unicode ? "u" : "");
			},
			any() {
				return "any character";
			},
			end() {
				return "end of input";
			},
			other(e) {
				return e.description;
			}
		};
		function c(e) {
			return s[e.type](e);
		}
		function l(e) {
			let t = e.map(c);
			if (t.sort(), t.length > 0) {
				let e = 1;
				for (let n = 1; n < t.length; n++) t[n - 1] !== t[n] && (t[e] = t[n], e++);
				t.length = e;
			}
			switch (t.length) {
				case 1: return t[0];
				case 2: return t[0] + " or " + t[1];
				default: return t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
			}
		}
		function u(e) {
			return e ? "\"" + a(e) + "\"" : "end of input";
		}
		return "Expected " + l(e) + " but " + u(t) + " found.";
	}
};
function De(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: Vr }, a = Vr, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", g = "false", _ = "null", ne = /^[,\]]/, v = /^[+\-]/, y = /^[*\/]/, re = /^[a-zA-Z_]/, ie = /^[\x80-\uFFFF_]/, ae = /^[a-zA-Z0-9_]/, oe = /^[0-9@$\-]/, se = /^[^\/\\]/, ce = /^[gimsuy]/, le = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, ue = /^[\uD800-\uDBFF]/, de = /^[\uDC00-\uDFFF]/, b = /^[0-9]/, fe = /^[1-9]/, x = /^[eE]/, pe = /^["\\]/, me = /^['\\]/, S = /^[ -\uD7FF\uE000-\uFFFF]/, he = /^[dD]/, ge = /^[89abAB]/, _e = /^[c-fC-F]/, ve = /^[0-9a-fA-F]/, C = /^[ \t\n\r]/, ye = G([",", "]"], !1, !1, !1), w = W("length", !1), be = W("count", !1), T = W("match", !1), xe = W("search", !1), E = W("value", !1), Se = G(["+", "-"], !1, !1, !1), D = G(["*", "/"], !1, !1, !1), De = Ir("string"), Oe = G([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), ke = G([["", "￿"], "_"], !1, !1, !1), Ae = G([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), je = W("-", !1), Me = G([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), Ne = W("$", !1), Pe = W("@", !1), Fe = W("..", !1), Ie = W(".", !1), Le = W("*", !1), Re = W("&&", !1), ze = W("||", !1), Be = W("!", !1), Ve = W("==", !1), He = W("!=", !1), Ue = W(">=", !1), We = W(">", !1), Ge = W("<=", !1), Ke = W("<", !1), qe = W("=~", !1), Je = W("in", !1), Ye = W("nin", !1), Xe = W("subsetof", !1), Ze = W("anyof", !1), O = W("noneof", !1), Qe = W("sizeof", !1), $e = W("size", !1), et = W("empty", !1), tt = W("true", !1), nt = W("false", !1), rt = W("null", !1), it = W("{", !1), at = W("}", !1), ot = W("[", !1), st = W("]", !1), ct = W(":", !1), lt = W(",", !1), ut = W("(", !1), dt = W(")", !1), ft = W("?", !1), pt = Ir("regex"), mt = W("/", !1), ht = G(["/", "\\"], !0, !1, !1), gt = W("\\", !1), _t = Pr(), k = G([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), vt = G([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), yt = G([["\ud800", "\udbff"]], !1, !1, !1), bt = G([["\udc00", "\udfff"]], !1, !1, !1), xt = G([["0", "9"]], !1, !1, !1), St = Ir("number"), Ct = W("0", !1), wt = G([["1", "9"]], !1, !1, !1), Tt = Ir("integer"), Et = G(["e", "E"], !1, !1, !1), Dt = W("\"", !1), Ot = W("'", !1), kt = G(["\"", "\\"], !1, !1, !1), At = G(["'", "\\"], !1, !1, !1), jt = G([[" ", "퟿"], ["", "￿"]], !1, !1, !1), Mt = W("b", !1), Nt = W("f", !1), Pt = W("n", !1), Ft = W("r", !1), It = W("t", !1), Lt = W("u", !1), Rt = G(["d", "D"], !1, !1, !1), zt = G([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), Bt = W("\\u", !1), Vt = G([["c", "f"], ["C", "F"]], !1, !1, !1), Ht = G([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), Ut = G([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function Wt(e) {
		return {
			type: "root",
			next: Ce(e)
		};
	}
	function Gt(e) {
		return e.map((e) => e[1]);
	}
	function Kt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function qt(e) {
		return e;
	}
	function Jt(e) {
		return {
			type: "dotdot",
			value: e
		};
	}
	function Yt() {
		return { type: "wildcard" };
	}
	function Xt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Zt() {
		return { type: "wildcard" };
	}
	function Qt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function $t(e) {
		return e;
	}
	function en(e) {
		return e;
	}
	function tn(e, t) {
		return t.length > 0 ? {
			type: "bracketExpression",
			value: {
				type: "unions",
				values: [e, ...t.map((e) => e[3])]
			}
		} : {
			type: e.type === "numericLiteral" || e.type === "stringLiteral" || e.type === "identifier" ? "bracketMember" : "bracketExpression",
			value: e
		};
	}
	function nn(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function rn(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function an(e, t) {
		return Te(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function on(e, t) {
		return Te(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function sn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function cn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function ln(e, t) {
		return t !== null || we(e);
	}
	function un(e, t) {
		if (t === null) return e;
		let n = t[1];
		return n.operator === "reg" ? {
			type: "comparator",
			operator: "reg",
			left: e,
			right: n.right
		} : n.operator === "empty" ? {
			type: "comparator",
			operator: "empty",
			left: e,
			right: null
		} : {
			type: "comparator",
			operator: n.operator,
			left: e,
			right: n.right
		};
	}
	function dn(e, t) {
		return {
			operator: e,
			right: t
		};
	}
	function fn(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function pn() {
		return { operator: "empty" };
	}
	function mn() {
		return "eq";
	}
	function hn() {
		return "ne";
	}
	function gn() {
		return "le";
	}
	function _n() {
		return "lt";
	}
	function vn() {
		return "ge";
	}
	function yn() {
		return "gt";
	}
	function bn() {
		return "in";
	}
	function xn() {
		return "nin";
	}
	function Sn() {
		return "subsetof";
	}
	function Cn() {
		return "anyof";
	}
	function wn() {
		return "noneof";
	}
	function Tn() {
		return "sizeof";
	}
	function En() {
		return "size";
	}
	function Dn(e) {
		return {
			type: "groupExpression",
			value: e
		};
	}
	function On() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function kn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function An() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function jn(e, t) {
		return {
			type: "functionCall",
			name: e,
			args: t || []
		};
	}
	function Mn() {
		return "length";
	}
	function Nn() {
		return "count";
	}
	function Pn() {
		return "match";
	}
	function A() {
		return "search";
	}
	function Fn() {
		return "value";
	}
	function In(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function j(e, t) {
		return t.length === 0 ? e : Te(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function Ln(e, t) {
		return t.length === 0 ? e : Te(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "*" ? "multi" : "div",
			left: e,
			right: t[3]
		}));
	}
	function Rn(e) {
		return {
			type: "groupOperation",
			value: e
		};
	}
	function zn(e) {
		return {
			type: "root",
			next: Ce(e)
		};
	}
	function Bn(e) {
		return {
			type: "current",
			next: Ce(e)
		};
	}
	function M(e, t, n) {
		return {
			type: "slices",
			start: e === null ? null : e[0],
			end: t === null ? null : t[0],
			step: n ? n[2] === null ? null : n[2] : null
		};
	}
	function Vn() {
		return { type: "wildcard" };
	}
	function N(e) {
		return {
			type: "numericLiteral",
			value: e
		};
	}
	function Hn(e) {
		return {
			type: "stringLiteral",
			value: _a(e)
		};
	}
	function P(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Un(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function F(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function Wn(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function I() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Gn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Kn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function qn(e) {
		return e;
	}
	function Jn(e) {
		for (let [t] of e || []) _a(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function Yn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function Xn(e, t) {
		return [e, t.value];
	}
	function Zn(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function Qn(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function $n(e) {
		return _a(e);
	}
	function er(e) {
		return _a(e);
	}
	function tr() {
		return "true";
	}
	function nr() {
		return "false";
	}
	function rr() {
		return "null";
	}
	function ir(e) {
		return _a(e);
	}
	function ar() {
		return "true";
	}
	function or() {
		return "false";
	}
	function sr() {
		return "null";
	}
	function cr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function lr(e) {
		return e.join("");
	}
	function ur(e, t) {
		let n = parseFloat(jr());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && Mr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function dr() {
		let e = parseInt(jr(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && Mr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function fr(e) {
		return e.join("");
	}
	function pr(e) {
		return e.join("");
	}
	function mr(e) {
		return e;
	}
	function hr() {
		return "\"";
	}
	function gr(e) {
		return e;
	}
	function _r(e) {
		return e;
	}
	function vr() {
		return "'";
	}
	function yr(e) {
		return e;
	}
	function L() {
		return "\\";
	}
	function br() {
		return "/";
	}
	function xr() {
		return "\b";
	}
	function Sr() {
		return "\f";
	}
	function Cr() {
		return "\n";
	}
	function wr() {
		return "\r";
	}
	function Tr() {
		return "	";
	}
	function Er(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function Dr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function Or(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let R = t.peg$currPos | 0, z = R, B = [{
		line: 1,
		column: 1
	}], V = R, kr = t.peg$maxFailExpected || [], H = t.peg$silentFails | 0, Ar = /* @__PURE__ */ new Map(), U;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function jr() {
		return e.substring(z, R);
	}
	function Mr(e, t) {
		throw t = t === void 0 ? Rr(z, R) : t, zr(e, t);
	}
	function Nr(t = R) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function W(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function G(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function Pr() {
		return { type: "any" };
	}
	function Fr() {
		return { type: "end" };
	}
	function Ir(e) {
		return {
			type: "other",
			description: e
		};
	}
	function Lr(t) {
		let n = B[t], r;
		if (n) return n;
		if (t >= B.length) r = B.length - 1;
		else for (r = t; !B[--r];);
		for (n = B[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return B[t] = n, n;
	}
	function Rr(e, t, n) {
		let i = Lr(e), a = Lr(t), o = {
			source: r,
			start: {
				offset: e,
				line: i.line,
				column: i.column
			},
			end: {
				offset: t,
				line: a.line,
				column: a.column
			}
		};
		return n && r && typeof r.offset == "function" && (o.start = r.offset(o.start), o.end = r.offset(o.end)), o;
	}
	function K(e) {
		R < V || (R > V && (V = R, kr = []), kr.push(e));
	}
	function zr(e, t) {
		return new Ee(e, null, null, t);
	}
	function Br(e, t, n) {
		return new Ee(Ee.buildMessage(e, t), e, t, n);
	}
	function Vr() {
		let e, t, r, i;
		return e = R, t = Si(), t === n ? (R = e, e = n) : (r = Hr(), i = ga(), i === n ? (R = e, e = n) : (z = e, e = Wt(r))), e;
	}
	function Hr() {
		let e, t, r, i, a;
		for (e = R, t = [], r = R, i = $(), a = Ur(), a === n ? (R = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = R, i = $(), a = Ur(), a === n ? (R = r, r = n) : (i = [i, a], r = i);
		return z = e, t = Gt(t), e = t, e;
	}
	function Ur() {
		let e;
		return e = Gr(), e === n && (e = Wr()), e;
	}
	function Wr() {
		let e, t, r;
		return e = R, t = Ti(), t === n ? (R = e, e = n) : (r = Kr(), r === n ? (R = e, e = n) : (z = e, e = Kt(r))), e === n && (e = R, t = Jr(), t !== n && (z = e, t = qt(t)), e = t), e;
	}
	function Gr() {
		let e, t, r;
		return e = R, t = wi(), t === n ? (R = e, e = n) : (r = qr(), r === n ? (R = e, e = n) : (z = e, e = Jt(r))), e;
	}
	function Kr() {
		let e, t;
		return e = R, t = Ei(), t !== n && (z = e, t = Yt()), e = t, e === n && (e = R, t = xi(), t !== n && (z = e, t = Xt(t)), e = t), e;
	}
	function qr() {
		let e, t;
		return e = R, t = Ei(), t !== n && (z = e, t = Zt()), e = t, e === n && (e = R, t = xi(), t !== n && (z = e, t = Qt(t)), e = t, e === n && (e = R, t = Jr(), t !== n && (z = e, t = $t(t)), e = t)), e;
	}
	function Jr() {
		let e, t, r, i;
		return e = R, t = Xi(), t === n ? (R = e, e = n) : ($(), r = Yr(), r === n ? (R = e, e = n) : ($(), i = Zi(), i === n ? (R = e, e = n) : (z = e, e = en(r)))), e;
	}
	function Yr() {
		let e, t, r, i, a, o, s, c;
		if (e = R, t = J(), t !== n) {
			for (r = [], i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = J(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = J(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = tn(t, r);
		} else R = e, e = n;
		return e;
	}
	function Xr() {
		let t, r, i, a, o, s, c, l, u;
		return t = R, r = ta(), r === n ? (R = t, t = n) : ($(), i = $i(), i === n ? (R = t, t = n) : ($(), a = Zr(), a === n ? (R = t, t = n) : ($(), o = ea(), o === n ? (R = t, t = n) : (s = R, H++, c = R, l = $(), u = e.charAt(R), ne.test(u) ? R++ : (u = n, H === 0 && K(ye)), u === n ? (R = c, c = n) : (l = [l, u], c = l), H--, c === n ? s = n : (R = s, s = void 0), s === n ? (R = t, t = n) : (z = t, t = nn(a)))))), t === n && (t = R, r = ta(), r === n ? (R = t, t = n) : ($(), i = Zr(), i === n ? (R = t, t = n) : (z = t, t = rn(i)))), t;
	}
	function Zr() {
		let e, t, r, i, a, o, s, c, l = R * 91 + 10, u = Ar.get(l);
		if (u) return R = u.nextPos, u.result;
		if (e = R, t = Qr(), t !== n) {
			for (r = [], i = R, a = $(), o = Oi(), o === n ? (R = i, i = n) : (s = $(), c = Qr(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = Oi(), o === n ? (R = i, i = n) : (s = $(), c = Qr(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = an(t, r);
		} else R = e, e = n;
		return Ar.set(l, {
			nextPos: R,
			result: e
		}), e;
	}
	function Qr() {
		let e, t, r, i, a, o, s, c;
		if (e = R, t = $r(), t !== n) {
			for (r = [], i = R, a = $(), o = Di(), o === n ? (R = i, i = n) : (s = $(), c = $r(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = Di(), o === n ? (R = i, i = n) : (s = $(), c = $r(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = on(t, r);
		} else R = e, e = n;
		return e;
	}
	function $r() {
		let e, t, r, i, a;
		return e = R, t = ki(), t === n ? (R = e, e = n) : ($(), r = $i(), r === n ? (R = e, e = n) : ($(), i = Zr(), i === n ? (R = e, e = n) : ($(), a = ea(), a === n ? (R = e, e = n) : (z = e, e = sn(i))))), e === n && (e = R, t = ki(), t === n ? (R = e, e = n) : ($(), r = ri(), r === n ? (R = e, e = n) : (z = e, e = cn(r))), e === n && (e = ei())), e;
	}
	function ei() {
		let e, t, r, i, a;
		return e = R, t = ci(), t === n ? (R = e, e = n) : (r = R, i = $(), a = ti(), a === n ? (R = r, r = n) : (i = [i, a], r = i), r === n && (r = null), z = R, i = ln(t, r), i = i ? void 0 : n, i === n ? (R = e, e = n) : (z = e, e = un(t, r))), e === n && (e = ri()), e;
	}
	function ti() {
		let e, t, r;
		return e = R, t = ni(), t === n ? (R = e, e = n) : ($(), r = ci(), r === n ? (R = e, e = n) : (z = e, e = dn(t, r))), e === n && (e = R, t = Ii(), t === n ? (R = e, e = n) : ($(), r = fi(), r === n ? (R = e, e = n) : (z = e, e = fn(r))), e === n && (e = R, t = Wi(), t !== n && (z = e, t = pn()), e = t)), e;
	}
	function ni() {
		let e, t;
		return e = R, t = Ai(), t !== n && (z = e, t = mn()), e = t, e === n && (e = R, t = ji(), t !== n && (z = e, t = hn()), e = t, e === n && (e = R, t = Pi(), t !== n && (z = e, t = gn()), e = t, e === n && (e = R, t = Fi(), t !== n && (z = e, t = _n()), e = t, e === n && (e = R, t = Mi(), t !== n && (z = e, t = vn()), e = t, e === n && (e = R, t = Ni(), t !== n && (z = e, t = yn()), e = t, e === n && (e = R, t = Li(), t !== n && (z = e, t = bn()), e = t, e === n && (e = R, t = Ri(), t !== n && (z = e, t = xn()), e = t, e === n && (e = R, t = zi(), t !== n && (z = e, t = Sn()), e = t, e === n && (e = R, t = Bi(), t !== n && (z = e, t = Cn()), e = t, e === n && (e = R, t = Vi(), t !== n && (z = e, t = wn()), e = t, e === n && (e = R, t = Hi(), t !== n && (z = e, t = Tn()), e = t, e === n && (e = R, t = Ui(), t !== n && (z = e, t = En()), e = t)))))))))))), e;
	}
	function ri() {
		let e, t, r, i;
		return e = R, t = $i(), t === n ? (R = e, e = n) : ($(), r = Zr(), r === n ? (R = e, e = n) : ($(), i = ea(), i === n ? (R = e, e = n) : (z = e, e = Dn(r)))), e === n && (e = ii(), e === n && (e = ui(), e === n && (e = R, t = Gi(), t !== n && (z = e, t = On()), e = t, e === n && (e = R, t = Ki(), t !== n && (z = e, t = kn()), e = t, e === n && (e = R, t = qi(), t !== n && (z = e, t = An()), e = t))))), e;
	}
	function ii() {
		let e, t, r, i, a;
		return e = R, t = ai(), t === n ? (R = e, e = n) : (r = $i(), r === n ? (R = e, e = n) : ($(), i = oi(), i === n && (i = null), $(), a = ea(), a === n ? (R = e, e = n) : (z = e, e = jn(t, i)))), e;
	}
	function ai() {
		let t, r;
		return t = R, e.substr(R, 6) === o ? (r = o, R += 6) : (r = n, H === 0 && K(w)), r !== n && (z = t, r = Mn()), t = r, t === n && (t = R, e.substr(R, 5) === s ? (r = s, R += 5) : (r = n, H === 0 && K(be)), r !== n && (z = t, r = Nn()), t = r, t === n && (t = R, e.substr(R, 5) === c ? (r = c, R += 5) : (r = n, H === 0 && K(T)), r !== n && (z = t, r = Pn()), t = r, t === n && (t = R, e.substr(R, 6) === l ? (r = l, R += 6) : (r = n, H === 0 && K(xe)), r !== n && (z = t, r = A()), t = r, t === n && (t = R, e.substr(R, 5) === u ? (r = u, R += 5) : (r = n, H === 0 && K(E)), r !== n && (z = t, r = Fn()), t = r)))), t;
	}
	function oi() {
		let e, t, r, i, a, o, s, c;
		if (e = R, t = si(), t !== n) {
			for (r = [], i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = si(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = si(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = In(t, r);
		} else R = e, e = n;
		return e;
	}
	function si() {
		let e;
		return e = ci(), e === n && (e = pi()), e;
	}
	function ci() {
		let t, r, i, a, o, s, c, l, u = R * 91 + 21, d = Ar.get(u);
		if (d) return R = d.nextPos, d.result;
		if (t = R, r = li(), r !== n) {
			for (i = [], a = R, o = $(), s = e.charAt(R), v.test(s) ? R++ : (s = n, H === 0 && K(Se)), s === n ? (R = a, a = n) : (c = $(), l = li(), l === n ? (R = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = R, o = $(), s = e.charAt(R), v.test(s) ? R++ : (s = n, H === 0 && K(Se)), s === n ? (R = a, a = n) : (c = $(), l = li(), l === n ? (R = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			z = t, t = j(r, i);
		} else R = t, t = n;
		return Ar.set(u, {
			nextPos: R,
			result: t
		}), t;
	}
	function li() {
		let t, r, i, a, o, s, c, l;
		if (t = R, r = q(), r !== n) {
			for (i = [], a = R, o = $(), s = e.charAt(R), y.test(s) ? R++ : (s = n, H === 0 && K(D)), s === n ? (R = a, a = n) : (c = $(), l = q(), l === n ? (R = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = R, o = $(), s = e.charAt(R), y.test(s) ? R++ : (s = n, H === 0 && K(D)), s === n ? (R = a, a = n) : (c = $(), l = q(), l === n ? (R = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			z = t, t = Ln(r, i);
		} else R = t, t = n;
		return t;
	}
	function q() {
		let e, t, r, i;
		return e = R, t = $i(), t === n ? (R = e, e = n) : ($(), r = ci(), r === n ? (R = e, e = n) : ($(), i = ea(), i === n ? (R = e, e = n) : (z = e, e = Rn(r)))), e === n && (e = ii(), e === n && (e = Y(), e === n && (e = ui()))), e;
	}
	function ui() {
		let e, t, r;
		return e = R, t = Si(), t === n ? (R = e, e = n) : (r = Hr(), r === n ? (R = e, e = n) : (z = e, e = zn(r))), e === n && (e = R, t = Ci(), t === n ? (R = e, e = n) : (r = Hr(), r === n ? (R = e, e = n) : (z = e, e = Bn(r)))), e;
	}
	function di() {
		let e, t, r, i, a, o, s, c, l;
		return e = R, t = R, r = la(), r === n ? (R = t, t = n) : (i = $(), r = [r, i], t = r), t === n && (t = null), r = Qi(), r === n ? (R = e, e = n) : (i = $(), a = R, o = la(), o === n ? (R = a, a = n) : (s = $(), o = [o, s], a = o), a === n && (a = null), o = R, s = Qi(), s === n ? (R = o, o = n) : (c = $(), l = la(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), z = e, e = M(t, a, o)), e;
	}
	function J() {
		let e, t;
		return e = Xr(), e === n && (e = di(), e === n && (e = R, t = Ei(), t !== n && (z = e, t = Vn()), e = t, e === n && (e = R, t = la(), t !== n && (z = e, t = N(t)), e = t, e === n && (e = R, t = da(), t !== n && (z = e, t = Hn(t)), e = t, e === n && (e = R, t = yi(), t !== n && (z = e, t = P(t)), e = t))))), e;
	}
	function fi() {
		let e, t, r;
		return e = R, t = na(), t === n ? (R = e, e = n) : (r = ra(), z = e, e = Un(t, r)), e;
	}
	function Y() {
		let e, t;
		return e = R, t = pi(), t !== n && (z = e, t = F(t)), e = t, e === n && (e = R, t = sa(), t !== n && (z = e, t = Wn(t)), e = t, e === n && (e = mi(), e === n && (e = _i(), e === n && (e = R, t = Gi(), t !== n && (z = e, t = I()), e = t, e === n && (e = R, t = Ki(), t !== n && (z = e, t = Gn()), e = t, e === n && (e = R, t = qi(), t !== n && (z = e, t = Kn()), e = t)))))), e;
	}
	function pi() {
		let e, t;
		return H++, e = R, t = da(), t !== n && (z = e, t = qn(t)), e = t, H--, e === n && (t = n, H === 0 && K(De)), e;
	}
	function mi() {
		let e, t, r, i;
		return e = R, t = Ji(), t === n ? (R = e, e = n) : ($(), r = hi(), r === n && (r = null), $(), i = Yi(), i === n ? (R = e, e = n) : (z = e, e = Jn(r))), e;
	}
	function hi() {
		let e, t, r, i, a, o, s, c;
		if (e = R, t = gi(), t !== n) {
			for (r = [], i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = gi(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = gi(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = Yn(t, r);
		} else R = e, e = n;
		return e;
	}
	function gi() {
		let e, t, r, i;
		return e = R, t = da(), t === n ? (R = e, e = n) : ($(), r = Qi(), r === n ? (R = e, e = n) : ($(), i = Y(), i === n ? (R = e, e = n) : (z = e, e = Xn(t, i)))), e;
	}
	function _i() {
		let e, t, r, i;
		return e = R, t = Xi(), t === n ? (R = e, e = n) : ($(), r = vi(), r === n && (r = null), $(), i = Zi(), i === n ? (R = e, e = n) : (z = e, e = Zn(r))), e;
	}
	function vi() {
		let e, t, r, i, a, o, s, c;
		if (e = R, t = Y(), t !== n) {
			for (r = [], i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = Y(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = Y(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = Qn(t, r);
		} else R = e, e = n;
		return e;
	}
	function yi() {
		let t, r, i, a, o, s;
		if (t = R, r = R, i = R, a = e.charAt(R), re.test(a) ? R++ : (a = n, H === 0 && K(Oe)), a !== n) {
			for (o = [], s = bi(); s !== n;) o.push(s), s = bi();
			a = [a, o], i = a;
		} else R = i, i = n;
		if (r = i === n ? i : e.substring(r, R), r !== n && (z = t, r = $n(r)), t = r, t === n) {
			if (t = R, r = R, i = [], a = e.charAt(R), ie.test(a) ? R++ : (a = n, H === 0 && K(ke)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(R), ie.test(a) ? R++ : (a = n, H === 0 && K(ke));
			else i = n;
			r = i === n ? i : e.substring(r, R), r !== n && (z = t, r = er(r)), t = r, t === n && (t = R, r = Gi(), r !== n && (z = t, r = tr()), t = r, t === n && (t = R, r = Ki(), r !== n && (z = t, r = nr()), t = r, t === n && (t = R, r = qi(), r !== n && (z = t, r = rr()), t = r)));
		}
		return t;
	}
	function bi() {
		let t, r, i, a;
		return t = e.charAt(R), ae.test(t) ? R++ : (t = n, H === 0 && K(Ae)), t === n && (t = R, e.charCodeAt(R) === 45 ? (r = "-", R++) : (r = n, H === 0 && K(je)), r === n ? (R = t, t = n) : (i = R, H++, a = e.charAt(R), oe.test(a) ? R++ : (a = n, H === 0 && K(Me)), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r))), t;
	}
	function xi() {
		let e, t;
		return e = R, t = ia(), t !== n && (z = e, t = ir(t)), e = t, e === n && (e = R, t = Gi(), t !== n && (z = e, t = ar()), e = t, e === n && (e = R, t = Ki(), t !== n && (z = e, t = or()), e = t, e === n && (e = R, t = qi(), t !== n && (z = e, t = sr()), e = t))), e;
	}
	function Si() {
		let t;
		return e.charCodeAt(R) === 36 ? (t = "$", R++) : (t = n, H === 0 && K(Ne)), t;
	}
	function Ci() {
		let t;
		return e.charCodeAt(R) === 64 ? (t = "@", R++) : (t = n, H === 0 && K(Pe)), t;
	}
	function wi() {
		let t;
		return e.substr(R, 2) === ".." ? (t = "..", R += 2) : (t = n, H === 0 && K(Fe)), t;
	}
	function Ti() {
		let t;
		return e.charCodeAt(R) === 46 ? (t = ".", R++) : (t = n, H === 0 && K(Ie)), t;
	}
	function Ei() {
		let t;
		return e.charCodeAt(R) === 42 ? (t = "*", R++) : (t = n, H === 0 && K(Le)), t;
	}
	function Di() {
		let t;
		return e.substr(R, 2) === "&&" ? (t = "&&", R += 2) : (t = n, H === 0 && K(Re)), t;
	}
	function Oi() {
		let t;
		return e.substr(R, 2) === "||" ? (t = "||", R += 2) : (t = n, H === 0 && K(ze)), t;
	}
	function ki() {
		let t;
		return e.charCodeAt(R) === 33 ? (t = "!", R++) : (t = n, H === 0 && K(Be)), t;
	}
	function Ai() {
		let t;
		return e.substr(R, 2) === "==" ? (t = "==", R += 2) : (t = n, H === 0 && K(Ve)), t;
	}
	function ji() {
		let t;
		return e.substr(R, 2) === "!=" ? (t = "!=", R += 2) : (t = n, H === 0 && K(He)), t;
	}
	function Mi() {
		let t;
		return e.substr(R, 2) === ">=" ? (t = ">=", R += 2) : (t = n, H === 0 && K(Ue)), t;
	}
	function Ni() {
		let t;
		return e.charCodeAt(R) === 62 ? (t = ">", R++) : (t = n, H === 0 && K(We)), t;
	}
	function Pi() {
		let t;
		return e.substr(R, 2) === "<=" ? (t = "<=", R += 2) : (t = n, H === 0 && K(Ge)), t;
	}
	function Fi() {
		let t;
		return e.charCodeAt(R) === 60 ? (t = "<", R++) : (t = n, H === 0 && K(Ke)), t;
	}
	function Ii() {
		let t;
		return e.substr(R, 2) === "=~" ? (t = "=~", R += 2) : (t = n, H === 0 && K(qe)), t;
	}
	function Li() {
		let t, r, i, a;
		return t = R, e.substr(R, 2) === "in" ? (r = "in", R += 2) : (r = n, H === 0 && K(Je)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ri() {
		let t, r, i, a;
		return t = R, e.substr(R, 3) === "nin" ? (r = "nin", R += 3) : (r = n, H === 0 && K(Ye)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function zi() {
		let t, r, i, a;
		return t = R, e.substr(R, 8) === d ? (r = d, R += 8) : (r = n, H === 0 && K(Xe)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Bi() {
		let t, r, i, a;
		return t = R, e.substr(R, 5) === f ? (r = f, R += 5) : (r = n, H === 0 && K(Ze)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = R, e.substr(R, 6) === p ? (r = p, R += 6) : (r = n, H === 0 && K(O)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = R, e.substr(R, 6) === m ? (r = m, R += 6) : (r = n, H === 0 && K(Qe)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = R, e.substr(R, 4) === ee ? (r = ee, R += 4) : (r = n, H === 0 && K($e)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = R, e.substr(R, 5) === h ? (r = h, R += 5) : (r = n, H === 0 && K(et)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = R, e.substr(R, 4) === te ? (r = te, R += 4) : (r = n, H === 0 && K(tt)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = R, e.substr(R, 5) === g ? (r = g, R += 5) : (r = n, H === 0 && K(nt)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = R, e.substr(R, 4) === _ ? (r = _, R += 4) : (r = n, H === 0 && K(rt)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t;
		return e.charCodeAt(R) === 123 ? (t = "{", R++) : (t = n, H === 0 && K(it)), t;
	}
	function Yi() {
		let t;
		return e.charCodeAt(R) === 125 ? (t = "}", R++) : (t = n, H === 0 && K(at)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(R) === 91 ? (t = "[", R++) : (t = n, H === 0 && K(ot)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(R) === 93 ? (t = "]", R++) : (t = n, H === 0 && K(st)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(R) === 58 ? (t = ":", R++) : (t = n, H === 0 && K(ct)), t;
	}
	function X() {
		let t;
		return e.charCodeAt(R) === 44 ? (t = ",", R++) : (t = n, H === 0 && K(lt)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(R) === 40 ? (t = "(", R++) : (t = n, H === 0 && K(ut)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(R) === 41 ? (t = ")", R++) : (t = n, H === 0 && K(dt)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(R) === 63 ? (t = "?", R++) : (t = n, H === 0 && K(ft)), t;
	}
	function na() {
		let t, r, i, a, o, s;
		if (H++, t = R, e.charCodeAt(R) === 47 ? (r = "/", R++) : (r = n, H === 0 && K(mt)), r !== n) {
			for (i = [], a = e.charAt(R), se.test(a) ? R++ : (a = n, H === 0 && K(ht)), a === n && (a = R, e.charCodeAt(R) === 92 ? (o = "\\", R++) : (o = n, H === 0 && K(gt)), o === n ? (R = a, a = n) : (e.length > R ? (s = e.charAt(R), R++) : (s = n, H === 0 && K(_t)), s === n ? (R = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(R), se.test(a) ? R++ : (a = n, H === 0 && K(ht)), a === n && (a = R, e.charCodeAt(R) === 92 ? (o = "\\", R++) : (o = n, H === 0 && K(gt)), o === n ? (R = a, a = n) : (e.length > R ? (s = e.charAt(R), R++) : (s = n, H === 0 && K(_t)), s === n ? (R = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(R) === 47 ? (a = "/", R++) : (a = n, H === 0 && K(mt)), a === n ? (R = t, t = n) : (z = t, t = cr(i));
		} else R = t, t = n;
		return H--, t === n && (r = n, H === 0 && K(pt)), t;
	}
	function ra() {
		let t, r, i;
		for (t = R, r = [], i = e.charAt(R), ce.test(i) ? R++ : (i = n, H === 0 && K(k)); i !== n;) r.push(i), i = e.charAt(R), ce.test(i) ? R++ : (i = n, H === 0 && K(k));
		return z = t, r = lr(r), t = r, t;
	}
	function ia() {
		let t, r, i, a, o;
		if (t = R, r = R, i = aa(), i !== n) {
			for (a = [], o = oa(); o !== n;) a.push(o), o = oa();
			i = [i, a], r = i;
		} else R = r, r = n;
		return t = r === n ? r : e.substring(t, R), t;
	}
	function aa() {
		let t, r, i;
		return t = e.charAt(R), le.test(t) ? R++ : (t = n, H === 0 && K(vt)), t === n && (t = R, r = e.charAt(R), ue.test(r) ? R++ : (r = n, H === 0 && K(yt)), r === n ? (R = t, t = n) : (i = e.charAt(R), de.test(i) ? R++ : (i = n, H === 0 && K(bt)), i === n ? (R = t, t = n) : (r = [r, i], t = r))), t;
	}
	function oa() {
		let t;
		return t = aa(), t === n && (t = e.charAt(R), b.test(t) ? R++ : (t = n, H === 0 && K(xt))), t;
	}
	function sa() {
		let t, r, i, a, o, s, c;
		if (H++, t = R, e.charCodeAt(R) === 45 ? (r = "-", R++) : (r = n, H === 0 && K(je)), r === n && (r = null), i = ca(), i !== n) {
			if (a = R, e.charCodeAt(R) === 46 ? (o = ".", R++) : (o = n, H === 0 && K(Ie)), o !== n) {
				if (s = [], c = e.charAt(R), b.test(c) ? R++ : (c = n, H === 0 && K(xt)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(R), b.test(c) ? R++ : (c = n, H === 0 && K(xt));
				else s = n;
				s === n ? (R = a, a = n) : (o = [o, s], a = o);
			} else R = a, a = n;
			a === n && (a = null), o = ua(), o === n && (o = null), z = t, t = ur(a, o);
		} else R = t, t = n;
		return H--, t === n && (r = n, H === 0 && K(St)), t;
	}
	function ca() {
		let t, r, i, a;
		if (e.charCodeAt(R) === 48 ? (t = "0", R++) : (t = n, H === 0 && K(Ct)), t === n) {
			if (t = R, r = e.charAt(R), fe.test(r) ? R++ : (r = n, H === 0 && K(wt)), r !== n) {
				for (i = [], a = e.charAt(R), b.test(a) ? R++ : (a = n, H === 0 && K(xt)); a !== n;) i.push(a), a = e.charAt(R), b.test(a) ? R++ : (a = n, H === 0 && K(xt));
				r = [r, i], t = r;
			} else R = t, t = n;
		}
		return t;
	}
	function la() {
		let t, r, i, a, o, s;
		if (H++, t = R, e.charCodeAt(R) === 48 ? (r = "0", R++) : (r = n, H === 0 && K(Ct)), r === n) {
			if (r = R, e.charCodeAt(R) === 45 ? (i = "-", R++) : (i = n, H === 0 && K(je)), i === n && (i = null), a = e.charAt(R), fe.test(a) ? R++ : (a = n, H === 0 && K(wt)), a !== n) {
				for (o = [], s = e.charAt(R), b.test(s) ? R++ : (s = n, H === 0 && K(xt)); s !== n;) o.push(s), s = e.charAt(R), b.test(s) ? R++ : (s = n, H === 0 && K(xt));
				i = [
					i,
					a,
					o
				], r = i;
			} else R = r, r = n;
		}
		return r !== n && (z = t, r = dr()), t = r, H--, t === n && (r = n, H === 0 && K(Tt)), t;
	}
	function ua() {
		let t, r, i, a, o;
		if (t = R, r = e.charAt(R), x.test(r) ? R++ : (r = n, H === 0 && K(Et)), r !== n) {
			if (i = e.charAt(R), v.test(i) ? R++ : (i = n, H === 0 && K(Se)), i === n && (i = null), a = [], o = e.charAt(R), b.test(o) ? R++ : (o = n, H === 0 && K(xt)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(R), b.test(o) ? R++ : (o = n, H === 0 && K(xt));
			else a = n;
			a === n ? (R = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else R = t, t = n;
		return t;
	}
	function da() {
		let t, r, i, a;
		if (H++, t = R, e.charCodeAt(R) === 34 ? (r = "\"", R++) : (r = n, H === 0 && K(Dt)), r !== n) {
			for (i = [], a = fa(); a !== n;) i.push(a), a = fa();
			e.charCodeAt(R) === 34 ? (a = "\"", R++) : (a = n, H === 0 && K(Dt)), a === n ? (R = t, t = n) : (z = t, t = fr(i));
		} else R = t, t = n;
		if (t === n) {
			if (t = R, e.charCodeAt(R) === 39 ? (r = "'", R++) : (r = n, H === 0 && K(Ot)), r !== n) {
				for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
				e.charCodeAt(R) === 39 ? (a = "'", R++) : (a = n, H === 0 && K(Ot)), a === n ? (R = t, t = n) : (z = t, t = pr(i));
			} else R = t, t = n;
		}
		return H--, t === n && (r = n, H === 0 && K(De)), t;
	}
	function fa() {
		let t, r, i;
		return t = R, r = R, H++, i = e.charAt(R), pe.test(i) ? R++ : (i = n, H === 0 && K(kt)), H--, i === n ? r = void 0 : (R = r, r = n), r === n ? (R = t, t = n) : (i = ma(), i === n ? (R = t, t = n) : (z = t, t = mr(i))), t === n && (t = R, e.charCodeAt(R) === 92 ? (r = "\\", R++) : (r = n, H === 0 && K(gt)), r === n ? (R = t, t = n) : (e.charCodeAt(R) === 34 ? (i = "\"", R++) : (i = n, H === 0 && K(Dt)), i === n ? (R = t, t = n) : (z = t, t = hr())), t === n && (t = R, e.charCodeAt(R) === 92 ? (r = "\\", R++) : (r = n, H === 0 && K(gt)), r === n ? (R = t, t = n) : (i = ha(), i === n ? (R = t, t = n) : (z = t, t = gr(i))))), t;
	}
	function pa() {
		let t, r, i;
		return t = R, r = R, H++, i = e.charAt(R), me.test(i) ? R++ : (i = n, H === 0 && K(At)), H--, i === n ? r = void 0 : (R = r, r = n), r === n ? (R = t, t = n) : (i = ma(), i === n ? (R = t, t = n) : (z = t, t = _r(i))), t === n && (t = R, e.charCodeAt(R) === 92 ? (r = "\\", R++) : (r = n, H === 0 && K(gt)), r === n ? (R = t, t = n) : (e.charCodeAt(R) === 39 ? (i = "'", R++) : (i = n, H === 0 && K(Ot)), i === n ? (R = t, t = n) : (z = t, t = vr())), t === n && (t = R, e.charCodeAt(R) === 92 ? (r = "\\", R++) : (r = n, H === 0 && K(gt)), r === n ? (R = t, t = n) : (i = ha(), i === n ? (R = t, t = n) : (z = t, t = yr(i))))), t;
	}
	function ma() {
		let t, r, i, a;
		return t = e.charAt(R), S.test(t) ? R++ : (t = n, H === 0 && K(jt)), t === n && (t = R, r = R, i = e.charAt(R), ue.test(i) ? R++ : (i = n, H === 0 && K(yt)), i === n ? (R = r, r = n) : (a = e.charAt(R), de.test(a) ? R++ : (a = n, H === 0 && K(bt)), a === n ? (R = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, R)), t;
	}
	function ha() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = R, e.charCodeAt(R) === 92 ? (r = "\\", R++) : (r = n, H === 0 && K(gt)), r !== n && (z = t, r = L()), t = r, t === n && (t = R, e.charCodeAt(R) === 47 ? (r = "/", R++) : (r = n, H === 0 && K(mt)), r !== n && (z = t, r = br()), t = r, t === n && (t = R, e.charCodeAt(R) === 98 ? (r = "b", R++) : (r = n, H === 0 && K(Mt)), r !== n && (z = t, r = xr()), t = r, t === n && (t = R, e.charCodeAt(R) === 102 ? (r = "f", R++) : (r = n, H === 0 && K(Nt)), r !== n && (z = t, r = Sr()), t = r, t === n && (t = R, e.charCodeAt(R) === 110 ? (r = "n", R++) : (r = n, H === 0 && K(Pt)), r !== n && (z = t, r = Cr()), t = r, t === n && (t = R, e.charCodeAt(R) === 114 ? (r = "r", R++) : (r = n, H === 0 && K(Ft)), r !== n && (z = t, r = wr()), t = r, t === n && (t = R, e.charCodeAt(R) === 116 ? (r = "t", R++) : (r = n, H === 0 && K(It)), r !== n && (z = t, r = Tr()), t = r, t === n && (t = R, e.charCodeAt(R) === 117 ? (r = "u", R++) : (r = n, H === 0 && K(Lt)), r === n ? (R = t, t = n) : (i = R, a = R, o = e.charAt(R), he.test(o) ? R++ : (o = n, H === 0 && K(Rt)), o === n ? (R = a, a = n) : (s = e.charAt(R), ge.test(s) ? R++ : (s = n, H === 0 && K(zt)), s === n ? (R = a, a = n) : (c = Z(), c === n ? (R = a, a = n) : (l = Z(), l === n ? (R = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, R), i === n ? (R = t, t = n) : (e.substr(R, 2) === "\\u" ? (a = "\\u", R += 2) : (a = n, H === 0 && K(Bt)), a === n ? (R = t, t = n) : (o = R, s = R, c = e.charAt(R), he.test(c) ? R++ : (c = n, H === 0 && K(Rt)), c === n ? (R = s, s = n) : (l = e.charAt(R), _e.test(l) ? R++ : (l = n, H === 0 && K(Vt)), l === n ? (R = s, s = n) : (u = Z(), u === n ? (R = s, s = n) : (d = Z(), d === n ? (R = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, R), o === n ? (R = t, t = n) : (z = t, t = Er(i, o))))), t === n && (t = R, e.charCodeAt(R) === 117 ? (r = "u", R++) : (r = n, H === 0 && K(Lt)), r === n ? (R = t, t = n) : (i = R, a = R, o = Z(), o === n ? (R = a, a = n) : (s = Z(), s === n ? (R = a, a = n) : (c = Z(), c === n ? (R = a, a = n) : (l = Z(), l === n ? (R = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, R), i === n ? (R = t, t = n) : (z = R, a = Dr(i), a = a ? n : void 0, a === n ? (R = t, t = n) : (z = t, t = Or(i)))))))))))), t;
	}
	function Z() {
		let t;
		return t = e.charAt(R), ve.test(t) ? R++ : (t = n, H === 0 && K(Ht)), t;
	}
	function Q() {
		let t;
		return t = e.charAt(R), ae.test(t) ? R++ : (t = n, H === 0 && K(Ae)), t;
	}
	function $() {
		let t, r;
		for (H++, t = [], r = e.charAt(R), C.test(r) ? R++ : (r = n, H === 0 && K(Ut)); r !== n;) t.push(r), r = e.charAt(R), C.test(r) ? R++ : (r = n, H === 0 && K(Ut));
		return H--, t;
	}
	function ga() {
		let t, r;
		return t = R, H++, e.length > R ? (r = e.charAt(R), R++) : (r = n, H === 0 && K(_t)), H--, r === n ? t = void 0 : (R = t, t = n), t;
	}
	function _a(e) {
		return e.length > 1e3 && Mr("Member name too long (maximum 1000 characters)"), e;
	}
	U = a();
	let va = U !== n && R === e.length;
	function ya() {
		throw U !== n && R < e.length && K(Fr()), Br(kr, V < e.length ? Nr(V) : null, V < e.length ? Rr(V, V + 1) : Rr(V, V));
	}
	if (t.peg$library) return {
		peg$result: U,
		peg$currPos: R,
		peg$FAILED: n,
		peg$maxFailExpected: kr,
		peg$maxFailPos: V,
		peg$success: va,
		peg$throw: va ? void 0 : ya
	};
	if (va) return U;
	ya();
}
var Oe = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), ke = {
	length: {
		args: ["value"],
		logical: !1
	},
	count: {
		args: ["nodes"],
		logical: !1
	},
	value: {
		args: ["nodes"],
		logical: !1
	},
	match: {
		args: ["value", "value"],
		logical: !0
	},
	search: {
		args: ["value", "value"],
		logical: !0
	}
}, Ae = (e) => {
	throw new b(1, 1, e);
}, je = (e) => e.type === "root" || e.type === "current", Me = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function Ne(e) {
	let t = [{
		node: e,
		context: "nodes"
	}], n = (e) => {
		for (let n = e.next; n; n = n.next) {
			let e = n.value;
			if (e.type === "dotdot" && (e = e.value), e.type !== "bracketExpression") continue;
			let r = e.value, i = r.type === "unions" ? r.values : [r];
			for (let e of i) e.type === "filterExpression" && t.push({
				node: e.value,
				context: "test"
			});
		}
	};
	for (; t.length > 0;) {
		let { node: e, context: r } = t.pop();
		if (typeof e != "object" || !e) continue;
		let i = e;
		if (je(i)) r === "value" && !Me(i) && Ae("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && Ae(`Expected a query, found ${String(i.type)}`), i.type) {
			case "logicalExpression":
			case "notExpression":
			case "groupExpression":
				i.type === "logicalExpression" ? t.push({
					node: i.left,
					context: "test"
				}, {
					node: i.right,
					context: "test"
				}) : t.push({
					node: i.value,
					context: "test"
				});
				break;
			case "comparator": {
				let e = Oe.has(i.operator) ? "value" : "any";
				t.push({
					node: i.left,
					context: e
				}), i.operator !== "reg" && t.push({
					node: i.right,
					context: e
				});
				break;
			}
			case "functionCall": {
				let e = i.name, n = ke[e], a = i.args;
				a.length !== n.args.length && Ae(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && Ae(`The result of ${e}() must be compared`), r === "value" && n.logical && Ae(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
					node: e,
					context: n.args[r]
				}));
				break;
			}
			case "operation":
				t.push({
					node: i.left,
					context: "value"
				}, {
					node: i.right,
					context: "value"
				});
				break;
			case "groupOperation":
				t.push({
					node: i.value,
					context: r === "any" ? "any" : "value"
				});
				break;
			case "value": r === "test" && Ae("A literal must be compared");
		}
	}
}
function Pe(e) {
	let t;
	try {
		t = De(e);
	} catch (e) {
		if (ye(e)) throw new b(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new b(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new b(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return Ne(t), t;
}
var Fe = /* @__PURE__ */ new Set([
	"(",
	")",
	"*",
	"+",
	"-",
	".",
	"?",
	"[",
	"\\",
	"]",
	"^",
	"n",
	"r",
	"t",
	"{",
	"|",
	"}"
]), Ie = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), Le = (e) => e >= 55296 && e <= 56319, Re = (e) => e >= 56320 && e <= 57343, ze = (e) => e !== void 0 && e >= "0" && e <= "9", Be = (e, t) => {
	let n = e.charCodeAt(t);
	return Le(n) && Re(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : Le(n) || Re(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, Ve = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !Fe.has(n) ? null : n === "n" ? {
		text: "\\n",
		length: 2,
		code: 10
	} : n === "r" ? {
		text: "\\r",
		length: 2,
		code: 13
	} : n === "t" ? {
		text: "\\t",
		length: 2,
		code: 9
	} : {
		text: "\\" + n,
		length: 2,
		code: n.charCodeAt(0)
	};
}, He = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return Ie.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, Ue = (e, t) => {
	let n = e[t];
	return n === "\\" ? Ve(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : Be(e, t);
}, We = (e, t) => {
	let n = t + 1, r = "[";
	e[n] === "^" && (r += "^", n++);
	let i = !0;
	for (;;) {
		let a = e[n];
		if (a === void 0) return null;
		if (a === "]") return i ? null : {
			text: r + "]",
			length: n + 1 - t
		};
		if (a === "-") {
			if (!i && e[n + 1] !== "]") return null;
			r += "-", n++, i = !1;
			continue;
		}
		if (i = !1, a === "\\" && (e[n + 1] === "p" || e[n + 1] === "P")) {
			let t = He(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = Ue(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = Ue(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, Ge = (e, t) => {
	let n = t + 1, r = n;
	for (; ze(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; ze(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, Ke = (e) => {
	let t = e, n = "", r = 0, i = !1, a = 0;
	for (; a < t.length;) {
		let e = t[a];
		switch (e) {
			case "|":
				n += "|", i = !1, a++;
				continue;
			case "(":
				r++, n += "(", i = !1, a++;
				continue;
			case ")":
				if (r === 0) return null;
				r--, n += ")", i = !0, a++;
				continue;
			case "*":
			case "+":
			case "?":
				if (!i) return null;
				n += e, i = !1, a++;
				continue;
			case "{": {
				let e = i ? Ge(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = We(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = He(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = Ve(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = Be(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, qe = 1e3, Je = 1e3, Ye = 16, Xe = /^[dgimsuy]*$/, Ze = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, O = class extends Error {}, Qe = 0, $e = 1, et = 2, tt = 3, nt = 4, rt = 5, it = le(2, 31) - 1, at = (e, t) => {
	let n = e.op.length, r = e.scratch ?? {
		clist: new Int32Array(n),
		nlist: new Int32Array(n),
		onList: new Int32Array(n),
		stack: new Int32Array(n),
		atomGen: new Int32Array(e.atoms.length),
		atomHit: new Uint8Array(e.atoms.length),
		gen: 0,
		step: 0
	};
	return e.scratch = void 0, (r.gen > it - t - 2 || r.step > it - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, ot = /* @__PURE__ */ new Set([
	"^",
	"$",
	"\\",
	".",
	"*",
	"+",
	"?",
	"(",
	")",
	"[",
	"]",
	"{",
	"}",
	"|",
	"/"
]), st = /^\{(\d+)(?:,(\d*))?\}/, ct = /^[0-9a-fA-F]{4}/, lt = /^\(\?([ims]*)(?:-([ims]*))?:/, ut = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, dt = class {
	constructor(e, t, n, r = !1) {
		this.src = e, this.unicode = t, this.iregexp = r, this.i = 0, this.mods = {
			i: n.includes("i"),
			m: n.includes("m"),
			s: n.includes("s")
		};
	}
	atom(e, t) {
		return {
			t: "atom",
			src: e,
			literal: t,
			mods: this.mods
		};
	}
	parse() {
		let e = this.parseAlt();
		if (this.i < this.src.length) throw new O("unexpected character");
		return e;
	}
	parseAlt() {
		let e = [this.parseSeq()];
		for (; this.src[this.i] === "|";) this.i++, e.push(this.parseSeq());
		return e.length === 1 ? e[0] : {
			t: "alt",
			alts: e
		};
	}
	parseSeq() {
		let e = [];
		for (; this.i < this.src.length && this.src[this.i] !== "|" && this.src[this.i] !== ")";) e.push(this.parseTerm());
		return e.length === 1 ? e[0] : {
			t: "cat",
			items: e
		};
	}
	parseTerm() {
		let e = this.src[this.i];
		return e === "^" ? (this.i++, {
			t: "bol",
			multiline: this.mods.m
		}) : e === "$" ? (this.i++, {
			t: "eol",
			multiline: this.mods.m
		}) : this.parseQuantifier(this.parseAtom());
	}
	parseAtom() {
		let { src: e } = this, t = this.i, n = e[t];
		if (n === "(") {
			let n = this.mods;
			if (e[t + 1] === "?") {
				let r = lt.exec(e.slice(t, t + 12));
				if (!r) throw new O("lookaround or named group");
				let i = de({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new O("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new O("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new O("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(ot.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new O("trailing backslash");
		if (r === "b" || r === "B") throw new O("word boundary");
		if (r >= "1" && r <= "9") throw new O("backreference");
		if (r === "0") {
			if (n) return 2;
			let r = 2;
			for (; r < 4 && /[0-7]/.test(t[e + r] ?? "");) r++;
			return r;
		}
		if (r === "c") return 3;
		if (r === "x" && /^[0-9a-fA-F]{2}/.test(t.slice(e + 2))) return 4;
		if (n && (r === "p" || r === "P" || r === "u") && t[e + 2] === "{") {
			let n = t.indexOf("}", e + 3);
			if (n === -1) throw new O("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && ct.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (ct.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
			}
			return 6;
		}
		return 2;
	}
	parseQuantifier(e) {
		let { src: t } = this, n = t[this.i], r, i;
		if (n === "*") r = 0, i = Infinity, this.i++;
		else if (n === "+") r = 1, i = Infinity, this.i++;
		else if (n === "?") r = 0, i = 1, this.i++;
		else if (n === "{") {
			let n = st.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > qe || i !== Infinity && i > qe) throw new O("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, ft = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= qe) throw new O("pattern too large");
		return this.op.push(e), this.x.push(t), this.y.push(n), this.op.length - 1;
	}
	atomId(e) {
		let t = (e.mods.i ? "i" : "") + (e.mods.s ? "s" : "") + (this.unicode ? "u" : ""), n = `${t}/${e.src}`, r = this.atomIds.get(n);
		return r === void 0 && (r = this.atoms.length, this.atoms.push({
			re: RegExp(`^(?:${e.src})$`, t),
			literal: e.mods.i ? void 0 : e.literal
		}), this.atomIds.set(n, r)), r;
	}
	finish() {
		this.emit(rt);
	}
	compile(e) {
		if (++this.work > 4 * qe) throw new O("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(Qe, this.atomId(e));
				return;
			case "bol":
				this.emit(tt, +!!e.multiline);
				return;
			case "eol":
				this.emit(nt, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit($e);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(et)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit($e);
					this.x[t] = t + 1, this.compile(e.node), this.emit(et, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit($e);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, pt = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new dt(e, r, t, n).parse(), a = new ft(r);
		return a.compile(i), a.finish(), {
			op: a.op,
			x: a.x,
			y: a.y,
			atoms: a.atoms,
			unicode: r,
			sticky: t.includes("y")
		};
	} catch (e) {
		if (e instanceof RangeError) throw e;
		return null;
	}
}, mt = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: g } = r, _ = r.gen, ne = r.step;
	r.gen = _ + t.length + 2, r.step = ne + t.length + 2;
	let v = 0, y = !1, re = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== _) switch (ee[r] = _, ++c === 64 && (u(c), c = 0), i[r]) {
				case Qe:
					e[n++] = r;
					break;
				case rt: return u(c), y = !0, n;
				case et:
					h[s++] = a[r];
					break;
				case $e:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case tt:
					(v === 0 || a[r] === 1 && ut(t.charCodeAt(v - 1))) && (h[s++] = r + 1);
					break;
				case nt: (v === t.length || a[r] === 1 && ut(t.charCodeAt(v))) && (h[s++] = r + 1);
			}
		}
		return u(c), n;
	};
	if (_++, p = re(d, 0, 0), y) return !0;
	for (; v < t.length;) {
		if (p === 0 && l) return !1;
		let e = (c ? t.codePointAt(v) : t.charCodeAt(v)) > 65535 ? 2 : 1, n = t.slice(v, v + e), r = ne + v + 1;
		_++, m = 0, v += e;
		for (let e = 0; e < p; e++) {
			let t = d[e], i = a[t];
			if (te[i] !== r) {
				te[i] = r;
				let e = s[i];
				g[i] = (e.literal === void 0 ? e.re.test(n) : e.literal === n) ? 1 : 0;
			}
			if (g[i] === 1 && (m = re(f, m, t + 1), y)) return !0;
		}
		if (!l && (m = re(f, m, 0), y)) return !0;
		let i = d;
		d = f, f = i, p = m;
	}
	return !1;
}, ht = (e, t, n) => {
	let r = at(e, t.length);
	try {
		return mt(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, gt = 256, _t = /* @__PURE__ */ new Map(), k = 0, vt = (e, t, n, r, i = !1) => {
	if (e.length > Je || t.length > 7 || !Xe.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = _t.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = Ze(s) > Ye ? null : pt(n ? `^(?:${s})$` : s, t, i);
	k >= gt && (_t.clear(), k = 0);
	let l = _t.get(s);
	return l === void 0 && _t.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), k++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, yt = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), ht(e, t, n);
}, bt = class {
	constructor(e) {
		this.nodes = e;
	}
}, xt = (e) => {
	let t = !1;
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r === "\\" && n + 1 < e.length) {
			let r = e[n + 1];
			if ((r === "b" || r === "B") && !t) return !0;
			n++;
		} else r === "[" && !t ? t = !0 : r === "]" && t && (t = !1);
	}
	return !1;
}, St = (e) => {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (n === "\\") {
			let n = e[t + 1];
			if (n >= "1" && n <= "9") return !1;
			t++;
		} else if (n === "(" && e[t + 1] === "?") {
			let n = e[t + 2];
			if (n === "=" || n === "!") return !1;
			if (n === "<") {
				let n = e[t + 3];
				if (n === "=" || n === "!" || /[a-zA-Z]/.test(n ?? "")) return !1;
			}
		}
	}
	return !xt(e);
}, Ct = 256, wt = /* @__PURE__ */ new Map(), Tt = (e, t) => {
	let n = wt.get(e);
	return n === void 0 && (n = St(e), wt.size >= Ct && wt.clear(), wt.set(Array.from(e).join(""), n)), t(e.length), n;
}, Et = /* @__PURE__ */ new Map(), Dt = (e, t) => {
	let n = Et.get(e);
	return n === void 0 && (n = Ke(e), n !== null && (n = Array.from(n).join("")), Et.size >= Ct && Et.clear(), Et.set(Array.from(e).join(""), n)), t(e.length), n;
}, Ot = 256, kt = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > Je) c = null;
		else if (o) {
			let n = Dt(e, i);
			c = n === null ? null : vt(n, t, r, i, !0);
		} else c = Tt(e, i) ? vt(e, t, r, i) : null;
		s !== void 0 && (s.size >= Ot && s.clear(), s.set(a, c));
	}
	return c !== null && yt(c, n, i);
}, At = {
	length: (e, t) => {
		let n = e[0];
		if (E(n)) {
			t(n.length);
			let e = n.length;
			for (let t = 0; t < n.length - 1; t++) {
				let r = n.charCodeAt(t);
				if (r >= 55296 && r <= 56319) {
					let r = n.charCodeAt(t + 1);
					r >= 56320 && r <= 57343 && (e--, t++);
				}
			}
			return e;
		}
		if (w(n)) return C(n);
		if (T(n)) {
			let e = ve(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !E(r) || !E(i) ? !1 : kt(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !E(r) || !E(i) ? !1 : kt(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, jt = (e, t, n = x) => e === void 0 && t === void 0 || me(e, t, n), Mt = (e, t, n = x) => !me(e, t, n), Nt = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, Pt = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return Nt(n) - Nt(i);
	}
	return e.length - t.length;
}, Ft = (e, t, n = x) => xe(e) && xe(t) ? e < t : E(e) && E(t) ? (n(Math.min(e.length, t.length)), Pt(e, t) < 0) : !1, It = (e, t, n = x) => Ft(e, t, n) || jt(e, t, n), Lt = (e, t, n = x) => xe(e) && xe(t) ? e > t : E(e) && E(t) ? (n(Math.min(e.length, t.length)), Pt(e, t) > 0) : !1, Rt = (e, t, n = x) => Lt(e, t, n) || jt(e, t, n), zt = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, Bt = (e, t, n) => {
	let r = C(e);
	for (let i = 0; i < r; i++) {
		let r = he(e, i);
		if (n(1 + zt(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, Vt = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, Ht = (e) => typeof e == "string" && e.length + 1 > ge, Ut = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = C(e);
	for (let n = 0; n < a; n++) {
		let r = he(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), Ht(r) ? i.long.push(r) : i.set.add(Vt(r));
	}
	return n?.set(e, i), i;
}, Wt = ({ set: e, long: t }, n, r) => {
	if (Ht(n)) {
		for (let e of t) if (r(1 + zt(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(Vt(n)));
}, Gt = (e, t, n) => {
	let r = C(e);
	for (let i = 0; i < r; i++) if (n(), S(e, i) && t(e[i])) return !0;
	return !1;
}, Kt = {
	eq: jt,
	ne: Mt,
	lt: Ft,
	le: It,
	gt: Lt,
	ge: Rt,
	in: (e, t, n = x) => w(t) ? Bt(t, e, n) !== -1 : !1,
	nin: (e, t, n = x) => w(t) ? Bt(t, e, n) === -1 : !1,
	subsetof: (e, t, n = x, r) => {
		if (!w(e) || !w(t)) return !1;
		let i = Ut(t, n, r);
		return !Gt(e, (e) => !Wt(i, e, n), n);
	},
	anyof: (e, t, n = x, r) => {
		if (!w(e) || !w(t)) return !1;
		let i = Ut(t, n, r);
		return Gt(e, (e) => Wt(i, e, n), n);
	},
	noneof: (e, t, n = x, r) => {
		if (!w(e) || !w(t)) return !1;
		let i = Ut(t, n, r);
		return !Gt(e, (e) => Wt(i, e, n), n);
	},
	sizeof: (e, t) => !w(e) && !E(e) || !w(t) && !E(t) ? !1 : (w(e) ? C(e) : e.length) === (w(t) ? C(t) : t.length),
	size: (e, t) => !w(e) && !E(e) || !xe(t) ? !1 : (w(e) ? C(e) : e.length) === t
}, qt = (e) => !w(e) && !E(e) ? !1 : (w(e) ? C(e) : e.length) === 0, Jt = (e, t, n, r = x, i) => !E(e) || !E(t) ? !1 : kt(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), Yt = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), Xt = (e, t) => e.concat(`[${t}]`), Zt = (e, t) => e < 0 ? t + e : e, Qt = (e, t) => {
	let n = C(e), r = Zt(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: S(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, $t = (e, t) => {
	for (let n of t) e.push(n);
}, en = 1e6, tn = 100, nn = 1e6, rn = 20, an = 1e4, on = 1e4, sn = class {
	constructor(e) {
		this.weight = 0, this.nodes = 0, this.stringPositions = 0, this.done = !1, this.seen = /* @__PURE__ */ new Set(), this.frames = [], this.visit(e);
	}
	advance(e) {
		let t = this.nodes + e, { frames: n } = this;
		for (; n.length > 0 && this.nodes < t;) {
			let e = n[n.length - 1];
			if (e.i >= e.length) {
				n.pop();
				continue;
			}
			let t = e.i++;
			if (e.keys === null) {
				let n = e.container;
				if (e.indices !== null) {
					let r = Number(e.indices[t]);
					S(n, r) && this.visit(n[r]);
				} else if (S(n, t)) this.visit(n[t]);
				else if (++e.holes > on) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!S(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), w(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: C(e),
				i: 0,
				holes: 0
			});
			else if (T(e)) {
				let t = Object.keys(e);
				this.frames.push({
					container: e,
					keys: t,
					indices: null,
					length: t.length,
					i: 0,
					holes: 0
				});
			}
		}
	}
}, cn = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, Yt(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = Yt(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = C(e);
			for (let r = 0; r < n; r++) this.tick(), S(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new sn(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(an, Math.ceil((this.retained - this.retainedLimit) / rn))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new fe(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(en, tn * e.weight) + t, this.retainedLimit = Math.max(nn, rn * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new sn(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(an, Math.ceil((this.steps - this.stepLimit) / tn))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new fe(`Query exceeded ${this.stepLimit} evaluation steps`);
			}
		}, {
			regexProgram: (e) => {
				this.largestRegexProgram = Math.max(this.largestRegexProgram, e);
			},
			regexWork: (e) => {
				this.regexSteps += e, this.tick(e);
			},
			regexSites: /* @__PURE__ */ new Map()
		}), this.readsCurrent = /* @__PURE__ */ new WeakMap(), this.invariantResults = /* @__PURE__ */ new Map(), this.isInvariant = (e) => (this.readsCurrent.has(e) || this.classify(e), !this.readsCurrent.get(e)), this.classify = (e) => {
			let t = this.readsCurrent, n = [], r = (e) => {
				if (typeof e != "object" || !e) return !1;
				let r = t.get(e);
				if (r !== void 0) return r;
				let i = e.type;
				if (i === "current") return t.set(e, !0), !0;
				if (i === "filterExpression" || i === "value") return t.set(e, !1), !1;
				let a = Object.values(e);
				n.push({
					node: e,
					children: a,
					i: 0,
					reads: !1
				});
			};
			for (r(e); n.length > 0;) {
				let e = n[n.length - 1];
				e.i < e.children.length ? r(e.children[e.i++]) === !0 && (e.reads = !0) : (t.set(e.node, e.reads), n.pop(), e.reads && n.length > 0 && (n[n.length - 1].reads = !0));
			}
		}, this.memoInvariant = (e, t) => {
			if (!this.isInvariant(e)) return t();
			if (this.invariantResults.has(e)) return this.invariantResults.get(e);
			let n = t();
			return this.invariantResults.set(e, n), n;
		}, this.handleRootQuery = (e, t) => {
			if (this.rootQueryCache.has(e)) return this.rootQueryCache.get(e);
			let n = this.handleSubscript(this.rootPayload, t);
			return this.rootQueryCache.set(e, n), n;
		}, this.handleIdentifier = (e, t) => this.selectMember(e, t), this.handleStringLiteral = (e, t) => this.selectMember(e, t), this.selectMember = ({ value: e, paths: t }, n) => {
			if (!T(e)) return;
			let r = this.canonicalName(n, n.value);
			if (S(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (w(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: Xt(t, r)
					});
				}), n;
			}
			if (T(e)) {
				let n = ve(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) S(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!w(e)) return;
			let r = Qt(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: Xt(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (w(e)) {
				let r = Qt(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: Xt(t, r.index)
				} : void 0;
			}
			if (T(e)) {
				let r = String(n.value);
				return S(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!w(e)) return [];
			let r = C(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : Zt(n.start, r), o = n.end === null ? r : Zt(n.end, r)) : (a = n.start === null ? r - 1 : Zt(n.start, r), o = n.end === null ? -r - 1 : Zt(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: S(e, u) ? e[u] : void 0,
				paths: Xt(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (T(e.value)) {
						let t = this.handleIdentifier(e, r);
						D(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (T(e.value)) {
						let t = this.handleStringLiteral(e, r);
						D(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (w(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						D(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					$t(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": $t(n, this.handleBracketExpressionContent(e, r));
			}
			return n;
		}, this.handleDotdot = (e, t) => {
			let n = [];
			return this.collectDotdot(e, t, n), n;
		}, this.collectDotdot = (e, t, n) => {
			let r = t.value, i = [];
			this.tick();
			let a = e;
			for (; a !== void 0;) {
				let e = a.value;
				switch (r.type) {
					case "bracketMember": {
						let e = this.handleBracketMemberContent(a, r.value);
						D(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						$t(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						$t(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						D(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (T(e)) {
					let t = ve(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else w(e) && i.push({
					parent: a,
					keys: null,
					length: C(e),
					i: 0
				});
				for (a = void 0; i.length > 0;) {
					let e = i[i.length - 1];
					if (e.i >= e.length) {
						i.pop();
						continue;
					}
					let t = e.i++;
					if (e.keys === null) {
						this.tick();
						let n = e.parent.value;
						if (!S(n, t)) continue;
						a = {
							value: n[t],
							paths: Xt(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!S(n, r)) continue;
						a = {
							value: n[r],
							paths: this.formatStringLiteralPath(e.parent.paths, r)
						};
					}
					break;
				}
			}
		}, this.handleOperationContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "root": return this.handleRootQuery(t, t.next);
				case "current": return this.handleSubscript(e, t.next);
				case "value": return {
					value: t.value,
					paths: e.paths
				};
				case "groupOperation": return this.memoInvariant(t, () => this.handleOperationContent(e, t.value));
				case "functionCall": return {
					value: this.handleFunctionCall(e, t),
					paths: e.paths
				};
				case "operation": {
					let n = [], r = t;
					for (; r.type === "operation";) n.push({
						operator: r.operator,
						right: r.right
					}), r = r.left;
					let i = this.handleOperationContent(e, r)?.value;
					this.tick(n.length);
					for (let t = n.length - 1; t >= 0; t--) {
						let r = this.handleOperationContent(e, n[t].right)?.value;
						if (!xe(i) || !xe(r)) i = void 0;
						else switch (n[t].operator) {
							case "plus":
								i += r;
								break;
							case "minus":
								i -= r;
								break;
							case "div":
								i = r === 0 ? void 0 : i / r;
								break;
							case "multi": i *= r;
						}
					}
					return xe(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return qt(n);
			if (t.operator === "reg") return Jt(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = Kt[t.operator];
			if (i) {
				let e = this.isInvariant(t.right) ? this.siteSetCache(t.right) : void 0;
				return i(n, r, this.tick, e);
			}
			return !1;
		}, this.handleLogicalExpression = (e, t) => this.memoInvariant(t, () => this.evaluateLogicalExpression(e, t)), this.evaluateLogicalExpression = (e, t) => {
			let n = [], r = !this.isInvariant(t), i = t;
			for (; i.type === "logicalExpression" && (i === t || !r || !this.isInvariant(i));) n.push({
				operator: i.operator,
				right: i.right
			}), i = i.left;
			this.tick(n.length);
			let a = this.handleFilterExpressionContent(e, i);
			for (let t = n.length - 1; t >= 0; t--) (n[t].operator === "and" ? a : !a) && (a = this.handleFilterExpressionContent(e, n[t].right));
			return a;
		}, this.handleFunctionCall = (e, t) => this.memoInvariant(t, () => this.evaluateFunctionCall(e, t)), this.evaluateFunctionCall = (e, t) => {
			let n = t.name === "count" || t.name === "value", r = t.args.map((t) => {
				let r = this.handleOperationContent(e, t);
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new bt(r.value) : new bt(D(r?.value) ? [r?.value] : []);
			}), i = At[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
			return i ? i(r, this.tick, o ? t : void 0) : void 0;
		}, this.handleFilterExpressionContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "logicalExpression": return this.handleLogicalExpression(e, t);
				case "comparator": return this.handleComparator(e, t);
				case "groupExpression": return this.memoInvariant(t, () => this.handleFilterExpressionContent(e, t.value));
				case "notExpression": return this.memoInvariant(t, () => !this.handleFilterExpressionContent(e, t.value));
				case "functionCall": return !!this.handleFunctionCall(e, t);
				case "root": {
					let e = this.handleRootQuery(t, t.next);
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : D(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : D(n);
				}
				case "value": return !!t.value;
			}
		}, this.handleBracketMemberContent = (e, t) => {
			switch (t.type) {
				case "identifier": return this.handleIdentifier(e, t);
				case "numericLiteral": return this.handleNumericLiteral(e, t);
				case "stringLiteral": return this.handleStringLiteral(e, t);
			}
		}, this.handleBracketExpressionContent = (e, t) => {
			let n = e.value;
			switch (t.type) {
				case "filterExpression": {
					let r = [];
					if (w(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: Xt(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (T(n)) {
						let i = ve(n);
						this.tick(i.length);
						for (let a of i) {
							if (!S(n, a)) continue;
							let i = {
								value: n[a],
								paths: this.formatStringLiteralPath(e.paths, a)
							};
							this.handleFilterExpressionContent(i, t.value) && (this.retain(), r.push(i));
						}
					}
					return r;
				}
				case "unions": return this.handleUnions(e, t);
				case "wildcard": return this.handleWildcard(e);
				case "slices": return this.handleSlices(e, t);
			}
		}, this.isIndefiniteSegment = (e) => {
			let t = e.value;
			return t.type === "bracketExpression" || t.type === "dotdot" || t.type === "dot" && t.value.type === "wildcard";
		}, this.selectMany = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketExpression": return this.handleBracketExpressionContent(e, n.value);
				case "dotdot": return this.handleDotdot(e, n);
				default: return this.handleWildcard(e);
			}
		}, this.selectOne = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketMember": return this.handleBracketMemberContent(e, n.value);
				case "dot":
					if (n.value.type === "identifier") return this.handleIdentifier(e, n.value);
					if (n.value.type === "numericLiteral") return this.handleDotNumericLiteral(e, n.value);
			}
		}, this.handleSubscript = (e, t) => {
			if (t === null) return e;
			let n = [], r = [{
				node: e,
				segment: t
			}], i = !1;
			for (; r.length > 0;) {
				let { node: e, segment: t } = r.pop(), a;
				if (this.isIndefiniteSegment(t)) i = !0, a = this.selectMany(e, t);
				else {
					this.tick();
					let n = this.selectOne(e, t);
					if (!D(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) $t(n, a);
				else for (let e = a.length - 1; e >= 0; e--) r.push({
					node: a[e],
					segment: o
				});
			}
			if (!i) return n[0];
			let a = [], o = [];
			for (let e of n) a.push(e.value), o.push(e.paths);
			return {
				value: a,
				paths: o,
				isIndefinite: !0
			};
		}, this.handleRoot = (e) => {
			try {
				return this.handleSubscript(this.rootPayload, e.next);
			} catch (e) {
				throw ye(e) ? new fe("Query is nested too deeply") : be(e) ? new fe("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? en, this.retainedLimit = this.adaptiveLimit ? nn : Infinity;
	}
}, ln = (e, t, n) => {
	let r = Pe(t), i = new cn(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? Se(i) ? [] : [i.value] : i?.value;
}, un = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = ln(e, i, n);
		D(t) && r.push(t);
	}
	return r;
}, dn = (e, t, n = {}) => {
	try {
		return w(t) ? un(e, t, n) : ln(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, fn = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = fn(n, t);
		if (e) return e;
	}
	return null;
}, pn = (e, t, n) => {
	let r = e?.[t.fileName];
	if (r === void 0) throw Error(`Registry entry not found: ${t.fileName}`);
	let i = r;
	if (t.jsonPath) {
		let e = dn(r, t.jsonPath, { returnArray: !0 });
		if (e.length === 0) throw Error(`Destination JSONPath matched no nodes: ${t.jsonPath}`);
		if (e.length > 1) throw Error(`Destination JSONPath must identify exactly one node; matched ${e.length}: ${t.jsonPath}`);
		i = e[0];
	} else if (t.dataRole && (i = fn(r, t.dataRole), i == null)) throw Error(`Destination dataRole not found: ${t.dataRole}`);
	let a = [...t.filePath ?? []];
	if (a.length === 0) throw Error("destinationPath.filePath must contain the property to write");
	let o = a.pop(), s = a.reduce((e, t) => {
		if (e == null) throw Error(`Cannot resolve destination filePath at: ${t}`);
		return e[t];
	}, i);
	if (s == null) throw Error(`Destination parent not found for filePath: ${t.filePath.join(".")}`);
	return n && console.log("json-write-path v6 resolved:", {
		fileName: t.fileName,
		jsonPath: t.jsonPath,
		dataRole: t.dataRole,
		filePath: t.filePath,
		parent: s,
		key: o
	}), {
		parent: s,
		key: o,
		target: i
	};
}, mn = (e, t, n, r) => {
	let { parent: i, key: a } = pn(e, t, r);
	return (ie[t.action] || re)(i, a, n), e;
}, hn = (e, t) => {
	if (!e) return null;
	let n = t[e.fileName];
	if (n === void 0) throw Error(`Entry not found in state: ${e.fileName}`);
	if (e.jsonPath) {
		let t = dn(n, e.jsonPath, { returnArray: !0 });
		return t.length === 0 ? Array.isArray(n) ? n : [] : t.length === 1 ? t[0] : t;
	}
	return Array.isArray(e.filePath) && e.filePath.length > 0 ? e.filePath.reduce((e, t) => e ? e[t] : void 0, n) : n;
}, gn = (e, t, n, r = !1) => {
	if (t) {
		if (!t.filePath || t.filePath.length === 0) {
			let r = e[t.fileName];
			Array.isArray(r) ? r.push(...Array.isArray(n) ? n : [n]) : e[t.fileName] = n;
		} else try {
			mn(e, t, n, r);
		} catch {}
	}
}, _n = {
	single: (e, t) => {
		let n = i[e.templateKey], r = hn(e.sourcePath, t);
		return (e.func === "fromCollection" ? g : m)(r, n);
	},
	rowOnColumn: (e, { data: t }) => ne({
		columns: t?.columns,
		data: t,
		columnSpec: i[e.templateKey.columnKey],
		rowSpec: i[e.templateKey.rowKey]
	}),
	columnOnRow: (e, { data: t }) => v({
		columns: t?.columns,
		data: t,
		columnSpec: i[e.templateKey.columnKey],
		rowSpec: i[e.templateKey.rowKey]
	})
}, vn = (e, t, n = !1) => {
	let r = a[e], i = _n[r.type](r, t);
	return gn(t, r.destinationPath, i, n), i;
}, yn = {
	name: "json-renderers-run-instructions",
	version: "1.8.1"
}, bn = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.runInstructions ??= {}, globalThis.ks.jsonRenderers.runInstructions.steps = {
		meta: yn,
		runInstructions: e
	});
}, xn = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => (e.forEach((e) => {
	r && console.log(`[runStep] ${e}`), vn(e, {
		base: t,
		data: n
	}, r);
}), t);
bn(xn);
// node_modules/declarative-instructions/src/v1/index.js
var Sn = {
	buildColgroup: {
		type: "single",
		narration: "Build column widths",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildColGroup",
		func: "fromCollection"
	},
	buildHeader: {
		type: "single",
		narration: "Build table header",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildHeader",
		func: "fromCollection"
	},
	buildFooter: {
		type: "single",
		narration: "Build table footer",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFooter",
		func: "fromCollection"
	},
	buildBody: {
		type: "rowOnColumn",
		narration: "Build table body",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		templateKey: {
			rowKey: "buildBodyTr",
			columnKey: "buildBodyCell"
		}
	},
	serial: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial number cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshiftSerialToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "buildBodyCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	search: [{
		narration: "Prepend the search row to top of the table.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-parent']"
		},
		sourcePath: null,
		templateKey: "tableSearch",
		func: null
	}],
	buildFormField: {
		type: "single",
		narration: "Build form fields from columns",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'form-body']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFormField",
		func: "fromCollection"
	},
	buildSelectWithOptions: {
		type: "columnOnRow",
		narration: "Build selects with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildSelect",
			rowKey: "buildOption"
		}
	},
	buildSelectOptions: {
		type: "single",
		narration: "Build select options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildOptionsArray: {
		type: "single",
		narration: "Build options array",
		destinationPath: {
			fileName: "base",
			filePath: []
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildDataListWithOptions: {
		type: "columnOnRow",
		narration: "Build datalists with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildDataList",
			rowKey: "buildOption"
		}
	},
	searchFrame: [{
		narration: "Insert the search toolbar frame before the table when a search feature is enabled.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$"
		},
		sourcePath: null,
		templateKey: "searchToolbar",
		func: null,
		skipIf: "$..*[?@.attributes['data-role'] == 'search-toolbar']"
	}],
	searchLabel: [{
		narration: "Insert the search label into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-label-slot']"
		},
		sourcePath: null,
		templateKey: "searchLabel",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'table-title']"
	}],
	searchHelper: [{
		narration: "Insert the search helper text into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-helper-slot']"
		},
		sourcePath: null,
		templateKey: "searchHelper",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'search-feedback']"
	}],
	searchInput: [{
		narration: "Insert the search input into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-input-slot']"
		},
		sourcePath: null,
		templateKey: "searchInput",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'tableSearch']"
	}],
	serialRoot: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	serialChild: [{
		narration: "Prepend the serial number cell into each table body row.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshiftSerialToRows",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		sourcePath: null,
		templateKey: "buildBodyCell",
		func: null
	}],
	optionsShowButton: [
		{
			narration: "Append the options column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForOption",
			func: null
		},
		{
			narration: "Append the options header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForOption",
			func: null
		},
		{
			narration: "Append the options button cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsButtonCell",
			func: null
		},
		{
			narration: "Append the options footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "tdWithButtonSaveWarning",
			func: null
		}
	],
	optionsEditButton: [
		{
			narration: "Append edit column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForEditOption",
			func: null
		},
		{
			narration: "Append edit header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForEditOption",
			func: null
		},
		{
			narration: "Append edit button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsEditButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the edit action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	optionsDeleteButton: [
		{
			narration: "Append delete column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForDeleteOption",
			func: null
		},
		{
			narration: "Append delete header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForDeleteOption",
			func: null
		},
		{
			narration: "Append delete button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsDeleteButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the delete action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	buildAccordionItems: {
		type: "single",
		narration: "Build accordion items from array",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildAccordionItem",
		func: "fromCollection"
	},
	buildCardBody: {
		type: "single",
		narration: "Build card body content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-body']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardBodyTemplate",
		func: "applyTemplate"
	},
	buildCardHeader: {
		type: "single",
		narration: "Build card header content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-header']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardHeaderTemplate",
		func: "applyTemplate"
	},
	buildCardFooter: {
		type: "single",
		narration: "Build card footer content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-footer']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardFooterTemplate",
		func: "applyTemplate"
	},
	buildListItems: {
		type: "single",
		narration: "Build simple list items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListItemTemplate",
		func: "fromCollection"
	},
	buildListGroupItems: {
		type: "single",
		narration: "Build list-group items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListGroupItemTemplate",
		func: "fromCollection"
	},
	buildMenuItems: {
		type: "single",
		narration: "Build navigation menu items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuItemTemplate",
		func: "fromCollection"
	},
	buildMenuCards: {
		type: "single",
		narration: "Build menu cards grid",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuCardItemTemplate",
		func: "fromCollection"
	}
}, Cn = (e) => Array.isArray(e) ? e : [e], wn = (e, t, n) => {
	e[t] = n;
}, Tn = {
	set: wn,
	push: (e, t, n) => {
		e[t].push(...Cn(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...Cn(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(Cn(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(Cn(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, En = Object.defineProperty, Dn = Object.getOwnPropertySymbols, On = Object.prototype.hasOwnProperty, kn = Object.prototype.propertyIsEnumerable, An = Math.pow, jn = (e, t, n) => t in e ? En(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Mn = (e, t) => {
	for (var n in t ||= {}) On.call(t, n) && jn(e, n, t[n]);
	if (Dn) for (var n of Dn(t)) kn.call(t, n) && jn(e, n, t[n]);
	return e;
}, Nn = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, Pn = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, A = () => void 0, Fn = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = M(e);
		return r === M(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = Bn(e), a = Bn(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, In = (e, t, n = A) => {
	let r = [];
	if (!Fn(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!Fn(Ln(e.x, t), Ln(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !j(o, i) || !j(a, i)) return !1;
			let s = a[i];
			if (!j(o, i) || !Fn(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, j = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Ln = (e, t) => j(e, t) ? e[t] : void 0, Rn = 16383, zn = 1e3, Bn = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > zn) throw new Pn(`Member name too long (maximum ${zn} characters)`);
	return t;
}, M = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, Vn = (e) => e instanceof RangeError && /call stack/i.test(e.message), N = (e) => Array.isArray(e), Hn = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), P = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, Un = (e) => typeof e == "number", F = (e) => typeof e == "string", Wn = (e) => e === void 0, I = (e) => e !== void 0;
function Gn(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function Kn(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function qn(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var Jn = class extends SyntaxError {
	constructor(e, t, n, r) {
		super(e), this.expected = t, this.found = n, this.location = r, this.name = "SyntaxError";
	}
	format(e) {
		let t = "Error: " + this.message;
		if (this.location) {
			let n = null, r = e.find((e) => e.source === this.location.source);
			r && (n = r.text.split(/\r\n|\n|\r/g));
			let i = this.location.start, a = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(i) : i, o = this.location.source + ":" + a.line + ":" + a.column;
			if (n) {
				let e = this.location.end, r = "".padEnd(a.line.toString().length, " "), s = n[i.line - 1], c = (i.line === e.line ? e.column : s.length + 1) - i.column || 1;
				t += "\n --> " + o + "\n" + r + " |\n" + a.line + " | " + s + "\n" + r + " | " + "".padEnd(i.column - 1, " ") + "".padEnd(c, "^");
			} else t += "\n at " + o;
		}
		return t;
	}
	static buildMessage(e, t) {
		function n(e) {
			return e.codePointAt(0).toString(16).toUpperCase();
		}
		let r = Object.prototype.hasOwnProperty.call(RegExp.prototype, "unicode") ? /* @__PURE__ */ RegExp("[\\p{C}\\p{Mn}\\p{Mc}]", "gu") : null;
		function i(e) {
			return r ? e.replace(r, (e) => "\\u{" + n(e) + "}") : e;
		}
		function a(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		function o(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		let s = {
			literal(e) {
				return "\"" + a(e.text) + "\"";
			},
			class(e) {
				let t = e.parts.map((e) => Array.isArray(e) ? o(e[0]) + "-" + o(e[1]) : o(e));
				return "[" + (e.inverted ? "^" : "") + t.join("") + "]" + (e.unicode ? "u" : "");
			},
			any() {
				return "any character";
			},
			end() {
				return "end of input";
			},
			other(e) {
				return e.description;
			}
		};
		function c(e) {
			return s[e.type](e);
		}
		function l(e) {
			let t = e.map(c);
			if (t.sort(), t.length > 0) {
				let e = 1;
				for (let n = 1; n < t.length; n++) t[n - 1] !== t[n] && (t[e] = t[n], e++);
				t.length = e;
			}
			switch (t.length) {
				case 1: return t[0];
				case 2: return t[0] + " or " + t[1];
				default: return t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
			}
		}
		function u(e) {
			return e ? "\"" + a(e) + "\"" : "end of input";
		}
		return "Expected " + l(e) + " but " + u(t) + " found.";
	}
};
function Yn(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: Vr }, a = Vr, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", g = "false", _ = "null", ne = /^[,\]]/, v = /^[+\-]/, y = /^[*\/]/, re = /^[a-zA-Z_]/, ie = /^[\x80-\uFFFF_]/, ae = /^[a-zA-Z0-9_]/, oe = /^[0-9@$\-]/, se = /^[^\/\\]/, ce = /^[gimsuy]/, le = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, ue = /^[\uD800-\uDBFF]/, de = /^[\uDC00-\uDFFF]/, b = /^[0-9]/, fe = /^[1-9]/, x = /^[eE]/, pe = /^["\\]/, me = /^['\\]/, S = /^[ -\uD7FF\uE000-\uFFFF]/, he = /^[dD]/, ge = /^[89abAB]/, _e = /^[c-fC-F]/, ve = /^[0-9a-fA-F]/, C = /^[ \t\n\r]/, ye = G([",", "]"], !1, !1, !1), w = W("length", !1), be = W("count", !1), T = W("match", !1), xe = W("search", !1), E = W("value", !1), Se = G(["+", "-"], !1, !1, !1), D = G(["*", "/"], !1, !1, !1), Ce = Ir("string"), we = G([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), Te = G([["", "￿"], "_"], !1, !1, !1), Ee = G([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), De = W("-", !1), Oe = G([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), ke = W("$", !1), Ae = W("@", !1), je = W("..", !1), Me = W(".", !1), Ne = W("*", !1), Pe = W("&&", !1), Fe = W("||", !1), Ie = W("!", !1), Le = W("==", !1), Re = W("!=", !1), ze = W(">=", !1), Be = W(">", !1), Ve = W("<=", !1), He = W("<", !1), Ue = W("=~", !1), We = W("in", !1), Ge = W("nin", !1), Ke = W("subsetof", !1), qe = W("anyof", !1), Je = W("noneof", !1), Ye = W("sizeof", !1), Xe = W("size", !1), Ze = W("empty", !1), O = W("true", !1), Qe = W("false", !1), $e = W("null", !1), et = W("{", !1), tt = W("}", !1), nt = W("[", !1), rt = W("]", !1), it = W(":", !1), at = W(",", !1), ot = W("(", !1), st = W(")", !1), ct = W("?", !1), lt = Ir("regex"), ut = W("/", !1), dt = G(["/", "\\"], !0, !1, !1), ft = W("\\", !1), pt = Pr(), mt = G([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), ht = G([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), gt = G([["\ud800", "\udbff"]], !1, !1, !1), _t = G([["\udc00", "\udfff"]], !1, !1, !1), k = G([["0", "9"]], !1, !1, !1), vt = Ir("number"), yt = W("0", !1), bt = G([["1", "9"]], !1, !1, !1), xt = Ir("integer"), St = G(["e", "E"], !1, !1, !1), Ct = W("\"", !1), wt = W("'", !1), Tt = G(["\"", "\\"], !1, !1, !1), Et = G(["'", "\\"], !1, !1, !1), Dt = G([[" ", "퟿"], ["", "￿"]], !1, !1, !1), Ot = W("b", !1), kt = W("f", !1), At = W("n", !1), jt = W("r", !1), Mt = W("t", !1), Nt = W("u", !1), Pt = G(["d", "D"], !1, !1, !1), Ft = G([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), It = W("\\u", !1), Lt = G([["c", "f"], ["C", "F"]], !1, !1, !1), Rt = G([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), zt = G([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function Bt(e) {
		return {
			type: "root",
			next: Gn(e)
		};
	}
	function Vt(e) {
		return e.map((e) => e[1]);
	}
	function Ht(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function Ut(e) {
		return e;
	}
	function Wt(e) {
		return {
			type: "dotdot",
			value: e
		};
	}
	function Gt() {
		return { type: "wildcard" };
	}
	function Kt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function qt() {
		return { type: "wildcard" };
	}
	function Jt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Yt(e) {
		return e;
	}
	function Xt(e) {
		return e;
	}
	function Zt(e, t) {
		return t.length > 0 ? {
			type: "bracketExpression",
			value: {
				type: "unions",
				values: [e, ...t.map((e) => e[3])]
			}
		} : {
			type: e.type === "numericLiteral" || e.type === "stringLiteral" || e.type === "identifier" ? "bracketMember" : "bracketExpression",
			value: e
		};
	}
	function Qt(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function $t(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function en(e, t) {
		return qn(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function tn(e, t) {
		return qn(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function nn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function rn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function an(e, t) {
		return t !== null || Kn(e);
	}
	function on(e, t) {
		if (t === null) return e;
		let n = t[1];
		return n.operator === "reg" ? {
			type: "comparator",
			operator: "reg",
			left: e,
			right: n.right
		} : n.operator === "empty" ? {
			type: "comparator",
			operator: "empty",
			left: e,
			right: null
		} : {
			type: "comparator",
			operator: n.operator,
			left: e,
			right: n.right
		};
	}
	function sn(e, t) {
		return {
			operator: e,
			right: t
		};
	}
	function cn(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function ln() {
		return { operator: "empty" };
	}
	function un() {
		return "eq";
	}
	function dn() {
		return "ne";
	}
	function fn() {
		return "le";
	}
	function pn() {
		return "lt";
	}
	function mn() {
		return "ge";
	}
	function hn() {
		return "gt";
	}
	function gn() {
		return "in";
	}
	function _n() {
		return "nin";
	}
	function vn() {
		return "subsetof";
	}
	function yn() {
		return "anyof";
	}
	function bn() {
		return "noneof";
	}
	function xn() {
		return "sizeof";
	}
	function Sn() {
		return "size";
	}
	function Cn(e) {
		return {
			type: "groupExpression",
			value: e
		};
	}
	function wn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Tn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function En() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function Dn(e, t) {
		return {
			type: "functionCall",
			name: e,
			args: t || []
		};
	}
	function On() {
		return "length";
	}
	function kn() {
		return "count";
	}
	function An() {
		return "match";
	}
	function jn() {
		return "search";
	}
	function Mn() {
		return "value";
	}
	function Nn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function Pn(e, t) {
		return t.length === 0 ? e : qn(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function A(e, t) {
		return t.length === 0 ? e : qn(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "*" ? "multi" : "div",
			left: e,
			right: t[3]
		}));
	}
	function Fn(e) {
		return {
			type: "groupOperation",
			value: e
		};
	}
	function In(e) {
		return {
			type: "root",
			next: Gn(e)
		};
	}
	function j(e) {
		return {
			type: "current",
			next: Gn(e)
		};
	}
	function Ln(e, t, n) {
		return {
			type: "slices",
			start: e === null ? null : e[0],
			end: t === null ? null : t[0],
			step: n ? n[2] === null ? null : n[2] : null
		};
	}
	function Rn() {
		return { type: "wildcard" };
	}
	function zn(e) {
		return {
			type: "numericLiteral",
			value: e
		};
	}
	function Bn(e) {
		return {
			type: "stringLiteral",
			value: _a(e)
		};
	}
	function M(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Vn(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function N(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function Hn(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function P() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Un() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function F() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function Wn(e) {
		return e;
	}
	function I(e) {
		for (let [t] of e || []) _a(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function Yn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function Xn(e, t) {
		return [e, t.value];
	}
	function Zn(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function Qn(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function $n(e) {
		return _a(e);
	}
	function er(e) {
		return _a(e);
	}
	function tr() {
		return "true";
	}
	function nr() {
		return "false";
	}
	function rr() {
		return "null";
	}
	function ir(e) {
		return _a(e);
	}
	function ar() {
		return "true";
	}
	function or() {
		return "false";
	}
	function sr() {
		return "null";
	}
	function cr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function lr(e) {
		return e.join("");
	}
	function ur(e, t) {
		let n = parseFloat(jr());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && Mr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function dr() {
		let e = parseInt(jr(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && Mr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function fr(e) {
		return e.join("");
	}
	function pr(e) {
		return e.join("");
	}
	function mr(e) {
		return e;
	}
	function hr() {
		return "\"";
	}
	function gr(e) {
		return e;
	}
	function _r(e) {
		return e;
	}
	function vr() {
		return "'";
	}
	function yr(e) {
		return e;
	}
	function L() {
		return "\\";
	}
	function br() {
		return "/";
	}
	function xr() {
		return "\b";
	}
	function Sr() {
		return "\f";
	}
	function Cr() {
		return "\n";
	}
	function wr() {
		return "\r";
	}
	function Tr() {
		return "	";
	}
	function Er(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function Dr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function Or(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let R = t.peg$currPos | 0, z = R, B = [{
		line: 1,
		column: 1
	}], V = R, kr = t.peg$maxFailExpected || [], H = t.peg$silentFails | 0, Ar = /* @__PURE__ */ new Map(), U;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function jr() {
		return e.substring(z, R);
	}
	function Mr(e, t) {
		throw t = t === void 0 ? Rr(z, R) : t, zr(e, t);
	}
	function Nr(t = R) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function W(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function G(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function Pr() {
		return { type: "any" };
	}
	function Fr() {
		return { type: "end" };
	}
	function Ir(e) {
		return {
			type: "other",
			description: e
		};
	}
	function Lr(t) {
		let n = B[t], r;
		if (n) return n;
		if (t >= B.length) r = B.length - 1;
		else for (r = t; !B[--r];);
		for (n = B[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return B[t] = n, n;
	}
	function Rr(e, t, n) {
		let i = Lr(e), a = Lr(t), o = {
			source: r,
			start: {
				offset: e,
				line: i.line,
				column: i.column
			},
			end: {
				offset: t,
				line: a.line,
				column: a.column
			}
		};
		return n && r && typeof r.offset == "function" && (o.start = r.offset(o.start), o.end = r.offset(o.end)), o;
	}
	function K(e) {
		R < V || (R > V && (V = R, kr = []), kr.push(e));
	}
	function zr(e, t) {
		return new Jn(e, null, null, t);
	}
	function Br(e, t, n) {
		return new Jn(Jn.buildMessage(e, t), e, t, n);
	}
	function Vr() {
		let e, t, r, i;
		return e = R, t = Si(), t === n ? (R = e, e = n) : (r = Hr(), i = ga(), i === n ? (R = e, e = n) : (z = e, e = Bt(r))), e;
	}
	function Hr() {
		let e, t, r, i, a;
		for (e = R, t = [], r = R, i = $(), a = Ur(), a === n ? (R = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = R, i = $(), a = Ur(), a === n ? (R = r, r = n) : (i = [i, a], r = i);
		return z = e, t = Vt(t), e = t, e;
	}
	function Ur() {
		let e;
		return e = Gr(), e === n && (e = Wr()), e;
	}
	function Wr() {
		let e, t, r;
		return e = R, t = Ti(), t === n ? (R = e, e = n) : (r = Kr(), r === n ? (R = e, e = n) : (z = e, e = Ht(r))), e === n && (e = R, t = Jr(), t !== n && (z = e, t = Ut(t)), e = t), e;
	}
	function Gr() {
		let e, t, r;
		return e = R, t = wi(), t === n ? (R = e, e = n) : (r = qr(), r === n ? (R = e, e = n) : (z = e, e = Wt(r))), e;
	}
	function Kr() {
		let e, t;
		return e = R, t = Ei(), t !== n && (z = e, t = Gt()), e = t, e === n && (e = R, t = xi(), t !== n && (z = e, t = Kt(t)), e = t), e;
	}
	function qr() {
		let e, t;
		return e = R, t = Ei(), t !== n && (z = e, t = qt()), e = t, e === n && (e = R, t = xi(), t !== n && (z = e, t = Jt(t)), e = t, e === n && (e = R, t = Jr(), t !== n && (z = e, t = Yt(t)), e = t)), e;
	}
	function Jr() {
		let e, t, r, i;
		return e = R, t = Xi(), t === n ? (R = e, e = n) : ($(), r = Yr(), r === n ? (R = e, e = n) : ($(), i = Zi(), i === n ? (R = e, e = n) : (z = e, e = Xt(r)))), e;
	}
	function Yr() {
		let e, t, r, i, a, o, s, c;
		if (e = R, t = J(), t !== n) {
			for (r = [], i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = J(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = J(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = Zt(t, r);
		} else R = e, e = n;
		return e;
	}
	function Xr() {
		let t, r, i, a, o, s, c, l, u;
		return t = R, r = ta(), r === n ? (R = t, t = n) : ($(), i = $i(), i === n ? (R = t, t = n) : ($(), a = Zr(), a === n ? (R = t, t = n) : ($(), o = ea(), o === n ? (R = t, t = n) : (s = R, H++, c = R, l = $(), u = e.charAt(R), ne.test(u) ? R++ : (u = n, H === 0 && K(ye)), u === n ? (R = c, c = n) : (l = [l, u], c = l), H--, c === n ? s = n : (R = s, s = void 0), s === n ? (R = t, t = n) : (z = t, t = Qt(a)))))), t === n && (t = R, r = ta(), r === n ? (R = t, t = n) : ($(), i = Zr(), i === n ? (R = t, t = n) : (z = t, t = $t(i)))), t;
	}
	function Zr() {
		let e, t, r, i, a, o, s, c, l = R * 91 + 10, u = Ar.get(l);
		if (u) return R = u.nextPos, u.result;
		if (e = R, t = Qr(), t !== n) {
			for (r = [], i = R, a = $(), o = Oi(), o === n ? (R = i, i = n) : (s = $(), c = Qr(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = Oi(), o === n ? (R = i, i = n) : (s = $(), c = Qr(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = en(t, r);
		} else R = e, e = n;
		return Ar.set(l, {
			nextPos: R,
			result: e
		}), e;
	}
	function Qr() {
		let e, t, r, i, a, o, s, c;
		if (e = R, t = $r(), t !== n) {
			for (r = [], i = R, a = $(), o = Di(), o === n ? (R = i, i = n) : (s = $(), c = $r(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = Di(), o === n ? (R = i, i = n) : (s = $(), c = $r(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = tn(t, r);
		} else R = e, e = n;
		return e;
	}
	function $r() {
		let e, t, r, i, a;
		return e = R, t = ki(), t === n ? (R = e, e = n) : ($(), r = $i(), r === n ? (R = e, e = n) : ($(), i = Zr(), i === n ? (R = e, e = n) : ($(), a = ea(), a === n ? (R = e, e = n) : (z = e, e = nn(i))))), e === n && (e = R, t = ki(), t === n ? (R = e, e = n) : ($(), r = ri(), r === n ? (R = e, e = n) : (z = e, e = rn(r))), e === n && (e = ei())), e;
	}
	function ei() {
		let e, t, r, i, a;
		return e = R, t = ci(), t === n ? (R = e, e = n) : (r = R, i = $(), a = ti(), a === n ? (R = r, r = n) : (i = [i, a], r = i), r === n && (r = null), z = R, i = an(t, r), i = i ? void 0 : n, i === n ? (R = e, e = n) : (z = e, e = on(t, r))), e === n && (e = ri()), e;
	}
	function ti() {
		let e, t, r;
		return e = R, t = ni(), t === n ? (R = e, e = n) : ($(), r = ci(), r === n ? (R = e, e = n) : (z = e, e = sn(t, r))), e === n && (e = R, t = Ii(), t === n ? (R = e, e = n) : ($(), r = fi(), r === n ? (R = e, e = n) : (z = e, e = cn(r))), e === n && (e = R, t = Wi(), t !== n && (z = e, t = ln()), e = t)), e;
	}
	function ni() {
		let e, t;
		return e = R, t = Ai(), t !== n && (z = e, t = un()), e = t, e === n && (e = R, t = ji(), t !== n && (z = e, t = dn()), e = t, e === n && (e = R, t = Pi(), t !== n && (z = e, t = fn()), e = t, e === n && (e = R, t = Fi(), t !== n && (z = e, t = pn()), e = t, e === n && (e = R, t = Mi(), t !== n && (z = e, t = mn()), e = t, e === n && (e = R, t = Ni(), t !== n && (z = e, t = hn()), e = t, e === n && (e = R, t = Li(), t !== n && (z = e, t = gn()), e = t, e === n && (e = R, t = Ri(), t !== n && (z = e, t = _n()), e = t, e === n && (e = R, t = zi(), t !== n && (z = e, t = vn()), e = t, e === n && (e = R, t = Bi(), t !== n && (z = e, t = yn()), e = t, e === n && (e = R, t = Vi(), t !== n && (z = e, t = bn()), e = t, e === n && (e = R, t = Hi(), t !== n && (z = e, t = xn()), e = t, e === n && (e = R, t = Ui(), t !== n && (z = e, t = Sn()), e = t)))))))))))), e;
	}
	function ri() {
		let e, t, r, i;
		return e = R, t = $i(), t === n ? (R = e, e = n) : ($(), r = Zr(), r === n ? (R = e, e = n) : ($(), i = ea(), i === n ? (R = e, e = n) : (z = e, e = Cn(r)))), e === n && (e = ii(), e === n && (e = ui(), e === n && (e = R, t = Gi(), t !== n && (z = e, t = wn()), e = t, e === n && (e = R, t = Ki(), t !== n && (z = e, t = Tn()), e = t, e === n && (e = R, t = qi(), t !== n && (z = e, t = En()), e = t))))), e;
	}
	function ii() {
		let e, t, r, i, a;
		return e = R, t = ai(), t === n ? (R = e, e = n) : (r = $i(), r === n ? (R = e, e = n) : ($(), i = oi(), i === n && (i = null), $(), a = ea(), a === n ? (R = e, e = n) : (z = e, e = Dn(t, i)))), e;
	}
	function ai() {
		let t, r;
		return t = R, e.substr(R, 6) === o ? (r = o, R += 6) : (r = n, H === 0 && K(w)), r !== n && (z = t, r = On()), t = r, t === n && (t = R, e.substr(R, 5) === s ? (r = s, R += 5) : (r = n, H === 0 && K(be)), r !== n && (z = t, r = kn()), t = r, t === n && (t = R, e.substr(R, 5) === c ? (r = c, R += 5) : (r = n, H === 0 && K(T)), r !== n && (z = t, r = An()), t = r, t === n && (t = R, e.substr(R, 6) === l ? (r = l, R += 6) : (r = n, H === 0 && K(xe)), r !== n && (z = t, r = jn()), t = r, t === n && (t = R, e.substr(R, 5) === u ? (r = u, R += 5) : (r = n, H === 0 && K(E)), r !== n && (z = t, r = Mn()), t = r)))), t;
	}
	function oi() {
		let e, t, r, i, a, o, s, c;
		if (e = R, t = si(), t !== n) {
			for (r = [], i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = si(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = si(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = Nn(t, r);
		} else R = e, e = n;
		return e;
	}
	function si() {
		let e;
		return e = ci(), e === n && (e = pi()), e;
	}
	function ci() {
		let t, r, i, a, o, s, c, l, u = R * 91 + 21, d = Ar.get(u);
		if (d) return R = d.nextPos, d.result;
		if (t = R, r = li(), r !== n) {
			for (i = [], a = R, o = $(), s = e.charAt(R), v.test(s) ? R++ : (s = n, H === 0 && K(Se)), s === n ? (R = a, a = n) : (c = $(), l = li(), l === n ? (R = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = R, o = $(), s = e.charAt(R), v.test(s) ? R++ : (s = n, H === 0 && K(Se)), s === n ? (R = a, a = n) : (c = $(), l = li(), l === n ? (R = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			z = t, t = Pn(r, i);
		} else R = t, t = n;
		return Ar.set(u, {
			nextPos: R,
			result: t
		}), t;
	}
	function li() {
		let t, r, i, a, o, s, c, l;
		if (t = R, r = q(), r !== n) {
			for (i = [], a = R, o = $(), s = e.charAt(R), y.test(s) ? R++ : (s = n, H === 0 && K(D)), s === n ? (R = a, a = n) : (c = $(), l = q(), l === n ? (R = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = R, o = $(), s = e.charAt(R), y.test(s) ? R++ : (s = n, H === 0 && K(D)), s === n ? (R = a, a = n) : (c = $(), l = q(), l === n ? (R = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			z = t, t = A(r, i);
		} else R = t, t = n;
		return t;
	}
	function q() {
		let e, t, r, i;
		return e = R, t = $i(), t === n ? (R = e, e = n) : ($(), r = ci(), r === n ? (R = e, e = n) : ($(), i = ea(), i === n ? (R = e, e = n) : (z = e, e = Fn(r)))), e === n && (e = ii(), e === n && (e = Y(), e === n && (e = ui()))), e;
	}
	function ui() {
		let e, t, r;
		return e = R, t = Si(), t === n ? (R = e, e = n) : (r = Hr(), r === n ? (R = e, e = n) : (z = e, e = In(r))), e === n && (e = R, t = Ci(), t === n ? (R = e, e = n) : (r = Hr(), r === n ? (R = e, e = n) : (z = e, e = j(r)))), e;
	}
	function di() {
		let e, t, r, i, a, o, s, c, l;
		return e = R, t = R, r = la(), r === n ? (R = t, t = n) : (i = $(), r = [r, i], t = r), t === n && (t = null), r = Qi(), r === n ? (R = e, e = n) : (i = $(), a = R, o = la(), o === n ? (R = a, a = n) : (s = $(), o = [o, s], a = o), a === n && (a = null), o = R, s = Qi(), s === n ? (R = o, o = n) : (c = $(), l = la(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), z = e, e = Ln(t, a, o)), e;
	}
	function J() {
		let e, t;
		return e = Xr(), e === n && (e = di(), e === n && (e = R, t = Ei(), t !== n && (z = e, t = Rn()), e = t, e === n && (e = R, t = la(), t !== n && (z = e, t = zn(t)), e = t, e === n && (e = R, t = da(), t !== n && (z = e, t = Bn(t)), e = t, e === n && (e = R, t = yi(), t !== n && (z = e, t = M(t)), e = t))))), e;
	}
	function fi() {
		let e, t, r;
		return e = R, t = na(), t === n ? (R = e, e = n) : (r = ra(), z = e, e = Vn(t, r)), e;
	}
	function Y() {
		let e, t;
		return e = R, t = pi(), t !== n && (z = e, t = N(t)), e = t, e === n && (e = R, t = sa(), t !== n && (z = e, t = Hn(t)), e = t, e === n && (e = mi(), e === n && (e = _i(), e === n && (e = R, t = Gi(), t !== n && (z = e, t = P()), e = t, e === n && (e = R, t = Ki(), t !== n && (z = e, t = Un()), e = t, e === n && (e = R, t = qi(), t !== n && (z = e, t = F()), e = t)))))), e;
	}
	function pi() {
		let e, t;
		return H++, e = R, t = da(), t !== n && (z = e, t = Wn(t)), e = t, H--, e === n && (t = n, H === 0 && K(Ce)), e;
	}
	function mi() {
		let e, t, r, i;
		return e = R, t = Ji(), t === n ? (R = e, e = n) : ($(), r = hi(), r === n && (r = null), $(), i = Yi(), i === n ? (R = e, e = n) : (z = e, e = I(r))), e;
	}
	function hi() {
		let e, t, r, i, a, o, s, c;
		if (e = R, t = gi(), t !== n) {
			for (r = [], i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = gi(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = gi(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = Yn(t, r);
		} else R = e, e = n;
		return e;
	}
	function gi() {
		let e, t, r, i;
		return e = R, t = da(), t === n ? (R = e, e = n) : ($(), r = Qi(), r === n ? (R = e, e = n) : ($(), i = Y(), i === n ? (R = e, e = n) : (z = e, e = Xn(t, i)))), e;
	}
	function _i() {
		let e, t, r, i;
		return e = R, t = Xi(), t === n ? (R = e, e = n) : ($(), r = vi(), r === n && (r = null), $(), i = Zi(), i === n ? (R = e, e = n) : (z = e, e = Zn(r))), e;
	}
	function vi() {
		let e, t, r, i, a, o, s, c;
		if (e = R, t = Y(), t !== n) {
			for (r = [], i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = Y(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = R, a = $(), o = X(), o === n ? (R = i, i = n) : (s = $(), c = Y(), c === n ? (R = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			z = e, e = Qn(t, r);
		} else R = e, e = n;
		return e;
	}
	function yi() {
		let t, r, i, a, o, s;
		if (t = R, r = R, i = R, a = e.charAt(R), re.test(a) ? R++ : (a = n, H === 0 && K(we)), a !== n) {
			for (o = [], s = bi(); s !== n;) o.push(s), s = bi();
			a = [a, o], i = a;
		} else R = i, i = n;
		if (r = i === n ? i : e.substring(r, R), r !== n && (z = t, r = $n(r)), t = r, t === n) {
			if (t = R, r = R, i = [], a = e.charAt(R), ie.test(a) ? R++ : (a = n, H === 0 && K(Te)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(R), ie.test(a) ? R++ : (a = n, H === 0 && K(Te));
			else i = n;
			r = i === n ? i : e.substring(r, R), r !== n && (z = t, r = er(r)), t = r, t === n && (t = R, r = Gi(), r !== n && (z = t, r = tr()), t = r, t === n && (t = R, r = Ki(), r !== n && (z = t, r = nr()), t = r, t === n && (t = R, r = qi(), r !== n && (z = t, r = rr()), t = r)));
		}
		return t;
	}
	function bi() {
		let t, r, i, a;
		return t = e.charAt(R), ae.test(t) ? R++ : (t = n, H === 0 && K(Ee)), t === n && (t = R, e.charCodeAt(R) === 45 ? (r = "-", R++) : (r = n, H === 0 && K(De)), r === n ? (R = t, t = n) : (i = R, H++, a = e.charAt(R), oe.test(a) ? R++ : (a = n, H === 0 && K(Oe)), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r))), t;
	}
	function xi() {
		let e, t;
		return e = R, t = ia(), t !== n && (z = e, t = ir(t)), e = t, e === n && (e = R, t = Gi(), t !== n && (z = e, t = ar()), e = t, e === n && (e = R, t = Ki(), t !== n && (z = e, t = or()), e = t, e === n && (e = R, t = qi(), t !== n && (z = e, t = sr()), e = t))), e;
	}
	function Si() {
		let t;
		return e.charCodeAt(R) === 36 ? (t = "$", R++) : (t = n, H === 0 && K(ke)), t;
	}
	function Ci() {
		let t;
		return e.charCodeAt(R) === 64 ? (t = "@", R++) : (t = n, H === 0 && K(Ae)), t;
	}
	function wi() {
		let t;
		return e.substr(R, 2) === ".." ? (t = "..", R += 2) : (t = n, H === 0 && K(je)), t;
	}
	function Ti() {
		let t;
		return e.charCodeAt(R) === 46 ? (t = ".", R++) : (t = n, H === 0 && K(Me)), t;
	}
	function Ei() {
		let t;
		return e.charCodeAt(R) === 42 ? (t = "*", R++) : (t = n, H === 0 && K(Ne)), t;
	}
	function Di() {
		let t;
		return e.substr(R, 2) === "&&" ? (t = "&&", R += 2) : (t = n, H === 0 && K(Pe)), t;
	}
	function Oi() {
		let t;
		return e.substr(R, 2) === "||" ? (t = "||", R += 2) : (t = n, H === 0 && K(Fe)), t;
	}
	function ki() {
		let t;
		return e.charCodeAt(R) === 33 ? (t = "!", R++) : (t = n, H === 0 && K(Ie)), t;
	}
	function Ai() {
		let t;
		return e.substr(R, 2) === "==" ? (t = "==", R += 2) : (t = n, H === 0 && K(Le)), t;
	}
	function ji() {
		let t;
		return e.substr(R, 2) === "!=" ? (t = "!=", R += 2) : (t = n, H === 0 && K(Re)), t;
	}
	function Mi() {
		let t;
		return e.substr(R, 2) === ">=" ? (t = ">=", R += 2) : (t = n, H === 0 && K(ze)), t;
	}
	function Ni() {
		let t;
		return e.charCodeAt(R) === 62 ? (t = ">", R++) : (t = n, H === 0 && K(Be)), t;
	}
	function Pi() {
		let t;
		return e.substr(R, 2) === "<=" ? (t = "<=", R += 2) : (t = n, H === 0 && K(Ve)), t;
	}
	function Fi() {
		let t;
		return e.charCodeAt(R) === 60 ? (t = "<", R++) : (t = n, H === 0 && K(He)), t;
	}
	function Ii() {
		let t;
		return e.substr(R, 2) === "=~" ? (t = "=~", R += 2) : (t = n, H === 0 && K(Ue)), t;
	}
	function Li() {
		let t, r, i, a;
		return t = R, e.substr(R, 2) === "in" ? (r = "in", R += 2) : (r = n, H === 0 && K(We)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ri() {
		let t, r, i, a;
		return t = R, e.substr(R, 3) === "nin" ? (r = "nin", R += 3) : (r = n, H === 0 && K(Ge)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function zi() {
		let t, r, i, a;
		return t = R, e.substr(R, 8) === d ? (r = d, R += 8) : (r = n, H === 0 && K(Ke)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Bi() {
		let t, r, i, a;
		return t = R, e.substr(R, 5) === f ? (r = f, R += 5) : (r = n, H === 0 && K(qe)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = R, e.substr(R, 6) === p ? (r = p, R += 6) : (r = n, H === 0 && K(Je)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = R, e.substr(R, 6) === m ? (r = m, R += 6) : (r = n, H === 0 && K(Ye)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = R, e.substr(R, 4) === ee ? (r = ee, R += 4) : (r = n, H === 0 && K(Xe)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = R, e.substr(R, 5) === h ? (r = h, R += 5) : (r = n, H === 0 && K(Ze)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = R, e.substr(R, 4) === te ? (r = te, R += 4) : (r = n, H === 0 && K(O)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = R, e.substr(R, 5) === g ? (r = g, R += 5) : (r = n, H === 0 && K(Qe)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = R, e.substr(R, 4) === _ ? (r = _, R += 4) : (r = n, H === 0 && K($e)), r === n ? (R = t, t = n) : (i = R, H++, a = Q(), H--, a === n ? i = void 0 : (R = i, i = n), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t;
		return e.charCodeAt(R) === 123 ? (t = "{", R++) : (t = n, H === 0 && K(et)), t;
	}
	function Yi() {
		let t;
		return e.charCodeAt(R) === 125 ? (t = "}", R++) : (t = n, H === 0 && K(tt)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(R) === 91 ? (t = "[", R++) : (t = n, H === 0 && K(nt)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(R) === 93 ? (t = "]", R++) : (t = n, H === 0 && K(rt)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(R) === 58 ? (t = ":", R++) : (t = n, H === 0 && K(it)), t;
	}
	function X() {
		let t;
		return e.charCodeAt(R) === 44 ? (t = ",", R++) : (t = n, H === 0 && K(at)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(R) === 40 ? (t = "(", R++) : (t = n, H === 0 && K(ot)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(R) === 41 ? (t = ")", R++) : (t = n, H === 0 && K(st)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(R) === 63 ? (t = "?", R++) : (t = n, H === 0 && K(ct)), t;
	}
	function na() {
		let t, r, i, a, o, s;
		if (H++, t = R, e.charCodeAt(R) === 47 ? (r = "/", R++) : (r = n, H === 0 && K(ut)), r !== n) {
			for (i = [], a = e.charAt(R), se.test(a) ? R++ : (a = n, H === 0 && K(dt)), a === n && (a = R, e.charCodeAt(R) === 92 ? (o = "\\", R++) : (o = n, H === 0 && K(ft)), o === n ? (R = a, a = n) : (e.length > R ? (s = e.charAt(R), R++) : (s = n, H === 0 && K(pt)), s === n ? (R = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(R), se.test(a) ? R++ : (a = n, H === 0 && K(dt)), a === n && (a = R, e.charCodeAt(R) === 92 ? (o = "\\", R++) : (o = n, H === 0 && K(ft)), o === n ? (R = a, a = n) : (e.length > R ? (s = e.charAt(R), R++) : (s = n, H === 0 && K(pt)), s === n ? (R = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(R) === 47 ? (a = "/", R++) : (a = n, H === 0 && K(ut)), a === n ? (R = t, t = n) : (z = t, t = cr(i));
		} else R = t, t = n;
		return H--, t === n && (r = n, H === 0 && K(lt)), t;
	}
	function ra() {
		let t, r, i;
		for (t = R, r = [], i = e.charAt(R), ce.test(i) ? R++ : (i = n, H === 0 && K(mt)); i !== n;) r.push(i), i = e.charAt(R), ce.test(i) ? R++ : (i = n, H === 0 && K(mt));
		return z = t, r = lr(r), t = r, t;
	}
	function ia() {
		let t, r, i, a, o;
		if (t = R, r = R, i = aa(), i !== n) {
			for (a = [], o = oa(); o !== n;) a.push(o), o = oa();
			i = [i, a], r = i;
		} else R = r, r = n;
		return t = r === n ? r : e.substring(t, R), t;
	}
	function aa() {
		let t, r, i;
		return t = e.charAt(R), le.test(t) ? R++ : (t = n, H === 0 && K(ht)), t === n && (t = R, r = e.charAt(R), ue.test(r) ? R++ : (r = n, H === 0 && K(gt)), r === n ? (R = t, t = n) : (i = e.charAt(R), de.test(i) ? R++ : (i = n, H === 0 && K(_t)), i === n ? (R = t, t = n) : (r = [r, i], t = r))), t;
	}
	function oa() {
		let t;
		return t = aa(), t === n && (t = e.charAt(R), b.test(t) ? R++ : (t = n, H === 0 && K(k))), t;
	}
	function sa() {
		let t, r, i, a, o, s, c;
		if (H++, t = R, e.charCodeAt(R) === 45 ? (r = "-", R++) : (r = n, H === 0 && K(De)), r === n && (r = null), i = ca(), i !== n) {
			if (a = R, e.charCodeAt(R) === 46 ? (o = ".", R++) : (o = n, H === 0 && K(Me)), o !== n) {
				if (s = [], c = e.charAt(R), b.test(c) ? R++ : (c = n, H === 0 && K(k)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(R), b.test(c) ? R++ : (c = n, H === 0 && K(k));
				else s = n;
				s === n ? (R = a, a = n) : (o = [o, s], a = o);
			} else R = a, a = n;
			a === n && (a = null), o = ua(), o === n && (o = null), z = t, t = ur(a, o);
		} else R = t, t = n;
		return H--, t === n && (r = n, H === 0 && K(vt)), t;
	}
	function ca() {
		let t, r, i, a;
		if (e.charCodeAt(R) === 48 ? (t = "0", R++) : (t = n, H === 0 && K(yt)), t === n) {
			if (t = R, r = e.charAt(R), fe.test(r) ? R++ : (r = n, H === 0 && K(bt)), r !== n) {
				for (i = [], a = e.charAt(R), b.test(a) ? R++ : (a = n, H === 0 && K(k)); a !== n;) i.push(a), a = e.charAt(R), b.test(a) ? R++ : (a = n, H === 0 && K(k));
				r = [r, i], t = r;
			} else R = t, t = n;
		}
		return t;
	}
	function la() {
		let t, r, i, a, o, s;
		if (H++, t = R, e.charCodeAt(R) === 48 ? (r = "0", R++) : (r = n, H === 0 && K(yt)), r === n) {
			if (r = R, e.charCodeAt(R) === 45 ? (i = "-", R++) : (i = n, H === 0 && K(De)), i === n && (i = null), a = e.charAt(R), fe.test(a) ? R++ : (a = n, H === 0 && K(bt)), a !== n) {
				for (o = [], s = e.charAt(R), b.test(s) ? R++ : (s = n, H === 0 && K(k)); s !== n;) o.push(s), s = e.charAt(R), b.test(s) ? R++ : (s = n, H === 0 && K(k));
				i = [
					i,
					a,
					o
				], r = i;
			} else R = r, r = n;
		}
		return r !== n && (z = t, r = dr()), t = r, H--, t === n && (r = n, H === 0 && K(xt)), t;
	}
	function ua() {
		let t, r, i, a, o;
		if (t = R, r = e.charAt(R), x.test(r) ? R++ : (r = n, H === 0 && K(St)), r !== n) {
			if (i = e.charAt(R), v.test(i) ? R++ : (i = n, H === 0 && K(Se)), i === n && (i = null), a = [], o = e.charAt(R), b.test(o) ? R++ : (o = n, H === 0 && K(k)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(R), b.test(o) ? R++ : (o = n, H === 0 && K(k));
			else a = n;
			a === n ? (R = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else R = t, t = n;
		return t;
	}
	function da() {
		let t, r, i, a;
		if (H++, t = R, e.charCodeAt(R) === 34 ? (r = "\"", R++) : (r = n, H === 0 && K(Ct)), r !== n) {
			for (i = [], a = fa(); a !== n;) i.push(a), a = fa();
			e.charCodeAt(R) === 34 ? (a = "\"", R++) : (a = n, H === 0 && K(Ct)), a === n ? (R = t, t = n) : (z = t, t = fr(i));
		} else R = t, t = n;
		if (t === n) {
			if (t = R, e.charCodeAt(R) === 39 ? (r = "'", R++) : (r = n, H === 0 && K(wt)), r !== n) {
				for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
				e.charCodeAt(R) === 39 ? (a = "'", R++) : (a = n, H === 0 && K(wt)), a === n ? (R = t, t = n) : (z = t, t = pr(i));
			} else R = t, t = n;
		}
		return H--, t === n && (r = n, H === 0 && K(Ce)), t;
	}
	function fa() {
		let t, r, i;
		return t = R, r = R, H++, i = e.charAt(R), pe.test(i) ? R++ : (i = n, H === 0 && K(Tt)), H--, i === n ? r = void 0 : (R = r, r = n), r === n ? (R = t, t = n) : (i = ma(), i === n ? (R = t, t = n) : (z = t, t = mr(i))), t === n && (t = R, e.charCodeAt(R) === 92 ? (r = "\\", R++) : (r = n, H === 0 && K(ft)), r === n ? (R = t, t = n) : (e.charCodeAt(R) === 34 ? (i = "\"", R++) : (i = n, H === 0 && K(Ct)), i === n ? (R = t, t = n) : (z = t, t = hr())), t === n && (t = R, e.charCodeAt(R) === 92 ? (r = "\\", R++) : (r = n, H === 0 && K(ft)), r === n ? (R = t, t = n) : (i = ha(), i === n ? (R = t, t = n) : (z = t, t = gr(i))))), t;
	}
	function pa() {
		let t, r, i;
		return t = R, r = R, H++, i = e.charAt(R), me.test(i) ? R++ : (i = n, H === 0 && K(Et)), H--, i === n ? r = void 0 : (R = r, r = n), r === n ? (R = t, t = n) : (i = ma(), i === n ? (R = t, t = n) : (z = t, t = _r(i))), t === n && (t = R, e.charCodeAt(R) === 92 ? (r = "\\", R++) : (r = n, H === 0 && K(ft)), r === n ? (R = t, t = n) : (e.charCodeAt(R) === 39 ? (i = "'", R++) : (i = n, H === 0 && K(wt)), i === n ? (R = t, t = n) : (z = t, t = vr())), t === n && (t = R, e.charCodeAt(R) === 92 ? (r = "\\", R++) : (r = n, H === 0 && K(ft)), r === n ? (R = t, t = n) : (i = ha(), i === n ? (R = t, t = n) : (z = t, t = yr(i))))), t;
	}
	function ma() {
		let t, r, i, a;
		return t = e.charAt(R), S.test(t) ? R++ : (t = n, H === 0 && K(Dt)), t === n && (t = R, r = R, i = e.charAt(R), ue.test(i) ? R++ : (i = n, H === 0 && K(gt)), i === n ? (R = r, r = n) : (a = e.charAt(R), de.test(a) ? R++ : (a = n, H === 0 && K(_t)), a === n ? (R = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, R)), t;
	}
	function ha() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = R, e.charCodeAt(R) === 92 ? (r = "\\", R++) : (r = n, H === 0 && K(ft)), r !== n && (z = t, r = L()), t = r, t === n && (t = R, e.charCodeAt(R) === 47 ? (r = "/", R++) : (r = n, H === 0 && K(ut)), r !== n && (z = t, r = br()), t = r, t === n && (t = R, e.charCodeAt(R) === 98 ? (r = "b", R++) : (r = n, H === 0 && K(Ot)), r !== n && (z = t, r = xr()), t = r, t === n && (t = R, e.charCodeAt(R) === 102 ? (r = "f", R++) : (r = n, H === 0 && K(kt)), r !== n && (z = t, r = Sr()), t = r, t === n && (t = R, e.charCodeAt(R) === 110 ? (r = "n", R++) : (r = n, H === 0 && K(At)), r !== n && (z = t, r = Cr()), t = r, t === n && (t = R, e.charCodeAt(R) === 114 ? (r = "r", R++) : (r = n, H === 0 && K(jt)), r !== n && (z = t, r = wr()), t = r, t === n && (t = R, e.charCodeAt(R) === 116 ? (r = "t", R++) : (r = n, H === 0 && K(Mt)), r !== n && (z = t, r = Tr()), t = r, t === n && (t = R, e.charCodeAt(R) === 117 ? (r = "u", R++) : (r = n, H === 0 && K(Nt)), r === n ? (R = t, t = n) : (i = R, a = R, o = e.charAt(R), he.test(o) ? R++ : (o = n, H === 0 && K(Pt)), o === n ? (R = a, a = n) : (s = e.charAt(R), ge.test(s) ? R++ : (s = n, H === 0 && K(Ft)), s === n ? (R = a, a = n) : (c = Z(), c === n ? (R = a, a = n) : (l = Z(), l === n ? (R = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, R), i === n ? (R = t, t = n) : (e.substr(R, 2) === "\\u" ? (a = "\\u", R += 2) : (a = n, H === 0 && K(It)), a === n ? (R = t, t = n) : (o = R, s = R, c = e.charAt(R), he.test(c) ? R++ : (c = n, H === 0 && K(Pt)), c === n ? (R = s, s = n) : (l = e.charAt(R), _e.test(l) ? R++ : (l = n, H === 0 && K(Lt)), l === n ? (R = s, s = n) : (u = Z(), u === n ? (R = s, s = n) : (d = Z(), d === n ? (R = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, R), o === n ? (R = t, t = n) : (z = t, t = Er(i, o))))), t === n && (t = R, e.charCodeAt(R) === 117 ? (r = "u", R++) : (r = n, H === 0 && K(Nt)), r === n ? (R = t, t = n) : (i = R, a = R, o = Z(), o === n ? (R = a, a = n) : (s = Z(), s === n ? (R = a, a = n) : (c = Z(), c === n ? (R = a, a = n) : (l = Z(), l === n ? (R = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, R), i === n ? (R = t, t = n) : (z = R, a = Dr(i), a = a ? n : void 0, a === n ? (R = t, t = n) : (z = t, t = Or(i)))))))))))), t;
	}
	function Z() {
		let t;
		return t = e.charAt(R), ve.test(t) ? R++ : (t = n, H === 0 && K(Rt)), t;
	}
	function Q() {
		let t;
		return t = e.charAt(R), ae.test(t) ? R++ : (t = n, H === 0 && K(Ee)), t;
	}
	function $() {
		let t, r;
		for (H++, t = [], r = e.charAt(R), C.test(r) ? R++ : (r = n, H === 0 && K(zt)); r !== n;) t.push(r), r = e.charAt(R), C.test(r) ? R++ : (r = n, H === 0 && K(zt));
		return H--, t;
	}
	function ga() {
		let t, r;
		return t = R, H++, e.length > R ? (r = e.charAt(R), R++) : (r = n, H === 0 && K(pt)), H--, r === n ? t = void 0 : (R = t, t = n), t;
	}
	function _a(e) {
		return e.length > 1e3 && Mr("Member name too long (maximum 1000 characters)"), e;
	}
	U = a();
	let va = U !== n && R === e.length;
	function ya() {
		throw U !== n && R < e.length && K(Fr()), Br(kr, V < e.length ? Nr(V) : null, V < e.length ? Rr(V, V + 1) : Rr(V, V));
	}
	if (t.peg$library) return {
		peg$result: U,
		peg$currPos: R,
		peg$FAILED: n,
		peg$maxFailExpected: kr,
		peg$maxFailPos: V,
		peg$success: va,
		peg$throw: va ? void 0 : ya
	};
	if (va) return U;
	ya();
}
var Xn = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), Zn = {
	length: {
		args: ["value"],
		logical: !1
	},
	count: {
		args: ["nodes"],
		logical: !1
	},
	value: {
		args: ["nodes"],
		logical: !1
	},
	match: {
		args: ["value", "value"],
		logical: !0
	},
	search: {
		args: ["value", "value"],
		logical: !0
	}
}, Qn = (e) => {
	throw new Nn(1, 1, e);
}, $n = (e) => e.type === "root" || e.type === "current", er = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function tr(e) {
	let t = [{
		node: e,
		context: "nodes"
	}], n = (e) => {
		for (let n = e.next; n; n = n.next) {
			let e = n.value;
			if (e.type === "dotdot" && (e = e.value), e.type !== "bracketExpression") continue;
			let r = e.value, i = r.type === "unions" ? r.values : [r];
			for (let e of i) e.type === "filterExpression" && t.push({
				node: e.value,
				context: "test"
			});
		}
	};
	for (; t.length > 0;) {
		let { node: e, context: r } = t.pop();
		if (typeof e != "object" || !e) continue;
		let i = e;
		if ($n(i)) r === "value" && !er(i) && Qn("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && Qn(`Expected a query, found ${String(i.type)}`), i.type) {
			case "logicalExpression":
			case "notExpression":
			case "groupExpression":
				i.type === "logicalExpression" ? t.push({
					node: i.left,
					context: "test"
				}, {
					node: i.right,
					context: "test"
				}) : t.push({
					node: i.value,
					context: "test"
				});
				break;
			case "comparator": {
				let e = Xn.has(i.operator) ? "value" : "any";
				t.push({
					node: i.left,
					context: e
				}), i.operator !== "reg" && t.push({
					node: i.right,
					context: e
				});
				break;
			}
			case "functionCall": {
				let e = i.name, n = Zn[e], a = i.args;
				a.length !== n.args.length && Qn(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && Qn(`The result of ${e}() must be compared`), r === "value" && n.logical && Qn(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
					node: e,
					context: n.args[r]
				}));
				break;
			}
			case "operation":
				t.push({
					node: i.left,
					context: "value"
				}, {
					node: i.right,
					context: "value"
				});
				break;
			case "groupOperation":
				t.push({
					node: i.value,
					context: r === "any" ? "any" : "value"
				});
				break;
			case "value": r === "test" && Qn("A literal must be compared");
		}
	}
}
function nr(e) {
	let t;
	try {
		t = Yn(e);
	} catch (e) {
		if (Vn(e)) throw new Nn(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new Nn(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new Nn(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return tr(t), t;
}
var rr = /* @__PURE__ */ new Set([
	"(",
	")",
	"*",
	"+",
	"-",
	".",
	"?",
	"[",
	"\\",
	"]",
	"^",
	"n",
	"r",
	"t",
	"{",
	"|",
	"}"
]), ir = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), ar = (e) => e >= 55296 && e <= 56319, or = (e) => e >= 56320 && e <= 57343, sr = (e) => e !== void 0 && e >= "0" && e <= "9", cr = (e, t) => {
	let n = e.charCodeAt(t);
	return ar(n) && or(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : ar(n) || or(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, lr = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !rr.has(n) ? null : n === "n" ? {
		text: "\\n",
		length: 2,
		code: 10
	} : n === "r" ? {
		text: "\\r",
		length: 2,
		code: 13
	} : n === "t" ? {
		text: "\\t",
		length: 2,
		code: 9
	} : {
		text: "\\" + n,
		length: 2,
		code: n.charCodeAt(0)
	};
}, ur = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return ir.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, dr = (e, t) => {
	let n = e[t];
	return n === "\\" ? lr(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : cr(e, t);
}, fr = (e, t) => {
	let n = t + 1, r = "[";
	e[n] === "^" && (r += "^", n++);
	let i = !0;
	for (;;) {
		let a = e[n];
		if (a === void 0) return null;
		if (a === "]") return i ? null : {
			text: r + "]",
			length: n + 1 - t
		};
		if (a === "-") {
			if (!i && e[n + 1] !== "]") return null;
			r += "-", n++, i = !1;
			continue;
		}
		if (i = !1, a === "\\" && (e[n + 1] === "p" || e[n + 1] === "P")) {
			let t = ur(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = dr(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = dr(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, pr = (e, t) => {
	let n = t + 1, r = n;
	for (; sr(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; sr(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, mr = (e) => {
	let t = e, n = "", r = 0, i = !1, a = 0;
	for (; a < t.length;) {
		let e = t[a];
		switch (e) {
			case "|":
				n += "|", i = !1, a++;
				continue;
			case "(":
				r++, n += "(", i = !1, a++;
				continue;
			case ")":
				if (r === 0) return null;
				r--, n += ")", i = !0, a++;
				continue;
			case "*":
			case "+":
			case "?":
				if (!i) return null;
				n += e, i = !1, a++;
				continue;
			case "{": {
				let e = i ? pr(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = fr(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = ur(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = lr(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = cr(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, hr = 1e3, gr = 1e3, _r = 16, vr = /^[dgimsuy]*$/, yr = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, L = class extends Error {}, br = 0, xr = 1, Sr = 2, Cr = 3, wr = 4, Tr = 5, Er = An(2, 31) - 1, Dr = (e, t) => {
	let n = e.op.length, r = e.scratch ?? {
		clist: new Int32Array(n),
		nlist: new Int32Array(n),
		onList: new Int32Array(n),
		stack: new Int32Array(n),
		atomGen: new Int32Array(e.atoms.length),
		atomHit: new Uint8Array(e.atoms.length),
		gen: 0,
		step: 0
	};
	return e.scratch = void 0, (r.gen > Er - t - 2 || r.step > Er - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, Or = /* @__PURE__ */ new Set([
	"^",
	"$",
	"\\",
	".",
	"*",
	"+",
	"?",
	"(",
	")",
	"[",
	"]",
	"{",
	"}",
	"|",
	"/"
]), R = /^\{(\d+)(?:,(\d*))?\}/, z = /^[0-9a-fA-F]{4}/, B = /^\(\?([ims]*)(?:-([ims]*))?:/, V = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, kr = class {
	constructor(e, t, n, r = !1) {
		this.src = e, this.unicode = t, this.iregexp = r, this.i = 0, this.mods = {
			i: n.includes("i"),
			m: n.includes("m"),
			s: n.includes("s")
		};
	}
	atom(e, t) {
		return {
			t: "atom",
			src: e,
			literal: t,
			mods: this.mods
		};
	}
	parse() {
		let e = this.parseAlt();
		if (this.i < this.src.length) throw new L("unexpected character");
		return e;
	}
	parseAlt() {
		let e = [this.parseSeq()];
		for (; this.src[this.i] === "|";) this.i++, e.push(this.parseSeq());
		return e.length === 1 ? e[0] : {
			t: "alt",
			alts: e
		};
	}
	parseSeq() {
		let e = [];
		for (; this.i < this.src.length && this.src[this.i] !== "|" && this.src[this.i] !== ")";) e.push(this.parseTerm());
		return e.length === 1 ? e[0] : {
			t: "cat",
			items: e
		};
	}
	parseTerm() {
		let e = this.src[this.i];
		return e === "^" ? (this.i++, {
			t: "bol",
			multiline: this.mods.m
		}) : e === "$" ? (this.i++, {
			t: "eol",
			multiline: this.mods.m
		}) : this.parseQuantifier(this.parseAtom());
	}
	parseAtom() {
		let { src: e } = this, t = this.i, n = e[t];
		if (n === "(") {
			let n = this.mods;
			if (e[t + 1] === "?") {
				let r = B.exec(e.slice(t, t + 12));
				if (!r) throw new L("lookaround or named group");
				let i = Mn({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new L("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new L("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new L("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(Or.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new L("trailing backslash");
		if (r === "b" || r === "B") throw new L("word boundary");
		if (r >= "1" && r <= "9") throw new L("backreference");
		if (r === "0") {
			if (n) return 2;
			let r = 2;
			for (; r < 4 && /[0-7]/.test(t[e + r] ?? "");) r++;
			return r;
		}
		if (r === "c") return 3;
		if (r === "x" && /^[0-9a-fA-F]{2}/.test(t.slice(e + 2))) return 4;
		if (n && (r === "p" || r === "P" || r === "u") && t[e + 2] === "{") {
			let n = t.indexOf("}", e + 3);
			if (n === -1) throw new L("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && z.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (z.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
			}
			return 6;
		}
		return 2;
	}
	parseQuantifier(e) {
		let { src: t } = this, n = t[this.i], r, i;
		if (n === "*") r = 0, i = Infinity, this.i++;
		else if (n === "+") r = 1, i = Infinity, this.i++;
		else if (n === "?") r = 0, i = 1, this.i++;
		else if (n === "{") {
			let n = R.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > hr || i !== Infinity && i > hr) throw new L("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, H = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= hr) throw new L("pattern too large");
		return this.op.push(e), this.x.push(t), this.y.push(n), this.op.length - 1;
	}
	atomId(e) {
		let t = (e.mods.i ? "i" : "") + (e.mods.s ? "s" : "") + (this.unicode ? "u" : ""), n = `${t}/${e.src}`, r = this.atomIds.get(n);
		return r === void 0 && (r = this.atoms.length, this.atoms.push({
			re: RegExp(`^(?:${e.src})$`, t),
			literal: e.mods.i ? void 0 : e.literal
		}), this.atomIds.set(n, r)), r;
	}
	finish() {
		this.emit(Tr);
	}
	compile(e) {
		if (++this.work > 4 * hr) throw new L("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(br, this.atomId(e));
				return;
			case "bol":
				this.emit(Cr, +!!e.multiline);
				return;
			case "eol":
				this.emit(wr, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(xr);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(Sr)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(xr);
					this.x[t] = t + 1, this.compile(e.node), this.emit(Sr, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(xr);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, Ar = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new kr(e, r, t, n).parse(), a = new H(r);
		return a.compile(i), a.finish(), {
			op: a.op,
			x: a.x,
			y: a.y,
			atoms: a.atoms,
			unicode: r,
			sticky: t.includes("y")
		};
	} catch (e) {
		if (e instanceof RangeError) throw e;
		return null;
	}
}, U = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: g } = r, _ = r.gen, ne = r.step;
	r.gen = _ + t.length + 2, r.step = ne + t.length + 2;
	let v = 0, y = !1, re = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== _) switch (ee[r] = _, ++c === 64 && (u(c), c = 0), i[r]) {
				case br:
					e[n++] = r;
					break;
				case Tr: return u(c), y = !0, n;
				case Sr:
					h[s++] = a[r];
					break;
				case xr:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case Cr:
					(v === 0 || a[r] === 1 && V(t.charCodeAt(v - 1))) && (h[s++] = r + 1);
					break;
				case wr: (v === t.length || a[r] === 1 && V(t.charCodeAt(v))) && (h[s++] = r + 1);
			}
		}
		return u(c), n;
	};
	if (_++, p = re(d, 0, 0), y) return !0;
	for (; v < t.length;) {
		if (p === 0 && l) return !1;
		let e = (c ? t.codePointAt(v) : t.charCodeAt(v)) > 65535 ? 2 : 1, n = t.slice(v, v + e), r = ne + v + 1;
		_++, m = 0, v += e;
		for (let e = 0; e < p; e++) {
			let t = d[e], i = a[t];
			if (te[i] !== r) {
				te[i] = r;
				let e = s[i];
				g[i] = (e.literal === void 0 ? e.re.test(n) : e.literal === n) ? 1 : 0;
			}
			if (g[i] === 1 && (m = re(f, m, t + 1), y)) return !0;
		}
		if (!l && (m = re(f, m, 0), y)) return !0;
		let i = d;
		d = f, f = i, p = m;
	}
	return !1;
}, jr = (e, t, n) => {
	let r = Dr(e, t.length);
	try {
		return U(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, Mr = 256, Nr = /* @__PURE__ */ new Map(), W = 0, G = (e, t, n, r, i = !1) => {
	if (e.length > gr || t.length > 7 || !vr.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = Nr.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = yr(s) > _r ? null : Ar(n ? `^(?:${s})$` : s, t, i);
	W >= Mr && (Nr.clear(), W = 0);
	let l = Nr.get(s);
	return l === void 0 && Nr.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), W++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, Pr = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), jr(e, t, n);
}, Fr = class {
	constructor(e) {
		this.nodes = e;
	}
}, Ir = (e) => {
	let t = !1;
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r === "\\" && n + 1 < e.length) {
			let r = e[n + 1];
			if ((r === "b" || r === "B") && !t) return !0;
			n++;
		} else r === "[" && !t ? t = !0 : r === "]" && t && (t = !1);
	}
	return !1;
}, Lr = (e) => {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (n === "\\") {
			let n = e[t + 1];
			if (n >= "1" && n <= "9") return !1;
			t++;
		} else if (n === "(" && e[t + 1] === "?") {
			let n = e[t + 2];
			if (n === "=" || n === "!") return !1;
			if (n === "<") {
				let n = e[t + 3];
				if (n === "=" || n === "!" || /[a-zA-Z]/.test(n ?? "")) return !1;
			}
		}
	}
	return !Ir(e);
}, Rr = 256, K = /* @__PURE__ */ new Map(), zr = (e, t) => {
	let n = K.get(e);
	return n === void 0 && (n = Lr(e), K.size >= Rr && K.clear(), K.set(Array.from(e).join(""), n)), t(e.length), n;
}, Br = /* @__PURE__ */ new Map(), Vr = (e, t) => {
	let n = Br.get(e);
	return n === void 0 && (n = mr(e), n !== null && (n = Array.from(n).join("")), Br.size >= Rr && Br.clear(), Br.set(Array.from(e).join(""), n)), t(e.length), n;
}, Hr = 256, Ur = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > gr) c = null;
		else if (o) {
			let n = Vr(e, i);
			c = n === null ? null : G(n, t, r, i, !0);
		} else c = zr(e, i) ? G(e, t, r, i) : null;
		s !== void 0 && (s.size >= Hr && s.clear(), s.set(a, c));
	}
	return c !== null && Pr(c, n, i);
}, Wr = {
	length: (e, t) => {
		let n = e[0];
		if (F(n)) {
			t(n.length);
			let e = n.length;
			for (let t = 0; t < n.length - 1; t++) {
				let r = n.charCodeAt(t);
				if (r >= 55296 && r <= 56319) {
					let r = n.charCodeAt(t + 1);
					r >= 56320 && r <= 57343 && (e--, t++);
				}
			}
			return e;
		}
		if (N(n)) return M(n);
		if (P(n)) {
			let e = Bn(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !F(r) || !F(i) ? !1 : Ur(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !F(r) || !F(i) ? !1 : Ur(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, Gr = (e, t, n = A) => e === void 0 && t === void 0 || In(e, t, n), Kr = (e, t, n = A) => !In(e, t, n), qr = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, Jr = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return qr(n) - qr(i);
	}
	return e.length - t.length;
}, Yr = (e, t, n = A) => Un(e) && Un(t) ? e < t : F(e) && F(t) ? (n(Math.min(e.length, t.length)), Jr(e, t) < 0) : !1, Xr = (e, t, n = A) => Yr(e, t, n) || Gr(e, t, n), Zr = (e, t, n = A) => Un(e) && Un(t) ? e > t : F(e) && F(t) ? (n(Math.min(e.length, t.length)), Jr(e, t) > 0) : !1, Qr = (e, t, n = A) => Zr(e, t, n) || Gr(e, t, n), $r = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, ei = (e, t, n) => {
	let r = M(e);
	for (let i = 0; i < r; i++) {
		let r = Ln(e, i);
		if (n(1 + $r(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, ti = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, ni = (e) => typeof e == "string" && e.length + 1 > Rn, ri = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = M(e);
	for (let n = 0; n < a; n++) {
		let r = Ln(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), ni(r) ? i.long.push(r) : i.set.add(ti(r));
	}
	return n?.set(e, i), i;
}, ii = ({ set: e, long: t }, n, r) => {
	if (ni(n)) {
		for (let e of t) if (r(1 + $r(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(ti(n)));
}, ai = (e, t, n) => {
	let r = M(e);
	for (let i = 0; i < r; i++) if (n(), j(e, i) && t(e[i])) return !0;
	return !1;
}, oi = {
	eq: Gr,
	ne: Kr,
	lt: Yr,
	le: Xr,
	gt: Zr,
	ge: Qr,
	in: (e, t, n = A) => N(t) ? ei(t, e, n) !== -1 : !1,
	nin: (e, t, n = A) => N(t) ? ei(t, e, n) === -1 : !1,
	subsetof: (e, t, n = A, r) => {
		if (!N(e) || !N(t)) return !1;
		let i = ri(t, n, r);
		return !ai(e, (e) => !ii(i, e, n), n);
	},
	anyof: (e, t, n = A, r) => {
		if (!N(e) || !N(t)) return !1;
		let i = ri(t, n, r);
		return ai(e, (e) => ii(i, e, n), n);
	},
	noneof: (e, t, n = A, r) => {
		if (!N(e) || !N(t)) return !1;
		let i = ri(t, n, r);
		return !ai(e, (e) => ii(i, e, n), n);
	},
	sizeof: (e, t) => !N(e) && !F(e) || !N(t) && !F(t) ? !1 : (N(e) ? M(e) : e.length) === (N(t) ? M(t) : t.length),
	size: (e, t) => !N(e) && !F(e) || !Un(t) ? !1 : (N(e) ? M(e) : e.length) === t
}, si = (e) => !N(e) && !F(e) ? !1 : (N(e) ? M(e) : e.length) === 0, ci = (e, t, n, r = A, i) => !F(e) || !F(t) ? !1 : Ur(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), li = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), q = (e, t) => e.concat(`[${t}]`), ui = (e, t) => e < 0 ? t + e : e, di = (e, t) => {
	let n = M(e), r = ui(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: j(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, J = (e, t) => {
	for (let n of t) e.push(n);
}, fi = 1e6, Y = 100, pi = 1e6, mi = 20, hi = 1e4, gi = 1e4, _i = class {
	constructor(e) {
		this.weight = 0, this.nodes = 0, this.stringPositions = 0, this.done = !1, this.seen = /* @__PURE__ */ new Set(), this.frames = [], this.visit(e);
	}
	advance(e) {
		let t = this.nodes + e, { frames: n } = this;
		for (; n.length > 0 && this.nodes < t;) {
			let e = n[n.length - 1];
			if (e.i >= e.length) {
				n.pop();
				continue;
			}
			let t = e.i++;
			if (e.keys === null) {
				let n = e.container;
				if (e.indices !== null) {
					let r = Number(e.indices[t]);
					j(n, r) && this.visit(n[r]);
				} else if (j(n, t)) this.visit(n[t]);
				else if (++e.holes > gi) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!j(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), N(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: M(e),
				i: 0,
				holes: 0
			});
			else if (P(e)) {
				let t = Object.keys(e);
				this.frames.push({
					container: e,
					keys: t,
					indices: null,
					length: t.length,
					i: 0,
					holes: 0
				});
			}
		}
	}
}, vi = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, li(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = li(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = M(e);
			for (let r = 0; r < n; r++) this.tick(), j(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new _i(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(hi, Math.ceil((this.retained - this.retainedLimit) / mi))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new Pn(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(fi, Y * e.weight) + t, this.retainedLimit = Math.max(pi, mi * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new _i(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(hi, Math.ceil((this.steps - this.stepLimit) / Y))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new Pn(`Query exceeded ${this.stepLimit} evaluation steps`);
			}
		}, {
			regexProgram: (e) => {
				this.largestRegexProgram = Math.max(this.largestRegexProgram, e);
			},
			regexWork: (e) => {
				this.regexSteps += e, this.tick(e);
			},
			regexSites: /* @__PURE__ */ new Map()
		}), this.readsCurrent = /* @__PURE__ */ new WeakMap(), this.invariantResults = /* @__PURE__ */ new Map(), this.isInvariant = (e) => (this.readsCurrent.has(e) || this.classify(e), !this.readsCurrent.get(e)), this.classify = (e) => {
			let t = this.readsCurrent, n = [], r = (e) => {
				if (typeof e != "object" || !e) return !1;
				let r = t.get(e);
				if (r !== void 0) return r;
				let i = e.type;
				if (i === "current") return t.set(e, !0), !0;
				if (i === "filterExpression" || i === "value") return t.set(e, !1), !1;
				let a = Object.values(e);
				n.push({
					node: e,
					children: a,
					i: 0,
					reads: !1
				});
			};
			for (r(e); n.length > 0;) {
				let e = n[n.length - 1];
				e.i < e.children.length ? r(e.children[e.i++]) === !0 && (e.reads = !0) : (t.set(e.node, e.reads), n.pop(), e.reads && n.length > 0 && (n[n.length - 1].reads = !0));
			}
		}, this.memoInvariant = (e, t) => {
			if (!this.isInvariant(e)) return t();
			if (this.invariantResults.has(e)) return this.invariantResults.get(e);
			let n = t();
			return this.invariantResults.set(e, n), n;
		}, this.handleRootQuery = (e, t) => {
			if (this.rootQueryCache.has(e)) return this.rootQueryCache.get(e);
			let n = this.handleSubscript(this.rootPayload, t);
			return this.rootQueryCache.set(e, n), n;
		}, this.handleIdentifier = (e, t) => this.selectMember(e, t), this.handleStringLiteral = (e, t) => this.selectMember(e, t), this.selectMember = ({ value: e, paths: t }, n) => {
			if (!P(e)) return;
			let r = this.canonicalName(n, n.value);
			if (j(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (N(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: q(t, r)
					});
				}), n;
			}
			if (P(e)) {
				let n = Bn(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) j(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!N(e)) return;
			let r = di(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: q(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (N(e)) {
				let r = di(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: q(t, r.index)
				} : void 0;
			}
			if (P(e)) {
				let r = String(n.value);
				return j(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!N(e)) return [];
			let r = M(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : ui(n.start, r), o = n.end === null ? r : ui(n.end, r)) : (a = n.start === null ? r - 1 : ui(n.start, r), o = n.end === null ? -r - 1 : ui(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: j(e, u) ? e[u] : void 0,
				paths: q(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (P(e.value)) {
						let t = this.handleIdentifier(e, r);
						I(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (P(e.value)) {
						let t = this.handleStringLiteral(e, r);
						I(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (N(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						I(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					J(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": J(n, this.handleBracketExpressionContent(e, r));
			}
			return n;
		}, this.handleDotdot = (e, t) => {
			let n = [];
			return this.collectDotdot(e, t, n), n;
		}, this.collectDotdot = (e, t, n) => {
			let r = t.value, i = [];
			this.tick();
			let a = e;
			for (; a !== void 0;) {
				let e = a.value;
				switch (r.type) {
					case "bracketMember": {
						let e = this.handleBracketMemberContent(a, r.value);
						I(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						J(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						J(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						I(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (P(e)) {
					let t = Bn(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else N(e) && i.push({
					parent: a,
					keys: null,
					length: M(e),
					i: 0
				});
				for (a = void 0; i.length > 0;) {
					let e = i[i.length - 1];
					if (e.i >= e.length) {
						i.pop();
						continue;
					}
					let t = e.i++;
					if (e.keys === null) {
						this.tick();
						let n = e.parent.value;
						if (!j(n, t)) continue;
						a = {
							value: n[t],
							paths: q(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!j(n, r)) continue;
						a = {
							value: n[r],
							paths: this.formatStringLiteralPath(e.parent.paths, r)
						};
					}
					break;
				}
			}
		}, this.handleOperationContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "root": return this.handleRootQuery(t, t.next);
				case "current": return this.handleSubscript(e, t.next);
				case "value": return {
					value: t.value,
					paths: e.paths
				};
				case "groupOperation": return this.memoInvariant(t, () => this.handleOperationContent(e, t.value));
				case "functionCall": return {
					value: this.handleFunctionCall(e, t),
					paths: e.paths
				};
				case "operation": {
					let n = [], r = t;
					for (; r.type === "operation";) n.push({
						operator: r.operator,
						right: r.right
					}), r = r.left;
					let i = this.handleOperationContent(e, r)?.value;
					this.tick(n.length);
					for (let t = n.length - 1; t >= 0; t--) {
						let r = this.handleOperationContent(e, n[t].right)?.value;
						if (!Un(i) || !Un(r)) i = void 0;
						else switch (n[t].operator) {
							case "plus":
								i += r;
								break;
							case "minus":
								i -= r;
								break;
							case "div":
								i = r === 0 ? void 0 : i / r;
								break;
							case "multi": i *= r;
						}
					}
					return Un(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return si(n);
			if (t.operator === "reg") return ci(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = oi[t.operator];
			if (i) {
				let e = this.isInvariant(t.right) ? this.siteSetCache(t.right) : void 0;
				return i(n, r, this.tick, e);
			}
			return !1;
		}, this.handleLogicalExpression = (e, t) => this.memoInvariant(t, () => this.evaluateLogicalExpression(e, t)), this.evaluateLogicalExpression = (e, t) => {
			let n = [], r = !this.isInvariant(t), i = t;
			for (; i.type === "logicalExpression" && (i === t || !r || !this.isInvariant(i));) n.push({
				operator: i.operator,
				right: i.right
			}), i = i.left;
			this.tick(n.length);
			let a = this.handleFilterExpressionContent(e, i);
			for (let t = n.length - 1; t >= 0; t--) (n[t].operator === "and" ? a : !a) && (a = this.handleFilterExpressionContent(e, n[t].right));
			return a;
		}, this.handleFunctionCall = (e, t) => this.memoInvariant(t, () => this.evaluateFunctionCall(e, t)), this.evaluateFunctionCall = (e, t) => {
			let n = t.name === "count" || t.name === "value", r = t.args.map((t) => {
				let r = this.handleOperationContent(e, t);
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new Fr(r.value) : new Fr(I(r?.value) ? [r?.value] : []);
			}), i = Wr[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
			return i ? i(r, this.tick, o ? t : void 0) : void 0;
		}, this.handleFilterExpressionContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "logicalExpression": return this.handleLogicalExpression(e, t);
				case "comparator": return this.handleComparator(e, t);
				case "groupExpression": return this.memoInvariant(t, () => this.handleFilterExpressionContent(e, t.value));
				case "notExpression": return this.memoInvariant(t, () => !this.handleFilterExpressionContent(e, t.value));
				case "functionCall": return !!this.handleFunctionCall(e, t);
				case "root": {
					let e = this.handleRootQuery(t, t.next);
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : I(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : I(n);
				}
				case "value": return !!t.value;
			}
		}, this.handleBracketMemberContent = (e, t) => {
			switch (t.type) {
				case "identifier": return this.handleIdentifier(e, t);
				case "numericLiteral": return this.handleNumericLiteral(e, t);
				case "stringLiteral": return this.handleStringLiteral(e, t);
			}
		}, this.handleBracketExpressionContent = (e, t) => {
			let n = e.value;
			switch (t.type) {
				case "filterExpression": {
					let r = [];
					if (N(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: q(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (P(n)) {
						let i = Bn(n);
						this.tick(i.length);
						for (let a of i) {
							if (!j(n, a)) continue;
							let i = {
								value: n[a],
								paths: this.formatStringLiteralPath(e.paths, a)
							};
							this.handleFilterExpressionContent(i, t.value) && (this.retain(), r.push(i));
						}
					}
					return r;
				}
				case "unions": return this.handleUnions(e, t);
				case "wildcard": return this.handleWildcard(e);
				case "slices": return this.handleSlices(e, t);
			}
		}, this.isIndefiniteSegment = (e) => {
			let t = e.value;
			return t.type === "bracketExpression" || t.type === "dotdot" || t.type === "dot" && t.value.type === "wildcard";
		}, this.selectMany = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketExpression": return this.handleBracketExpressionContent(e, n.value);
				case "dotdot": return this.handleDotdot(e, n);
				default: return this.handleWildcard(e);
			}
		}, this.selectOne = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketMember": return this.handleBracketMemberContent(e, n.value);
				case "dot":
					if (n.value.type === "identifier") return this.handleIdentifier(e, n.value);
					if (n.value.type === "numericLiteral") return this.handleDotNumericLiteral(e, n.value);
			}
		}, this.handleSubscript = (e, t) => {
			if (t === null) return e;
			let n = [], r = [{
				node: e,
				segment: t
			}], i = !1;
			for (; r.length > 0;) {
				let { node: e, segment: t } = r.pop(), a;
				if (this.isIndefiniteSegment(t)) i = !0, a = this.selectMany(e, t);
				else {
					this.tick();
					let n = this.selectOne(e, t);
					if (!I(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) J(n, a);
				else for (let e = a.length - 1; e >= 0; e--) r.push({
					node: a[e],
					segment: o
				});
			}
			if (!i) return n[0];
			let a = [], o = [];
			for (let e of n) a.push(e.value), o.push(e.paths);
			return {
				value: a,
				paths: o,
				isIndefinite: !0
			};
		}, this.handleRoot = (e) => {
			try {
				return this.handleSubscript(this.rootPayload, e.next);
			} catch (e) {
				throw Vn(e) ? new Pn("Query is nested too deeply") : Hn(e) ? new Pn("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? fi, this.retainedLimit = this.adaptiveLimit ? pi : Infinity;
	}
}, yi = (e, t, n) => {
	let r = nr(t), i = new vi(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? Wn(i) ? [] : [i.value] : i?.value;
}, bi = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = yi(e, i, n);
		I(t) && r.push(t);
	}
	return r;
}, xi = (e, t, n = {}) => {
	try {
		return N(t) ? bi(e, t, n) : yi(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, Si = (e) => typeof e == "object" && !!e && !Array.isArray(e), Ci = (e, t) => {
	if (!Si(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = Ai(t, i);
	return n;
}, wi = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => Ai(t, e));
}, Ti = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, Ei = (e, t) => Ti(e, t), Di = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Oi = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, ki = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: Oi,
		applyTemplate: e
	});
}, Ai = (e, t, n) => {
	let r = e, i = t;
	Di(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Ti(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = Ei(a?.textContent, r)), "attributes" in a && (a.attributes = Ci(a?.attributes, r)), "children" in a && (a.children = wi(a?.children, r))), a);
};
ki(Ai);
// node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var ji = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, Mi = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
};
((e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: Mi,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
})((e, t) => {
	let n = e;
	return ji(n, t), n.map((e) => Ai(e, e[t]));
}, (e, t) => {
	let n = e, r = t;
	return ji(n, r), n.map((e) => Ai(e, r));
});
// node_modules/json-transformer-funcs/src/v24/findByRole.js
var Ni = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = Ni(n, t);
		if (e) return e;
	}
	return null;
}, Pi = (e, t, n) => {
	let r = e?.[t.fileName];
	if (r === void 0) throw Error(`Registry entry not found: ${t.fileName}`);
	let i = r;
	if (t.jsonPath) {
		let e = xi(r, t.jsonPath, { returnArray: !0 });
		if (e.length === 0) throw Error(`Destination JSONPath matched no nodes: ${t.jsonPath}`);
		if (e.length > 1) throw Error(`Destination JSONPath must identify exactly one node; matched ${e.length}: ${t.jsonPath}`);
		i = e[0];
	} else if (t.dataRole && (i = Ni(r, t.dataRole), i == null)) throw Error(`Destination dataRole not found: ${t.dataRole}`);
	let a = [...t.filePath ?? []];
	if (a.length === 0) throw Error("destinationPath.filePath must contain the property to write");
	let o = a.pop(), s = a.reduce((e, t) => {
		if (e == null) throw Error(`Cannot resolve destination filePath at: ${t}`);
		return e[t];
	}, i);
	if (s == null) throw Error(`Destination parent not found for filePath: ${t.filePath.join(".")}`);
	return n && console.log("json-write-path v6 resolved:", {
		fileName: t.fileName,
		jsonPath: t.jsonPath,
		dataRole: t.dataRole,
		filePath: t.filePath,
		parent: s,
		key: o
	}), {
		parent: s,
		key: o,
		target: i
	};
}, Fi = (e, t, n, r) => {
	let { parent: i, key: a } = Pi(e, t, r);
	return (Tn[t.action] || wn)(i, a, n), e;
}, Ii = (e) => typeof e == "object" && !!e && !Array.isArray(e), Li = (e, t) => {
	if (!Ii(e)) return null;
	if (e[t] !== void 0) return e[t];
	let n = `show${t.charAt(0).toUpperCase()}${t.slice(1)}`;
	return e[n] === void 0 ? null : e[n];
}, Ri = (e) => e === !0 || Ii(e), zi = (e, t) => Ii(e) ? Object.entries(e).filter(([e]) => e !== "initialize").filter(([e]) => t === !0 || t[e] === !0).map(([e, t]) => ({
	switchKey: e,
	instructionKey: t
})) : [], Bi = (e, t) => e.initialize ? t === !0 || zi(e, t).length > 0 : !1, Vi = (e, t) => !t.destinationPath?.jsonPath || xi(e, t.destinationPath.jsonPath, { returnArray: !0 }).length > 0, Hi = (e, t) => t.skipIf ? xi(e, t.skipIf, { returnArray: !0 }).length > 0 : !1, Ui = (e, t, n = !1) => {
	let i = Sn[e];
	if (!Array.isArray(i)) n && console.warn(`Unknown option instruction: ${e}`);
	else for (let a of i) {
		if (Hi(t, a) || !Vi(t, a)) continue;
		let i = r[a.templateKey];
		i === void 0 ? n && console.warn(`Unknown option template: ${a.templateKey}`) : (Fi({ base: t }, a.destinationPath, i), n && console.log(a.narration ?? `Applied option instruction: ${e}`));
	}
}, Wi = ({ featureKey: e, featureSwitches: t, featureRequest: n, base: r, showLog: i }) => {
	let a = zi(t, n);
	Bi(t, n) && Ui(t.initialize, r, i);
	for (let { switchKey: t, instructionKey: n } of a) i && console.log(`Enabled switch: ${e}.${t}`), Ui(n, r, i);
}, Gi = ({ options: e = {}, optionDefs: t = {}, base: n, showLog: r = !1 } = {}) => {
	if (!n || !Ii(e) || !Ii(t)) return n;
	for (let [i, a] of Object.entries(t)) {
		if (!Ii(a)) continue;
		let t = Li(e, i);
		console.log("featureRequest : ", t), Ri(t) && Wi({
			featureKey: i,
			featureSwitches: a,
			featureRequest: t,
			base: n,
			showLog: r
		});
	}
	return n;
}, Ki = {
	name: "json-renderers-run-instructions",
	version: "1.16.1"
}, qi = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.runInstructions ??= {}, globalThis.ks.jsonRenderers.runInstructions.render = {
		meta: Ki,
		renderFunc: e
	});
}, Ji = ({ instructionMainKey: t, instructionSubKey: r, data: i, options: a, showLog: o = !1 } = {}) => {
	let s = e[t]?.[r];
	if (!s) throw Error(`Definition not found: ${t}.${r}`);
	let c = structuredClone(n[s.baseFromSpec]);
	return xn({
		instructions: s.instructions ?? [],
		base: c,
		data: i,
		showLog: o
	}), Gi({
		options: a,
		optionDefs: s.options && typeof s.options == "object" ? s.options : e[t]?.options ?? {},
		base: c,
		data: i,
		showLog: o
	}), c;
};
qi(Ji);
export { Ji as default };
