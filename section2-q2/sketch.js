// チェッカー
function setup() {

  createCanvas(400, 400);
  let size = width / 8; //幅
  let r = 40; //半径
  background(255);
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      let x = i * size;
      let y = j * size;

      if ((i + j) % 2 === 1){//正方形
        fill(122);
        rect(x, y, size, size);
      }
      if (((i + j) % 2 === 1) && (j < 3)){//上の方は赤丸
        fill(255, 0, 0);
        ellipse(x + size/2, y + size/2, r)
      }
      if(((i + j)% 2 === 1) && (j > 4))//下の方は黒丸
      {
        fill(0);
        ellipse(x + size/2, y + size/2, r);
      }
    }
  }
}// BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
