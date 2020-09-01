const print = (x) => console.log(x);
const qs = (x) => document.querySelector(x);
print('hi from event-04_load.js');

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});