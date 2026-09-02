const modal = document.querySelector('.modal');
const popup = document.querySelector('.popup');
const btnPopup = document.querySelector('#btn-popup');
const btnClose = document.querySelector('#btn-close');
btnPopup.addEventListener('click',()=>{
    modal.classList.add('on');
    popup.classList.add('on');
});
btnClose.addEventListener('click',()=>{
    popup.classList.remove('on');
    modal.classList.remove('on');
});

let count = 0;
const train = document.querySelector('.train');
setInterval(()=>{
    count++;
    if(count>2){count = 0};
    train.style.transform = `translateX(${-33.333*count}%)`;
},2500);