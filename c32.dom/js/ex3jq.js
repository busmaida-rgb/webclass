const train = $('.train');
const btnPrev = $('#btn-prev');
const btnNext = $('#btn-next');
let count = 0;
function autoslide(slidecount) {
    slidecount++;
    train.css('transition', `all 0.8s ease 0s`);
    train.css('transform', `translateX(${-20 * slidecount}%)`);
    if (slidecount === 4) {
        setTimeout(() => {
            train.css('transition', 'none');
            train.css('transform', `translateX(0%)`);
            slidecount = 0;
        }, 810);
    };
    return slidecount;
};

let timer = setInterval(() => {
    count = autoslide(count);
}, 3000);
train.mouseenter(() => {
    clearInterval(timer);
});

train.mouseleave(() => {
    count = autoslide(count);
});