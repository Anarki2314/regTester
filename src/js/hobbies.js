document.addEventListener("DOMContentLoaded", () =>{

    const user=JSON.parse(localStorage.getItem('user'));
    console.log(user)


    const selectBox= document.getElementById('select');
    const unselectBox= document.getElementById('unselect');

    const checkBoxes= document.querySelectorAll('.form-check-input');
    

    const nextBtn = document.getElementById('nextBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const resetBtn = document.getElementById('resetBtn');


    selectBox.addEventListener("click",(e)=>{
        e.target.checked=true;
        checkBoxes.forEach(checkbox=>{
            checkbox.checked=true;
        });
    });
    unselectBox.addEventListener("click",(e)=>{
        e.target.checked=false;
        checkBoxes.forEach(checkbox=>{
            checkbox.checked=false;
        });
    });

    resetBtn.addEventListener("click",(e)=>{
        localStorage.clear();
        window.location.href='/';
    
    });

});