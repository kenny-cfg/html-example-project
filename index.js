let counter = 0
displayCounter()

document.getElementById('increase').onclick = incrementCounter
document.getElementById('decrease').onclick = decreaseCounter

function displayCounter() {
  document.getElementById('counter').innerText = counter
}

function incrementCounter() {
  counter = counter + 1
  displayCounter()
}

function decreaseCounter() {
  counter = counter - 1
  displayCounter()
}
