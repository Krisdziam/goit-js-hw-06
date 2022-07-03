function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let colorChange = getRandomHexColor();


const bodyEl = document.querySelector(`body`);
const buttonEl = document.querySelector(`.change-color`)
const colorEl = document.querySelector(`.color`)
buttonEl.addEventListener(`click`, onChangeColor);

function onChangeColor(){
  let colorChange = getRandomHexColor();


bodyEl.style.backgroundColor = colorChange;
colorEl.textContent = colorChange;


}
