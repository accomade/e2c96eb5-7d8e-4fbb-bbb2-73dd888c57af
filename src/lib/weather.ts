export const load = (callback: VoidFunction, window:Window) => {

  const existing = document.getElementById('weatherwidget-io-js');
  if (!existing) {
    const tag = document.createElement('script');
    tag.src = 'https://weatherwidget.io/js/widget.min.js';
    tag.id = 'weatherwidget-io-js';
    tag.defer = true;
    tag.async = true;
    tag.onload = callback;
    document.body.appendChild(tag)
  }
  else {
    callback()
  }
}