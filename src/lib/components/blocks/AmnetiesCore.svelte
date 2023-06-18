<script lang="ts">
  import NotSvg from '../svg/NotSVG.svelte';

  import AcSvg from '../svg/AcSVG.svelte';
  import AreaSvg from '../svg/AreaSVG.svelte';
  import BathroomSvg from '../svg/BathroomSVG.svelte';
  import BedroomSvg from '../svg/BedroomSVG.svelte';
  import ParkingSvg from '../svg/ParkingSVG.svelte';
  import PeopleSvg from '../svg/PeopleSVG.svelte';
  import PetsSvg from '../svg/PetsSVG.svelte';
  import SmokingSvg from '../svg/SmokingSVG.svelte';
  import TvSvg from '../svg/TvSVG.svelte';
  import WifiSvg from '../svg/WifiSVG.svelte';

  import { formatSize } from '$lib/conf/formats';
  import { currentLang } from '$lib/stores/lang';
  
  import type { AmnetiesCore } from "$lib/types/accos";
  export let core:AmnetiesCore;

  $: theCore = core

</script>

<div class="amneties-wrapper">
  {#if theCore}
  <div class="element-wrapper">
    <AreaSvg size="2rem"/>
    <div>
    {@html formatSize($currentLang, theCore.size)}
    </div>
  </div>
  <div class="element-wrapper">
    <PeopleSvg size="2rem"/>
    <div>
    {theCore.peopleMin}-{theCore.peopleMax}
    </div>
  </div>
  <div class="element-wrapper">
    <BedroomSvg size="2rem"/>
    <div>
    {theCore.bedRooms}
    </div>
  </div>
  <div class="element-wrapper">
    <BathroomSvg size="2rem"/>
    <div>
    {theCore.bathRooms}
    </div>
  </div>
  <div class="bool-element-wrapper">
    {#if !theCore.pets}
    <div class="main-icon-container">
      <PetsSvg size="1.6rem"/>
    </div>
    <div class="not-icon-container">
      <NotSvg size="2.2rem"/>
    </div>
    {:else}
    <div class="main-icon-container">
      <PetsSvg size="2rem"/>
    </div>
    {/if}
  </div>
  <div class="bool-element-wrapper">
    {#if !theCore.wifi}
    <div class="main-icon-container">
      <WifiSvg size="1.6rem"/>
    </div>
    <div class="not-icon-container">
      <NotSvg size="2.2rem"/>
    </div>
    {:else}
    <WifiSvg size="2rem"/>
    {/if}
  </div>
  <div class="bool-element-wrapper">
    {#if !theCore.smoking}
    <div class="main-icon-container">
      <SmokingSvg size="1.6rem"/>
    </div>
    <div class="not-icon-container">
      <NotSvg size="2.2rem"/>
    </div>
    {:else}
    <SmokingSvg size="2rem"/>
    {/if}
  </div>
  <div class="bool-element-wrapper">
    {#if !theCore.ac}
    <div class="main-icon-container">
      <AcSvg size="1.6rem"/>
    </div>
    <div class="not-icon-container">
      <NotSvg size="2.2rem"/>
    </div>
    {:else}
    <AcSvg size="2rem"/>
    {/if}
  </div>
  <div class="bool-element-wrapper">
    {#if !theCore.tv}
    <div class="main-icon-container">
      <TvSvg size="1.6rem"/>
    </div>
    <div class="not-icon-container">
      <NotSvg size="2.2rem"/>
    </div>
    {:else}
    <TvSvg size="2rem"/>
    {/if}
  </div>
  <div class="bool-element-wrapper">
    {#if !theCore.parking}
    <div class="main-icon-container">
      <ParkingSvg size="1.6rem"/>
    </div>
    <div class="not-icon-container">
      <NotSvg size="2.2rem"/>
    </div>
    {:else}
    <ParkingSvg size="2rem"/>
    {/if}
  </div>
  {/if}

</div>

<style>
  .amneties-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: baseline;
    justify-content: center;
  }

  .element-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bool-element-wrapper {
    position: relative;
    width: 2.2rem;
    height: 2.2rem;
  }

  .main-icon-container {
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
  }

  .not-icon-container {
    position: absolute;
    top: 0;
    left: 0;
  }

</style>