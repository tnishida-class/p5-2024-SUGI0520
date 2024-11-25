// 最終課題を制作しよう

let circle = {
  x: 0, 
  y: 0, 
  r: 200, 
  r2: 200, 
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke(); 
  balls = [];
}

function draw() {
  background(240); 

  
  let dx = mouseX - pmouseX;
  let dy = mouseY - pmouseY;
  let distance = sqrt(dx * dx + dy * dy);

  
  circle.x = mouseX;
  circle.y = mouseY;

  if (keyIsDown(SHIFT)) {
    circle.r = circle.r2;
  } else {
    // 半径を移動量に応じて縮小
    circle.r = circle.r - distance * 0.03;
    if (circle.r < 0) {
      circle.r = 0; // 半径が負にならないように制限
    }
  }
  
  drawCircle(circle.x, circle.y, circle.r, color(0, 102, 204));

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

  const dx2 = mouseX - pmouseX;
  const dy2 = mouseY - pmouseY;
  //速度が速いのでdx2,dy2を半分に
  if (mag(dx2, dy2) > 5 && circle.r > 5) {
    const b = { x: mouseX, y: mouseY, size: random(1, 20), vx: -dx/2, vy: -dy/2 };
    balls.push(b);
  }
}
function drawCircle(x, y, radius, col) {
  fill(col); 
  ellipse(x, y, radius * 2); 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
