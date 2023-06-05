

const inputVariable = document.querySelector('#color')

console.log(inputVariable)

inputVariable.addEventListener('input', function(event){



document.body.style.backgroundColor = event.target.value




})