let circles = [];

function setup() {
  // 產生一個全視窗的畫布
  createCanvas(windowWidth, windowHeight);
  // 設定背景顏色
  background('#0077b6');

  // 產生 40 個圓
  for (let i = 0; i < 40; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      size: random(20, 50),
      color: color(random(200, 255), random(200, 255), random(200, 255), 150)
    };
    circles.push(circle);
  }
}

function draw() {
  // 清除畫布並重設背景
  background('#0077b6');

  // 根據滑鼠的 X 位置調整圓的大小
  let sizeOffset = map(mouseX, 0, width, 30, 80);

  // 繪製所有圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset);
  }
}
