// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
import {print, qs} from './~.js';
print('hi from event-06_resize.js');

window.addEventListener('resize', (event) => {
  console.log('resize, yo');
});