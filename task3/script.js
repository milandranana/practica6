// const trafficLightEl = document.querySelector('#trafficLight');

// function makeGreen() {
//     trafficLightEl.style.background = ('green');
//     trafficLightEl.removeEventListener('click', makeGreen);
//     trafficLightEl.addEventListener('click', makeYellow);
// }

// trafficLightEl.addEventListener('click', makeGreen);

// function makeYellow() {
//     trafficLightEl.style.background = ('yellow');
//     trafficLightEl.removeEventListener('click', makeYellow);
//     trafficLightEl.addEventListener('click', makeRed);
// }

// trafficLightEl.addEventListener('click', makeYellow);

// function makeRed() {
//     trafficLightEl.style.background = ('red');
//     trafficLightEl.removeEventListener('click', makeRed);
//     trafficLightEl.addEventListener('click', makeGreen);
// }

// trafficLightEl.addEventListener('click', makeRed);


const trafficLightE1 = document.querySelector('#trafficLightgreen');
const trafficLightE2 = document.querySelector('#trafficLightyellow');
const trafficLightE3 = document.querySelector('#trafficLightred');

function makeGreen() {
    trafficLightgreen.style.background = ('green');
    trafficLightyellow.style.background = ('black');
    trafficLightred.style.background = ('black');
    trafficLightgreen.removeEventListener('click', makeGreen);
    trafficLightgreen.addEventListener('click', makeYellow);
}

trafficLightE1.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightyellow.style.background = ('yellow');
    trafficLightgreen.style.background = ('black');
    trafficLightred.style.background = ('black');
    trafficLightyellow.removeEventListener('click', makeYellow);
    trafficLightyellow.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightred.style.background = ('red');
    trafficLightyellow.style.background = ('black');
    trafficLightgreen.style.background = ('black');
    trafficLightred.removeEventListener('click', makeRed);
    trafficLightred.addEventListener('click', makeGreen);
}






