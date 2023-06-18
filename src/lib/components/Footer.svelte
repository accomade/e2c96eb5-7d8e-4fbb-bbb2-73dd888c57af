<script lang="ts">
  import { currentLang } from '$lib/stores/lang';
  import { dictEntry } from '$lib/conf/translations';

	import type { Nav } from '$lib/types/nav';
  import NavItem from './NavItem.svelte';
  
  export let nav:Nav

</script>

<footer>
  <div class="nav">
    {#each nav.footer as n }
    <div class="link-wrapper">
      <NavItem {n}/>
    </div>
    {/each}
  </div>
  <div class="content">
    {@html dictEntry($currentLang, 'footer_html')}
  </div>
</footer>

<style>
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-grow: 3;
  }
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: right;
  }

  .link-wrapper {
		text-decoration: underline;
		color: var(--nav-font-color);
    font-family: var(--nav-font-family, 'mono');
    font-variant: var(--nav-font-variant, 'normal');
    font-size: 1.4rem;
    font-weight: bold;
	
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    color: var(--footer-font-color);
    background-color: var(--footer-bg-color);
    margin-top: 1rem;
    width: 100%;

    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media(max-width: 500px) {
    .nav {
      flex-direction: row;
      justify-content: left;
    }
  }

</style>