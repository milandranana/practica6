const text = document.querySelector('#text');

text.addEventListener('click', function (event) {
    let userText = prompt('Измените текст ссылки');
    this.textContent = userText;
    event.preventDefault();
});
