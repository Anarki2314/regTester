import Func from "../functions.js";
import Equas from "./equas.js";
document.addEventListener("DOMContentLoaded", () => {

    let user;
    if (localStorage.getItem("user")) {
        user = JSON.parse(atob(localStorage.getItem("user")));
        if (user.validation) {
            window.location.href = "./final.html";
        }
        if (!user || !user.index) {
            window.location.href = "./";
        }
    } else {
        window.location.href = "./";
    }

    const myModal = new bootstrap.Modal(document.getElementById("repeat"), {
        backdrop: "static",
        keyboard: false,
    });
    
    Equas.generateEquas();
    console.log(Equas.solveEqua())
    const modalBtns = Func.modalBtnInit(myModal);

    nextBtn.addEventListener("click", () => {
        const equaLeftUserAnswers = equaLeft.querySelectorAll(".equa-input-answer");
        const equaRightUserAnswers = equaRight.querySelectorAll(".equa-input-answer");
        const equaUserAnswers = {
            'equaLeftUserAnswers': {
                'x1': Number(equaLeftUserAnswers[0].value.replace(',', '.')),
                'x2': Number(equaLeftUserAnswers[1].value.replace(',', '.'))
            },
            'equaRightUserAnswers': {
                'x1': Number(equaRightUserAnswers[0].value.replace(',', '.')),
                'x2': Number(equaRightUserAnswers[1].value.replace(',', '.'))
            }
        };
        if (Equas.checkAnswer(equaUserAnswers)) {
            myModal.show();
        }
    });

    modalBtns.modalNext.addEventListener("click", () => {
        const rePassword = document.getElementById("rePassword").value;
        if (user.password == rePassword) {
            user.validation = true;
            localStorage.setItem("user", btoa(JSON.stringify(user)));
            window.location.href = "./final.html";
        }
    });

    cancelBtn.addEventListener("click", () => {
        window.location.reload();
    });

    resetBtn.addEventListener("click", (e) => {
        localStorage.clear();
        window.location.href = "./";
    });
});