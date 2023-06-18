<script lang="ts">
  import AccoCard from "$lib/components/blocks/AccoCard.svelte";
  import { accos } from "$lib/conf";
  export let maxWidth:string = "100rem";
  import { currentLang } from '$lib/stores/lang';
  import { dictEntry } from "$lib/conf/translations";

</script>

<svelte:head>
  <title>{dictEntry($currentLang,"accomodations")}</title>
</svelte:head>

<h1>{dictEntry($currentLang, "accomodations")}</h1>

<main style="max-width: {maxWidth};">
  {#each accos as a}
    {#if a.cardContent}
    <AccoCard 
      cardContent={a.cardContent}
      displayName={a.displayName}
      />
    {/if}
  {/each}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 0;
  }

</style>