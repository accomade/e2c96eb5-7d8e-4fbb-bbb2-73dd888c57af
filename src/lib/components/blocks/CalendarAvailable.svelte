<script lang="ts">
  import { OccuPlanAvailableInfo } from 'occuplan'
  import { DateTime } from 'luxon'
  import { i18n } from '$lib/conf';
  import { dictEntry } from '$lib/conf/translations';
  import Spinner from '$lib/components/Spinner.svelte';
  import { formatAvailability } from '$lib/conf/formats';

  import { currentLang } from '$lib/stores/lang';
  $: trans = i18n.translations[$currentLang] 
  $: dict = trans.site;
  $: fromFun = ( from:DateTime|null, forDays:number):string => {
    return formatAvailability($currentLang, from, forDays, maxFutureDate)
  }
    
  export let calUrl:string;
  export let search = [3,7,14];
  export let maxFutureDate=DateTime.now().plus({years: 2})
  let calLoading = true;

</script>

<div class="cal-wrapper">
  <h3>{dictEntry($currentLang, "availability")}</h3>
  <OccuPlanAvailableInfo
      let:available={av}
      {search}
      bind:loading={calLoading}
      {calUrl}>

      <ul>
        {#each search as s} 
        <li>{fromFun( av[s], s)}</li>
        {/each}
      </ul>

  </OccuPlanAvailableInfo>
  {#if calLoading}
  <Spinner size="5rem"/>
  {/if}
</div>

<style>
  .cal-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  h3 {
    margin: 0
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    list-style: none;
    font-size: 1.2rem;
  }
</style>