"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    const startBtn = document.getElementById('startBtn');
    const startGame = document.getElementById('start');
    const game = document.getElementById('game');
    const player = document.getElementById('player');
    startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener('click', () => {
        var _a;
        startGame === null || startGame === void 0 ? void 0 : startGame.style.display = 'none';
        const welcomeMsg = document.createElement('h1');
        welcomeMsg.textContent = 'Good Luck ' + player.value;
        (_a = document.getElementById('back')) === null || _a === void 0 ? void 0 : _a.appendChild(welcomeMsg);
        game === null || game === void 0 ? void 0 : game.style.display = 'block';
    });
    // Attach event listener to a common parent element
    (_a = document.getElementById('inputs')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (event) => {
        if (event.target instanceof HTMLElement) {
            const input = event.target.previousElementSibling;
            const result = input.value.trim().toUpperCase();
            if (result === event.target.dataset.answer) {
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
        }
    });
});
