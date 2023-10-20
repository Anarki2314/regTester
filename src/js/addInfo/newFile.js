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

  const modalBtns = Func.modalBtnInit(myModal);

  modalBtns.modalNext.addEventListener("click", () => {
    const rePassword = document.getElementById("rePassword").value;
    if (user.password == rePassword) {
      user.addInfo = true;
      localStorage.setItem("user", btoa(JSON.stringify(user)));
      window.location.href = "/validation.html";
    }
  });
});
