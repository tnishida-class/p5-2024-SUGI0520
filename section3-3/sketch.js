// テキスト「キーボード操作に反応する」
// 上と共通の部分は省略

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


// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

