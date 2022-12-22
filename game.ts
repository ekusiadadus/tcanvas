const canvas = document.getElementById("tutorial") as HTMLCanvasElement;
if (canvas === null) {
  throw new Error("Canvas not found");
}

const ctx = canvas.getContext("2d");

if (ctx === null) {
  throw new Error("Canvas context not found");
}

ctx.fillStyle = "rgb(200, 0, 0)";

function draw() {
  ctx.fillRect(10, 10, 50, 50);
}

draw();
