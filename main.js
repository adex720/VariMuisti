
const buttonCount = 4;
const buttonColors = [];

function init() {
    loadColors();
    addEventListeners();
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
    return buttonColors[id-1];
}

function getButtonElement(id) {
    return document.getElementById('vari' + id);
}

function highlightButton(id) {
    let element = getButtonElement(id);
    let color = getButtonColor(id); // Can't be loaded from style becuase it is set to while on highlight

    changeButtonColor(element, '#ffffff');
    setTimeout(function () { changeButtonColor(element, color); }, 200);
}

function changeButtonColor(button, color) {
    button.style.setProperty('background-color', color);
}

function buttonPressed(id) {
    highlightButton(id);
}


init();