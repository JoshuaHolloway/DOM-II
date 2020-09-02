// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
const qs = x => document.querySelector(x);
const print = x => console.log(x);

const outer_div = qs('#outer-div');
const inner_div = qs('#inner-div');

const link = qs('#_link_');
print(link);

link.addEventListener('click', function(e) {
    // e is a mouseevent object
    e.preventDefault();
});