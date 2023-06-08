let counter = 0
displayCounter()

document.getElementById('increase').onclick = incrementCounter

function displayCounter() {
  document.getElementById('counter').innerText = counter
}

function incrementCounter() {
  counter = counter + 1
  displayCounter()
}