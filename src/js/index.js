import {checkTerms} from './modalFunc.js'
import {validateForm} from './validateForm.js'
import { validatePsw } from './validatePsw.js';

document.addEventListener('DOMContentLoaded', () =>{
    const myModal = new bootstrap.Modal(document.getElementById('termsModal'), {
        backdrop:'static',
        keyboard: false
      })
    const termsModalCheckboxes = document.querySelectorAll('input[name="termsCheckbox"]');

    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email');
    const regBtn = document.getElementById('regBtn');
    const formTerms = document.getElementById('formTerms');
    const resetBtn= document.getElementById('resetBtn');

    termsModalCheckboxes.forEach((termsModalCheckbox) => {
        termsModalCheckbox.addEventListener('change', () => {
            if (checkTerms()) {
                document.getElementById('termsAcceptBtn').classList.remove('disabled');
                document.getElementById('formTerms').checked=false;
                validateForm()
            }
        })
    });
    regBtn.addEventListener('click', () => {
        if (checkTerms()) {
            window.location.href ='/hobbies.html';
            localStorage.setItem('user',  JSON.stringify({
                'index' : true,
                'hobbies' : false,
                'addInfo' : false,
                'validation' : false,
            }));
        } else {
            myModal.show();
        }
    });
    resetBtn.addEventListener('click', () => {
        emailInput.value='Your email';
        passwordInput.value="Password";
        
        validateForm();
        const passwordContainer = document.querySelector('.rePassword-container');
        const rules = document.querySelector('.rules');
        if (passwordContainer) passwordContainer.innerHTML = '';
        if (rules) rules.innerHTML = '';
    })
    formTerms.addEventListener('change', () => {
        validateForm();
    });
    emailInput.addEventListener('blur', () => {
        if ( emailInput.value == '') {
            emailInput.value='Your email';
        }
        validateForm();
    })
    passwordInput.addEventListener('blur', () => {
        if (passwordInput.value == '') {
            passwordInput.value="Password";
        }
        validateForm();


    });
    passwordInput.addEventListener('input', () => {
        passwordInput.value= passwordInput.value.replace(' ', '');
        validatePsw();


    });

    let today= new Date().toISOString().slice(0, 10);
    if (localStorage.getItem('wordle')!=undefined) {
        localStorage.getItem('wordle');
    }else {
    try {
            
            fetch(`https://neal.fun/api/password-game/wordle?date=${today}`).then(response => response.json()).then(
                (data)=>{

                    localStorage.setItem('wordle', data.answer);
                    const word = data.answer
                }
            ).catch(() => {localStorage.setItem('wordle', 'apple');});
        
    }  catch(err){
        

    }
}


});
