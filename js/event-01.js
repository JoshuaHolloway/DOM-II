import {print, qs} from './~.js';
print('event-01.js');

const img = qs('img');
img.addEventListener('mouseover', (event) => {
    img.classList.add('_green_');
});

img.addEventListener('mouseout', (event) => {
    img.classList.remove('_green_');
});