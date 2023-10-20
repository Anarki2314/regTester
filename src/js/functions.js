
export default {
  modalBtnInit(myModal) {
    const modalNext = document.getElementById("modalNext");
    const modalCancel = document.getElementById("modalCancel");
    const modalReset = document.getElementById("modalReset");

    modalCancel.addEventListener("click", () => {
      myModal.hide();
    });
    modalReset.addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "/";
    });

    return { modalCancel, modalNext, modalReset };
  },
  random(max, min = 0) {

    return Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
  },
};

