// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.








function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');;
const inputMeaning = document.querySelector('#controls > input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
let amount = 0;

createBtn.addEventListener('click', onCreateBtn);
destroyBtn.addEventListener('click', destroyBoxes);
inputMeaning.addEventListener('click', onCurrentAmount);

// --------------Проверяем значение amount-----------------
function onCurrentAmount(event) {
  amount = Number(event.currentTarget.value);
  console.log(amount);
}

// ---------------Создаём boxes--------------

function onCreateBtn(){
  createBoxes(amount);
}

// ---------- Создаем  <div> c amount-------------

function createBoxes(amount) {
  const markup = new Array(amount);

  for (let i = 0; i < markup.length; i+=1){
    markup[i] = `<div style = "background-color:
    ${getRandomHexColor()};
    width: ${ 30 + i * 10 }px;
    height: ${ 30 + i * 10}px;"></div>`;
  }
  boxes.innerHTML = markup.join('');
}

//----------Очищаем содержимое div#boxes-------------

function destroyBoxes() {
  boxes.innerHTML = "";
}