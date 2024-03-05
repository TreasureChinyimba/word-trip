"use strict";
const startBtn = document.getElementById('startBtn');
const startGame = document.getElementById('start');
const game = document.getElementById('game');
startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener('click', () => {
    startGame === null || startGame === void 0 ? void 0 : startGame.style.display = 'none';
    game === null || game === void 0 ? void 0 : game.style.display = 'block';
});
function me() {
    const meInput = document.getElementById('meInput');
    const meBtn = document.getElementById('meBtn');
    meBtn === null || meBtn === void 0 ? void 0 : meBtn.addEventListener('click', () => {
        let result = meInput.value.toLocaleUpperCase();
        console.log(result);
        if (result === 'ME') {
            meInput.style.border = ' solid greenyellow';
            alert('Correct');
        }
        else {
            if (meInput.value === '') {
                alert('type in an answer');
            }
            else {
                meInput.style.border = ' solid red';
                alert('incorrect');
                meInput.value = '';
            }
        }
    });
}
function aim() {
    const aimInput = document.getElementById('aimInput');
    const aimBtn = document.getElementById('aimBtn');
    aimBtn === null || aimBtn === void 0 ? void 0 : aimBtn.addEventListener('click', () => {
        let result = aimInput.value.toLocaleUpperCase();
        console.log(result);
        if (result === 'AIM') {
            aimInput.style.border = ' solid greenyellow';
            alert('Correct');
        }
        else {
            if (aimInput.value === '') {
                alert('type in an answer');
            }
            else {
                aimInput.style.border = ' solid red';
                alert('incorrect');
                aimInput.value = '';
            }
        }
    });
}
function seed() {
    const seedInput = document.getElementById('seedInput');
    const seedBtn = document.getElementById('seedBtn');
    seedBtn === null || seedBtn === void 0 ? void 0 : seedBtn.addEventListener('click', () => {
        let result = seedInput.value.toLocaleUpperCase();
        console.log(result);
        if (result === 'SEED') {
            seedInput.style.border = ' solid greenyellow';
            alert('Correct');
        }
        else {
            if (seedInput.value === '') {
                alert('type in an answer');
            }
            else {
                seedInput.style.border = ' solid red';
                alert('incorrect');
                seedInput.value = '';
            }
        }
    });
}
function seeds() {
    const seedsInput = document.getElementById('seedsInput');
    const seedsBtn = document.getElementById('seedsBtn');
    seedsBtn === null || seedsBtn === void 0 ? void 0 : seedsBtn.addEventListener('click', () => {
        let result = seedsInput.value.toLocaleUpperCase();
        console.log(result);
        if (result === 'SEEDS') {
            seedsInput.style.border = ' solid greenyellow';
            alert('Correct');
        }
        else {
            if (seedsInput.value === '') {
                alert('type in an answer');
            }
            else {
                seedsInput.style.border = ' solid red';
                alert('incorrect');
                seedsInput.value = '';
            }
        }
    });
}
me();
aim();
seed();
seeds();
