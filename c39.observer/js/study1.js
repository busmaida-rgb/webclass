const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            //isIntersecting이 트루 = 태그가 화면에 들어왔을때
            entry.target.classList.add('on');
        }else{
            entry.target.classList.remove('on');
        }
    });
},{
    threshold:0.2
});

const tags = document.querySelectorAll('.ltr');
tags.forEach(tag=>observer.observe(tag));

const fades = document.querySelectorAll('.fade');
fades.forEach(tag=>observer.observe(tag));