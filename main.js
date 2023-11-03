// Clone the content when the page loads
window.onload = function() {
    const content = document.querySelector('.content');
    const clone = content.cloneNode(true); // Deep clone the content
    content.appendChild(clone); // Append cloned content
  };
  
  let scrollPosition = 0; // initial scroll position
  const step = 200; // pixel value for each scroll. Adjust this based on your needs
  
  function scrollContentDown() {
    const content = document.querySelector('.content');
    // Ensure we get half of the full height since the content is cloned.
    const originalContentHeight = content.scrollHeight ;

    console.log('Scrolling Down', {scrollPosition, originalContentHeight});
  
    // Update the scroll position
    scrollPosition += step;
  
    // If the scroll position is greater than the height of the original content,
    // wrap around to show the top of the cloned content
    if (scrollPosition > originalContentHeight - step) { // Ensure it's minus step to not go over
      scrollPosition = 0;
    }
  
    // Apply the transformation to the content
    content.style.transform = `translateY(-${scrollPosition}px)`;
  }
  
  // Function for scrolling up
  function scrollContentUp() {
    const content = document.querySelector('.content');
    const originalContentHeight = content.scrollHeight ;

    console.log('Scrolling Up', {scrollPosition, originalContentHeight});
  
    // Update the scroll position
    scrollPosition -= step;
  
    // If the scroll position is below 0, wrap around to show the bottom of the cloned content
    if (scrollPosition < 0) {
      scrollPosition = originalContentHeight - step; // Make sure we're not out of bounds
    }
  
    // Apply the transformation to the content
    content.style.transform = `translateY(-${scrollPosition}px)`;
  }

  