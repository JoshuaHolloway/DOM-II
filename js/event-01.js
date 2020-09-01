import {print, qs} from './~.js';
print('event-01.js');

const josh = qs('#josh-1');
josh.addEventListener('mouseover', (event) => {
    // set the background a special color

    print('div hovered');
    josh.classList.add('_green_');
});

josh.addEventListener('mouseout', (event) => {
    print('mouseout');
    josh.classList.remove('_green_');
});