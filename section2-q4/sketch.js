// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180); //　国旗に合わせて3：2の比にする
  noStroke(); // 図形の縁取りをなくす

  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    if(i % 2 === 0){fill(blue)}
    else{fill(255)}
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)　2で割った余りが0なら青、それ以外なら白
    rect(0, i * d, width, d); // 横に長い長方形
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size); //　左上の正方形

  fill(255);
  rect(d * 2, 0, d, d * 5);
  rect(0, d * 2, d * 5, d);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}