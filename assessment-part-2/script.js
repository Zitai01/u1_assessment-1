// Insert Javascript Here
console.log('hello')

const button1 = document.querySelector('.button1')
const inputs = document.querySelector('.inputs')
const button2 = document.querySelector('.button2')
const display = document.querySelector('.result')
let result = 0
inputs.value = 1

button2.addEventListener('click', (button) => {
  let values = parseInt(inputs.value)
  console.log(values)
  result += values
  display.innerHTML = result
  //bonus
  if (result < 0) {
    display.style.color = '#ff0000'
    console.log(display)
  } else if (result > 0) {
    display.style.color = '#000000'
  }
})

button1.addEventListener('click', (button) => {
  let values = parseInt(inputs.value)
  result -= values
  display.innerHTML = result

  if (result < 0) {
    display.style.color = '#ff0000'
    console.log(display)
  } else if (result > 0) {
    display.style.color = '#000000'
  }
})
// mouse events to change button color
button1.addEventListener('mouseover', (event) => {
  let button = event.target
  button.style.backgroundColor = '#ffffff'
  button.style.color = 'black'
})
button1.addEventListener('mouseleave', (event) => {
  let button = event.target
  button.style.backgroundColor = '#808080'
  button.style.color = 'white'
})

button2.addEventListener('mouseover', (event) => {
  let button = event.target
  button.style.backgroundColor = '#ffffff'
  button.style.color = 'black'
})
button2.addEventListener('mouseleave', (event) => {
  let button = event.target
  button.style.backgroundColor = '#808080'
  button.style.color = 'white'
})
