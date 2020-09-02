import {print, qs} from './~.js';
print('hi from event-04_load.js');

window.addEventListener('load', (event) => {
  alert('page is fully loaded');
});