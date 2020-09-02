// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.

const qs = x => document.querySelector(x);
const print = x => console.log(x);

const outer_div = qs('#outer-div');
const inner_div = qs('#inner-div');

outer_div.addEventListener('click', (e) => {
    print('outer div event');

});
inner_div.addEventListener('click', (e) => {
    print('inner div event');

    // outer_div.style.backgroundColor = 'red';
    outer_div.classList.toggle('_purple_');

    e.stopPropagation();
});