document.addEventListener("DOMContentLoaded",()=>{
    const train = document.querySelector('.train');
    const btnPrev = document.querySelector('#btn-prev');
    const btnNext = document.querySelector('#btn-next');

    let count = 0;
    // btnNext.addEventListener('click',()=>{
    //     count++;
    //     train.style.transition = `all 0.5s ease 0s`;
    //     train.style.transform = `translateX(${-20*count}%)`;
    //     if(count===4){
    //         setTimeout(()=>{
    //             train.style.transition = `none`;
    //             train.style.transform = `translateX(0%)`;
    //         },505);
    //         count=0
    //     };
    //     console.log(count);
    // });
    // btnPrev.addEventListener('click',()=>{
    //     count--;
    //     if(count<0){count=0};
    //     train.style.transform = `translateX(${-20*count}%)`;
    //     console.log(count);
    // });

    let timer = setInterval(()=>{
        count++;
        train.style.transition = `all 0.5s ease 0s`;
        train.style.transform = `translateX(${-20*count}%)`;
        if(count===4){
            setTimeout(()=>{
                train.style.transition = `none`;
                train.style.transform = `translateX(0%)`;
            },505);
            count=0
        };
        console.log(count);
    },3000);
    train.addEventListener('mouseenter',()=>{
        clearInterval(timer);
    });
    train.addEventListener('mouseleave',()=>{
        timer = setInterval(()=>{
        count++;
        train.style.transition = `all 0.5s ease 0s`;
        train.style.transform = `translateX(${-20*count}%)`;
        if(count===4){
            setTimeout(()=>{
                train.style.transition = `none`;
                train.style.transform = `translateX(0%)`;
            },505);
            count=0
        };
        console.log(count);
        },3000);
    });
});