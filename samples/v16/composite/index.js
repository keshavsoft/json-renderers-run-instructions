import compositeData from "./data.json" with { type: "json" };
import "../../../docs/dist/v15/min.js";

let selectedRowIndex = null;

const start = () => {
    try {
        const renderFunc = window.ks.jsonRenderers.runInstructions.render.renderFunc;

        // 1. Render Table Component
        const tableSpec = renderFunc({
            instructionMainKey: "table",
            instructionSubKey: "simple",
            data: {
                columns: compositeData.columns,
                data: compositeData.data
            },
            options: {
                search: {
                    showLabel: true,
                    showHelper: true,
                    showInput: true
                },
                serial: true,
                options: {
                    showEditButton: true
                }
            }
        });

        // 2. Render Form Component
        const formSpec = renderFunc({
            instructionMainKey: "form",
            instructionSubKey: "simple",
            data: { columns: compositeData.columns }
        });

        // 3. Render DataList Component (for autocomplete inside the form)
        const dataListSpec = renderFunc({
            instructionMainKey: "dataList",
            instructionSubKey: "simple",
            data: { columns: compositeData.categoriesDataList }
        });

        // Mount to DOM
        window.ks.jsonToDom.appendToDom({
            jsonSpec: tableSpec,
            targetHtmlId: "table-slot",
            document
        });

        window.ks.jsonToDom.appendToDom({
            jsonSpec: formSpec,
            targetHtmlId: "form-slot",
            document
        });

        window.ks.jsonToDom.appendToDom({
            jsonSpec: dataListSpec,
            targetHtmlId: "datalist-slot",
            document
        });

        // Link the Form's Category input to the autocomplete DataList
        const categoryInput = document.getElementById("Category");
        if (categoryInput) {
            categoryInput.setAttribute("list", "CategoryList");
            categoryInput.setAttribute("placeholder", "Type to autocomplete category...");
        }

        // Attach Master-Detail Click Listeners to Table Rows
        wireMasterDetail();

    } catch (err) {
        console.error("Error in composite/index.js:", err);
    }
};

const wireMasterDetail = () => {
    const tbody = document.querySelector("#table-slot tbody");
    if (!tbody) return;

    const rows = tbody.querySelectorAll("tr");
    rows.forEach((row, idx) => {
        // Highlight row on hover
        row.style.cursor = "pointer";

        // Listen for edit button or row click
        const editBtn = row.querySelector("button, a, .btn");
        const trigger = editBtn || row;

        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            loadRowIntoForm(idx, row);
        });
    });

    // Wire Form Submit to update the Table in real-time
    const form = document.querySelector("#form-slot form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (selectedRowIndex === null) {
                alert("Please select a row from the table first by clicking 'edit'!");
                return;
            }
            saveFormToRow();
        });
    }
};

const loadRowIntoForm = (index, rowElement) => {
    selectedRowIndex = index;

    // Visual highlight on selected row
    const allRows = document.querySelectorAll("#table-slot tbody tr");
    allRows.forEach(r => r.classList.remove("table-primary", "fw-bold"));
    rowElement.classList.add("table-primary");

    // Extract row cell values (skip serial cell at col 0)
    const cells = rowElement.querySelectorAll("td");
    // Column layout: [#, ItemName, Category, BaseUnit, Price, Options]
    const itemName = cells[1]?.textContent?.trim() || "";
    const category = cells[2]?.textContent?.trim() || "";
    const baseUnit = cells[3]?.textContent?.trim() || "";
    const price = cells[4]?.textContent?.trim() || "";

    // Fill form inputs
    const inputName = document.getElementById("ItemName");
    const inputCat = document.getElementById("Category");
    const inputUnit = document.getElementById("BaseUnit");
    const inputPrice = document.getElementById("Price");

    if (inputName) inputName.value = itemName;
    if (inputCat) inputCat.value = category;
    if (inputUnit) inputUnit.value = baseUnit;
    if (inputPrice) inputPrice.value = price;

    // Update status banner
    const banner = document.getElementById("status-feedback");
    if (banner) {
        banner.className = "alert alert-primary py-2 px-3 small mb-3";
        banner.innerHTML = `Loaded <strong>${itemName}</strong> (Row #${index + 1}) into Form. Try typing in Category to test autocomplete!`;
    }
};

const saveFormToRow = () => {
    const allRows = document.querySelectorAll("#table-slot tbody tr");
    const targetRow = allRows[selectedRowIndex];
    if (!targetRow) return;

    const inputName = document.getElementById("ItemName")?.value || "";
    const inputCat = document.getElementById("Category")?.value || "";
    const inputUnit = document.getElementById("BaseUnit")?.value || "";
    const inputPrice = document.getElementById("Price")?.value || "";

    const cells = targetRow.querySelectorAll("td");
    if (cells[1]) cells[1].textContent = inputName;
    if (cells[2]) cells[2].textContent = inputCat;
    if (cells[3]) cells[3].textContent = baseUnit;
    if (cells[4]) cells[4].textContent = inputPrice;

    const banner = document.getElementById("status-feedback");
    if (banner) {
        banner.className = "alert alert-success py-2 px-3 small mb-3";
        banner.innerHTML = `Successfully updated <strong>${inputName}</strong> in the Table!`;
    }
};

window.addEventListener("DOMContentLoaded", start);
