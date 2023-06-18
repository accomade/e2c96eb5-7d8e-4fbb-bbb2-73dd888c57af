<script lang="ts">
  import PhotoComponent from './Photo.svelte'
  import type { GridPhoto, Photo } from '$lib/types/photos'
  import { browser } from '$app/environment'

  export let photos: Photo[]
  export let gridPhotoWidth = 300;

  let landscape = true
  if(browser) {
    landscape = window.innerWidth > window.innerHeight
    window.onresize = () => {
      landscape = window.innerWidth > window.innerHeight
    }
  }
  $: ratio = landscape ? "16/9" : "9/16"

  let galleryContainer:HTMLDivElement;
  
  let gridPhotos:GridPhoto[] = photos.map( (p:Photo):GridPhoto => {
    return {
      photo: p,
      zoomed: false,
      id: crypto.randomUUID(),
    } 
  })

  let width = 1000;
  $: numberOfCols = Math.floor(width/gridPhotoWidth);

  const zoom = (z:GridPhoto, i:number) => {
    let unzoom = false
    if(z.zoomed) {
      unzoom = true
    }

    gridPhotos.forEach( (p:GridPhoto) => p.zoomed = false );
    gridPhotos.splice(i,1)

    if(!unzoom) {
      z.zoomed = true;
    }
    gridPhotos = [z, ...gridPhotos]

    setTimeout( () => {
      galleryContainer.scrollIntoView();
    }, 100)
  }

</script>

<div 
    bind:this={galleryContainer}
    style="
      grid-template-columns: [firstLine] repeat({numberOfCols}, 1fr) [lastLine];
    "
    class="grid-container" bind:clientWidth={width}>
  {#each gridPhotos as p, i  (p.id)}
    <div 
        class:complete-row={p.zoomed}
        aria-label="resize" 
        on:click={() => zoom(p,i)}
        on:keypress={() => zoom(p,i)}
        class="photo-container">
    
      <PhotoComponent
        frame={true}
        ratio={p.zoomed ? ratio : "1"}
        photoPath={p.photo.photoPath} 
        alt={p.photo.alt}/>
  
    </div>
  {/each}
</div>


<style>
  .complete-row {
    grid-column-start: firstLine;
    grid-column-end: lastLine;
  }

  .photo-container {
    padding: 0;
    border: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
</style>
