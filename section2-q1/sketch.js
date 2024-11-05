// 小手調べ
function setup(){
  createCanvas(150,150);
}

function draw(){
  background(255);
  noFill();


  for(let i = 0; i < 10; i++){

  if(i < 5){stroke(0, 0, 255);}  // 輪郭線の色
   else{stroke(255, 0, 0);}
   ellipse(50, 50, (i + 1) * 10); //直径
   }
  }
