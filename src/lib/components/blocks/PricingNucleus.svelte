<script lang="ts">
  import { i18n } from '$lib/conf';
  import { dictEntry } from '$lib/conf/translations';
  import { 
    formatAdditionalPersonPrice,
    formatMinNumberOfNights,
  } from '$lib/conf/formats'

  import { currentLang } from '$lib/stores/lang';
  $: t = i18n.translations[$currentLang];
  import { formatDate, formatMoney } from '$lib/conf/formats';

  import type { PricingEntry, PricingRange, PricingColumn} from "$lib/types/accos";
  
  export let pricingSpec:PricingEntry|PricingRange
  $: pricingEntry = pricingSpec?.kind == "entry" ? pricingSpec : pricingSpec?.entry;


  export let pricingColumn:PricingColumn
  let formattedContent = ""
  $: {
    switch(pricingColumn) {
      case "timeRange":
        if( pricingSpec?.kind == "range" ) {
            
          if(pricingSpec.from && pricingSpec.to) {
            formattedContent = `${formatDate($currentLang, pricingSpec.from)} - ${formatDate($currentLang,pricingSpec.to)}`
            break;
          }
          if(pricingSpec.from) {
            formattedContent = `${dictEntry($currentLang, 'from')} ${formatDate($currentLang,pricingSpec.from)}}`
            break;
          }
          if(pricingSpec.to) {
            formattedContent = `${dictEntry($currentLang,'to')} ${formatDate($currentLang,pricingSpec.to)}`
            break;
          }
        }
        break;
      case "firstNight":
        //console.log("firstNight", pricingEntry)
        if(pricingEntry?.firstNightPrice) {
          formattedContent = formatMoney($currentLang, pricingEntry.firstNightPrice)
        }
        break;
      case "eachNight":
        if(pricingEntry?.perNightPrice) {
          formattedContent = formatMoney($currentLang, pricingEntry.perNightPrice)
        }
        break;
      case "extraPerson":
        formattedContent = '<div style="display:flex; column-gap: 2rem; padding-left:1rem;flex-wrap: wrap;">';
        if(pricingEntry && pricingEntry.additionalPersonPrice1) {
          formattedContent += `<span>${formatAdditionalPersonPrice($currentLang,pricingEntry.additionalPersonPrice1, dictEntry($currentLang, pricingEntry.additionalPersonText1))}</span>`
        }
        if(pricingEntry && pricingEntry.additionalPersonPrice2) {
          formattedContent += `<span>${formatAdditionalPersonPrice($currentLang,pricingEntry.additionalPersonPrice2, dictEntry($currentLang, pricingEntry.additionalPersonText2))}</span>`
        }
        if(pricingEntry && pricingEntry.additionalPersonPrice3) {
          formattedContent += `<span>${formatAdditionalPersonPrice($currentLang,pricingEntry.additionalPersonPrice3, dictEntry($currentLang, pricingEntry.additionalPersonText3))}</span>`
        }
        formattedContent+="</div>"

        break;
      case "minNumNights":
        if(pricingEntry && pricingEntry.minNumberOfNights) {
          formattedContent = formatMinNumberOfNights($currentLang, pricingEntry.minNumberOfNights)
        }
        break;
      default:
        formattedContent = ``
    }
  }

</script>

<span class="cell-wrapper">{@html formattedContent}</span>