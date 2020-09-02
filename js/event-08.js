import {print} from './~.js';

// select event
// -https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event
// -The select event fires when some text has been selected.
// -This is the example from MDN ported into the project
print('inside logSelection');
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('#_input_');
input.addEventListener('select', logSelection);