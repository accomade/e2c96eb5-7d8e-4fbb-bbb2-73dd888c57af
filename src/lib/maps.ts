import { PUBLIC_MAPS_API_KEY } from '$lib/conf/settings'

declare global {
  interface Window { 
    mapsReady: VoidFunction;
    google: any;
  }
}

export const load = (callback:VoidFunction, window:Window) => {
  window.mapsReady = callback;

  const url = `https://maps.googleapis.com/maps/api/js?key=${PUBLIC_MAPS_API_KEY}&callback=mapsReady`

  const existing = document.getElementById('GOOGLE_MAPS_API');
  if (!existing) {
    const tag = document.createElement('script');

    tag.id = 'GOOGLE_MAPS_API';
    tag.async = true;
    tag.defer = true;
    tag.src = url;

    document.body.appendChild(tag);
  }
  else {
    callback()
  }

}