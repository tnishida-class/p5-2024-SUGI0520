const canvas = document.getElementById("circleCanvas");
const ctx = canvas.getContext("2d");

// Canvasサイズをウィンドウサイズに設定
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 円の初期設定
let circle = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 50,
    lastX: canvas.width / 2,
    lastY: canvas.height / 2,
};

// マウス移動イベント
canvas.addEventListener("mousemove", (event) => {
    // マウス位置を取得
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // マウス移動距離を計算
    const dx = mouseX - circle.lastX;
    const dy = mouseY - circle.lastY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // 円の位置と半径を更新
    circle.x = mouseX;
    circle.y = mouseY;
    circle.radius = Math.max(5, circle.radius - distance * 0.1); // 半径を最小5に制限

    // 位置を記録
    circle.lastX = mouseX;
    circle.lastY = mouseY;
});

// アニメーションループ
function animate() {
    // 画面をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 円を描画
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();

    // フレーム更新
    requestAnimationFrame(animate);
}

// アニメーション開始
animate();
