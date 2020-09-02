// https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
import {print, qs, qsAll} from './~.js';
print('hi from event-05_focus.js');


// Modified from MDN example:

// const password = document.querySelector('input[type="password"]');
const inputs = Array.from(qsAll('input'));
print(inputs);

inputs.forEach((input) => {

  input.addEventListener('focus', (event) => {
    event.target.style.background = 'hotpink'; 
    event.target.style.color = 'white';
  });

  input.addEventListener('blur', (event) => {
    event.target.style.background = '';
    event.target.style.color = '';
  });

});