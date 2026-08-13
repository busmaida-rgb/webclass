document.addEventListener("DOMContentLoaded",function(){
    const html = document.querySelector("html")
    const fontControl = document.querySelector(".fontControl");
    const btnFontUp = document.querySelector("#btnFontUp");
    const btnFontDown = document.querySelector("#btnFontDown");
    const btnToggle = document.querySelector("#btn-toggle");
    let fontSizeBase = 20;
    btnFontUp.addEventListener("click",function(){
        if(fontSizeBase>=30){return};
        fontSizeBase++;
        html.style.fontSize = fontSizeBase+"px";
        console.log(fontSizeBase);
    });
    btnFontDown.addEventListener("click",function(){
        if(fontSizeBase<=12){return};
        fontSizeBase--;
        html.style.fontSize = fontSizeBase+"px";
        console.log(fontSizeBase);
    });
    let btnState = false; // 이미지가 메뉴상태일때를 뜻함 true가 되면 x상태일때
    btnToggle.addEventListener("click",function(){
        fontControl.classList.toggle("on");
        if(!btnState){
            this.children[0].setAttribute("src","./img/close2.svg");
            this.children[0].setAttribute("alt","닫기");
            btnState=true;
        }else{
            this.children[0].setAttribute("src","./img/menu.svg");
            this.children[0].setAttribute("alt","메뉴");
            btnState=false;
        };
    });
});