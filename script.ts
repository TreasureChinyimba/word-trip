const meInput = document.getElementById('meInput') as HTMLInputElement;
const meBtn = document.getElementById('meBtn');

meBtn?.addEventListener('click', ()=>{
    let result = meInput.value.toLocaleUpperCase();
    console.log(result);
    
    if (result === 'ME') {
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