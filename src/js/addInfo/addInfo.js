import Func from "../functions.js";

document.addEventListener("DOMContentLoaded", () => {
    let user;
    if (localStorage.getItem("user")) {
        user = JSON.parse(atob(localStorage.getItem("user")));
        if (user.addInfo) {
            window.location.href = "./validation.html";
        }
        if (!user || !user.hobbies) {
            window.location.href = "./hobbies.html";
        }
    } else {
        window.location.href = "./";
    }
    
    const myModal = new bootstrap.Modal(document.getElementById("repeat"), {
        backdrop: "static",
        keyboard: false,
    });
    

    const modalBtns= Func.modalBtnInit(myModal);
    nextBtn.addEventListener("click", () => {
        const number = document.getElementById("number").value;
        const date = document.getElementById('birthday').innerHTML;
        const ageVal = document.getElementById('ageVal').innerHTML;
        const heightVal = document.getElementById('heightVal').innerHTML;
        if (number.length == 10 && Func._calculateAge(date)== ageVal && heightVal) {
            myModal.show();

        } else {
            alert(
            'Некорректные данные. Попробуйте еще раз.'
            )
        }
      });

    modalBtns.modalNext.addEventListener("click", () => {
        const rePassword = document.getElementById("rePassword").value;
    if (user.password == rePassword) {
      user.addInfo = true;
      localStorage.setItem("user", btoa(JSON.stringify(user)));
      window.location.href = "./validation.html";
    }
    });



    const birthdayBtns= document.querySelectorAll(".birthday");

    birthdayBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const birthdayTarget = e.target.getAttribute("data-birthday");
            const inputTarget = document.getElementById(birthdayTarget);
            const value= Func.random(e.target.getAttribute("data-max"), e.target.getAttribute("data-min"));
            
            inputTarget.value = (String(value).length<2)? "0" + value : value;
            const date = document.getElementById('year').value + "/" + document.getElementById('month').value + "/" + document.getElementById('day').value;
            document.getElementById('birthday').innerHTML=date;
        });
    });
    const addNum = document.getElementById("addNum");
    const correctNum = document.getElementById("correctNum");
    const resetNum = document.getElementById("resetNum");
    
    let numIndex=0;
    let numbers=[];
    resetNum.addEventListener("click", () => {
        numbers=[];
        numIndex=0;
        document.getElementById('number').value = '';
    })



    addNum.addEventListener('click' , (e) => {
        const inputNumber = document.getElementById('number')
        if (inputNumber.value.length < 10) {
            numbers[numIndex]=Func.random(9);
            inputNumber.value =numbers.join('');
        }
    })
    correctNum.addEventListener('click' , (e) => {
        const inputNumber = document.getElementById('number')
        if (inputNumber.value.length < 10) {
            numIndex++;
        }
    })
    cancelBtn.addEventListener('click' , () => {
        window.location.reload();
    });
    resetBtn.addEventListener("click", (e) => {
        localStorage.clear();
        window.location.href = "./";
      });

});
