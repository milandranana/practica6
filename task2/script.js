const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
  alert('Служит для вывода информации в консоль')
});

const Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
  alert('Служит для отображения информации пользователям')
});

const Prompt = document.querySelector('#Prompt');

Prompt.addEventListener('click', () => {
  prompt('Окно с запросом на ввод текса')
});
