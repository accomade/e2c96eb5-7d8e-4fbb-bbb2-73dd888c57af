<script lang="ts">
  import { currentLang } from '$lib/stores/lang';
  import { dictEntry } from '$lib/conf/translations';

</script>


<svelte:head>
  <title>{dictEntry($currentLang,'imprint')}</title>
</svelte:head>



<div class="terms-wrapper">
  {@html dictEntry($currentLang, 'imprint_html')}
</div>


<style>
  .terms-wrapper {
    max-width: 100rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

</style>