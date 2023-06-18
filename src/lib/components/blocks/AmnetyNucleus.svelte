<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  import type { AmnetyNucleusType, Beds, CoffeeMachine } from '$lib/types/accos';

  import CheckSvg from '$lib/components/svg/CheckSVG.svelte';
  import NoCheckSvg from '$lib/components/svg/NoCheckSVG.svelte';
  import { dictEntry } from '$lib/conf/translations'
  $: trans = i18n.translations[$currentLang] 
  $: dict = trans.site;

  import { 
    formatNumberOf,
    formatSeating,
    formatSize,
    formatBed,
  } from '$lib/conf/formats';

  export let label:string="";
  export let kind:AmnetyNucleusType;
  
  export let value: boolean | number | string | Beds | CoffeeMachine[] | undefined = "";
  export let desc: string = "";
  
  $:t = dictEntry($currentLang,label) ? dictEntry($currentLang,label) : label


  
  $: asNumber = ():string => {
    return formatNumberOf($currentLang, value as number)
  }

  $: asSize = ():string => {
    return formatSize($currentLang, value as number)
  }

  $: asSeats = ():string => {
    return formatSeating($currentLang, value as number)
  }

  $: asCheck = value as boolean
  $: asBeds = value as Beds
  $: asCoffeeMachines = value as CoffeeMachine[]

  $: asString = value as string
  $: asLookupString = dictEntry($currentLang,asString) ? dictEntry($currentLang,asString) : asString

  $: descLookup = dictEntry($currentLang,desc) ? dictEntry($currentLang,desc) : desc

</script>

{#if kind == "longDesc"}
<div 
    class="desc-wrapper long-desc">
  <h4>{t}</h4>
  <p>
      {@html asLookupString}
  </p>
</div>
{/if}

{#if kind == "string"}
<div class="option">
  <dt>{t}</dt><dd>{asLookupString}</dd>
</div>
{/if}

{#if kind == "numValue"}
<div class="option">
  <dt>{t}</dt><dd>{asNumber()}</dd>
</div>
{/if}

{#if kind == "check"}
<div class="option">
  <dt>{t}</dt><dd>{#if asCheck}<CheckSvg/>{:else}<NoCheckSvg/>{/if}</dd>
</div>
{/if}

{#if kind == "checkWithDesc"}
<div class="option-with-desc">
  <dt>{t}</dt>
  <dd>{#if asCheck}<CheckSvg/>{:else}<NoCheckSvg/>{/if}</dd>
  {#if desc}
    <div class="desc-wrapper">{descLookup}</div>
  {/if}
</div>
{/if}

{#if kind == "beds"}
  {#each asBeds.specs as bed }
    <div class="option">
      <dt>{dictEntry($currentLang, bed.kind)}</dt><dd>{formatBed($currentLang, bed.heads, bed.kind)} {#if bed.optional}{dictEntry($currentLang,'bedOptional')}{/if}</dd>
    </div>
  {/each}
{/if}


{#if kind == "size"}
  <div class="option">
    <dt>{t}</dt><dd>{@html asSize()}</dd>
  </div>
{/if}


{#if kind == "seats"}
  <div class="option">
    <dt>{t}</dt><dd>{@html asSeats()}</dd>
  </div>
{/if}

{#if kind == "coffeeMachine"}
  <div class="option">
    <dt>{t}</dt>
    <dd>
      {#if asCoffeeMachines.length > 1}
        <ul class="coffee-machines">
        {#each asCoffeeMachines as cm, i}
          <li>
          {dictEntry($currentLang,cm)}
          </li>
        {/each}
        </ul>
      {:else}
      { dictEntry($currentLang, asCoffeeMachines[0]) }
      {/if}
    </dd>
  </div>
{/if}





<style>
  h4 {
    background-color: var(--table-header-bg-color);
    color: var(--table-header-font-color);
    padding: 0.3rem;
  }

  .option {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0.25rem;
  }

  .option dt {
    text-align: right;
  }

  .option-with-desc {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 0.2rem;
    margin-right: 1rem;
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
    align-content: center;
  }
  .option-with-desc dd {
    margin-right: 0.2rem;
  }

  .option-with-desc .desc-wrapper {
    font-style: italic;
    font-size: 0.8rem;
    max-width: 50vw;
    margin-bottom: 0.3rem
  }
  .option-with-desc .desc-wrapper:after {
    content: ")";
  }
  .option-with-desc .desc-wrapper:before {
    content: "(";
  }


  dd {
    margin-left: 0.2rem;
    margin-right: 1rem;
  }

  dt {
    font-weight: bolder;
    text-transform: capitalize;
  }

  dt::after {
    content: ":"
  }

  .long-desc {
    max-width: 48%
  }

  @media(min-width: 500px) and (max-width: 800px) {
   
    .long-desc {
      max-width: 98%;
    }
  }

  @media(max-width: 500px) {

    .long-desc {
      max-width: 98%;
    }
  }

</style>