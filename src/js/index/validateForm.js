import { validatePsw } from "./validatePsw.js";

export function validateForm() {
  const emailValidation = document.getElementById("email").checkValidity();
  const pswValidation = validatePsw();
  const termAgreeValidation = !document.getElementById("formTerms").checked;
  if (emailValidation && pswValidation && termAgreeValidation) {
    document.getElementById("regBtn").classList.remove("disabled");
  } else {
    document.getElementById("regBtn").classList.add("disabled");
  }
}
