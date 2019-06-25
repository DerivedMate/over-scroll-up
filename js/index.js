"use strict";
let last = {
    x: 0,
    y: 0,
};
const ball = document.querySelector('.ball');
let tran = 0.15;
let th = 2.5;
const threshold = window.screen.height / th;
const diff = 100;
const changeMod = 1 / 2;
const startThreshold = 100;
const tranInput = document.getElementById("tran");
tranInput.addEventListener("change", e => {
    if (e.currentTarget) {
        tran = +e.currentTarget.value || tran;
        ball.style.setProperty("--t", tran + "s");
    }
});
// @ts-ignore
tranInput.value = tran;
const thInput = document.getElementById("threshold");
tranInput.addEventListener("change", e => {
    if (e.currentTarget)
        th = +e.currentTarget.value || th;
});
// @ts-ignore
thInput.value = th;
ball.style.setProperty('--t', String(tran + 's'));
document.body.addEventListener('touchmove', e => {
    if (window.scrollY <= startThreshold) {
        ball.style.setProperty('--y', String(Math.min(e.touches[0].clientY * changeMod, threshold)));
    }
});
document.addEventListener('touchend', () => {
    ball.classList.add('return');
    const v = +ball.style.getPropertyValue('--y');
    ball.style.setProperty('--y', '0');
    console.log(v, threshold - diff);
    if (v >= threshold - diff) {
        console.log("You did it!");
    }
    setTimeout(() => {
        ball.classList.remove('return');
    }, tran * v);
});
