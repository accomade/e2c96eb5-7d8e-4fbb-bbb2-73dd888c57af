<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';

  import { onMount } from 'svelte';
  import { load } from '$lib/weather';

  export let header1:string;
  export let header2:string;
  export let location:string;
  
  const callback = () => {
    //TODO maybe do something here
    // probably build something custom, not using weatherwidget.io 
    //
    //console.log("weather script loaded")
    initialLoadDone = true;
  }

  let initialLoadDone = false;
  onMount( () => {
    load(callback, window)
  })

  let dict:{[key:string]:string};
  $: {
    dict = i18n.translations[$currentLang].site
    if(initialLoadDone) {
      document.getElementById('weatherwidget-io-js')?.remove();
      load(callback, window);
    }
  }
</script>

<div class="weather-wrapper">

  <a 
    class="weatherwidget-io" 
    href="https://forecast7.com/{$currentLang}{location}"
    data-label_1="{dict[header1] ? dict[header1] : header1}"
    data-label_2="{dict[header2] ? dict[header2] : header2}"
    data-theme="pure" >
    {dict[header1] ? dict[header1] : header1} {dict[header2] ? dict[header2] : header2}
  </a>

</div>
