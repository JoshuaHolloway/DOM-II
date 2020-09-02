const print = (x) => console.log(x);
const qs = (x) => document.querySelector(x);
print('hi from event-02_keydown.js');

const body = qs('body');
print(body);
body.addEventListener('keydown', (event) => {
    print(event.code);
});