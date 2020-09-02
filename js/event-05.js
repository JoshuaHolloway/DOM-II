// https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
const print = (x) => console.log(x);
const qs = (x) => document.querySelector(x);
print('hi from event-05_focus.js');


// Example from MDN:
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});