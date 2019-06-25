"use strict";
let last = {
    x: 0,
    y: 0,
};
let start = 0;
const ball = document.querySelector('.ball');
const tran = 0.2;
const threshold = window.screen.height;
const diff = 10;
const changeMod = 1 / 3;
const startThreshold = 100;
ball.style.setProperty('--t', String(tran + 's'));
document.addEventListener('touchstart', e => {
    start = e.touches[0].clientY;
});
document.body.addEventListener('touchmove', e => {
    if (window.scrollY <= startThreshold) {
        ball.style.setProperty('--y', String(Math.min(e.touches[0].clientY * changeMod, threshold)));
    }
});
document.addEventListener('touchend', () => {
    ball.classList.add('return');
    const v = +ball.style.getPropertyValue('--y');
    ball.style.setProperty('--y', '0');
    // console.clear()
    if (v >= threshold - diff) {
        console.log("You did it!");
    }
    setTimeout(() => {
        ball.classList.remove('return');
    }, tran * v);
});
