const print = (x) => console.log(x);
const qs = (x) => document.querySelector(x);
print('hi from event-03_wheel.js');


const body = qs('body');
print(body);
body.addEventListener('wheel', (event) => {
    print(event);
});