<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';

  import LinkSvg from '$lib/components/svg/LinkSVG.svelte';
  import ExtLinkSvg from '$lib/components/svg/ExtLinkSVG.svelte';
  import Photo000 from '../Photo000.svelte';

  export let alt:string;
  export let photoPath:string;
  export let eager:boolean = false;
  export let link:string = "";
  export let external:boolean = false;
  export let attribution:string|undefined = undefined;
  export let ratio = "none";
  export let frame = false;

  export let width="100%"
  export let height="100%"
  
  export const className:string = "photo-container-sizing";

  $: dict = i18n.translations[$currentLang].site
  let photoHeight = 0;
</script>

{#if link}
  {#if external}
  <a 
      bind:clientHeight={photoHeight}
      style="width: {width}; height: {height};" 
      href="{link}"
      target="_blank" 
      rel="noreferrer noopener">

    <Photo000
      {frame}
      {className}
      {photoPath}
      {eager}
      {ratio}
      alt={dict[alt] ? dict[alt] : alt} />
  
    {#if attribution}
    <div 
        style="height:calc({photoHeight}px - 0.5rem);"
        class="attribution-container">
      <div class="attribution-wrapper">
        {@html attribution}
      </div>
    </div>
    {/if}
    <div class="link-icon-wrapper"><ExtLinkSvg size="1.8rem"/></div>
  </a>
 
  {:else}
  <a 
      bind:clientHeight={photoHeight}
      style="width: {width}; height: {height};"
      href="{link}">
    
    <Photo000
      {frame}
      {photoPath}
      {className}
      {eager}
      {ratio}
      alt={dict[alt] ? dict[alt] : alt} />

    {#if attribution}
    <div 
        style="height:calc({photoHeight}px - 0.5rem);"
        class="attribution-container">
      <div class="attribution-wrapper">
        {@html attribution}
      </div>
    </div>
    {/if}
    <div class="link-icon-wrapper"><LinkSvg size="1.4rem" /></div>
  </a>
  
  {/if}
{:else}
<div 
    bind:clientHeight={photoHeight}
    style="width: {width}; height: {height};">
  
  <Photo000
    {frame}
    {photoPath}
    {className}
    {eager}
    {ratio}
    alt={dict[alt] ? dict[alt] : alt} />

  {#if attribution}
  <div 
      style="height:{photoHeight};"
      class="attribution-container">
    <div class="attribution-wrapper">
      {@html attribution}
    </div>
  </div>
  {/if}
</div>
{/if}

<style>

  :global(.photo-container-sizing) {
    width: 100%;
    height: 100%;
  }

  a {
    display: block;
    position: relative;
  }

  .link-icon-wrapper {
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    background-color: var(--picture-link-bg-color);
    padding: 0.4rem;
    border-radius: 1rem;
  }

  .attribution-wrapper {
    color: var(--main-font-color);
    background-color: rgba(225,225,225, 0.6);
    font-size: 0.7rem;
    font-weight: bolder;
    padding: 0.2rem 0.7rem 0.1rem 0.7rem;
    margin-right: 0.2rem;
    border-radius: 1rem;
  }

  .attribution-container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    position: absolute;
    padding-bottom: 0.2rem;
    top: 0;
    left: 0;
    width: 100%;
  }

</style>