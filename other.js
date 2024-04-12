const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.width = 800;
canvas.height = 600;

let posX = 0;
const speed = 2;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(posX, 100, 50, 0, Math.PI * 2, true);
  ctx.fill();
  posX += speed;
  
  if (posX > canvas.width) {
    posX = 0;
  }
  
  requestAnimationFrame(draw);
}

draw();
