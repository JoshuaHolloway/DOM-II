// Example from MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

// Step 1: Identify what is draggable
//  -Making an element draggable requires adding the draggable attribute and the ondragstart global event handler:
// <p id="p1" draggable="true">This element is draggable.</p> 


// Step 2: Define the drag's data
// -The application is free to include any number of data items in a drag operation.
// -Each data item is a string of a particular type - typically a MIME type such as a 'text/html'.
// -Each 'drag event' has a dataTransfer property that holds the event's data.
// -This property (which is a DataTransfer object) also has methods to manage drag data.
// -The setData() method is used to add an item to the drag data:


// Step 3: Define the drag effect
// -The dropEffect property is used to control the feedback the user is given during a drag-and-drop operation.
// -It typically affects which cursor the browser displays while dragging.
// -Three effects may be defined: {copy, move, link}


// Step 4: Define a drop zone
//  -By default, the browser prevents anything from happening when dropping something onto most HTML elements.
//  -To change that behavior so that an element becomes a drop zone or is droppable, the element must have both ondragover and ondrop event handler attributes.
//  -The following code shows how to use those attributes, and includes basic event handlers for each attribute.

// Note that each handler calls 'preventDefault()' to prevent additional event processing for his event (such as touch events or pointer events)


// Step 5: Handle the drop effect
//  -The handler for the drop event is free to process the drag data in an application-specific way.
//  -Typically, an application uses the getData() method to retrieve drag items and then process them accordingly.
//  -Additionally, application semantics may differ depending on the value of the dropEffect and/or the state of modifier keys.
//  -The following example shows a drop handler getting the source element's id from the drag data, and then using the id to move the source element to the drop element:


// Step 6: Drag end