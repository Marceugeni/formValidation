const inputEmail1 = document.getElementById('inputEmail1')
const inputPassword1 = document.getElementById('inputPassword1')
const form = document.getElementById('form')
const errords = document.getElementById('errords')
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

errords.style.color = 'red'


form.addEventListener('submit', (e) => {
    e.preventDefault()   
    console.log('check check 1 2.')
    let errorMessages = [];
    if (inputEmail1.value === '' || inputEmail1.value == null){
        errorMessages.push('El campo e-mail es obligatorio')

    }
    if (!filter.test(inputEmail1.value)) {
        errorMessages.push('El campo e-mail no tiene el formato correcto');
    }


    if (inputPassword1.value === '' || inputPassword1.value == null){
        errorMessages.push('Ingresa un Password')

    }

    errords.innerHTML = errorMessages.join(', ')
    return false;


})




























/* const eMail = document.getElementById('inputEmail1')
const pass = document.getElementById('inputPassword1')
const signInForm = document.getElementById('signInForm')
const errorLogin = document.getElementById('errorLogin')



signInForm.addEventListener('submit', (e) => {
    e.preventDefault()
  
})


  */




/* 
let messages = []
if (eMail.value === '' || eMail.value == null) {
    messages.push('No pot estar vuit')

}

if (messages.length > 0) {
    e.preventDefault()
    errorLogin.innertext = messages.join(', ')

}
console.log(messages); */


 
    