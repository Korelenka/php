'use strict';

const form = document.forms.auth;

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    // аякс: отправка данных формы методом POST
    const requestOptions = {
        /* http метод */
        method: 'POST',
        /* данные, передаваемые в теле сообщения */
        body: new FormData(form)
        
    };
    fetch('form-heandler.php', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.message === 'error') {
                document.getElementById('auth-error').innerText = data.reason;
            } else if (data.message === 'success'){
                window.location.href = 'form.html';
            }
        });
});