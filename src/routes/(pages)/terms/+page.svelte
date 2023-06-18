<script lang="ts">
  import { dictEntry } from '$lib/conf/translations';
  import { currentLang } from '$lib/stores/lang';
</script>

<svelte:head>
  <title>{dictEntry($currentLang, 'terms')}</title>
</svelte:head>

<div class="terms-wrapper">
  {@html dictEntry($currentLang, 'tos_html')}
</div>


<style>
  .terms-wrapper {
    max-width: 100rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

</style>