let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function getRadians(degrees) {
    return (Math.PI / 180) * degrees;
}

for (let i = 1; i <=10; i++) {
    ctx.moveTo(50, 10 * i);
    ctx.lineTo(150, 10 * i);
}
ctx.stroke();

for(let i = 1; i <= 10; i++) {
    ctx.moveTo(10 * i + 45, 0);
    ctx.lineTo(10 * i + 45, 110);
}
ctx.stroke();