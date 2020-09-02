import {print, qs, qsAll} from './~.js';
print('mvp-2.js');

const links = Array.from(qsAll('.nav > .nav-link'));
links.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        // print('clicked');
        e.preventDefault();
    });
});