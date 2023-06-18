
<script lang="ts">
	import { TwicImg } from '@twicpics/components/sveltekit'
	import { onMount } from 'svelte';

	export let frame = false;
	export let photoPath:string;
	export let className:string;
	export let alt:string;
	//export let maxWidth:string;
	//export let maxHeight:string;
	export let eager:boolean = false;
	export let ratio = "none";

	let mounted = false;
	onMount( () => {
		mounted = true;
	})

</script>

{#if frame}
	<div class="frame">
		<TwicImg 
			class={className}
			src={photoPath}
			{alt}
			{ratio}
			mode="cover"
			{eager}
		/>
	</div>
{:else}
	<div class="no-frame">
		<TwicImg 
			class={className}
			src={photoPath}
			{alt}
			{ratio}
			mode="cover"
			{eager}
		/>
	</div>
{/if}
	


<style>

	.no-frame {
		width:100%;
		height:100%;
	}
	.frame {
		width:100%;
		height:100%;
		padding: 0.3rem;
		box-shadow: 0px 1.1px 2.2px rgba(0, 0, 0, 0.02),
			0px 2.7px 5.3px rgba(0, 0, 0, 0.028),
			0px 5px 10px rgba(0, 0, 0, 0.035),
			0px 8.9px 17.9px rgba(0, 0, 0, 0.042),
			0px 16.7px 33.4px rgba(0, 0, 0, 0.05),
			0px 40px 80px rgba(0, 0, 0, 0.07);
	}
</style>
