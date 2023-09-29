import {checkTerms} from './modalFunc.js'
import {validateForm} from './validateForm.js'

document.addEventListener('DOMContentLoaded', () =>{
    const myModal = new bootstrap.Modal(document.getElementById('termsModal'), {
        backdrop:'static',
        keyboard: false
      })
    const termsModalCheckboxes = document.querySelectorAll('input[name="termsCheckbox"]');



    termsModalCheckboxes.forEach((termsModalCheckbox) => {
        termsModalCheckbox.addEventListener('change', () => {
            if (checkTerms()) {
                document.getElementById('termsAcceptBtn').classList.remove('disabled');
                document.getElementById('formTerms').checked=false;
            }
        })
    });
    document.getElementById('regBtn').addEventListener('click', () => {
        if (checkTerms()) {

        } else {
            myModal.show();
        }
    });
    document.getElementById('email').addEventListener('blur', () => {
        if (document.getElementById('email').value == '') {
            document.getElementById('email').value='Your email';
        }
    })
    document.getElementById('password').addEventListener('input', () => {
        if (document.getElementById('password').value == '') {
            document.getElementById('password').value="Your password";
        }
    });


    


});
