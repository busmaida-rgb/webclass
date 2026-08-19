document.addEventListener("DOMContentLoaded",()=>{
    const popup = document.querySelector(".popup")
    const btnClosePopup = document.querySelector(".btn-close-popup");
    btnClosePopup.addEventListener("click",()=>{
        popup.classList.add('off');
    });

    // setTimeout(function(){
    //     popup.classList.add('off');
    // }, 5000);
    
    const popupSecondTag = document.querySelector("#popup-second");
    

    let second = 5;
    function autoClosePopupSystem(){
        second--;
        console.log(second);
        popupSecondTag.innerHTML = second;
        if(second===0){
            setTimeout(function(){
                popup.classList.add('off');
            },600);
            return
        };
        setTimeout(function(){
            autoClosePopupSystem();
        },1000);
    };
    autoClosePopupSystem();
});