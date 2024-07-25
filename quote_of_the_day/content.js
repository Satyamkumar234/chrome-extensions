// content.js

console.log('Content script loaded.');

// Add event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Example: Modify the background color of the body
  document.body.style.backgroundColor = 'lightblue';

  // Example: Inject a new element into the page
  var newDiv = document.createElement('div');
  newDiv.innerHTML = '<h1>Hello from Chrome Extension!</h1>';
  document.body.appendChild(newDiv);

  // Example: Modify existing elements on the page
  var paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(function(paragraph) {
    paragraph.style.color = 'green';
  });

  // Example: Listen for click events on a specific element
  var button = document.getElementById('myButton');
  if (button) {
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
  }
});
