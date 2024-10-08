const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
    "#55efc4",
    "#81ecec",
    "#74b9ff",
    "#a29bfe",
    "#dfe6e9",
    "#00b894",
    "#00cec9",
    "#0984e3",
    "#6c5ce7",
    "#b2bec3",
    "#ffeaa7",
    "#fab1a0",
    "#ff7675",
    "#fd79a8",
    "#636e72",
    "#fdcb6e",
    "#e17055",
    "#d63031",
    "#e84393",
    "#2d3436"
]

function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(400, 400);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);