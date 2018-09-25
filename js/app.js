var button = document.querySelector('button')
button.addEventListener('click', calculateTip)


function calculateTip(event) {
    var userInput = document.querySelector('input').value
    
    var tip = userInput * .2
    var words = document.querySelector('h2')
    words.innerHTML = "You should tip $" + tip
}
