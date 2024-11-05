// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let size = 50;
  let count = 0;
let cycle = 100;
let increment = 1;
function setup(){
  createCanvas(200, 200);
}
function draw(){
  background(160, 192, 255);//背景を水色に
 count = (count + increment) % cycle;//function drawでcountの値を繰り返し変えるためこの位置に
  if (keyIsPressed) {
  increment = 2;//キーを押すと、countが上がる
} else {
 increment = 1;
  }
  if (count < cycle/2) {
 size = count + 50;//count < 50のとき、数字が増えるほど円の直径を大きくする
 } else {
 size = (cycle - count) + 50;//count > 5onotoki数字が増えるほど円の直径が小さくなる
 }
 ellipse(width/2, height/2, size);//上までで条件を整えてから最後に円を描画
}
