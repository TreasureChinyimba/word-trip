document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const startGame = document.getElementById('start');
    const game = document.getElementById('game');
    const player = document.getElementById('player') as HTMLInputElement;

    startBtn?.addEventListener('click', () => {
        startGame?.style.display = 'none';
        const welcomeMsg = document.createElement('h1');
        welcomeMsg.textContent = 'Good Luck ' + player.value;
        document.getElementById('back')?.appendChild(welcomeMsg);
        game?.style.display = 'block';
    });

    // Attach event listener to a common parent element
    document.getElementById('inputs')?.addEventListener('click', (event) => {
        if (event.target instanceof HTMLElement) {
            const input = event.target.previousElementSibling as HTMLInputElement;
            const result = input.value.trim().toUpperCase();

            if (result === event.target.dataset.answer) {
                input.style.border = 'solid greenyellow';
                alert('Correct');
            } else {
                if (input.value === '') {
                    alert('Type in an answer');
                } else {
                    input.style.border = 'solid red';
                    alert('Incorrect');
                    input.value = '';
                }
            }
        }
    });
});
