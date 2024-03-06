"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const startGame = document.getElementById('start');
    const game = document.getElementById('game');
    const player = document.getElementById('player');
    if (!startBtn || !startGame || !game || !player) {
        console.error("One or more required elements not found!");
        return;
    }
    startBtn.addEventListener('click', () => {
        startGame.style.display = 'none';
        const welcomeMsg = document.createElement('h1');
        welcomeMsg.textContent = 'Good Luck ' + player.value;
        const back = document.getElementById('back');
        if (back) {
            back.appendChild(welcomeMsg);
        }
        game.style.display = 'block';
    });
    const inputsContainer = document.getElementById('inputs');
    if (!inputsContainer) {
        console.error("Inputs container not found!");
        return;
    }
    inputsContainer.addEventListener('click', (event) => {
        if (!(event.target instanceof HTMLElement)) {
            return;
        }
        const input = event.target.previousElementSibling;
        const result = input.value.trim().toUpperCase();
        const expectedAnswer = event.target.dataset.answer;
        if (!expectedAnswer) {
            console.error("Missing 'data-answer' attribute on button!");
            return;
        }
        if (result === expectedAnswer) {
            input.style.border = 'solid greenyellow';
            alert('Correct');
        }
        else {
            if (input.value === '') {
                alert('Type in an answer');
            }
            else {
                input.style.border = 'solid red';
                alert('Incorrect');
                input.value = '';
            }
        }
    });
});
