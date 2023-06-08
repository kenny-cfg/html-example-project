document.getElementById('top-heading').innerText = 'This is coming from JavaScript'
const paragraphElements = document.getElementsByClassName('poo')
for (const paragraphElement of paragraphElements) {
  paragraphElement.style.backgroundColor = 'blue'
}

const buttonElement = document.getElementById('button')
buttonElement.onclick = function() {
  console.log('HELP! I need somebody')
}