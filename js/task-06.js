function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


function createBoxes(amount) {
  let scale = 30;
  for (let i = 0; i < amount; i++) {
    boxes.insertAdjacentHTML('beforeend', `<div style="width: ${scale += 10}px; height: ${scale}px; background-color: ${getRandomHexColor()};"></div>`);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  if (input.value > 0 && input.value <= 100) createBoxes(input.value);
});

destroyBtn.addEventListener('click', () => destroyBoxes())