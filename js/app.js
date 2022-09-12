const formulario = document.querySelector('.formulario')
const nombre = document.querySelector('.nombre')
const apellido = document.querySelector('.apellido')
const correo = document.querySelector('.correo')
const marcaAuto = document.querySelector('.marcaAuto')
const precio = document.querySelector('.precio')
let yearModel = document.querySelector('.yearModel')
const seleccion = document.querySelectorAll('input[name=radioPrueba]')
const btn = document.querySelector('.boton')
const alerta = document.querySelector('.alerta')
const divMensaje = document.querySelector('.divMensaje')
const mensaje = document.querySelector('.mensaje')
let total;
let totalFinal;


document.addEventListener('DOMContentLoaded', () => {
    llenarOpciones()
})

precio.addEventListener('blur', () => {
    if (precio.value < 1000) {
        console.log('carro muy barato')
        alerta.classList.remove('d-none')
        btn.disabled = true
    }
    if (precio.value >= 1000) {
        btn.disabled = false
        alerta.classList.add('d-none')
    }
})
formulario.addEventListener('submit', enviarCotizacion)

function enviarCotizacion(e){
    e.preventDefault()
    // const precio2 = parseInt(precio.value)

    if (nombre.value === '' || apellido.value === '' || correo.value === '' || marcaAuto.value === '' || precio.value === '') {
        alert('Todos los campos son obligatorios')
        divMensaje.classList.add('d-none')
        return
    }else{
        console.log('todo esta lleno!!')
    }

    console.log(seleccion[0].checked)
    if(seleccion[0].checked){
        total = precio.value * 0.012
        console.log(total)
    }else{
        total = precio.value * 0.022
        console.log(total)
    }

    const arregloIntermedio = ['2011','2012','2013','2014','2015','2016']

    if(yearModel.value >= 2017) {
        totalFinal = (total + (total * 0.3)).toFixed(1)
        console.log(totalFinal)
    }else if ( arregloIntermedio.includes(yearModel.value)) {
        totalFinal = (total + (total * 0.2)).toFixed(1)
        console.log(totalFinal)
    }else{
        totalFinal = (total + (total * 0.1)).toFixed(1)
        console.log(totalFinal)
    }


    divMensaje.classList.remove('d-none')
    exito(`${nombre.value} ${apellido.value} tu cotización de <strong> '${seleccion[0].checked ? 'Seguro básico' : 'Seguro plus'}' </strong> para el coche '${marcaAuto.value}' modelo ${yearModel.value} es de <strong> '$${totalFinal} USD anuales'</strong>, más información se te madara a tu correo '${correo.value}'`)

    formulario.reset()

    // if (seleccion[1].checked) {
        
    // }
}

function exito(mensajeExito) {
    mensaje.innerHTML = mensajeExito
}

function llenarOpciones(){
    const max = new Date().getFullYear();
    const min = max - 20;

    const selectYear = document.querySelector('#year');
    for(let i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}