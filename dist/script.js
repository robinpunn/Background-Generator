"use strict";
const body = document.getElementById('gradient');
const rand = document.querySelector('.rand');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const copy = document.querySelector('.copy');
const reset = document.querySelector('.reset');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let color3 = document.querySelector('.color3');
let side = "right";
let setGradientRight = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value})`;
    rand.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value})`;
    left.style.background = `linear-gradient(to left, ${color2.value}, ${color1.value})`;
    right.style.background = `linear-gradient(to right, ${color2.value}, ${color3.value}`;
    side = 'right';
    // [color1.value, color3.value] = [color3.value, color1.value]
};
let setGradientLeft = () => {
    body.style.background = `linear-gradient(to left, ${color1.value}, ${color2.value}, ${color3.value})`;
    rand.style.background = `linear-gradient(to left, ${color1.value}, ${color2.value}, ${color3.value})`;
    left.style.background = `linear-gradient(to right, ${color3.value}, ${color2.value})`;
    right.style.background = `linear-gradient(to right, ${color2.value}, ${color1.value})`;
    side = 'left';
    // [color1.value, color3.value] = [color3.value, color1.value]
};
let randomColor = () => {
    let random = [];
    for (let i = 0; i < 3; i++) {
        let ranCol = Math.floor(Math.random() * 16777215).toString(16);
        random.push('#' + ranCol);
    }
    color1.value = random[0];
    color2.value = random[1];
    color3.value = random[2];
    setGradientRight();
};
let copyColor = () => {
    const backgroundValue = body.style.background;
    navigator.clipboard.writeText(backgroundValue)
        .then(() => {
        console.log('Background copied to clipboard:', backgroundValue);
    })
        .catch((error) => {
        console.error('Failed to copy background:', error);
    });
};
let resetColor = () => {
    color1.value = '#00ff00';
    color2.value = '#ffff00';
    color3.value = '#0000ff';
    setGradientRight();
};
setGradientRight();
copyColor();
rand.addEventListener('click', randomColor);
left.addEventListener('click', setGradientLeft);
right.addEventListener('click', setGradientRight);
copy.addEventListener('click', copyColor);
reset.addEventListener('click', resetColor);
color1.addEventListener('input', () => {
    // color1.value = color1.value;
    side === "left" ? setGradientLeft() : setGradientRight();
});
color2.addEventListener('input', () => {
    // color2.value = color2.value;
    side === "left" ? setGradientLeft() : setGradientRight();
});
color3.addEventListener('input', () => {
    // color3.value = color3.value;
    side === "left" ? setGradientLeft() : setGradientRight();
});
