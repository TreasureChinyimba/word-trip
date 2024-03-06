    const startBtn = document.getElementById('startBtn');
    const startGame = document.getElementById('start');
    const player = document.getElementById('player') as HTMLInputElement;
    const game = document.getElementById('game');
    const back = document.getElementById('back');
    startBtn?.addEventListener('click', ()=>{
        startGame?.style.display='none';
        const welcomeMsg = document.createElement('h1');
        welcomeMsg.textContent = 'Good Luck '+player.value;
        back?.appendChild(welcomeMsg)
        game?.style.display = 'block';
    })    

function me() {
    const meInput = document.getElementById('meInput') as HTMLInputElement;
const meBtn = document.getElementById('meBtn');

meBtn?.addEventListener('click', ()=>{
    let result = meInput.value.toLocaleUpperCase();
    console.log(result);
    
    if (result === 'ME') {
       meInput.style.border=' solid greenyellow'
       alert('Correct');
       
    } else {

        if (meInput.value === '') {
            alert('type in an answer')
        }else {
        meInput.style.border=' solid red'
        alert('incorrect')
        meInput.value = '';
        }
    } 
})
}

function aim() {
    const aimInput = document.getElementById('aimInput') as HTMLInputElement;
const aimBtn = document.getElementById('aimBtn');

aimBtn?.addEventListener('click', ()=>{
    let result = aimInput.value.toLocaleUpperCase();
    console.log(result);
    
    if (result === 'AIM') {
       aimInput.style.border=' solid greenyellow'
       alert('Correct');
       
    } else {

        if (aimInput.value === '') {
            alert('type in an answer')
        }else {
        aimInput.style.border=' solid red'
        alert('incorrect')
        aimInput.value = '';
        }
    } 
})
}

function seed() {
    const seedInput = document.getElementById('seedInput') as HTMLInputElement;
const seedBtn = document.getElementById('seedBtn');

seedBtn?.addEventListener('click', ()=>{
    let result = seedInput.value.toLocaleUpperCase();
    console.log(result);
    
    if (result === 'SEED') {
       seedInput.style.border=' solid greenyellow'
       alert('Correct');
       
    } else {

        if (seedInput.value === '') {
            alert('type in an answer')
        }else {
        seedInput.style.border=' solid red'
        alert('incorrect')
        seedInput.value = '';
        }
    } 
})
}

function seeds() {
    const seedsInput = document.getElementById('seedsInput') as HTMLInputElement;
const seedsBtn = document.getElementById('seedsBtn');

seedsBtn?.addEventListener('click', ()=>{
    let result = seedsInput.value.toLocaleUpperCase();
    console.log(result);
    
    if (result === 'SEEDS') {
       seedsInput.style.border=' solid greenyellow'
       alert('Correct');
       
    } else {

        if (seedsInput.value === '') {
            alert('type in an answer')
        }else {
        seedsInput.style.border=' solid red'
        alert('incorrect')
        seedsInput.value = '';
        }
    } 
})
}

document.addEventListener('click', ()=>{
    if (result === 'ME') {
        
    }
})

me()
aim()
seed()
seeds()