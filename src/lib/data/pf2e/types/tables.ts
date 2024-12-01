export interface ITable {
    /**
     * Unique identifier for the table
     */
    id: string
    /**
     * Display title for the table
     */
    title: string
    columns: {
        /**
         * Column header text
         */
        header: string
        /**
         * Optional unique identifier for the column
         */
        id?: string
        /**
         * Data type of the column
         */
        type: "string" | "number" | "boolean"
        /**
         * Text alignment for the column
         */
        align?: "left" | "right" | "center"
        /**
         * Array of values for the column
         */
        data: unknown[]
        [k: string]: unknown
    }[]
    tableAttributes?: {
        adHocEntries?: {
            /**
             * Content of the ad-hoc entry
             */
            content?: string
            /**
             * Number of columns to span
             */
            colspan?: number
            /**
             * IDs of columns to span
             */
            spanIds?: string[]
            /**
             * Vertical alignment of the entry or specific position of row entry
             */
            align?: ("top" | "bottom") | number
            [k: string]: unknown
        }[]
        /**
         * Custom styling options for the table
         */
        style?: {
            [k: string]: unknown
        }
        [k: string]: unknown
    }
    [k: string]: unknown
}

export interface IMetadata {
    /**
     * Version of the data format
     */
    version?: string
    /**
     * Last update date of the data
     */
    lastUpdated?: string
    [k: string]: unknown

}


export interface ITableData {
    tables?: ITable[]
    metadata?: IMetadata
    [k: string]: unknown
}
