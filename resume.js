
// This script toggles the display of a hidden element when the button is clicked

const button = document.querySelector('button');
const hiddenElement = document.querySelector('.hidden');

button.addEventListener('click', function() {
  if (hiddenElement.style.display === 'none') {
    hiddenElement.style.display = 'block';
    button.textContent = 'Hide';
  } else {
    hiddenElement.style.display = 'none';
    button.textContent = 'Show';
  }
});
