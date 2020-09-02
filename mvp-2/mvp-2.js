// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.

// Adapted from here: https://youtu.be/UWCvbwo9IRk

const qs = x => document.querySelector(x);
const print = x => console.log(x);

const outer_div = qs('#outer-div');
const inner_div = qs('#inner-div');
const inner_most = qs('#inner-most');

outer_div.addEventListener('click', () => {
    print('outer div');
});
inner_div.addEventListener('click', () => {
    print('inner div');
});
inner_most.addEventListener('click', () => {
    print('innermost');
});