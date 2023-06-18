<script lang="ts">
  import Photo from '$lib/components/blocks/Photo.svelte';
  import HamburgerMenuButton from '$lib/components/HamburgerMenuButton.svelte';
  import MainNav from '$lib/components/MainNav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Section from '$lib/components/blocks/Section.svelte';

  import { i18n, nav, landing } from '$lib/conf'
  import { currentLang } from '$lib/stores/lang';
  import { isMenuOpen } from '$lib/stores/menu';
  
  $: currentTranslation = i18n.translations[$currentLang]
  $: title = currentTranslation.site.title;
  
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<header class="header-image">
  <Photo 
    photoPath={landing.headerPhoto} 
    alt="Header Image" 
    eager={true}/>
</header>

<div class="floating-title">
  <h1>{ title }</h1>
</div>

<main>
  {#each landing.sections as s}
  <Section {...s} />
  {/each}
</main>

{#if $isMenuOpen}
  <MainNav nav={nav} />
{/if}

<div class="ham-wrapper">
  <HamburgerMenuButton/>
</div>

<Footer nav={nav}/>

<style>

  header {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: calc(100vh - 2rem);
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: calc(100vh - 1rem);
    text-align: center;
    margin-left: 2rem;
    margin-right: 2rem;

  }

  .floating-title {
    width: 100%;
    height: calc(100vh - 2rem);
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* mix-blend-mode: difference; */
    text-align: center;
  }

  .floating-title h1 {
    font-weight: bolder;
    font-size: 2.8rem;
    font-family: var(--landing-title-font-family, 'sans-serif');
    font-variant: var(--landing-title-font-variant, 'small-caps');
    color: var(--title-font-color);
    filter: drop-shadow(0.2rem 0.3rem 0.2rem black);
  }

  @media( max-width: 300px ) {
    .floating-title h1 {
      font-size: 1.6rem;
    }
  }

  .ham-wrapper {
    position: fixed;
    right: 1rem;
    top: 1rem;
    width: 3rem;
    height: 3rem;
  }

  @media( max-width: 500px ) {
    main {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>