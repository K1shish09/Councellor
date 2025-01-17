// script.js
const slider = document.querySelector('.testimonial-slider');
let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 1;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
    }
    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
    });
}

setInterval(autoScroll, 80);
