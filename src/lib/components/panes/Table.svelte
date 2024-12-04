<script lang="ts">
    import data from "$lib/data/pf2e/tables/spellByLevel.json";
    import type { ITableData } from "$lib/data/pf2e/types/tables.ts";
    import { onMount } from "svelte";
    import { DCByLevel } from "$lib/data/pf2e/tables/dcByLevel.svx";

    let tables: ITableData = data as ITableData;
    //     const markdownTransform = async () => {
    //         const transformedCode = await compile(`
    //     # Hello World
    // `);
    //         return transformedCode;
    //     };

    onMount(() => {
        console.log("Component has loaded");
    });

    console.log(tables);
</script>

<!-- HTML -->
<div id="tableWrapper"></div>
{#await DCByLevel}
    <p>Loading...</p>
{:then}
    {DCByLevel}
{/await}

<style>
</style>
