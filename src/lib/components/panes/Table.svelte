<script lang="ts">
    import data from "$lib/data/pf2e/tables/spellByLevel.json";
    import type { ITableData } from "$lib/data/pf2e/types/tables.ts";
    import { onMount } from "svelte";
    import { TablePane } from "../../../Models/panes/Table.js";

    let tables: ITableData = data as ITableData;

    onMount(() => {
        console.log("Component has loaded");
        new TablePane(tables, "tableWrapper");
    });

    console.log(tables);
</script>

<!-- HTML -->
<div id="tableWrapper"></div>

<style>
</style>
