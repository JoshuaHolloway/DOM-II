import {print, qs} from './~.js';
// print('hi from event-03_wheel.js');


const body = qs('body');
print(body);
body.addEventListener('wheel', (event) => {
    print(event);
});