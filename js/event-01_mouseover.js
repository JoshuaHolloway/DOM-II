const print = (x) => console.log(x);
const qs = (x) => document.querySelector(x);

const josh = qs('#JOSH');
josh.addEventListener('mouseover', (event) => {
    // set the background a special color

    print('josh');
    josh.classList.add('_green_');
});

josh.addEventListener('mouseout', (event) => {
    print('mouseout');
    josh.classList.remove('_green_');
});