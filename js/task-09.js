
const changeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');

changeColor.addEventListener('click', OnChangeColor);

function OnChangeColor() {
const generatedColor = getRandomHexColor();

  body.style.backgroundColor = generatedColor;
  color.textContent = generatedColor;
}

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}