import Func from "../functions.js";
document.addEventListener("DOMContentLoaded", () => {
  
  let user;
  if (localStorage.getItem("user")) {
      user = JSON.parse(atob(localStorage.getItem("user")));
    if (!user || !user.index || !user.hobbies || !user.addInfo || !user.validation) { 
      window.location.href = "./";
    }
  } else {
    window.location.href = "./";
  }
  const timeStart = localStorage.getItem("time") ;
  const timeEnd = new Date((Date.now() - timeStart)) ;
  regTime.innerHTML = `${timeEnd.getUTCHours()} hours ${timeEnd.getUTCMinutes()} minutes ${ timeEnd.getUTCSeconds() } seconds`;



  

  

  

  
  resetBtn.addEventListener("click", (e) => {
    localStorage.clear();
    window.location.href = "./";
  });
});
