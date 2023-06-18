<script>
	import { isMenuOpen } from '$lib/stores/menu.js'
	import HamburgerSVG from './svg/HamburgerSVG.svelte'
	import XSVG from './svg/XSVG.svelte'

	export let closeOnly = false

	const toggleIsMenuOpen = () => {
		isMenuOpen.set(!$isMenuOpen)
	}
</script>

<button
	on:click={toggleIsMenuOpen}
	aria-pressed={$isMenuOpen}
	aria-label="menu button"
	tabindex={($isMenuOpen || !closeOnly) ? 0 : -1}
>
	{#if $isMenuOpen}
		<XSVG />
	{:else}
		<HamburgerSVG />
	{/if}
</button>


<style>
	button {
		background-color: transparent;
		border: 0;
		width: 3rem;
    height: 3rem;
	}
</style>