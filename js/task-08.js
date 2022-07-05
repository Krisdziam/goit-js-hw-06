const input = document.querySelector(`.login-form`);
input.addEventListener(`submit`, onFormDataSubmit)
function onFormDataSubmit (event){
    event.preventDefault();

const elements = {
email: event.currentTarget.elements.email.value,
password: event.currentTarget.elements.password.value
}
if(elements.email === "" || elements.password === ""){

alert(`Всі поля повинні бути заповнені`)

} else {
   console.log(`email: ${elements.email}, password: ${elements.password}`)
   event.currentTarget.reset()
}

}



