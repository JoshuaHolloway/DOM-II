const print = (x) => console.log(x);

// drag / drop

// Mark element as "draggable"
//  -Add draggable attribute (or)
//  -Set draggable property to true

// Listen to "dragstart" event on th element that is draggable
//  -Triggered when the user starts dragging the event
//  -In the event listener we can interact with the event object
//   to describe the drag operation if we are copying or moving.
//  -Can also append data to the event.

// Add listern to either the "dragenter" or "dragover" events
//  -Tells JS where the item can be dropped.
//  -Use preventDefault()

// (Optional) Listen to the "dragleave" event  (update styles)

// Listen to "drop" event and update data/UI

// (Optional) listen to the "dragend" event and update data/UI
const josh = document.getElementById('JOSH');
josh.addEventListener('dragstart', (event) => {
    const id = 1;
    event.dataTransfer.setData('text/plain', id);

    // Describe what kind of drag and drop operation is getting performed
    event.dataTransfer.effectAllowed = 'move';
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed


});

// Mark as drop zone:
const josh_2 = document.getElementById('JOSH-2');
josh_2.addEventListener('dragenter', event => {
    print('inside josh_2 event listener');    
});
print(josh_2);