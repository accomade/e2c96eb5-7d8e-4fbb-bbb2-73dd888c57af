<script lang="ts">
  import type { PricingRange, PricingEntry} from "$lib/types/accos";
  import { DateTime } from 'luxon';
  import { add, allocate, dinero, multiply, greaterThan, lessThan, type Dinero } from 'dinero.js'
  import { EUR } from '@dinero.js/currencies';

  import { 
    formatMaximumPrice,
    formatMinimumPrice, 
  } 
  from "$lib/conf/formats";
  import { dictEntry } from "$lib/conf/translations";
  import { currentLang } from '$lib/stores/lang';
  
  export let global:PricingEntry|undefined = undefined;
  export let entries:PricingRange[] = [];
  export let showMaximun=true;
  export let showMinimum=true;
  
  let filteredEntries:PricingRange[] = [];
  $: {
    let now = DateTime.now()
    filteredEntries = entries.filter( e => {
      if (! e.to) return true
      return e.to > now 
    })
  }

  let calculatedMinium = dinero({amount: Number.MAX_SAFE_INTEGER, currency: EUR});
  let calculatedMaximum = dinero({amount: 0, currency: EUR});
  $: {
    filteredEntries.forEach( ( fe ) => {
      let entry = fe.entry;
      let avg:Dinero<number>|undefined;
      if(entry && entry.firstNightPrice && entry.perNightPrice && entry.minNumberOfNights) {
        [avg] = allocate(add(multiply( entry.perNightPrice, entry.minNumberOfNights - 1 ), entry.firstNightPrice), new Array(entry.minNumberOfNights).fill(1))
      }
      else if(entry && entry.firstNightPrice && entry.perNightPrice) {
        [avg] = allocate(add(entry.perNightPrice, entry.firstNightPrice),[1,1])
      }
      else if(entry && entry.perNightPrice ) {
        avg = entry.perNightPrice
      }
      if(avg) {
        if(greaterThan(avg, calculatedMaximum)) {
          calculatedMaximum = avg
        }
        if(lessThan(avg,calculatedMinium)) {
          calculatedMinium = avg
        }
      }

    });
    if (global) {
      let globalAvg:Dinero<number>|undefined;
      if(global.firstNightPrice && global.perNightPrice && global.minNumberOfNights) {
        [globalAvg] = allocate(add(multiply( global.perNightPrice, global.minNumberOfNights - 1 ), global.firstNightPrice), new Array(global.minNumberOfNights).fill(1))
      }
      else if(global.firstNightPrice && global.perNightPrice) {
        [globalAvg] = allocate(add(global.perNightPrice, global.firstNightPrice),[1,1])
      }
      else if(global.perNightPrice ) {
        globalAvg = global.perNightPrice
      }
      if(globalAvg) {
        if(greaterThan(globalAvg, calculatedMaximum)) {
          calculatedMaximum = globalAvg
        }
        if(lessThan(globalAvg, calculatedMinium)) {
          calculatedMinium = globalAvg
        }
      }
    }
  } 
</script>

<div class="pricing-short-wrapper">
  <h3>{dictEntry($currentLang, "shortPriceLabel")}    
    {#if showMinimum}<span>{formatMinimumPrice($currentLang, calculatedMinium)}</span>{/if}
    {#if showMaximun}<span>{formatMaximumPrice($currentLang, calculatedMaximum)}</span>{/if}
  </h3>
</div>

<style>
  .pricing-short-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pricing-short-wrapper h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

</style>