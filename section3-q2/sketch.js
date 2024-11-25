
function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2
  y = height - 50
}

let x ;
let y ;

function draw(){
    background(160, 192, 255);
    ellipse(x, y, 100);
    // キーの処理（else ifにすると同時押しできなくなってしまうので要注意）
    if(keyIsDown(LEFT_ARROW)){
      if(keyIsDown(SHIFT)){x -= 10}
    else {x -= 5};  
}
    if(keyIsDown(RIGHT_ARROW)){
      if(keyIsDown(SHIFT)){x += 10}
    else {x += 5};
}
}