const form = document.getElementById('form')
const mail = document.getElementById('mail')
const pass = document.getElementById('pass')
const adress = document.getElementById('adress')
const province = document.getElementById('province')
const ciutat = document.getElementById('ciutat')
const codiPostal = document.getElementById('codiPostal')
const gridCheck = document.getElementById('gridCheck')
const error =document.getElementById('error')
/* filter mail vallidazzione */
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
error.style.color = 'red'

form.addEventListener ('submit', (e) => {
    e.preventDefault()
    console.log('hey hey, va bé')
    let errorMessages = []
    if (mail.value === "" || mail.value === null){
        errorMessages.push('El campo email es obligarotio')

    }
    if (!filter.test(mail.value)){
        errorMessages.push('El campo e-mail no tiene el formato correcto')

    }

    if (pass.value === ""){
        errorMessages.push('Has de introducir la contraseña')

    }

    if (adress.value === ""){
        errorMessages.push('Introduce una dirección, por favor.')

    }

    if (province.value === ""){
        errorMessages.push('Selecciona una provincia')

    }

    if (ciutat.value === ""){
        errorMessages.push('Escribe el nombre de tu ciudad o municipio')

    }

    if (codiPostal.value === "" || codiPostal.value < 5){
        errorMessages.push('escribe tu código postal (cinco dígitos)')

    }


    error.innerHTML = errorMessages.join(', ')
    return false;

})
