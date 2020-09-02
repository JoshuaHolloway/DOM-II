// scroll event

// -The scroll event fires when the document view of an element has been scrolled.
window.addEventListener('scroll', () => {

    const document_height = document.documentElement.scrollHeight; // heigt of entire document;
    const window_inner_height = window.innerHeight;
    const scrollable_height = document_height - window_inner_height;
    console.log(scrollable_height);

    const scrolled = window.scrollY;

    console.log(scrolled);
    if (scrolled === scrollable_height)
        console.log('BOTTOM OF PAGE!');
});