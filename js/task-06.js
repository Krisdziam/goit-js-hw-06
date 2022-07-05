const input = document.querySelector(`input`);

// input.addEventListener(`blur`, onInputLenght)

// function onInputLenght(event){
//     if(event.currentTarget.value.length === +input.dataset.length ){

// input.classList.remove(`invalid`)
// return input.classList.add(`valid`)

//     } else {

//         input.classList.remove('valid')

//         return input.classList.add(`invalid`)
//     }
// };

input.addEventListener(`blur`, (event) => {
  if (event.currentTarget.value.length === +input.dataset.length) {
    input.classList.remove(`invalid`);
    return input.classList.add(`valid`);
  } else {
    input.classList.remove("valid");

    return input.classList.add(`invalid`);
  }
});

