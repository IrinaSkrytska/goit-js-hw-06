const currentInput = document.querySelector('#name-input');
const inputName = document.querySelector('#name-output');

currentInput.addEventListener('input', onInputFocus);

function onInputFocus(event) {
    inputName.textContent = event.currentTarget.value;
 }
