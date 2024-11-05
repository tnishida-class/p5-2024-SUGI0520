function setup(){
    createCanvas(200, 200);
  }
  function draw(){
      background(160, 192, 255);
      ellipse(x, y, 50);
      // キーの処理（else ifにすると同時押しできなくなってしまうので要注意）
      if(keyIsDown(LEFT_ARROW)){ x -= 5; }
      if(keyIsDown(RIGHT_ARROW)){ x += 5; }
      if(keyIsDown(UP_ARROW)){ y -= 5; }
      if(keyIsDown(DOWN_ARROW)){ y += 5; }
      if(keyIsDown("A".charCodeAt(0))){ x+= 10; } // 文字キーの場合
      if(keyIsDown(" ".charCodeAt(0))){ x-= 10; } // スペースキーも文字キーと同様
  }