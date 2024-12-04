import type { ITableData, ITable, IMetadata } from "$lib/data/pf2e/types/tables.ts";

export class TablePane {
    tables: ITable[];
    metadata: IMetadata | undefined;
    target: HTMLElement | null;

    constructor(tableData: ITableData, domTarget: string) {
        if (!tableData.tables) {
            throw new Error("Table is undefined");
        }
        this.tables = tableData.tables;
        this.metadata = tableData.metadata;
        this.target = document.getElementById(domTarget);
        if (!this.target) {
            throw new Error(`Cannot find ${domTarget} in DOM`);
        }
        this.renderTable();
    }

    renderTable() {
        console.log("render is starting");
        let tableIndex = 0;
        this.tables.forEach((table) => {
            const columnTotal = table.columns.length;
            let columnIndex = 0;
            // Setting equal to 1, because we will first use it prior to the for loop when creating
            // The header Row.
            let rowIndex = 1;
            tableIndex++;

            // Create Table
            const newTable = document.createElement("table");
            newTable.setAttribute("id", `table-${tableIndex}`);
            this.target?.append(newTable);

            // Create Header Row
            const headerRow = document.createElement("tr");
            headerRow.setAttribute("id", `table-${tableIndex}-row-${rowIndex}`);
            newTable.append(headerRow);
            // generate column headers
            table.columns.forEach((column) => {
                const headerCell = document.createElement("th");
                headerCell.textContent = column.header;
                headerRow.append(headerCell);
            });
            // create our <tr>'s -> id each <tr> -> re-enter each <tr> as we process each column
            // Create all rows based on the largest column
            let largestColumn: number = 0;
            table.columns.forEach((column) => {
                const rowReference = column.data.length;
                if (!largestColumn) {
                    largestColumn = rowReference;
                }
                if (rowReference > largestColumn) {
                    largestColumn = rowReference;
                }
            });
            if (largestColumn === 0) {
                throw new Error("largest column is never set");
            }
            const maxColumnDataAmount = largestColumn;
            while (largestColumn > 0) {
                rowIndex++;
                const createRow = document.createElement("tr");
                createRow.setAttribute("id", `table-${tableIndex}-row-${rowIndex}`);

                newTable.append(createRow);

                while (columnIndex < maxColumnDataAmount - 1) {
                    table.columns.forEach((column) => {
                        if (column.data[columnIndex]) {
                            const createCell = document.createElement("td");
                            createCell.textContent = (column.data[columnIndex] as number).toString();
                            const queryForRow = document.getElementById(`table-${tableIndex}-row-${rowIndex + 2}`)
                            queryForRow?.append(createCell)
                        }
                    });
                    columnIndex++;
                }

                largestColumn--;
            }
        });
    }
}
