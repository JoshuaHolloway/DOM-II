import {print, qs} from './~.js';
print('hi from event-02_keydown.js');

const body = qs('body');
print(body);
body.addEventListener('keydown', (event) => {
    print(event.code);
});