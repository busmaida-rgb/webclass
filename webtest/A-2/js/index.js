document.addEventListener('DOMContentLoaded',()=>{
    //팝업기능
    const btnOpen = document.querySelector('#btn-open');
    const modal = document.querySelector('.modal');
    const popup = document.querySelector('.popup');
    const btnClose = document.querySelector('#btn-close');
    btnOpen.addEventListener('click',()=>{
        modal.classList.add('on');
        popup.classList.add('on');
    });
    btnClose.addEventListener('click',()=>{
        modal.classList.remove('on');
        popup.classList.remove('on');
    });
    //슬라이드
    const train = document.querySelector('.train');
    let count = 0;
    setInterval(()=>{
        count++;
        if(count>2){count=0};
        train.style.transform = `translateX(${-33.33*count}%)`;
    },2500);
});