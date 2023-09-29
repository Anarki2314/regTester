
export function checkTerms(){
    const trueTerms = document.querySelectorAll('input[name="termsCheckbox"]:not(:checked)').length==0;
    return trueTerms;
}