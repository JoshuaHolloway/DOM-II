// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
import {print, qs} from './~.js';
print('hi from event-09_dblclick.js');

const josh = qs('#josh-1');
josh.addEventListener('dblclick', () => {
    print('double clicked');
});