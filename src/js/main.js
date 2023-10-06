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


    termsModalCheckboxes.forEach((termsModalCheckbox) => {
        termsModalCheckbox.addEventListener('change', () => {
            if (checkTerms()) {
                document.getElementById('termsAcceptBtn').classList.remove('disabled');
                document.getElementById('formTerms').checked=false;
            }
        })
    });
    regBtn.addEventListener('click', () => {
        if (checkTerms()) {

        } else {
            myModal.show();
        }
    });
    emailInput.addEventListener('blur', () => {
        if ( emailInput.value == '') {
            emailInput.value='Your email';
        }
        validateForm(myModal);
    })
    passwordInput.addEventListener('blur', () => {
        if (passwordInput.value == '') {
            passwordInput.value="Your password";
        }
        validateForm(myModal);


    });
    passwordInput.addEventListener('input', () => {
        passwordInput.value= passwordInput.value.replace(' ', '');
        validatePsw();


    });


    if (localStorage.getItem('wordle')!=undefined) {
        localStorage.getItem('wordle');
    }else {
    try {
         
            fetch('https://neal.fun/api/password-game/wordle?date=2023-10-06').then(response => response.json()).then(
                (data)=>{

                    localStorage.setItem('wordle', data.answer);
                    const word = data.answer

                }
            );
        
    }  catch(err){
        localStorage.setItem('wordle', 'apple');

    }
}


});
