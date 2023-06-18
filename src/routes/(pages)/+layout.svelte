<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import HamburgerMenuButton from '$lib/components/HamburgerMenuButton.svelte';
  import MainNav from '$lib/components/MainNav.svelte';
  
  import { isMenuOpen } from '$lib/stores/menu';
  
  import { nav } from '$lib/conf';
</script>

<div class="layout-wrapper">

  <Header/>

  <main>
    <slot></slot>
  </main>

  <Footer nav={nav}/>

</div>


{#if $isMenuOpen}
<MainNav nav={nav} />
{/if}


<div class="ham-wrapper">
  <HamburgerMenuButton/>
</div>

<style>
  .layout-wrapper {
    display: flex;
    height: 100vh;
    flex-direction: column
  }


  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 2;
  }


  .ham-wrapper {
    position: fixed;
    right: 1rem;
    top: 1rem;
    width: 3rem;
    height: 3rem;
  }
</style>