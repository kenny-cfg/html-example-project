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

const listItems = ['Kenny', 'Laura', 'Sara', 'Gillian']
const listElements = []
for (const listItem of listItems) {
  const newListElement = document.createElement('li')
  newListElement.innerText = listItem
  listElements.push(newListElement)
}
const listElement = document.getElementById('list')
listElement.innerHTML = ''
for (const newListElement of listElements) {
  listElement.appendChild(newListElement)
}