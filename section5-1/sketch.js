// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0, 51, 153);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 100 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
    drawStar(x, y, 10, color(255,204,0));
  }
}

function drawStar(x, y, radius, col) {
  fill(col);
  noStroke();
  beginShape();//点つなぎを始める
  for (let i = 0; i < 5; i++) {
    let angle = TWO_PI * i * 2 / 5 - HALF_PI; // 星の頂点角度を調整
    let sx = x + cos(angle) * radius;
    let sy = y + sin(angle) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);//点つなぎを終える
}
// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
