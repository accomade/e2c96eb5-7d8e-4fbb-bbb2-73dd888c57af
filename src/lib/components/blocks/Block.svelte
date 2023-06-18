<script lang="ts">
  import type { Block } from '$lib/types/blocks'
  import type { SvelteComponent } from 'svelte';

  import Text from '$lib/components/blocks/Text.svelte';
  import Photo from '$lib/components/blocks/Photo.svelte';
  import Calendar from '$lib/components/blocks/Calendar.svelte';
  import Map from '$lib/components/blocks/Map.svelte';
  import PhotoGallery from '$lib/components/blocks/PhotoGallery.svelte';
  import Pricing from '$lib/components/blocks/Pricing.svelte';
  import Weather from '$lib/components/blocks/Weather.svelte';
  import Amneties from '$lib/components/blocks/Amneties.svelte';
  import AccoCard from '$lib/components/blocks/AccoCard.svelte';
  import PricingShort from './PricingShort.svelte';
  import CalendarAvailable from './CalendarAvailable.svelte';
  import AmnetiesCore from './AmnetiesCore.svelte';
  
  export let spec:Block;
  
  let props:any
  let component: typeof SvelteComponent

  if(!!spec) {
    switch (spec.kind) {
      case 'text':
        component = Text
        props = spec.content
        break;
      case 'photo':
        component = Photo
        props = spec.content
        break;  
      case 'calendar':
        component = Calendar
        props = spec.content
        break; 
      case 'calendar-available':
        component = CalendarAvailable;
        props = spec.content;
        break;
      case 'map':
        component = Map
        props = spec.content
        break;
      case 'photo-gallery':
        component = PhotoGallery
        props = spec.content
        break;
      case 'pricing':
        component = Pricing
        props = spec.content
        break;
      case 'pricing-short':
        component = PricingShort
        props = spec.content
        break;
      case 'amneties':
        component = Amneties
        props = spec.content
        break;
      case 'amneties-core':
        component = AmnetiesCore
        props = spec.content
        break;
      case 'weather':
        component = Weather
        props = spec.content
        break;
      case 'acco-card':
        component = AccoCard
        props = spec.content
        break;
    }
  }
</script>

{#if component}
<svelte:component this={component} {...props}/>
{/if}