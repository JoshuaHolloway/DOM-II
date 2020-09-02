// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event

const print = (x) => console.log(x);
const qs = (x) => document.querySelector(x);
print('hi from event-06_resize.js');

window.addEventListener('resize', (event) => {
  console.log('resize, yo');
});