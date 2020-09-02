import {print, qs, qsAll} from './~.js';
// print('event-01.js');

const imgs = Array.from(qsAll('img'));
imgs.forEach((img) => {
    img.addEventListener('mouseover', (event) => {
        // print('mouseover');
        img.classList.add('_green_');
    });

    img.addEventListener('mouseout', (event) => {
        // print('mouseover');
        img.classList.remove('_green_');
    });
});