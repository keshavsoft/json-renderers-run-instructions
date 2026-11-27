var e = {
	table: {
		headerOnly: {
			baseFromSpec: "tableHeaderOnly",
			instructions: ["buildColgroup", "buildHeader"],
			"instructions-type": [{
				type: "single",
				key: "buildColgroup"
			}, {
				type: "single",
				key: "buildHeader"
			}]
		},
		simple: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody"
			],
			"instructions-type": [
				{
					type: "single",
					key: "buildColgroup"
				},
				{
					type: "single",
					key: "buildHeader"
				},
				{
					type: "single",
					key: "buildBody"
				}
			]
		},
		withFooter: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildFooter",
				"buildBody"
			],
			"instructions-type": [
				{
					type: "single",
					key: "buildColgroup"
				},
				{
					type: "single",
					key: "buildHeader"
				},
				{
					type: "single",
					key: "buildFooter"
				},
				{
					type: "single",
					key: "buildBody"
				}
			]
		},
		bodyOnly: {
			baseFromSpec: "tableBodyOnly",
			instructions: ["buildBody"],
			"instructions-type": [{
				type: "single",
				key: "buildBody"
			}]
		},
		simpleSortable: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeaderClickable",
				"buildBody"
			],
			"instructions-type": [
				{
					type: "single",
					key: "buildColgroup"
				},
				{
					type: "single",
					key: "buildHeaderClickable"
				},
				{
					type: "single",
					key: "buildBody"
				}
			]
		},
		full: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody",
				"buildFooter",
				"set-search",
				"search-show-label",
				"search-show-helper",
				"search-show-input",
				"set-serial",
				"serial-show-serial",
				"options-show-button",
				"options-show-edit-button"
			],
			"instructions-type": [
				{
					type: "single",
					key: "buildColgroup"
				},
				{
					type: "single",
					key: "buildHeader"
				},
				{
					type: "single",
					key: "buildBody"
				},
				{
					type: "single",
					key: "buildFooter"
				},
				{
					type: "single",
					key: "set-search"
				},
				{
					type: "single",
					key: "search-show-label"
				},
				{
					type: "single",
					key: "search-show-helper"
				},
				{
					type: "single",
					key: "search-show-input"
				},
				{
					type: "multi",
					key: "set-serial"
				},
				{
					type: "single",
					key: "serial-show-serial"
				},
				{
					type: "multi",
					key: "options-show-button"
				},
				{
					type: "multi",
					key: "options-show-edit-button"
				}
			]
		}
	},
	select: { simple: {
		baseFromSpec: "selectBase",
		instructions: ["buildSelectWithOptions"],
		"instructions-type": [{
			type: "single",
			key: "buildSelectWithOptions"
		}]
	} },
	dataList: { simple: {
		baseFromSpec: "dataListSimple",
		instructions: ["buildDataListWithOptions"],
		"instructions-type": [{
			type: "single",
			key: "buildDataListWithOptions"
		}]
	} },
	selectOptionsOnly: { simple: {
		baseFromSpec: "selectOptionsOnlyBase",
		instructions: ["buildOptionsArray"],
		"instructions-type": [{
			type: "single",
			key: "buildOptionsArray"
		}]
	} },
	searchInput: { simple: {
		baseFromSpec: "searchInputBase",
		instructions: [],
		"instructions-type": []
	} },
	form: { simple: {
		baseFromSpec: "formSimple",
		instructions: ["buildFormField"],
		"instructions-type": [{
			type: "single",
			key: "buildFormField"
		}]
	} },
	accordion: {
		simple: {
			baseFromSpec: "accordionSimple",
			instructions: ["buildAccordionItems"],
			"instructions-type": [{
				type: "single",
				key: "buildAccordionItems"
			}]
		},
		flush: {
			baseFromSpec: "accordionFlush",
			instructions: ["buildAccordionItems"],
			"instructions-type": [{
				type: "single",
				key: "buildAccordionItems"
			}]
		}
	},
	card: {
		simple: {
			baseFromSpec: "cardSimple",
			instructions: ["buildCardBody"],
			"instructions-type": [{
				type: "single",
				key: "buildCardBody"
			}]
		},
		withHeader: {
			baseFromSpec: "cardWithHeader",
			instructions: ["buildCardHeader", "buildCardBody"],
			"instructions-type": [{
				type: "single",
				key: "buildCardHeader"
			}, {
				type: "single",
				key: "buildCardBody"
			}]
		},
		withFooter: {
			baseFromSpec: "cardWithFooter",
			instructions: [
				"buildCardHeader",
				"buildCardBody",
				"buildCardFooter"
			],
			"instructions-type": [{
				type: "multi",
				key: "card-with-footer"
			}]
		},
		imageTop: {
			baseFromSpec: "cardImageTop",
			instructions: ["buildCardBody"],
			"instructions-type": [{
				type: "single",
				key: "buildCardBody"
			}]
		}
	},
	list: {
		simple: {
			baseFromSpec: "listSimple",
			instructions: ["buildListItems"],
			"instructions-type": [{
				type: "single",
				key: "buildListItems"
			}]
		},
		group: {
			baseFromSpec: "listGroup",
			instructions: ["buildListGroupItems"],
			"instructions-type": [{
				type: "single",
				key: "buildListGroupItems"
			}]
		},
		ordered: {
			baseFromSpec: "listOrdered",
			instructions: ["buildListGroupItems"],
			"instructions-type": [{
				type: "single",
				key: "buildListGroupItems"
			}]
		}
	},
	menu: {
		simple: {
			baseFromSpec: "menuSimple",
			instructions: ["buildMenuItems"],
			"instructions-type": [{
				type: "single",
				key: "buildMenuItems"
			}]
		},
		cards: {
			baseFromSpec: "menuCardsBase",
			instructions: ["buildMenuCards"],
			"instructions-type": [{
				type: "single",
				key: "buildMenuCards"
			}]
		}
	}
}, t = {
	name: "declarative-definitions",
	version: "1.6.1"
}, n = (e) => {
	typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.declarative ??= {}, globalThis.ks.declarative.definitions = {
		meta: t,
		data: e
	});
}, r = e;
n(e);
var i = {
	buildHeader: {
		tagName: "th",
		textContent: "${columnName}",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
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
	tableHeaderClickable: {
		tagName: "th",
		attributes: {
			class: "py-3 px-3 fw-semibold text-uppercase small user-select-none",
			role: "button",
			tabindex: "0",
			style: "cursor: pointer;",
			"data-column": "${columnName}",
			"data-sort-order": "none",
			"data-role": "sortable-header"
		},
		children: [{
			tagName: "span",
			attributes: { class: "d-inline-flex align-items-center gap-2" },
			children: [{
				tagName: "span",
				textContent: "${columnName}"
			}, {
				tagName: "span",
				textContent: "⇅",
				attributes: {
					class: "small opacity-75",
					"data-role": "sort-indicator"
				}
			}]
		}]
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
	name: "declarative-spec",
	version: "1.4.1"
}, o = (e) => {
	typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.declarative ??= {}, globalThis.ks.declarative.spec = {
		meta: a,
		data: e
	});
}, s = i;
o(i);
// node_modules/declarative-instructions-single/src/v5/index.js
var c = {
	"options-search": {
		narration: "Insert the search toolbar frame before the table when a search feature is enabled.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$.base.children"
		},
		sourcePath: null,
		templateKey: "searchToolbar",
		func: null,
		skipIf: "$..*[?@.attributes['data-role'] == 'search-toolbar']"
	},
	"options-search-showLabel": {
		narration: "Insert the search label into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$.base..*[?@.attributes['data-role'] == 'search-label-slot'].children"
		},
		sourcePath: null,
		templateKey: "searchLabel",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'table-title']"
	},
	"options-search-showHelper": {
		narration: "Insert the search helper text into its configured slot.",
		destinationPath: {
			action: "push",
			jsonPath: "$.base..*[?@.attributes['data-role'] == 'search-helper-slot'].children"
		},
		sourcePath: null,
		templateKey: "searchHelper",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'search-feedback']"
	},
	"options-search-showInput": {
		narration: "Insert the search input into its configured slot.",
		destinationPath: {
			action: "push",
			jsonPath: "$.base..*[?@.attributes['data-role'] == 'search-input-slot'].children"
		},
		sourcePath: null,
		templateKey: "searchInput",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'tableSearch']"
	},
	buildHeaderClickable: {
		type: "single",
		narration: "Build table header",
		destinationPath: { jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-header-row'].children" },
		sourcePath: "$.data.columns",
		templateKey: "tableHeaderClickable",
		func: "fromCollection"
	},
	buildColgroup: {
		narration: "Build column widths",
		destinationPath: { jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup'].children" },
		sourcePath: "$.data.columns",
		templateKey: "buildColGroup",
		func: "fromCollection"
	},
	buildHeader: {
		type: "single",
		narration: "Build table header",
		destinationPath: { jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row'].children" },
		sourcePath: "$.data.columns",
		templateKey: "buildHeader",
		func: "fromCollection"
	},
	buildFooter: {
		type: "single",
		narration: "Build table footer",
		destinationPath: { jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row'].children" },
		sourcePath: "$.data.columns",
		templateKey: "buildFooter",
		func: "fromCollection"
	},
	buildBody: {
		type: "rowOnColumn",
		narration: "Build table body",
		sourcePath: {
			rows: "$.data.data",
			columns: "$.data.columns"
		},
		destinationPath: { jsonPath: "$..*[?@.attributes['data-role'] == 'table-body'].children" },
		templateKey: {
			rowKey: "buildBodyTr",
			columnKey: "buildBodyCell"
		},
		func: "rowOnColumn"
	},
	buildFormField: {
		type: "single",
		narration: "Build form fields from columns",
		destinationPath: { jsonPath: "$.base..*[?@.attributes['data-role'] == 'form-body'].children" },
		sourcePath: "$.data.columns",
		templateKey: "buildFormField",
		func: "fromCollection"
	},
	buildSelectWithOptions: {
		type: "columnOnRow",
		narration: "Build selects with options",
		sourcePath: {
			columns: "$.data.columns",
			rows: "$.data.data"
		},
		destinationPath: { jsonPath: "$.base.children" },
		templateKey: {
			columnKey: "buildSelect",
			rowKey: "buildOption"
		},
		func: "columnOnRow"
	},
	buildSelectOptions: {
		type: "single",
		narration: "Build select options",
		destinationPath: { jsonPath: "$.base.children" },
		sourcePath: "$.data.data",
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildOptionsArray: {
		type: "single",
		narration: "Build options array",
		destinationPath: { jsonPath: "$.base" },
		sourcePath: "$.data.data",
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildDataListWithOptions: {
		type: "columnOnRow",
		narration: "Build datalists with options",
		sourcePath: {
			columns: "$.data.columns",
			rows: "$.data.data"
		},
		destinationPath: { jsonPath: "$.base.children" },
		templateKey: {
			columnKey: "buildDataList",
			rowKey: "buildOption"
		},
		func: "columnOnRow"
	},
	buildAccordionItems: {
		type: "single",
		narration: "Build accordion items from array",
		destinationPath: { jsonPath: "$.base.children" },
		sourcePath: "$.data.items",
		templateKey: "buildAccordionItem",
		func: "fromCollection"
	},
	buildCardBody: {
		type: "single",
		narration: "Build card body content",
		destinationPath: {
			action: "push",
			jsonPath: "$.base..*[?@.attributes['data-role'] == 'card-body'].children"
		},
		sourcePath: "$.data",
		templateKey: "buildCardBodyTemplate",
		func: "applyTemplate"
	},
	buildCardHeader: {
		type: "single",
		narration: "Build card header content",
		destinationPath: {
			action: "push",
			jsonPath: "$.base..*[?@.attributes['data-role'] == 'card-header'].children"
		},
		sourcePath: "$.data",
		templateKey: "buildCardHeaderTemplate",
		func: "applyTemplate"
	},
	buildCardFooter: {
		type: "single",
		narration: "Build card footer content",
		destinationPath: {
			action: "push",
			jsonPath: "$.base..*[?@.attributes['data-role'] == 'card-footer'].children"
		},
		sourcePath: "$.data",
		templateKey: "buildCardFooterTemplate",
		func: "applyTemplate"
	},
	buildListItems: {
		type: "single",
		narration: "Build simple list items",
		destinationPath: { jsonPath: "$.base.children" },
		sourcePath: "$.data.items",
		templateKey: "buildListItemTemplate",
		func: "fromCollection"
	},
	buildListGroupItems: {
		type: "single",
		narration: "Build list-group items",
		destinationPath: { jsonPath: "$.base.children" },
		sourcePath: "$.data.items",
		templateKey: "buildListGroupItemTemplate",
		func: "fromCollection"
	},
	buildMenuItems: {
		type: "single",
		narration: "Build navigation menu items",
		destinationPath: { jsonPath: "$.base.children" },
		sourcePath: "$.data.items",
		templateKey: "buildMenuItemTemplate",
		func: "fromCollection"
	},
	buildMenuCards: {
		type: "single",
		narration: "Build menu cards grid",
		destinationPath: { jsonPath: "$.base.children" },
		sourcePath: "$.data.items",
		templateKey: "buildMenuCardItemTemplate",
		func: "fromCollection"
	}
}, l = (e) => typeof e == "object" && !!e && !Array.isArray(e), u = (e, t) => {
	if (!l(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = g(t, i);
	return n;
}, d = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => g(t, e));
}, f = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, p = (e, t) => f(e, t), m = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, ee = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, h = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: ee,
		applyTemplate: e
	});
}, g = (e, t, n) => {
	let r = e, i = t;
	m(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? f(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = p(a?.textContent, r)), "attributes" in a && (a.attributes = u(a?.attributes, r)), "children" in a && (a.children = d(a?.children, r))), a);
};
h(g);
// node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var _ = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, v = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, te = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: v,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, y = (e, t) => {
	let n = e, r = t;
	return _(n, r), n.map((e) => g(e, r));
};
te((e, t) => {
	let n = e;
	return _(n, t), n.map((e) => g(e, e[t]));
}, y);
// node_modules/json-transformer-funcs-two-dimensions/src/v10/index.js
var b = ({ outer: e = [], outerSpec: t, getInner: n, innerSpec: r } = {}) => e.map((e) => {
	let i = g(e, t), a = n ? n(e) : [];
	return i.children = a.length > 0 ? y(a, r) : [], i;
}), ne = ({ columns: e = [], data: t = [], columnSpec: n, rowSpec: r } = {}) => b({
	outer: Array.isArray(t) ? t : t?.data ?? t?.rows ?? [],
	outerSpec: r,
	innerSpec: n,
	getInner: (t) => e.map((e) => ({
		...e,
		rowValue: t[e.columnName]
	}))
}), re = ({ columns: e = [], data: t = [], rows: n, columnSpec: r, rowSpec: i } = {}) => {
	let a = n ?? (Array.isArray(t) ? t : t?.data ?? t?.rows ?? []);
	return b({
		outer: e,
		outerSpec: r,
		innerSpec: i,
		getInner: (e) => Array.isArray(e.options) && e.options.length > 0 ? e.options.map((e) => typeof e == "object" ? e : { rowValue: e }) : a.map((t) => ({
			...t,
			rowValue: t[e.columnName] ?? t.value ?? t
		}))
	});
}, ie = Object.defineProperty, ae = Object.getOwnPropertySymbols, oe = Object.prototype.hasOwnProperty, se = Object.prototype.propertyIsEnumerable, ce = Math.pow, le = (e, t, n) => t in e ? ie(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ue = (e, t) => {
	for (var n in t ||= {}) oe.call(t, n) && le(e, n, t[n]);
	if (ae) for (var n of ae(t)) se.call(t, n) && le(e, n, t[n]);
	return e;
}, x = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, S = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, C = () => void 0, de = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = E(e);
		return r === E(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = T(e), a = T(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, fe = (e, t, n = C) => {
	let r = [];
	if (!de(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!de(pe(e.x, t), pe(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !w(o, i) || !w(a, i)) return !1;
			let s = a[i];
			if (!w(o, i) || !de(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, w = (e, t) => Object.prototype.hasOwnProperty.call(e, t), pe = (e, t) => w(e, t) ? e[t] : void 0, me = 16383, he = 1e3, T = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > he) throw new S(`Member name too long (maximum ${he} characters)`);
	return t;
}, E = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, ge = (e) => e instanceof RangeError && /call stack/i.test(e.message), D = (e) => Array.isArray(e), _e = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), O = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, k = (e) => typeof e == "number", A = (e) => typeof e == "string", ve = (e) => e === void 0, j = (e) => e !== void 0;
function ye(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function be(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function xe(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var Se = class extends SyntaxError {
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
function Ce(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: Rr }, a = Rr, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", g = "true", _ = "false", v = "null", te = /^[,\]]/, y = /^[+\-]/, b = /^[*\/]/, ne = /^[a-zA-Z_]/, re = /^[\x80-\uFFFF_]/, ie = /^[a-zA-Z0-9_]/, ae = /^[0-9@$\-]/, oe = /^[^\/\\]/, se = /^[gimsuy]/, ce = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, le = /^[\uD800-\uDBFF]/, ue = /^[\uDC00-\uDFFF]/, x = /^[0-9]/, S = /^[1-9]/, C = /^[eE]/, de = /^["\\]/, fe = /^['\\]/, w = /^[ -\uD7FF\uE000-\uFFFF]/, pe = /^[dD]/, me = /^[89abAB]/, he = /^[c-fC-F]/, T = /^[0-9a-fA-F]/, E = /^[ \t\n\r]/, ge = J([",", "]"], !1, !1, !1), D = q("length", !1), _e = q("count", !1), O = q("match", !1), k = q("search", !1), A = q("value", !1), ve = J(["+", "-"], !1, !1, !1), j = J(["*", "/"], !1, !1, !1), Ce = Nr("string"), we = J([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), Te = J([["", "￿"], "_"], !1, !1, !1), M = J([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), Ee = q("-", !1), De = J([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), Oe = q("$", !1), ke = q("@", !1), Ae = q("..", !1), je = q(".", !1), Me = q("*", !1), Ne = q("&&", !1), Pe = q("||", !1), Fe = q("!", !1), Ie = q("==", !1), Le = q("!=", !1), Re = q(">=", !1), ze = q(">", !1), Be = q("<=", !1), Ve = q("<", !1), He = q("=~", !1), Ue = q("in", !1), We = q("nin", !1), Ge = q("subsetof", !1), Ke = q("anyof", !1), N = q("noneof", !1), qe = q("sizeof", !1), Je = q("size", !1), Ye = q("empty", !1), Xe = q("true", !1), Ze = q("false", !1), Qe = q("null", !1), $e = q("{", !1), et = q("}", !1), tt = q("[", !1), nt = q("]", !1), rt = q(":", !1), it = q(",", !1), at = q("(", !1), ot = q(")", !1), st = q("?", !1), ct = Nr("regex"), lt = q("/", !1), ut = J(["/", "\\"], !0, !1, !1), P = q("\\", !1), F = jr(), dt = J([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), ft = J([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), pt = J([["\ud800", "\udbff"]], !1, !1, !1), mt = J([["\udc00", "\udfff"]], !1, !1, !1), I = J([["0", "9"]], !1, !1, !1), ht = Nr("number"), gt = q("0", !1), L = J([["1", "9"]], !1, !1, !1), _t = Nr("integer"), vt = J(["e", "E"], !1, !1, !1), yt = q("\"", !1), bt = q("'", !1), xt = J(["\"", "\\"], !1, !1, !1), St = J(["'", "\\"], !1, !1, !1), Ct = J([[" ", "퟿"], ["", "￿"]], !1, !1, !1), wt = q("b", !1), Tt = q("f", !1), Et = q("n", !1), Dt = q("r", !1), Ot = q("t", !1), kt = q("u", !1), At = J(["d", "D"], !1, !1, !1), jt = J([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), Mt = q("\\u", !1), Nt = J([["c", "f"], ["C", "F"]], !1, !1, !1), Pt = J([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), Ft = J([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function It(e) {
		return {
			type: "root",
			next: ye(e)
		};
	}
	function Lt(e) {
		return e.map((e) => e[1]);
	}
	function Rt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function zt(e) {
		return e;
	}
	function Bt(e) {
		return {
			type: "dotdot",
			value: e
		};
	}
	function Vt() {
		return { type: "wildcard" };
	}
	function R(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function z() {
		return { type: "wildcard" };
	}
	function Ht(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function B(e) {
		return e;
	}
	function Ut(e) {
		return e;
	}
	function Wt(e, t) {
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
	function Gt(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function Kt(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function qt(e, t) {
		return xe(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function Jt(e, t) {
		return xe(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function Yt(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function Xt(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function Zt(e, t) {
		return t !== null || be(e);
	}
	function Qt(e, t) {
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
	function V(e, t) {
		return {
			operator: e,
			right: t
		};
	}
	function $t(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function en() {
		return { operator: "empty" };
	}
	function tn() {
		return "eq";
	}
	function nn() {
		return "ne";
	}
	function rn() {
		return "le";
	}
	function an() {
		return "lt";
	}
	function on() {
		return "ge";
	}
	function sn() {
		return "gt";
	}
	function cn() {
		return "in";
	}
	function ln() {
		return "nin";
	}
	function un() {
		return "subsetof";
	}
	function dn() {
		return "anyof";
	}
	function fn() {
		return "noneof";
	}
	function pn() {
		return "sizeof";
	}
	function mn() {
		return "size";
	}
	function hn(e) {
		return {
			type: "groupExpression",
			value: e
		};
	}
	function gn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function _n() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function vn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function yn(e, t) {
		return {
			type: "functionCall",
			name: e,
			args: t || []
		};
	}
	function bn() {
		return "length";
	}
	function xn() {
		return "count";
	}
	function Sn() {
		return "match";
	}
	function Cn() {
		return "search";
	}
	function wn() {
		return "value";
	}
	function Tn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function En(e, t) {
		return t.length === 0 ? e : xe(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function Dn(e, t) {
		return t.length === 0 ? e : xe(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "*" ? "multi" : "div",
			left: e,
			right: t[3]
		}));
	}
	function On(e) {
		return {
			type: "groupOperation",
			value: e
		};
	}
	function kn(e) {
		return {
			type: "root",
			next: ye(e)
		};
	}
	function An(e) {
		return {
			type: "current",
			next: ye(e)
		};
	}
	function jn(e, t, n) {
		return {
			type: "slices",
			start: e === null ? null : e[0],
			end: t === null ? null : t[0],
			step: n ? n[2] === null ? null : n[2] : null
		};
	}
	function Mn() {
		return { type: "wildcard" };
	}
	function Nn(e) {
		return {
			type: "numericLiteral",
			value: e
		};
	}
	function Pn(e) {
		return {
			type: "stringLiteral",
			value: _a(e)
		};
	}
	function Fn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function In(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function Ln(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function Rn(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function zn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Bn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Vn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function Hn(e) {
		return e;
	}
	function Un(e) {
		for (let [t] of e || []) _a(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function Wn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function Gn(e, t) {
		return [e, t.value];
	}
	function Kn(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function qn(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function Jn(e) {
		return _a(e);
	}
	function Yn(e) {
		return _a(e);
	}
	function Xn() {
		return "true";
	}
	function Zn() {
		return "false";
	}
	function Qn() {
		return "null";
	}
	function $n(e) {
		return _a(e);
	}
	function er() {
		return "true";
	}
	function tr() {
		return "false";
	}
	function nr() {
		return "null";
	}
	function rr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function ir(e) {
		return e.join("");
	}
	function ar(e, t) {
		let n = parseFloat(Or());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && kr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function or() {
		let e = parseInt(Or(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && kr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function sr(e) {
		return e.join("");
	}
	function cr(e) {
		return e.join("");
	}
	function lr(e) {
		return e;
	}
	function ur() {
		return "\"";
	}
	function dr(e) {
		return e;
	}
	function fr(e) {
		return e;
	}
	function pr() {
		return "'";
	}
	function mr(e) {
		return e;
	}
	function hr() {
		return "\\";
	}
	function gr() {
		return "/";
	}
	function _r() {
		return "\b";
	}
	function vr() {
		return "\f";
	}
	function yr() {
		return "\n";
	}
	function br() {
		return "\r";
	}
	function xr() {
		return "	";
	}
	function Sr(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function Cr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function wr(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let H = t.peg$currPos | 0, U = H, W = [{
		line: 1,
		column: 1
	}], G = H, Tr = t.peg$maxFailExpected || [], K = t.peg$silentFails | 0, Er = /* @__PURE__ */ new Map(), Dr;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function Or() {
		return e.substring(U, H);
	}
	function kr(e, t) {
		throw t = t === void 0 ? Fr(U, H) : t, Ir(e, t);
	}
	function Ar(t = H) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function q(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function J(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function jr() {
		return { type: "any" };
	}
	function Mr() {
		return { type: "end" };
	}
	function Nr(e) {
		return {
			type: "other",
			description: e
		};
	}
	function Pr(t) {
		let n = W[t], r;
		if (n) return n;
		if (t >= W.length) r = W.length - 1;
		else for (r = t; !W[--r];);
		for (n = W[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return W[t] = n, n;
	}
	function Fr(e, t, n) {
		let i = Pr(e), a = Pr(t), o = {
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
	function Y(e) {
		H < G || (H > G && (G = H, Tr = []), Tr.push(e));
	}
	function Ir(e, t) {
		return new Se(e, null, null, t);
	}
	function Lr(e, t, n) {
		return new Se(Se.buildMessage(e, t), e, t, n);
	}
	function Rr() {
		let e, t, r, i;
		return e = H, t = Si(), t === n ? (H = e, e = n) : (r = zr(), i = ga(), i === n ? (H = e, e = n) : (U = e, e = It(r))), e;
	}
	function zr() {
		let e, t, r, i, a;
		for (e = H, t = [], r = H, i = $(), a = Br(), a === n ? (H = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = H, i = $(), a = Br(), a === n ? (H = r, r = n) : (i = [i, a], r = i);
		return U = e, t = Lt(t), e = t, e;
	}
	function Br() {
		let e;
		return e = Hr(), e === n && (e = Vr()), e;
	}
	function Vr() {
		let e, t, r;
		return e = H, t = Ti(), t === n ? (H = e, e = n) : (r = Ur(), r === n ? (H = e, e = n) : (U = e, e = Rt(r))), e === n && (e = H, t = Gr(), t !== n && (U = e, t = zt(t)), e = t), e;
	}
	function Hr() {
		let e, t, r;
		return e = H, t = wi(), t === n ? (H = e, e = n) : (r = Wr(), r === n ? (H = e, e = n) : (U = e, e = Bt(r))), e;
	}
	function Ur() {
		let e, t;
		return e = H, t = Ei(), t !== n && (U = e, t = Vt()), e = t, e === n && (e = H, t = xi(), t !== n && (U = e, t = R(t)), e = t), e;
	}
	function Wr() {
		let e, t;
		return e = H, t = Ei(), t !== n && (U = e, t = z()), e = t, e === n && (e = H, t = xi(), t !== n && (U = e, t = Ht(t)), e = t, e === n && (e = H, t = Gr(), t !== n && (U = e, t = B(t)), e = t)), e;
	}
	function Gr() {
		let e, t, r, i;
		return e = H, t = Xi(), t === n ? (H = e, e = n) : ($(), r = Kr(), r === n ? (H = e, e = n) : ($(), i = Zi(), i === n ? (H = e, e = n) : (U = e, e = Ut(r)))), e;
	}
	function Kr() {
		let e, t, r, i, a, o, s, c;
		if (e = H, t = ui(), t !== n) {
			for (r = [], i = H, a = $(), o = X(), o === n ? (H = i, i = n) : (s = $(), c = ui(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = H, a = $(), o = X(), o === n ? (H = i, i = n) : (s = $(), c = ui(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			U = e, e = Wt(t, r);
		} else H = e, e = n;
		return e;
	}
	function qr() {
		let t, r, i, a, o, s, c, l, u;
		return t = H, r = ta(), r === n ? (H = t, t = n) : ($(), i = $i(), i === n ? (H = t, t = n) : ($(), a = Jr(), a === n ? (H = t, t = n) : ($(), o = ea(), o === n ? (H = t, t = n) : (s = H, K++, c = H, l = $(), u = e.charAt(H), te.test(u) ? H++ : (u = n, K === 0 && Y(ge)), u === n ? (H = c, c = n) : (l = [l, u], c = l), K--, c === n ? s = n : (H = s, s = void 0), s === n ? (H = t, t = n) : (U = t, t = Gt(a)))))), t === n && (t = H, r = ta(), r === n ? (H = t, t = n) : ($(), i = Jr(), i === n ? (H = t, t = n) : (U = t, t = Kt(i)))), t;
	}
	function Jr() {
		let e, t, r, i, a, o, s, c, l = H * 91 + 10, u = Er.get(l);
		if (u) return H = u.nextPos, u.result;
		if (e = H, t = Yr(), t !== n) {
			for (r = [], i = H, a = $(), o = Oi(), o === n ? (H = i, i = n) : (s = $(), c = Yr(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = H, a = $(), o = Oi(), o === n ? (H = i, i = n) : (s = $(), c = Yr(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			U = e, e = qt(t, r);
		} else H = e, e = n;
		return Er.set(l, {
			nextPos: H,
			result: e
		}), e;
	}
	function Yr() {
		let e, t, r, i, a, o, s, c;
		if (e = H, t = Xr(), t !== n) {
			for (r = [], i = H, a = $(), o = Di(), o === n ? (H = i, i = n) : (s = $(), c = Xr(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = H, a = $(), o = Di(), o === n ? (H = i, i = n) : (s = $(), c = Xr(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			U = e, e = Jt(t, r);
		} else H = e, e = n;
		return e;
	}
	function Xr() {
		let e, t, r, i, a;
		return e = H, t = ki(), t === n ? (H = e, e = n) : ($(), r = $i(), r === n ? (H = e, e = n) : ($(), i = Jr(), i === n ? (H = e, e = n) : ($(), a = ea(), a === n ? (H = e, e = n) : (U = e, e = Yt(i))))), e === n && (e = H, t = ki(), t === n ? (H = e, e = n) : ($(), r = ei(), r === n ? (H = e, e = n) : (U = e, e = Xt(r))), e === n && (e = Zr())), e;
	}
	function Zr() {
		let e, t, r, i, a;
		return e = H, t = ai(), t === n ? (H = e, e = n) : (r = H, i = $(), a = Qr(), a === n ? (H = r, r = n) : (i = [i, a], r = i), r === n && (r = null), U = H, i = Zt(t, r), i = i ? void 0 : n, i === n ? (H = e, e = n) : (U = e, e = Qt(t, r))), e === n && (e = ei()), e;
	}
	function Qr() {
		let e, t, r;
		return e = H, t = $r(), t === n ? (H = e, e = n) : ($(), r = ai(), r === n ? (H = e, e = n) : (U = e, e = V(t, r))), e === n && (e = H, t = Ii(), t === n ? (H = e, e = n) : ($(), r = di(), r === n ? (H = e, e = n) : (U = e, e = $t(r))), e === n && (e = H, t = Wi(), t !== n && (U = e, t = en()), e = t)), e;
	}
	function $r() {
		let e, t;
		return e = H, t = Ai(), t !== n && (U = e, t = tn()), e = t, e === n && (e = H, t = ji(), t !== n && (U = e, t = nn()), e = t, e === n && (e = H, t = Pi(), t !== n && (U = e, t = rn()), e = t, e === n && (e = H, t = Fi(), t !== n && (U = e, t = an()), e = t, e === n && (e = H, t = Mi(), t !== n && (U = e, t = on()), e = t, e === n && (e = H, t = Ni(), t !== n && (U = e, t = sn()), e = t, e === n && (e = H, t = Li(), t !== n && (U = e, t = cn()), e = t, e === n && (e = H, t = Ri(), t !== n && (U = e, t = ln()), e = t, e === n && (e = H, t = zi(), t !== n && (U = e, t = un()), e = t, e === n && (e = H, t = Bi(), t !== n && (U = e, t = dn()), e = t, e === n && (e = H, t = Vi(), t !== n && (U = e, t = fn()), e = t, e === n && (e = H, t = Hi(), t !== n && (U = e, t = pn()), e = t, e === n && (e = H, t = Ui(), t !== n && (U = e, t = mn()), e = t)))))))))))), e;
	}
	function ei() {
		let e, t, r, i;
		return e = H, t = $i(), t === n ? (H = e, e = n) : ($(), r = Jr(), r === n ? (H = e, e = n) : ($(), i = ea(), i === n ? (H = e, e = n) : (U = e, e = hn(r)))), e === n && (e = ti(), e === n && (e = ci(), e === n && (e = H, t = Gi(), t !== n && (U = e, t = gn()), e = t, e === n && (e = H, t = Ki(), t !== n && (U = e, t = _n()), e = t, e === n && (e = H, t = qi(), t !== n && (U = e, t = vn()), e = t))))), e;
	}
	function ti() {
		let e, t, r, i, a;
		return e = H, t = ni(), t === n ? (H = e, e = n) : (r = $i(), r === n ? (H = e, e = n) : ($(), i = ri(), i === n && (i = null), $(), a = ea(), a === n ? (H = e, e = n) : (U = e, e = yn(t, i)))), e;
	}
	function ni() {
		let t, r;
		return t = H, e.substr(H, 6) === o ? (r = o, H += 6) : (r = n, K === 0 && Y(D)), r !== n && (U = t, r = bn()), t = r, t === n && (t = H, e.substr(H, 5) === s ? (r = s, H += 5) : (r = n, K === 0 && Y(_e)), r !== n && (U = t, r = xn()), t = r, t === n && (t = H, e.substr(H, 5) === c ? (r = c, H += 5) : (r = n, K === 0 && Y(O)), r !== n && (U = t, r = Sn()), t = r, t === n && (t = H, e.substr(H, 6) === l ? (r = l, H += 6) : (r = n, K === 0 && Y(k)), r !== n && (U = t, r = Cn()), t = r, t === n && (t = H, e.substr(H, 5) === u ? (r = u, H += 5) : (r = n, K === 0 && Y(A)), r !== n && (U = t, r = wn()), t = r)))), t;
	}
	function ri() {
		let e, t, r, i, a, o, s, c;
		if (e = H, t = ii(), t !== n) {
			for (r = [], i = H, a = $(), o = X(), o === n ? (H = i, i = n) : (s = $(), c = ii(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = H, a = $(), o = X(), o === n ? (H = i, i = n) : (s = $(), c = ii(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			U = e, e = Tn(t, r);
		} else H = e, e = n;
		return e;
	}
	function ii() {
		let e;
		return e = ai(), e === n && (e = pi()), e;
	}
	function ai() {
		let t, r, i, a, o, s, c, l, u = H * 91 + 21, d = Er.get(u);
		if (d) return H = d.nextPos, d.result;
		if (t = H, r = oi(), r !== n) {
			for (i = [], a = H, o = $(), s = e.charAt(H), y.test(s) ? H++ : (s = n, K === 0 && Y(ve)), s === n ? (H = a, a = n) : (c = $(), l = oi(), l === n ? (H = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = H, o = $(), s = e.charAt(H), y.test(s) ? H++ : (s = n, K === 0 && Y(ve)), s === n ? (H = a, a = n) : (c = $(), l = oi(), l === n ? (H = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			U = t, t = En(r, i);
		} else H = t, t = n;
		return Er.set(u, {
			nextPos: H,
			result: t
		}), t;
	}
	function oi() {
		let t, r, i, a, o, s, c, l;
		if (t = H, r = si(), r !== n) {
			for (i = [], a = H, o = $(), s = e.charAt(H), b.test(s) ? H++ : (s = n, K === 0 && Y(j)), s === n ? (H = a, a = n) : (c = $(), l = si(), l === n ? (H = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = H, o = $(), s = e.charAt(H), b.test(s) ? H++ : (s = n, K === 0 && Y(j)), s === n ? (H = a, a = n) : (c = $(), l = si(), l === n ? (H = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			U = t, t = Dn(r, i);
		} else H = t, t = n;
		return t;
	}
	function si() {
		let e, t, r, i;
		return e = H, t = $i(), t === n ? (H = e, e = n) : ($(), r = ai(), r === n ? (H = e, e = n) : ($(), i = ea(), i === n ? (H = e, e = n) : (U = e, e = On(r)))), e === n && (e = ti(), e === n && (e = fi(), e === n && (e = ci()))), e;
	}
	function ci() {
		let e, t, r;
		return e = H, t = Si(), t === n ? (H = e, e = n) : (r = zr(), r === n ? (H = e, e = n) : (U = e, e = kn(r))), e === n && (e = H, t = Ci(), t === n ? (H = e, e = n) : (r = zr(), r === n ? (H = e, e = n) : (U = e, e = An(r)))), e;
	}
	function li() {
		let e, t, r, i, a, o, s, c, l;
		return e = H, t = H, r = la(), r === n ? (H = t, t = n) : (i = $(), r = [r, i], t = r), t === n && (t = null), r = Qi(), r === n ? (H = e, e = n) : (i = $(), a = H, o = la(), o === n ? (H = a, a = n) : (s = $(), o = [o, s], a = o), a === n && (a = null), o = H, s = Qi(), s === n ? (H = o, o = n) : (c = $(), l = la(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), U = e, e = jn(t, a, o)), e;
	}
	function ui() {
		let e, t;
		return e = qr(), e === n && (e = li(), e === n && (e = H, t = Ei(), t !== n && (U = e, t = Mn()), e = t, e === n && (e = H, t = la(), t !== n && (U = e, t = Nn(t)), e = t, e === n && (e = H, t = da(), t !== n && (U = e, t = Pn(t)), e = t, e === n && (e = H, t = yi(), t !== n && (U = e, t = Fn(t)), e = t))))), e;
	}
	function di() {
		let e, t, r;
		return e = H, t = na(), t === n ? (H = e, e = n) : (r = ra(), U = e, e = In(t, r)), e;
	}
	function fi() {
		let e, t;
		return e = H, t = pi(), t !== n && (U = e, t = Ln(t)), e = t, e === n && (e = H, t = sa(), t !== n && (U = e, t = Rn(t)), e = t, e === n && (e = mi(), e === n && (e = _i(), e === n && (e = H, t = Gi(), t !== n && (U = e, t = zn()), e = t, e === n && (e = H, t = Ki(), t !== n && (U = e, t = Bn()), e = t, e === n && (e = H, t = qi(), t !== n && (U = e, t = Vn()), e = t)))))), e;
	}
	function pi() {
		let e, t;
		return K++, e = H, t = da(), t !== n && (U = e, t = Hn(t)), e = t, K--, e === n && (t = n, K === 0 && Y(Ce)), e;
	}
	function mi() {
		let e, t, r, i;
		return e = H, t = Ji(), t === n ? (H = e, e = n) : ($(), r = hi(), r === n && (r = null), $(), i = Yi(), i === n ? (H = e, e = n) : (U = e, e = Un(r))), e;
	}
	function hi() {
		let e, t, r, i, a, o, s, c;
		if (e = H, t = gi(), t !== n) {
			for (r = [], i = H, a = $(), o = X(), o === n ? (H = i, i = n) : (s = $(), c = gi(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = H, a = $(), o = X(), o === n ? (H = i, i = n) : (s = $(), c = gi(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			U = e, e = Wn(t, r);
		} else H = e, e = n;
		return e;
	}
	function gi() {
		let e, t, r, i;
		return e = H, t = da(), t === n ? (H = e, e = n) : ($(), r = Qi(), r === n ? (H = e, e = n) : ($(), i = fi(), i === n ? (H = e, e = n) : (U = e, e = Gn(t, i)))), e;
	}
	function _i() {
		let e, t, r, i;
		return e = H, t = Xi(), t === n ? (H = e, e = n) : ($(), r = vi(), r === n && (r = null), $(), i = Zi(), i === n ? (H = e, e = n) : (U = e, e = Kn(r))), e;
	}
	function vi() {
		let e, t, r, i, a, o, s, c;
		if (e = H, t = fi(), t !== n) {
			for (r = [], i = H, a = $(), o = X(), o === n ? (H = i, i = n) : (s = $(), c = fi(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = H, a = $(), o = X(), o === n ? (H = i, i = n) : (s = $(), c = fi(), c === n ? (H = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			U = e, e = qn(t, r);
		} else H = e, e = n;
		return e;
	}
	function yi() {
		let t, r, i, a, o, s;
		if (t = H, r = H, i = H, a = e.charAt(H), ne.test(a) ? H++ : (a = n, K === 0 && Y(we)), a !== n) {
			for (o = [], s = bi(); s !== n;) o.push(s), s = bi();
			a = [a, o], i = a;
		} else H = i, i = n;
		if (r = i === n ? i : e.substring(r, H), r !== n && (U = t, r = Jn(r)), t = r, t === n) {
			if (t = H, r = H, i = [], a = e.charAt(H), re.test(a) ? H++ : (a = n, K === 0 && Y(Te)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(H), re.test(a) ? H++ : (a = n, K === 0 && Y(Te));
			else i = n;
			r = i === n ? i : e.substring(r, H), r !== n && (U = t, r = Yn(r)), t = r, t === n && (t = H, r = Gi(), r !== n && (U = t, r = Xn()), t = r, t === n && (t = H, r = Ki(), r !== n && (U = t, r = Zn()), t = r, t === n && (t = H, r = qi(), r !== n && (U = t, r = Qn()), t = r)));
		}
		return t;
	}
	function bi() {
		let t, r, i, a;
		return t = e.charAt(H), ie.test(t) ? H++ : (t = n, K === 0 && Y(M)), t === n && (t = H, e.charCodeAt(H) === 45 ? (r = "-", H++) : (r = n, K === 0 && Y(Ee)), r === n ? (H = t, t = n) : (i = H, K++, a = e.charAt(H), ae.test(a) ? H++ : (a = n, K === 0 && Y(De)), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r))), t;
	}
	function xi() {
		let e, t;
		return e = H, t = ia(), t !== n && (U = e, t = $n(t)), e = t, e === n && (e = H, t = Gi(), t !== n && (U = e, t = er()), e = t, e === n && (e = H, t = Ki(), t !== n && (U = e, t = tr()), e = t, e === n && (e = H, t = qi(), t !== n && (U = e, t = nr()), e = t))), e;
	}
	function Si() {
		let t;
		return e.charCodeAt(H) === 36 ? (t = "$", H++) : (t = n, K === 0 && Y(Oe)), t;
	}
	function Ci() {
		let t;
		return e.charCodeAt(H) === 64 ? (t = "@", H++) : (t = n, K === 0 && Y(ke)), t;
	}
	function wi() {
		let t;
		return e.substr(H, 2) === ".." ? (t = "..", H += 2) : (t = n, K === 0 && Y(Ae)), t;
	}
	function Ti() {
		let t;
		return e.charCodeAt(H) === 46 ? (t = ".", H++) : (t = n, K === 0 && Y(je)), t;
	}
	function Ei() {
		let t;
		return e.charCodeAt(H) === 42 ? (t = "*", H++) : (t = n, K === 0 && Y(Me)), t;
	}
	function Di() {
		let t;
		return e.substr(H, 2) === "&&" ? (t = "&&", H += 2) : (t = n, K === 0 && Y(Ne)), t;
	}
	function Oi() {
		let t;
		return e.substr(H, 2) === "||" ? (t = "||", H += 2) : (t = n, K === 0 && Y(Pe)), t;
	}
	function ki() {
		let t;
		return e.charCodeAt(H) === 33 ? (t = "!", H++) : (t = n, K === 0 && Y(Fe)), t;
	}
	function Ai() {
		let t;
		return e.substr(H, 2) === "==" ? (t = "==", H += 2) : (t = n, K === 0 && Y(Ie)), t;
	}
	function ji() {
		let t;
		return e.substr(H, 2) === "!=" ? (t = "!=", H += 2) : (t = n, K === 0 && Y(Le)), t;
	}
	function Mi() {
		let t;
		return e.substr(H, 2) === ">=" ? (t = ">=", H += 2) : (t = n, K === 0 && Y(Re)), t;
	}
	function Ni() {
		let t;
		return e.charCodeAt(H) === 62 ? (t = ">", H++) : (t = n, K === 0 && Y(ze)), t;
	}
	function Pi() {
		let t;
		return e.substr(H, 2) === "<=" ? (t = "<=", H += 2) : (t = n, K === 0 && Y(Be)), t;
	}
	function Fi() {
		let t;
		return e.charCodeAt(H) === 60 ? (t = "<", H++) : (t = n, K === 0 && Y(Ve)), t;
	}
	function Ii() {
		let t;
		return e.substr(H, 2) === "=~" ? (t = "=~", H += 2) : (t = n, K === 0 && Y(He)), t;
	}
	function Li() {
		let t, r, i, a;
		return t = H, e.substr(H, 2) === "in" ? (r = "in", H += 2) : (r = n, K === 0 && Y(Ue)), r === n ? (H = t, t = n) : (i = H, K++, a = Q(), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ri() {
		let t, r, i, a;
		return t = H, e.substr(H, 3) === "nin" ? (r = "nin", H += 3) : (r = n, K === 0 && Y(We)), r === n ? (H = t, t = n) : (i = H, K++, a = Q(), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r)), t;
	}
	function zi() {
		let t, r, i, a;
		return t = H, e.substr(H, 8) === d ? (r = d, H += 8) : (r = n, K === 0 && Y(Ge)), r === n ? (H = t, t = n) : (i = H, K++, a = Q(), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Bi() {
		let t, r, i, a;
		return t = H, e.substr(H, 5) === f ? (r = f, H += 5) : (r = n, K === 0 && Y(Ke)), r === n ? (H = t, t = n) : (i = H, K++, a = Q(), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = H, e.substr(H, 6) === p ? (r = p, H += 6) : (r = n, K === 0 && Y(N)), r === n ? (H = t, t = n) : (i = H, K++, a = Q(), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = H, e.substr(H, 6) === m ? (r = m, H += 6) : (r = n, K === 0 && Y(qe)), r === n ? (H = t, t = n) : (i = H, K++, a = Q(), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = H, e.substr(H, 4) === ee ? (r = ee, H += 4) : (r = n, K === 0 && Y(Je)), r === n ? (H = t, t = n) : (i = H, K++, a = Q(), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = H, e.substr(H, 5) === h ? (r = h, H += 5) : (r = n, K === 0 && Y(Ye)), r === n ? (H = t, t = n) : (i = H, K++, a = Q(), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = H, e.substr(H, 4) === g ? (r = g, H += 4) : (r = n, K === 0 && Y(Xe)), r === n ? (H = t, t = n) : (i = H, K++, a = Q(), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = H, e.substr(H, 5) === _ ? (r = _, H += 5) : (r = n, K === 0 && Y(Ze)), r === n ? (H = t, t = n) : (i = H, K++, a = Q(), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = H, e.substr(H, 4) === v ? (r = v, H += 4) : (r = n, K === 0 && Y(Qe)), r === n ? (H = t, t = n) : (i = H, K++, a = Q(), K--, a === n ? i = void 0 : (H = i, i = n), i === n ? (H = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t;
		return e.charCodeAt(H) === 123 ? (t = "{", H++) : (t = n, K === 0 && Y($e)), t;
	}
	function Yi() {
		let t;
		return e.charCodeAt(H) === 125 ? (t = "}", H++) : (t = n, K === 0 && Y(et)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(H) === 91 ? (t = "[", H++) : (t = n, K === 0 && Y(tt)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(H) === 93 ? (t = "]", H++) : (t = n, K === 0 && Y(nt)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(H) === 58 ? (t = ":", H++) : (t = n, K === 0 && Y(rt)), t;
	}
	function X() {
		let t;
		return e.charCodeAt(H) === 44 ? (t = ",", H++) : (t = n, K === 0 && Y(it)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(H) === 40 ? (t = "(", H++) : (t = n, K === 0 && Y(at)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(H) === 41 ? (t = ")", H++) : (t = n, K === 0 && Y(ot)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(H) === 63 ? (t = "?", H++) : (t = n, K === 0 && Y(st)), t;
	}
	function na() {
		let t, r, i, a, o, s;
		if (K++, t = H, e.charCodeAt(H) === 47 ? (r = "/", H++) : (r = n, K === 0 && Y(lt)), r !== n) {
			for (i = [], a = e.charAt(H), oe.test(a) ? H++ : (a = n, K === 0 && Y(ut)), a === n && (a = H, e.charCodeAt(H) === 92 ? (o = "\\", H++) : (o = n, K === 0 && Y(P)), o === n ? (H = a, a = n) : (e.length > H ? (s = e.charAt(H), H++) : (s = n, K === 0 && Y(F)), s === n ? (H = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(H), oe.test(a) ? H++ : (a = n, K === 0 && Y(ut)), a === n && (a = H, e.charCodeAt(H) === 92 ? (o = "\\", H++) : (o = n, K === 0 && Y(P)), o === n ? (H = a, a = n) : (e.length > H ? (s = e.charAt(H), H++) : (s = n, K === 0 && Y(F)), s === n ? (H = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(H) === 47 ? (a = "/", H++) : (a = n, K === 0 && Y(lt)), a === n ? (H = t, t = n) : (U = t, t = rr(i));
		} else H = t, t = n;
		return K--, t === n && (r = n, K === 0 && Y(ct)), t;
	}
	function ra() {
		let t, r, i;
		for (t = H, r = [], i = e.charAt(H), se.test(i) ? H++ : (i = n, K === 0 && Y(dt)); i !== n;) r.push(i), i = e.charAt(H), se.test(i) ? H++ : (i = n, K === 0 && Y(dt));
		return U = t, r = ir(r), t = r, t;
	}
	function ia() {
		let t, r, i, a, o;
		if (t = H, r = H, i = aa(), i !== n) {
			for (a = [], o = oa(); o !== n;) a.push(o), o = oa();
			i = [i, a], r = i;
		} else H = r, r = n;
		return t = r === n ? r : e.substring(t, H), t;
	}
	function aa() {
		let t, r, i;
		return t = e.charAt(H), ce.test(t) ? H++ : (t = n, K === 0 && Y(ft)), t === n && (t = H, r = e.charAt(H), le.test(r) ? H++ : (r = n, K === 0 && Y(pt)), r === n ? (H = t, t = n) : (i = e.charAt(H), ue.test(i) ? H++ : (i = n, K === 0 && Y(mt)), i === n ? (H = t, t = n) : (r = [r, i], t = r))), t;
	}
	function oa() {
		let t;
		return t = aa(), t === n && (t = e.charAt(H), x.test(t) ? H++ : (t = n, K === 0 && Y(I))), t;
	}
	function sa() {
		let t, r, i, a, o, s, c;
		if (K++, t = H, e.charCodeAt(H) === 45 ? (r = "-", H++) : (r = n, K === 0 && Y(Ee)), r === n && (r = null), i = ca(), i !== n) {
			if (a = H, e.charCodeAt(H) === 46 ? (o = ".", H++) : (o = n, K === 0 && Y(je)), o !== n) {
				if (s = [], c = e.charAt(H), x.test(c) ? H++ : (c = n, K === 0 && Y(I)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(H), x.test(c) ? H++ : (c = n, K === 0 && Y(I));
				else s = n;
				s === n ? (H = a, a = n) : (o = [o, s], a = o);
			} else H = a, a = n;
			a === n && (a = null), o = ua(), o === n && (o = null), U = t, t = ar(a, o);
		} else H = t, t = n;
		return K--, t === n && (r = n, K === 0 && Y(ht)), t;
	}
	function ca() {
		let t, r, i, a;
		if (e.charCodeAt(H) === 48 ? (t = "0", H++) : (t = n, K === 0 && Y(gt)), t === n) {
			if (t = H, r = e.charAt(H), S.test(r) ? H++ : (r = n, K === 0 && Y(L)), r !== n) {
				for (i = [], a = e.charAt(H), x.test(a) ? H++ : (a = n, K === 0 && Y(I)); a !== n;) i.push(a), a = e.charAt(H), x.test(a) ? H++ : (a = n, K === 0 && Y(I));
				r = [r, i], t = r;
			} else H = t, t = n;
		}
		return t;
	}
	function la() {
		let t, r, i, a, o, s;
		if (K++, t = H, e.charCodeAt(H) === 48 ? (r = "0", H++) : (r = n, K === 0 && Y(gt)), r === n) {
			if (r = H, e.charCodeAt(H) === 45 ? (i = "-", H++) : (i = n, K === 0 && Y(Ee)), i === n && (i = null), a = e.charAt(H), S.test(a) ? H++ : (a = n, K === 0 && Y(L)), a !== n) {
				for (o = [], s = e.charAt(H), x.test(s) ? H++ : (s = n, K === 0 && Y(I)); s !== n;) o.push(s), s = e.charAt(H), x.test(s) ? H++ : (s = n, K === 0 && Y(I));
				i = [
					i,
					a,
					o
				], r = i;
			} else H = r, r = n;
		}
		return r !== n && (U = t, r = or()), t = r, K--, t === n && (r = n, K === 0 && Y(_t)), t;
	}
	function ua() {
		let t, r, i, a, o;
		if (t = H, r = e.charAt(H), C.test(r) ? H++ : (r = n, K === 0 && Y(vt)), r !== n) {
			if (i = e.charAt(H), y.test(i) ? H++ : (i = n, K === 0 && Y(ve)), i === n && (i = null), a = [], o = e.charAt(H), x.test(o) ? H++ : (o = n, K === 0 && Y(I)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(H), x.test(o) ? H++ : (o = n, K === 0 && Y(I));
			else a = n;
			a === n ? (H = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else H = t, t = n;
		return t;
	}
	function da() {
		let t, r, i, a;
		if (K++, t = H, e.charCodeAt(H) === 34 ? (r = "\"", H++) : (r = n, K === 0 && Y(yt)), r !== n) {
			for (i = [], a = fa(); a !== n;) i.push(a), a = fa();
			e.charCodeAt(H) === 34 ? (a = "\"", H++) : (a = n, K === 0 && Y(yt)), a === n ? (H = t, t = n) : (U = t, t = sr(i));
		} else H = t, t = n;
		if (t === n) {
			if (t = H, e.charCodeAt(H) === 39 ? (r = "'", H++) : (r = n, K === 0 && Y(bt)), r !== n) {
				for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
				e.charCodeAt(H) === 39 ? (a = "'", H++) : (a = n, K === 0 && Y(bt)), a === n ? (H = t, t = n) : (U = t, t = cr(i));
			} else H = t, t = n;
		}
		return K--, t === n && (r = n, K === 0 && Y(Ce)), t;
	}
	function fa() {
		let t, r, i;
		return t = H, r = H, K++, i = e.charAt(H), de.test(i) ? H++ : (i = n, K === 0 && Y(xt)), K--, i === n ? r = void 0 : (H = r, r = n), r === n ? (H = t, t = n) : (i = ma(), i === n ? (H = t, t = n) : (U = t, t = lr(i))), t === n && (t = H, e.charCodeAt(H) === 92 ? (r = "\\", H++) : (r = n, K === 0 && Y(P)), r === n ? (H = t, t = n) : (e.charCodeAt(H) === 34 ? (i = "\"", H++) : (i = n, K === 0 && Y(yt)), i === n ? (H = t, t = n) : (U = t, t = ur())), t === n && (t = H, e.charCodeAt(H) === 92 ? (r = "\\", H++) : (r = n, K === 0 && Y(P)), r === n ? (H = t, t = n) : (i = ha(), i === n ? (H = t, t = n) : (U = t, t = dr(i))))), t;
	}
	function pa() {
		let t, r, i;
		return t = H, r = H, K++, i = e.charAt(H), fe.test(i) ? H++ : (i = n, K === 0 && Y(St)), K--, i === n ? r = void 0 : (H = r, r = n), r === n ? (H = t, t = n) : (i = ma(), i === n ? (H = t, t = n) : (U = t, t = fr(i))), t === n && (t = H, e.charCodeAt(H) === 92 ? (r = "\\", H++) : (r = n, K === 0 && Y(P)), r === n ? (H = t, t = n) : (e.charCodeAt(H) === 39 ? (i = "'", H++) : (i = n, K === 0 && Y(bt)), i === n ? (H = t, t = n) : (U = t, t = pr())), t === n && (t = H, e.charCodeAt(H) === 92 ? (r = "\\", H++) : (r = n, K === 0 && Y(P)), r === n ? (H = t, t = n) : (i = ha(), i === n ? (H = t, t = n) : (U = t, t = mr(i))))), t;
	}
	function ma() {
		let t, r, i, a;
		return t = e.charAt(H), w.test(t) ? H++ : (t = n, K === 0 && Y(Ct)), t === n && (t = H, r = H, i = e.charAt(H), le.test(i) ? H++ : (i = n, K === 0 && Y(pt)), i === n ? (H = r, r = n) : (a = e.charAt(H), ue.test(a) ? H++ : (a = n, K === 0 && Y(mt)), a === n ? (H = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, H)), t;
	}
	function ha() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = H, e.charCodeAt(H) === 92 ? (r = "\\", H++) : (r = n, K === 0 && Y(P)), r !== n && (U = t, r = hr()), t = r, t === n && (t = H, e.charCodeAt(H) === 47 ? (r = "/", H++) : (r = n, K === 0 && Y(lt)), r !== n && (U = t, r = gr()), t = r, t === n && (t = H, e.charCodeAt(H) === 98 ? (r = "b", H++) : (r = n, K === 0 && Y(wt)), r !== n && (U = t, r = _r()), t = r, t === n && (t = H, e.charCodeAt(H) === 102 ? (r = "f", H++) : (r = n, K === 0 && Y(Tt)), r !== n && (U = t, r = vr()), t = r, t === n && (t = H, e.charCodeAt(H) === 110 ? (r = "n", H++) : (r = n, K === 0 && Y(Et)), r !== n && (U = t, r = yr()), t = r, t === n && (t = H, e.charCodeAt(H) === 114 ? (r = "r", H++) : (r = n, K === 0 && Y(Dt)), r !== n && (U = t, r = br()), t = r, t === n && (t = H, e.charCodeAt(H) === 116 ? (r = "t", H++) : (r = n, K === 0 && Y(Ot)), r !== n && (U = t, r = xr()), t = r, t === n && (t = H, e.charCodeAt(H) === 117 ? (r = "u", H++) : (r = n, K === 0 && Y(kt)), r === n ? (H = t, t = n) : (i = H, a = H, o = e.charAt(H), pe.test(o) ? H++ : (o = n, K === 0 && Y(At)), o === n ? (H = a, a = n) : (s = e.charAt(H), me.test(s) ? H++ : (s = n, K === 0 && Y(jt)), s === n ? (H = a, a = n) : (c = Z(), c === n ? (H = a, a = n) : (l = Z(), l === n ? (H = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, H), i === n ? (H = t, t = n) : (e.substr(H, 2) === "\\u" ? (a = "\\u", H += 2) : (a = n, K === 0 && Y(Mt)), a === n ? (H = t, t = n) : (o = H, s = H, c = e.charAt(H), pe.test(c) ? H++ : (c = n, K === 0 && Y(At)), c === n ? (H = s, s = n) : (l = e.charAt(H), he.test(l) ? H++ : (l = n, K === 0 && Y(Nt)), l === n ? (H = s, s = n) : (u = Z(), u === n ? (H = s, s = n) : (d = Z(), d === n ? (H = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, H), o === n ? (H = t, t = n) : (U = t, t = Sr(i, o))))), t === n && (t = H, e.charCodeAt(H) === 117 ? (r = "u", H++) : (r = n, K === 0 && Y(kt)), r === n ? (H = t, t = n) : (i = H, a = H, o = Z(), o === n ? (H = a, a = n) : (s = Z(), s === n ? (H = a, a = n) : (c = Z(), c === n ? (H = a, a = n) : (l = Z(), l === n ? (H = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, H), i === n ? (H = t, t = n) : (U = H, a = Cr(i), a = a ? n : void 0, a === n ? (H = t, t = n) : (U = t, t = wr(i)))))))))))), t;
	}
	function Z() {
		let t;
		return t = e.charAt(H), T.test(t) ? H++ : (t = n, K === 0 && Y(Pt)), t;
	}
	function Q() {
		let t;
		return t = e.charAt(H), ie.test(t) ? H++ : (t = n, K === 0 && Y(M)), t;
	}
	function $() {
		let t, r;
		for (K++, t = [], r = e.charAt(H), E.test(r) ? H++ : (r = n, K === 0 && Y(Ft)); r !== n;) t.push(r), r = e.charAt(H), E.test(r) ? H++ : (r = n, K === 0 && Y(Ft));
		return K--, t;
	}
	function ga() {
		let t, r;
		return t = H, K++, e.length > H ? (r = e.charAt(H), H++) : (r = n, K === 0 && Y(F)), K--, r === n ? t = void 0 : (H = t, t = n), t;
	}
	function _a(e) {
		return e.length > 1e3 && kr("Member name too long (maximum 1000 characters)"), e;
	}
	Dr = a();
	let va = Dr !== n && H === e.length;
	function ya() {
		throw Dr !== n && H < e.length && Y(Mr()), Lr(Tr, G < e.length ? Ar(G) : null, G < e.length ? Fr(G, G + 1) : Fr(G, G));
	}
	if (t.peg$library) return {
		peg$result: Dr,
		peg$currPos: H,
		peg$FAILED: n,
		peg$maxFailExpected: Tr,
		peg$maxFailPos: G,
		peg$success: va,
		peg$throw: va ? void 0 : ya
	};
	if (va) return Dr;
	ya();
}
var we = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), Te = {
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
}, M = (e) => {
	throw new x(1, 1, e);
}, Ee = (e) => e.type === "root" || e.type === "current", De = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function Oe(e) {
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
		if (Ee(i)) r === "value" && !De(i) && M("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && M(`Expected a query, found ${String(i.type)}`), i.type) {
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
				let e = we.has(i.operator) ? "value" : "any";
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
				let e = i.name, n = Te[e], a = i.args;
				a.length !== n.args.length && M(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && M(`The result of ${e}() must be compared`), r === "value" && n.logical && M(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
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
			case "value": r === "test" && M("A literal must be compared");
		}
	}
}
function ke(e) {
	let t;
	try {
		t = Ce(e);
	} catch (e) {
		if (ge(e)) throw new x(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new x(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new x(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return Oe(t), t;
}
var Ae = /* @__PURE__ */ new Set([
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
]), je = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), Me = (e) => e >= 55296 && e <= 56319, Ne = (e) => e >= 56320 && e <= 57343, Pe = (e) => e !== void 0 && e >= "0" && e <= "9", Fe = (e, t) => {
	let n = e.charCodeAt(t);
	return Me(n) && Ne(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : Me(n) || Ne(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, Ie = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !Ae.has(n) ? null : n === "n" ? {
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
}, Le = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return je.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, Re = (e, t) => {
	let n = e[t];
	return n === "\\" ? Ie(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : Fe(e, t);
}, ze = (e, t) => {
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
			let t = Le(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = Re(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = Re(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, Be = (e, t) => {
	let n = t + 1, r = n;
	for (; Pe(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; Pe(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, Ve = (e) => {
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
				let e = i ? Be(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = ze(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = Le(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = Ie(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = Fe(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, He = 1e3, Ue = 1e3, We = 16, Ge = /^[dgimsuy]*$/, Ke = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, N = class extends Error {}, qe = 0, Je = 1, Ye = 2, Xe = 3, Ze = 4, Qe = 5, $e = ce(2, 31) - 1, et = (e, t) => {
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
	return e.scratch = void 0, (r.gen > $e - t - 2 || r.step > $e - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, tt = /* @__PURE__ */ new Set([
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
]), nt = /^\{(\d+)(?:,(\d*))?\}/, rt = /^[0-9a-fA-F]{4}/, it = /^\(\?([ims]*)(?:-([ims]*))?:/, at = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, ot = class {
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
		if (this.i < this.src.length) throw new N("unexpected character");
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
				let r = it.exec(e.slice(t, t + 12));
				if (!r) throw new N("lookaround or named group");
				let i = ue({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new N("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new N("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new N("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(tt.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new N("trailing backslash");
		if (r === "b" || r === "B") throw new N("word boundary");
		if (r >= "1" && r <= "9") throw new N("backreference");
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
			if (n === -1) throw new N("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && rt.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (rt.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
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
			let n = nt.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > He || i !== Infinity && i > He) throw new N("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, st = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= He) throw new N("pattern too large");
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
		this.emit(Qe);
	}
	compile(e) {
		if (++this.work > 4 * He) throw new N("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(qe, this.atomId(e));
				return;
			case "bol":
				this.emit(Xe, +!!e.multiline);
				return;
			case "eol":
				this.emit(Ze, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(Je);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(Ye)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(Je);
					this.x[t] = t + 1, this.compile(e.node), this.emit(Ye, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(Je);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, ct = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new ot(e, r, t, n).parse(), a = new st(r);
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
}, lt = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: g, atomHit: _ } = r, v = r.gen, te = r.step;
	r.gen = v + t.length + 2, r.step = te + t.length + 2;
	let y = 0, b = !1, ne = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== v) switch (ee[r] = v, ++c === 64 && (u(c), c = 0), i[r]) {
				case qe:
					e[n++] = r;
					break;
				case Qe: return u(c), b = !0, n;
				case Ye:
					h[s++] = a[r];
					break;
				case Je:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case Xe:
					(y === 0 || a[r] === 1 && at(t.charCodeAt(y - 1))) && (h[s++] = r + 1);
					break;
				case Ze: (y === t.length || a[r] === 1 && at(t.charCodeAt(y))) && (h[s++] = r + 1);
			}
		}
		return u(c), n;
	};
	if (v++, p = ne(d, 0, 0), b) return !0;
	for (; y < t.length;) {
		if (p === 0 && l) return !1;
		let e = (c ? t.codePointAt(y) : t.charCodeAt(y)) > 65535 ? 2 : 1, n = t.slice(y, y + e), r = te + y + 1;
		v++, m = 0, y += e;
		for (let e = 0; e < p; e++) {
			let t = d[e], i = a[t];
			if (g[i] !== r) {
				g[i] = r;
				let e = s[i];
				_[i] = (e.literal === void 0 ? e.re.test(n) : e.literal === n) ? 1 : 0;
			}
			if (_[i] === 1 && (m = ne(f, m, t + 1), b)) return !0;
		}
		if (!l && (m = ne(f, m, 0), b)) return !0;
		let i = d;
		d = f, f = i, p = m;
	}
	return !1;
}, ut = (e, t, n) => {
	let r = et(e, t.length);
	try {
		return lt(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, P = 256, F = /* @__PURE__ */ new Map(), dt = 0, ft = (e, t, n, r, i = !1) => {
	if (e.length > Ue || t.length > 7 || !Ge.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = F.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = Ke(s) > We ? null : ct(n ? `^(?:${s})$` : s, t, i);
	dt >= P && (F.clear(), dt = 0);
	let l = F.get(s);
	return l === void 0 && F.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), dt++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, pt = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), ut(e, t, n);
}, mt = class {
	constructor(e) {
		this.nodes = e;
	}
}, I = (e) => {
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
}, ht = (e) => {
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
	return !I(e);
}, gt = 256, L = /* @__PURE__ */ new Map(), _t = (e, t) => {
	let n = L.get(e);
	return n === void 0 && (n = ht(e), L.size >= gt && L.clear(), L.set(Array.from(e).join(""), n)), t(e.length), n;
}, vt = /* @__PURE__ */ new Map(), yt = (e, t) => {
	let n = vt.get(e);
	return n === void 0 && (n = Ve(e), n !== null && (n = Array.from(n).join("")), vt.size >= gt && vt.clear(), vt.set(Array.from(e).join(""), n)), t(e.length), n;
}, bt = 256, xt = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > Ue) c = null;
		else if (o) {
			let n = yt(e, i);
			c = n === null ? null : ft(n, t, r, i, !0);
		} else c = _t(e, i) ? ft(e, t, r, i) : null;
		s !== void 0 && (s.size >= bt && s.clear(), s.set(a, c));
	}
	return c !== null && pt(c, n, i);
}, St = {
	length: (e, t) => {
		let n = e[0];
		if (A(n)) {
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
		if (D(n)) return E(n);
		if (O(n)) {
			let e = T(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !A(r) || !A(i) ? !1 : xt(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !A(r) || !A(i) ? !1 : xt(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, Ct = (e, t, n = C) => e === void 0 && t === void 0 || fe(e, t, n), wt = (e, t, n = C) => !fe(e, t, n), Tt = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, Et = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return Tt(n) - Tt(i);
	}
	return e.length - t.length;
}, Dt = (e, t, n = C) => k(e) && k(t) ? e < t : A(e) && A(t) ? (n(Math.min(e.length, t.length)), Et(e, t) < 0) : !1, Ot = (e, t, n = C) => Dt(e, t, n) || Ct(e, t, n), kt = (e, t, n = C) => k(e) && k(t) ? e > t : A(e) && A(t) ? (n(Math.min(e.length, t.length)), Et(e, t) > 0) : !1, At = (e, t, n = C) => kt(e, t, n) || Ct(e, t, n), jt = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, Mt = (e, t, n) => {
	let r = E(e);
	for (let i = 0; i < r; i++) {
		let r = pe(e, i);
		if (n(1 + jt(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, Nt = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, Pt = (e) => typeof e == "string" && e.length + 1 > me, Ft = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = E(e);
	for (let n = 0; n < a; n++) {
		let r = pe(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), Pt(r) ? i.long.push(r) : i.set.add(Nt(r));
	}
	return n?.set(e, i), i;
}, It = ({ set: e, long: t }, n, r) => {
	if (Pt(n)) {
		for (let e of t) if (r(1 + jt(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(Nt(n)));
}, Lt = (e, t, n) => {
	let r = E(e);
	for (let i = 0; i < r; i++) if (n(), w(e, i) && t(e[i])) return !0;
	return !1;
}, Rt = {
	eq: Ct,
	ne: wt,
	lt: Dt,
	le: Ot,
	gt: kt,
	ge: At,
	in: (e, t, n = C) => D(t) ? Mt(t, e, n) !== -1 : !1,
	nin: (e, t, n = C) => D(t) ? Mt(t, e, n) === -1 : !1,
	subsetof: (e, t, n = C, r) => {
		if (!D(e) || !D(t)) return !1;
		let i = Ft(t, n, r);
		return !Lt(e, (e) => !It(i, e, n), n);
	},
	anyof: (e, t, n = C, r) => {
		if (!D(e) || !D(t)) return !1;
		let i = Ft(t, n, r);
		return Lt(e, (e) => It(i, e, n), n);
	},
	noneof: (e, t, n = C, r) => {
		if (!D(e) || !D(t)) return !1;
		let i = Ft(t, n, r);
		return !Lt(e, (e) => It(i, e, n), n);
	},
	sizeof: (e, t) => !D(e) && !A(e) || !D(t) && !A(t) ? !1 : (D(e) ? E(e) : e.length) === (D(t) ? E(t) : t.length),
	size: (e, t) => !D(e) && !A(e) || !k(t) ? !1 : (D(e) ? E(e) : e.length) === t
}, zt = (e) => !D(e) && !A(e) ? !1 : (D(e) ? E(e) : e.length) === 0, Bt = (e, t, n, r = C, i) => !A(e) || !A(t) ? !1 : xt(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), Vt = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), R = (e, t) => e.concat(`[${t}]`), z = (e, t) => e < 0 ? t + e : e, Ht = (e, t) => {
	let n = E(e), r = z(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: w(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, B = (e, t) => {
	for (let n of t) e.push(n);
}, Ut = 1e6, Wt = 100, Gt = 1e6, Kt = 20, qt = 1e4, Jt = 1e4, Yt = class {
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
					w(n, r) && this.visit(n[r]);
				} else if (w(n, t)) this.visit(n[t]);
				else if (++e.holes > Jt) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!w(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), D(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: E(e),
				i: 0,
				holes: 0
			});
			else if (O(e)) {
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
}, Xt = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, Vt(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = Vt(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = E(e);
			for (let r = 0; r < n; r++) this.tick(), w(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Yt(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(qt, Math.ceil((this.retained - this.retainedLimit) / Kt))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new S(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(Ut, Wt * e.weight) + t, this.retainedLimit = Math.max(Gt, Kt * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Yt(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(qt, Math.ceil((this.steps - this.stepLimit) / Wt))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new S(`Query exceeded ${this.stepLimit} evaluation steps`);
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
			if (!O(e)) return;
			let r = this.canonicalName(n, n.value);
			if (w(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (D(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: R(t, r)
					});
				}), n;
			}
			if (O(e)) {
				let n = T(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) w(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!D(e)) return;
			let r = Ht(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: R(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (D(e)) {
				let r = Ht(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: R(t, r.index)
				} : void 0;
			}
			if (O(e)) {
				let r = String(n.value);
				return w(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!D(e)) return [];
			let r = E(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : z(n.start, r), o = n.end === null ? r : z(n.end, r)) : (a = n.start === null ? r - 1 : z(n.start, r), o = n.end === null ? -r - 1 : z(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: w(e, u) ? e[u] : void 0,
				paths: R(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (O(e.value)) {
						let t = this.handleIdentifier(e, r);
						j(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (O(e.value)) {
						let t = this.handleStringLiteral(e, r);
						j(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (D(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						j(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					B(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": B(n, this.handleBracketExpressionContent(e, r));
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
						j(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						B(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						B(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						j(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (O(e)) {
					let t = T(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else D(e) && i.push({
					parent: a,
					keys: null,
					length: E(e),
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
						if (!w(n, t)) continue;
						a = {
							value: n[t],
							paths: R(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!w(n, r)) continue;
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
						if (!k(i) || !k(r)) i = void 0;
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
					return k(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return zt(n);
			if (t.operator === "reg") return Bt(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = Rt[t.operator];
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
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new mt(r.value) : new mt(j(r?.value) ? [r?.value] : []);
			}), i = St[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
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
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : j(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : j(n);
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
					if (D(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: R(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (O(n)) {
						let i = T(n);
						this.tick(i.length);
						for (let a of i) {
							if (!w(n, a)) continue;
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
					if (!j(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) B(n, a);
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
				throw ge(e) ? new S("Query is nested too deeply") : _e(e) ? new S("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? Ut, this.retainedLimit = this.adaptiveLimit ? Gt : Infinity;
	}
}, Zt = (e, t, n) => {
	let r = ke(t), i = new Xt(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? ve(i) ? [] : [i.value] : i?.value;
}, Qt = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = Zt(e, i, n);
		j(t) && r.push(t);
	}
	return r;
}, V = (e, t, n = {}) => {
	try {
		return D(t) ? Qt(e, t, n) : Zt(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, $t = {
	unshift: (e, t) => e?.unshift(structuredClone(t)),
	push: (e, t) => e?.push(structuredClone(t)),
	unshiftSerialToRows: (e, t) => {
		e?.forEach((e, n) => {
			let r = structuredClone(t);
			r.textContent = n + 1, e?.children?.unshift(r);
		});
	},
	pushToRows: (e, t) => {
		e?.forEach((e) => {
			e?.children?.push(structuredClone(t));
		});
	}
}, en = {
	applyTemplate: (e, t) => {
		let n = s[e.templateKey], r = g(V(t, e.sourcePath), n);
		V(t, e.destinationPath?.jsonPath, { returnArray: !0 })[0]?.push(r);
	},
	fromCollection: (e, t) => {
		let n = s[e.templateKey], r = y(V(t, e.sourcePath), n);
		V(t, e.destinationPath?.jsonPath, { returnArray: !0 })[0]?.push(...r);
	},
	rowOnColumn: (e, t) => {
		let n = ne({
			columns: V(t, e.sourcePath?.columns),
			data: V(t, e.sourcePath?.rows),
			columnSpec: s[e.templateKey?.columnKey],
			rowSpec: s[e.templateKey?.rowKey]
		});
		V(t, e.destinationPath?.jsonPath, { returnArray: !0 })[0]?.push(...n);
	},
	columnOnRow: (e, t) => {
		let n = re({
			columns: V(t, e.sourcePath?.columns),
			data: V(t, e.sourcePath?.rows),
			columnSpec: s[e.templateKey?.columnKey],
			rowSpec: s[e.templateKey?.rowKey]
		});
		V(t, e.destinationPath?.jsonPath, { returnArray: !0 })[0]?.push(...n);
	}
}, tn = (e, t, n = !1) => {
	if (e.skipIf && V(t.base, e.skipIf, { returnArray: !0 }).length > 0) return t;
	if (e.func === null) {
		let r = s[e.templateKey];
		if (r === void 0) throw Error(`Instruction spec not found: ${e.templateKey}`);
		let i = V(t, e.destinationPath?.jsonPath, { returnArray: !0 }), a = $t[e.destinationPath?.action];
		return a?.(i[0], r), n && console.log("template : ", i, r), n && console.log("state : ", t), t;
	}
	let r = en[e.func];
	if (!r) throw Error(`Unsupported instruction func: ${e.func}`);
	return r(e, t), n && console.log("state : ", t), t;
}, nn = (e, t, n = !1) => {
	let r = c[e];
	if (!r) throw Error(`Single instruction not found: ${e}`);
	return tn(r, t, n);
}, rn = {
	"options-serial": [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				action: "unshift",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-colgroup'].children"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				action: "unshift",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-header-row'].children"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial number cell into each table body row.",
			destinationPath: {
				action: "unshiftSerialToRows",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-body'].children"
			},
			sourcePath: null,
			templateKey: "buildBodyCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				action: "unshift",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-footer-row'].children"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	"options-options-showButton": [
		{
			narration: "Append the options column width to the table colgroup.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-colgroup'].children"
			},
			sourcePath: null,
			templateKey: "colGroupForOption",
			func: null
		},
		{
			narration: "Append the options header cell to the table header row.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-header-row'].children"
			},
			sourcePath: null,
			templateKey: "headerForOption",
			func: null
		},
		{
			narration: "Append the options button cell into each table body row.",
			destinationPath: {
				action: "pushToRows",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-body'].children"
			},
			sourcePath: null,
			templateKey: "optionsButtonCell",
			func: null
		},
		{
			narration: "Append the options footer cell to the table footer row.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-footer-row'].children"
			},
			sourcePath: null,
			templateKey: "tdWithButtonSaveWarning",
			func: null
		}
	],
	"options-options-showEditButton": [
		{
			narration: "Append edit column width.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-colgroup'].children"
			},
			sourcePath: null,
			templateKey: "colGroupForEditOption",
			func: null
		},
		{
			narration: "Append edit header.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-header-row'].children"
			},
			sourcePath: null,
			templateKey: "headerForEditOption",
			func: null
		},
		{
			narration: "Append edit button cells to table rows.",
			destinationPath: {
				action: "pushToRows",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-body'].children"
			},
			sourcePath: null,
			templateKey: "optionsEditButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the edit action column.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-footer-row'].children"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	"options-options-showDeleteButton": [
		{
			narration: "Append delete column width.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-colgroup'].children"
			},
			sourcePath: null,
			templateKey: "colGroupForDeleteOption",
			func: null
		},
		{
			narration: "Append delete header.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-header-row'].children"
			},
			sourcePath: null,
			templateKey: "headerForDeleteOption",
			func: null
		},
		{
			narration: "Append delete button cells to table rows.",
			destinationPath: {
				action: "pushToRows",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-body'].children"
			},
			sourcePath: null,
			templateKey: "optionsDeleteButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the delete action column.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'table-footer-row'].children"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	"card-with-footer": [
		{
			narration: "Build card header content.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'card-header'].children"
			},
			sourcePath: "$.data",
			templateKey: "buildCardHeaderTemplate",
			func: "applyTemplate"
		},
		{
			narration: "Build card body content.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'card-body'].children"
			},
			sourcePath: "$.data",
			templateKey: "buildCardBodyTemplate",
			func: "applyTemplate"
		},
		{
			narration: "Build card footer content.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'card-footer'].children"
			},
			sourcePath: "$.data",
			templateKey: "buildCardFooterTemplate",
			func: "applyTemplate"
		}
	],
	"table-search-toolbar": [
		{
			narration: "Insert the search toolbar frame before the table.",
			destinationPath: {
				action: "unshift",
				jsonPath: "$.base.children"
			},
			sourcePath: null,
			templateKey: "searchToolbar",
			func: null,
			skipIf: "$..*[?@.attributes['data-role'] == 'search-toolbar']"
		},
		{
			narration: "Insert the search label into its configured slot.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'search-label-slot'].children"
			},
			sourcePath: null,
			templateKey: "searchLabel",
			func: null,
			skipIf: "$..*[?@.attributes.id == 'table-title']"
		},
		{
			narration: "Insert the search helper text into its configured slot.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'search-helper-slot'].children"
			},
			sourcePath: null,
			templateKey: "searchHelper",
			func: null,
			skipIf: "$..*[?@.attributes.id == 'search-feedback']"
		},
		{
			narration: "Insert the search input into its configured slot.",
			destinationPath: {
				action: "push",
				jsonPath: "$.base..*[?@.attributes['data-role'] == 'search-input-slot'].children"
			},
			sourcePath: null,
			templateKey: "searchInput",
			func: null,
			skipIf: "$..*[?@.attributes.id == 'tableSearch']"
		}
	]
}, an = {
	single: nn,
	multi: (e, t, n = !1) => {
		let r = rn[e];
		if (!Array.isArray(r)) throw Error(`Multi instruction not found: ${e}`);
		return r.forEach((e) => tn(e, t, n)), t;
	}
}, on = (e, t, n = !1) => {
	if (!e || typeof e != "object") throw Error(`Invalid instruction descriptor: expected { type, key }, got ${String(e)}`);
	let { type: r, key: i } = e, a = an[r];
	if (!a) throw Error(`Unsupported instruction type "${r}" for key "${i}". Expected "single" or "multi".`);
	return a(i, t, n);
}, sn = {
	name: "json-renderers-run-instructions",
	version: "1.14.1"
}, cn = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.runInstructions ??= {}, globalThis.ks.jsonRenderers.runInstructions.steps = {
		meta: sn,
		runInstructions: e
	});
}, ln = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => (e.forEach((e) => {
	on(e, {
		base: t,
		data: n
	}, r);
}), t);
cn(ln);
// src/v22/runOptions/index.js
var un = (e) => typeof e == "object" && !!e && !Array.isArray(e), dn = Array.from(/* @__PURE__ */ new Set([...Object.keys(c), ...Object.keys(rn)])), fn = (e) => c[e] === void 0 ? rn[e] === void 0 ? null : {
	type: "multi",
	key: e
} : {
	type: "single",
	key: e
}, pn = ({ node: e, prefix: t, sequence: n, seen: r }) => {
	let i = (e) => {
		if (!e) return;
		let t = `${e.type}:${e.key}`;
		r.has(t) || (r.add(t), n.push(e));
	};
	for (let [a, o] of Object.entries(e)) {
		if (o === !1 || o == null) continue;
		let e = `${t}-${a}`;
		if (i(fn(e)), un(o)) pn({
			node: o,
			prefix: e,
			sequence: n,
			seen: r
		});
		else if (o === !0) {
			let t = `${e}-`;
			for (let e of dn) e.startsWith(t) && i(fn(e));
		}
	}
}, mn = ({ options: e = {} } = {}) => {
	if (!un(e)) return [];
	let t = [];
	return pn({
		node: e,
		prefix: "options",
		sequence: t,
		seen: /* @__PURE__ */ new Set()
	}), t;
}, hn = {
	name: "json-renderers-run-instructions",
	version: "1.22.1"
}, gn = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.runInstructions ??= {}, globalThis.ks.jsonRenderers.runInstructions.render = {
		meta: hn,
		renderFunc: e
	});
}, _n = ({ instructionMainKey: e, instructionSubKey: t, data: n, options: i, showLog: a = !1 } = {}) => {
	let o = r[e]?.[t];
	if (!o) throw Error(`Definition not found: ${e}.${t}`);
	let c = s[o.baseFromSpec];
	if (c === void 0) throw Error(`Base spec not found: ${o.baseFromSpec}`);
	let l = structuredClone(c), u = o["instructions-type"] ?? [], d = i ? mn({ options: i }) : [], f = [...u, ...d];
	return a && console.log("[v22] instructions : ", f), ln({
		instructions: f,
		base: l,
		data: n,
		showLog: a
	});
};
gn(_n);
export { _n as default };
