const messages = [
    "Seguro?",
    "Muy seguro??",
    "Estas 100% seguro?",
    "Andale di que si",
    "Piensalo otra vez",
    "Si dices que no me voy a awitar",
    "Muy muy awitado",
    "Voy a estar muy muy muy awitado",
    "Bueno pues",
    "DI QUE SI YAAAAAAAAA"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}