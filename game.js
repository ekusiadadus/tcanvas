const canvas = document.getElementById("tutorial");
if (canvas === null) {
    throw new Error("Canvas not found");
}
const ctx = canvas.getContext("2d");
if (ctx === null) {
    throw new Error("Canvas context not found");
}
ctx.fillStyle = "rgb(200, 0, 0)";
function draw() {
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
}
draw();
//# sourceMappingURL=game.js.map