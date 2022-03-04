// this is a button function that hides the displayed info

let toggleBtn = document.querySelector('#toggleHide');
let showInfo = document.querySelector('#show-info');




toggleBtn.addEventListener('click', e =>{
    function backBtnFunc() {
        
    
        showInfo.style.display = 'none'
    } 
    backBtnFunc();
});

    
        
export {toggleBtn};




