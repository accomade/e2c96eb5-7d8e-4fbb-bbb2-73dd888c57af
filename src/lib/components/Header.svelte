<script lang="ts">
  import { currentLang } from '$lib/stores/lang';
  import { i18n } from '$lib/conf';
  import Logo from '$lib/components/svg/LogoSVG.svelte';
  
  $: trans = i18n.translations[$currentLang] 
  
</script>

<header>
  <div class="logo"><Logo/></div>
  <div class="text-wrapper">
    <div class="header"><h1>{trans.site.headerTitle}</h1></div>
    <div class="slug">{trans.site.headerSlug}</div>
  </div>
</header>

<style>
  header {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0;
    width: 100%;
    color: var(--header-font-color);
    background-color: var(--header-bg-color);
  }

  .text-wrapper {
    min-height: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10rem;
    margin-right: 8rem;
  }

  .slug {
    font-size: 1.6rem;
    font-family: var(--header-font-family, 'sans-serif');
    font-variant: var(--header-font-variant, 'small-caps');
    margin-bottom: 1rem;
  }

  .header h1 {
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
    font-family: var(--page-title-font-family, 'sans-serif');
    font-variant: var(--page-title-font-variant, 'small-caps');
  }

  .logo {
    position: absolute;
    left: 0;
    top: 0;

    margin-left: 0.6rem;
    margin-top: 0.6rem;
    width: 10rem;
  }

  @media (max-width: 550px) {
    .text-wrapper {
      margin-left: 10rem;
      margin-right: 2rem;
    }
  }

  @media (max-width: 500px) {
    .text-wrapper {
      min-height: 6rem;
      margin-left: 6rem;
    }

    .slug {
      display: none;
    }
    .logo {
      width: 5rem;
    }
    .header h1 {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 300px) {
    .text-wrapper {
      min-height: 4rem;
      margin-left: 0.5rem;
      margin-right: 1rem;
    }

    .logo {
      display: none;
    }
    .header h1 {
      padding-left: 1rem;
    }
  }


</style>
