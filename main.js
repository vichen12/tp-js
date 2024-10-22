import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
   <h1>Punto 7: Introducción al DOM</h1>
   <section id='section-change-color'>
      <h2>Ejercicio 1</h1>
      <p>¡Hola! Soy el primer texto en un párrafo</p>
      <p>¡Hola! Soy el segundo texto en un párrafo</p>
      <p>¡Hola! Soy el tercer texto en un párrafo</p>
      <button>Cambiar color a azul</button>
  </section>
  <section>
    <form id='form'>
      <h2>Ejercicio 2</h2>
      <label for='text'>Nombre:</label>
      <input type='text' id='text' name='text'>
      <button>Enviar</button>
  </section>
    <h1>Punto 8: Eventos en DOM</h1>
    <section>
      <h2>Ejercicio 1: Lista con elementos</h2>
      <ul id='lista'>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
      <li>Elemento 4</li>
      </ul>
  </section>
     <section id='section8'>
      <h2>Ejercicio 2: Campo de texto y botones</h2>
      <input type='text' placeholder='Ingresa algo' />
      <button>Deshabilitar campo</button>
      <button>Habilitar campo</button>
  </section>
  <h1>Punto 9: Local Storage</h1>
  <form>
    <h2>Ejercicio 1</h2>
    <div>
      <label for='email'>Correo Electrónico:</label>
      <input type='email' id='email' name='text'>
      <button id='save-email'>Guardar Correo</button>
    </div
    <p>Correo guardado: <span id='email-saved'></span></p>
    <br />
    <button id='delete-email'>Eliminar Correo Guardado</button>
  </form>
  </div>
`

//**PUNTO 1**
//Ejercicio 2
const a = 5
const b = 10
const c = a + b

console.log(`La suma de ${a} + ${b} es: ${c}`)

//Ejercicio 3
const nombre = prompt('Por favor, ingresa tu nombre:')

console.log(`Hola, ${nombre}!`)

//**PUNTO 2**
//Ejercicio 1

const a2 = 5
const b2 = 10
const c2 = 2
const mayor = Math.max(a2, b2, c2)

console.log(`El número mayor es: ${mayor}`)

//Ejercicio 2

const numero = prompt('Por favor, ingresa un número:')
const esPar = numero % 2 === 0
if (esPar) {
  console.log(`El número ${numero}, es par`)
} else {
  console.log(`El número ${numero}, es impar`)
}

//**PUNTO 3**
//Ejercicio 1
let numeroResta = prompt('Por favor, ingresa un número:')
while (numeroResta > 0) {
  numeroResta--
  console.log(numeroResta)
}

//Ejercicio 2
let numeroMayor

do {
  numeroMayor = prompt('Por favor, ingresa un número:')
  if (numeroMayor <= 100) {
    console.log('El número debe ser mayor a 100')
  } else {
    console.log(`El número ingresado es mayor a 100: ${numeroMayor}`)
  }
} while (numeroMayor <= 100)

//**PUNTO 4**
//Ejercicio 1
function esNumeroPar(numero) {
  return numero % 2 === 0
}

console.log(`El número 8 es par: ${esNumeroPar(8)}`)
console.log(`El número 9 es par: ${esNumeroPar(9)}`)

function convertirCelsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32
}

console.log(`30°C son equivalentes a ${convertirCelsiusAFahrenheit(30)}°F`)

//**PUNTO 5**
//Ejercicio 1
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Mendoza'
}

const updateCiudad = (persona, ciudad) => {
  persona.ciudad = ciudad
}
updateCiudad(persona, 'San Juan')
console.log(`Persona después de la actualización: ${JSON.stringify(persona)}`)

//Ejercicio 2
const libro = {
  titulo: 'El señor de los anillos',
  autor: 'J.R.R. Tolkien',
  año: 1954
}

function esAntiguo(libro) {
  const date = new Date().getFullYear()
  const año = libro.año
  return date - año > 10
}

console.log(`El libro es antiguo: ${esAntiguo(libro)}`)

//**PUNTO 6**
//Ejercicio 1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arrayMultiplicado = array.map((el) => el * 2) //esta es la forma de hacerlo con map
let arrayMultiplicado = []
for (let el of array) {
  arrayMultiplicado.push(el * 2)
}

console.log(`Array original: ${array}`)
console.log(`Array multiplicado por 2: ${arrayMultiplicado}`)

//Ejercicio 2
let pares = []

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i)
  }
}

console.log(`Primeros 10 números pares: ${pares}`)

//**PUNTO 7** Introducción al DOM
//Ejercicio 1
const section = document.getElementById('section-change-color')
const button = section.querySelector('button')
button.addEventListener('click', () => {
  const paragraphs = section.querySelectorAll('p')
  for (let paragraph of paragraphs) {
    paragraph.style.color = 'blue'
  }
})

//Ejercicio 2
const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const texto = document.getElementById('text').value

  alert(`El texto ingresado es: ${texto}`)
})

//**PUNTO 8** Eventos en DOM
//Ejercicio 1
const lista = document.getElementById('lista')
const elements = lista.querySelectorAll('li')
elements.forEach((element, index) => {
  element.addEventListener('click', () => {
    console.log(`Elemento ${index + 1} clickeado`)
  })
})

//Ejercicio 2
const sectionContainer = document.getElementById('section8')
const input = sectionContainer.querySelector('input')
const buttons = sectionContainer.querySelectorAll('button')
const disableButton = buttons[0]
const enableButton = buttons[1]

disableButton.addEventListener('click', () => {
  input.disabled = true
})

enableButton.addEventListener('click', () => {
  input.disabled = false
})

//**PUNTO 9** Local Storage
//Ejercicio 1
const inputEmail = document.getElementById('email')
const buttonSaveEmail = document.getElementById('save-email')
const buttonDeleteEmail = document.getElementById('delete-email')
const spanEmail = document.getElementById('email-saved')

buttonSaveEmail.addEventListener('click', () => {
  const email = inputEmail.value
  localStorage.setItem('email', email)
  spanEmail.innerText = localStorage.getItem('email')
})

buttonDeleteEmail.addEventListener('click', () => {
  localStorage.removeItem('email')
  spanEmail.innerText = ''
})
