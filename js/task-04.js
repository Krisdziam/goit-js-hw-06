// const counterValue = {
    
// }


let counterValue = 0;

function increment (){
    counterValue -= 1
    ValueEl.textContent = counterValue
}

function decrement(){
    counterValue += 1
    ValueEl.textContent = counterValue
}


const decrementButton = document.querySelector(
    'button[data-action="decrement"]',
  );
  const incrementButton = document.querySelector(
    'button[data-action="increment"]',
  );
  const ValueEl = document.querySelector(`#value`);


  decrementButton.addEventListener(`click`, increment)
  incrementButton.addEventListener(`click`, decrement)