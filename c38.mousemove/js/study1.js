const mousecursor = document.querySelector('.mousecursor');
let cursorState = false;
const tooltipBox = document.querySelector('.tooltipbox');

document.addEventListener('mousemove',(e)=>{
    if(!cursorState){
        mousecursor.style.display = 'block';
        cursorState = true;
    };
    // 마우스를 움직일 때마다 실행되는 소스코드
    mousecursor.style.left = e.clientX+'px';
    mousecursor.style.top = e.clientY+'px';

});

document.addEventListener('mousedown',()=>{
    mousecursor.innerHTML = `<img src="./img/clicked.png" alt="클릭마우스커서">`
});
document.addEventListener('mouseup',()=>{
    mousecursor.innerHTML = `<img src="./img/default.png" alt="기본마우스커서">`
});
document.addEventListener('mousemove',(e)=>{
    tooltipBox.style.left = (e.clientX+120)+'px';
    tooltipBox.style.top = e.clientY+'px';
});

const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(spantag=>{
    // 마우스를 올렸을 때
    spantag.addEventListener('mouseenter',()=>{
        tooltipBox.style.display = 'block';
        tooltipBox.innerHTML = spantag.getAttribute('data-tooltip');
    });
    // 마우스를 뺐을 때
    spantag.addEventListener('mouseleave',()=>{
        tooltipBox.style.display = 'none';
        tooltipBox.innerHTML = ``;
    });
});