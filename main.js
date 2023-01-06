
const buttonCount = 4;
const buttonColors = [];

const delay = ms => new Promise(res => setTimeout(res, ms));

function init() {
    loadColors();
    addEventListeners();

    setTimeout(() => startGame(), 1000);
}

function loadColors() {
    for (let i = 0; i < buttonCount; i++) {
        buttonColors[i] = getButtonElement(i + 1).style.backgroundColor;
    }
}

function addEventListeners() {
    for (let id = 1; id <= buttonCount; id++) {
        getButtonElement(id).addEventListener('mouseup', e => buttonPressed(id));
    }
}

function getButtonColor(id) {
    return buttonColors[id - 1];
}

function getButtonElement(id) {
    return document.getElementById('vari' + id);
}

function highlightButton(id) {
    let element = getButtonElement(id);
    let color = getButtonColor(id); // Can't be loaded from style becuase it is set to while on highlight

    changeButtonColor(element, '#ffffff');
    setTimeout(() => changeButtonColor(element, color), 200);
}

function changeButtonColor(button, color) {
    button.style.setProperty('background-color', color);
}

let sequence;
let colors;

let correct;
let play;

function startGame() {
    colors = 0;
    sequence = [];
    correct = 0;

    startRound();
}

async function startRound() {
    play = false;
    addColor();

    await playSequence();
    afterSequencePlayed();
}

function endGame() {
    play = false;
    alert('Pisteet: ' + (colors - 1));

    startGame();
}

async function playSequence() {
    for (let i = 0; i < colors; i++) {
        await delay(250);
        highlightButton(sequence[i] + 1);
    }
}

function addColor() {
    sequence[colors] = getNextColor();
    colors++;
}

function getNextColor() {
    if (colors == 0)
        return Math.floor(Math.random() * 4);

    let id = Math.floor(Math.random() * 3); // Prevent same color from occuring twice.
    if (id >= sequence[colors - 1]) id++;
    return id;
}

function afterSequencePlayed() {
    play = true;
    correct = 0;
}

function buttonPressed(id) {
    if (!play) return;

    if (sequence[correct] + 1 != id) {
        endGame();
        return;
    }

    highlightButton(id);
    correct++;

    if (correct == colors) {
        startRound();
    }
}

init();