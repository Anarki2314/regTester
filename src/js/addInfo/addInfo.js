import Func from "../functions.js";

document.addEventListener("DOMContentLoaded", () => {
    const myModal = new bootstrap.Modal(document.getElementById("repeat"), {
        backdrop: "static",
        keyboard: false,
    });
    let user;
    if (localStorage.getItem("user")) {
        user = JSON.parse(atob(localStorage.getItem("user")));
        if (user.addInfo) {
        window.location.href = "/validation.html";
        }
        if (!user || !user.hobbies) {
        window.location.href = "/hobbies.html";
        }
    } else {
        window.location.href = "/";
    }


    const modalBtns= Func.modalBtnInit(myModal);


    modalBtns.modalNext.addEventListener("click", () => {
        const rePassword = document.getElementById("rePassword").value;
    if (user.password == rePassword) {
      user.addInfo = true;
      localStorage.setItem("user", btoa(JSON.stringify(user)));
      window.location.href = "/validation.html";
    }
    });

    const birthdayBtns= document.querySelectorAll(".birthday");

    birthdayBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const birthdayTarget = e.target.getAttribute("data-birthday");
            const inputTarget = document.getElementById(birthdayTarget);
            inputTarget.value = Func.random(e.target.getAttribute("data-max"), e.target.getAttribute("data-min"));
            document.getElementById('birthday').innerHTML=document.getElementById('day').value + "/" + document.getElementById('month').value + "/" + document.getElementById('year').value;
        });
    });

    const addNum = document.getElementById("addNum");
    const resetNum = document.getElementById("resetNum");

    resetNum.addEventListener("click", () => {
        document.getElementById('number').value = '';
    })
    addNum.addEventListener('click' , (e) => {
        const inputNumber = document.getElementById('number')
        if (inputNumber.value.length < 10) {
            inputNumber.value +=Func.random(9);
        }
    })
    
});
