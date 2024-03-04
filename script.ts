const meInput = document.getElementById('meInput') as HTMLInputElement;
const meBtn = document.getElementById('meBtn');

meBtn?.addEventListener('click', ()=>{
    if (meInput.value === 'me') {
       alert('good')
    } else {

        if (meInput.value === '') {
            alert('type in an answer')
        }else {
        alert('incorrect')
        meInput.value = '';
        }
    }

    
})