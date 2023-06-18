<script lang="ts">
  import type { NavItem } from "$lib/types/nav";
  import { i18n } from '$lib/conf'
  import ExtLinkSvg  from "./svg/ExtLinkSVG.svelte";
  import { currentLang } from '$lib/stores/lang';  
  $: dict = i18n.translations[$currentLang].site

  export let n:NavItem

</script>

  <div class="wrapper" class:sub={n.sub}>
  {#if n.path}
    {#if n.external}
    <div class="ext-link-wrapper">
      <a 
        href="{n.path}" 
        target="_blank" 
        rel="noreferrer noopener"
        on:click|stopPropagation={close}>
          { dict[n.key] }
      </a>
      <div class="link-icon-wrapper">
        <ExtLinkSvg size="2rem"/>
      </div>
    </div>
    {:else}
      <a href="{n.path}" on:click|stopPropagation={close}>{ dict[n.key] }</a>
    {/if}
  {:else}
      <span>{ dict[n.key] }</span>
  {/if}
</div>

<style>
  .sub {
    font-size: 1.2rem;
    padding-left: 0.4rem;
  }

  a {
		text-decoration: underline;
		color: var(--nav-font-color);
	}

  .ext-link-wrapper {
    position: relative;
  }

  .link-icon-wrapper {
    position: absolute;
    left: -2.5rem;
    top: 0;
  }
</style>