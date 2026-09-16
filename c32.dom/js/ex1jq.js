let fontSizeBase = 20;
const html = $("html");
const btnFontUp = $("#btnFontUp");
const btnFontDown = $("#btnFontDown");
const btnToggle = $("#btn-toggle");
const fontControl = $(".fontControl");
btnFontUp.click(() => {
    if (fontSizeBase >= 30) { return };
    fontSizeBase++;
    html.css('font-size', fontSizeBase + 'px');
});
btnFontDown.click(() => {
    if (fontSizeBase <= 12) { return };
    fontSizeBase--;
    html.css('font-size', fontSizeBase + "px");
});
let btnState = false;
btnToggle.click(function () {
    fontControl.toggleClass('on');
    if (!btnState) {
        $(this).find('img').attr('src', './img/close2.svg').find('img').attr("alt", "닫기"); //체이닝기법
        btnState = true;
        // children 말고 find 써도 됨
    } else {
        $(this).find('img').attr('src', './img/menu.svg').find('img').attr("alt", "메뉴");
        btnState = false;
    };
});