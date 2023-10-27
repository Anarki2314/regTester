import Func from "../functions.js";
document.addEventListener("DOMContentLoaded", () => {
  
  let user;
  if (localStorage.getItem("user")) {
    user = JSON.parse(atob(localStorage.getItem("user")));
    if (user.hobbies) {
      window.location.href = "/addInfo.html";
    }
    if (!user || !user.index) {
      window.location.href = "/";
    }
  } else {
    window.location.href = "/";
  }
  
  const myModal = new bootstrap.Modal(document.getElementById("repeat"), {
    backdrop: "static",
    keyboard: false,
  });
  const selectBox = document.getElementById("select");
  const unselectBox = document.getElementById("unselect");

  const checkBoxes = document.querySelectorAll(".form-check-input");

  const modalBtns = Func.modalBtnInit(myModal);
  nextBtn.addEventListener("click", () => {
    const trueCheckboxes = document.querySelectorAll(".hobbie:checked");
    if (trueCheckboxes.length == 5) {
      myModal.show();
    }
  });

  modalBtns.modalNext.addEventListener("click", () => {
    const rePassword = document.getElementById("rePassword").value;
    if (user.password == rePassword) {
      user.hobbies = true;
      localStorage.setItem("user", btoa(JSON.stringify(user)));
      window.location.href = "/addInfo.html";
    }
  });

  cancelBtn.addEventListener("click", () => {0
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  });

  selectBox.addEventListener("click", (e) => {
    e.target.checked = true;
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  });
  unselectBox.addEventListener("click", (e) => {
    e.target.checked = false;
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  });

  resetBtn.addEventListener("click", (e) => {
    localStorage.clear();
    window.location.href = "/";
  });
});
