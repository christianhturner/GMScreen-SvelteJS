import type {
    ITableData,
    ITable,
    IMetadata,
} from "$lib/data/pf2e/types/tables.ts";


export class TablePane {
    tables: ITable[];
    metadata: IMetadata | undefined;
    target: HTMLElement | null;

    constructor(tableData: ITableData, domTarget: string) {
        if (!tableData.tables) {
            throw new Error('Table is undefined')
        }
        this.tables = tableData.tables;
        this.metadata = tableData.metadata;
        this.target = document.getElementById(domTarget);
        if (!this.target) {
            throw new Error(`Cannot find ${domTarget} in DOM`)
        }
        this.renderTable();
    }

    renderTable() {
        console.log('render is starting')
        this.tables.forEach((table) => {
            const newTable = document.createElement('table');
            this.target?.append(newTable)
            const columnTotal = table.columns.length;
            const headerRow = document.createElement('tr');
            newTable.append(headerRow)
            // generate column headers
            table.columns.forEach((column) => {
                const headerCell = document.createElement('th');
                headerCell.textContent = column.header;
                headerRow.append(headerCell);
            })

        })
    }
}
