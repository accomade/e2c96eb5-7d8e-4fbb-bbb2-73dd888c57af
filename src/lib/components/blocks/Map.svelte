<script lang="ts"> 
  import { onMount } from 'svelte';
  import { load } from '$lib/maps';

  export let lat: number;
  export let long: number;
  export let zoom: number;
  export let address: string = 'Achterstr. 4, 17459 Koserow';

  $: navUrl=`https://www.google.com/maps/dir//${encodeURIComponent(address)}/@${lat},${long},${zoom-6}z/`

  let mapDiv:HTMLDivElement;
  const mapsCallback = () => {
    //console.log('maps ready')
    const place = { lat: lat, lng: long };
    // The map, centered at place
    
    const map = new window.google.maps.Map(
      mapDiv,
      {
        zoom: zoom,
        center: place,
        fullscreenControl: false,
        mapTypeControl: false,   
      }
    );

    // The marker, positioned at place
    
    const marker = new window.google.maps.Marker({
      position: place,
      map: map,
    });    
  }

  onMount( () => {
    load(mapsCallback, window)
  });

</script>

<div class="wrapper">
  <div class="map" bind:this={mapDiv} id="map"></div>
  <div class="nav-floater">
    <a href="{navUrl}" rel="noreferrer noopener" target="_blank">{address}</a>
  </div>
</div>

<style>
  .wrapper {
    width: 100%;
    position: relative;
  }
  .nav-floater{
    position: absolute;
    top: 0;
    padding: 1rem;
    color: var(--picture-link-font-color);
    background-color: var(--picture-link-bg-color);
  }
  a {
    color: var(--picture-link-font-color);
  }
  .map {
    width: 100%;
    min-height: 60vh;
  }
</style>