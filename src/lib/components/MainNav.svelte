<script lang="ts">
	import { fade } from 'svelte/transition';
	
	import { i18n } from '$lib/conf'
  import { currentLang } from '$lib/stores/lang';
  
	import type { Nav } from '$lib/types/nav';
	import { isMenuOpen } from '$lib/stores/menu';
	import NavItem from './NavItem.svelte';
	
	export let nav:Nav

	
	let allTranslations = Object.keys(i18n.translations);
	$: dict = i18n.translations[$currentLang].site

	const close = () => {
		isMenuOpen.set(false)
	}

</script>

<button class="not-nav" on:click={close} transition:fade></button>

<nav class="main-nav" class:open={$isMenuOpen} transition:fade>
	<ul>
		{#each nav.main as n}
		<li>
			<NavItem {n}/>
		</li>
		{/each}

		{#if allTranslations.length > 1}
		<li>
			<fieldset>
				<legend>{ dict['lang'] }</legend>
		
				{#each allTranslations as langKey}
				<div class="radio-wrapper">
					<input 
							type="radio"
							bind:group={$currentLang}
							name="language"
							id="{langKey}"
							value="{langKey}"
							checked={langKey === $currentLang}>
					<label for="{langKey}">{dict[langKey] ? dict[langKey] : langKey}</label>
				</div>
				{/each}
			</fieldset>
		</li>
		{/if}
	</ul>
</nav>

<style>
	fieldset {
		padding-left: 1rem;
	}

	nav {
		position: fixed;
    padding-right: 1rem;
    top: 0;
    right: 0;
    padding-top: 3rem;
    background-color: var(--nav-bg-color);
    color: var(--nav-font-color);
    height: 100vh;
		font-family: var(--nav-font-family);
		font-variant: var(--nav-font-variant);
    font-size: 1.6rem;
    font-weight: bold;

		overflow-y: auto;
		overflow-x: hidden;
	}

	.not-nav {
		border: none;
		position: fixed;
    top: 0;
    right: 0;
		bottom: 0;
		left: 0;
    background-color: rgba(0, 0, 0, 0.1);
		overflow-y: hidden;
		overflow-x: hidden;
	}

	li {
		list-style: none;
		margin-bottom: 1rem;
	}

	.radio-wrapper {
		font-family: var(--nav-font-family);
		font-variant: var(--nav-font-variant);
    font-size: 1.6rem;
		font-weight: bold;
		line-height: 1.1;
		display: grid;
		grid-template-columns: 1em auto;
		gap: 0.5em;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	ul {
		padding-left: 3rem;
		margin: 0;
	}
	
</style>