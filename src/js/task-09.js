function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const bodyEl = document.querySelector(`body`);
const buttonEl = document.querySelector(`.change-color`)
const colorEl = document.querySelector(`.color`)
buttonEl.addEventListener(`click`, onChangeColor);

function onChangeColor(){
bodyEl.style.backgroundColor = getRandomHexColor();
colorEl.textContent = getRandomHexColor();


}
