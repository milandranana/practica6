const inputText = document.querySelector('input');
const textIn = document.querySelector('#duplicateField')

inputText.addEventListener('input', () => {
    textIn.textContent = inputText.value;
})

button.addEventListener('click', function (event) {
    console.log(textIn.textContent);
    textIn.textContent = '';
    event.preventDefault();
    
})
