// Insert Javascript Here
console.log('does this work')

const counter = document.querySelector('h1')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const input = document.querySelector('input')
// const inputAmount = +document.getElementById('inputamount').value

// console.log(inputAmount)

let count = 0

plus.addEventListener('click', function () {
  // count += input
  // counter.innerHTML = count
  const inputAmount = +document.getElementById('inputamount').value
  count += inputAmount
  counter.innerHTML = count
  console.log(inputAmount)

  if (count < 0) {
    counter.style.color = 'red'
  } else {
    counter.style.color = 'black'
  }
})

minus.addEventListener('click', function () {
  const inputAmount = +document.getElementById('inputamount').value
  count -= inputAmount
  counter.innerHTML = count
  console.log(inputAmount)

  if (count < 0) {
    counter.style.color = 'red'
  } else {
    counter.style.color = 'black'
  }
})

// I got help with the input values below:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
