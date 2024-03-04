"use strict";
const meInput = document.getElementById('meInput');
const meBtn = document.getElementById('meBtn');
meBtn === null || meBtn === void 0 ? void 0 : meBtn.addEventListener('click', () => {
    let result = meInput.value.toLocaleUpperCase();
    console.log(result);
    if (result === 'ME') {
        alert('good');
    }
    else {
        if (meInput.value === '') {
            alert('type in an answer');
        }
        else {
            alert('incorrect');
            meInput.value = '';
        }
    }
});
