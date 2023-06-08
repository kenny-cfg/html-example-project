const increaseButton = document.getElementById('increase')
const decreaseButton = document.getElementById('decrease')
const resetButton = document.getElementById('reset')
const counterElement = document.getElementById('counter')

let counter = 0
displayCounter()

increaseButton.onclick = incrementCounter
decreaseButton.onclick = decreaseCounter
resetButton.onclick = resetCounter

function displayCounter() {
  counterElement.innerText = counter
}

function incrementCounter() {
  counter = counter + 1
  displayCounter()
}

function decreaseCounter() {
  counter = counter - 1
  displayCounter()
}

function resetCounter() {
  counter = 0
  displayCounter()
}
