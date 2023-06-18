<script lang="ts">
  import { currentLang } from '$lib/stores/lang';
  import { i18n } from '$lib/conf';
 
  export let ref:string
  $: trans = i18n.translations[$currentLang]
  
</script>

<div class="content">
{@html trans.site[ref]}
</div>

<style>
  .content {
    text-align: left;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
</style>