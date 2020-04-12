/*
2020-1 Computer Grapics :: PROJECT 3 - VIRTUAL WORLD
20141150 Minwoo Choo
*/

let scene = 0;

let font_georgia;

let cgSplashName;
let cgName;
let cgDesc;
let rot = 0;
let sc = 0.2;
let scene_timer;

function preload() {
  font_georgia = loadFont('assets/georgia.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100);
  //rot = 0;

  cgSplashName = new Text("Corona Extra", 100, windowWidth/2 - 200, windowHeight/2 - 70, color(0, 0, 100, 1), font_georgia);
  cgName = new Text("Corona Extra", 100, 20, 150, color(0, 0, 100, 1), font_georgia);
  cgDesc = new Text("Description Area...", 30, windowWidth/2 - 150, windowHeight/2 + 70, color(0, 0, 100, 1), font_georgia);
  //cgOrder = new Text("", 30, 20, 230, color(0, 0, 100, 1), font_georgia);

  scene_timer = new Timer(3000, handleScene);
}

function draw() {
  background(0);

  // scene control
  if (scene === 0) {
    drawSplash();
    return;
  }
  //cgName.display();
  //cgOrder.display();

  // draw score and the num of corona virus

  // setting lights
  pointLight(0, 0, 100, 0, 0, windowHeight/2);

  // draw corona virus

  // draw hand

}

function mouseClicked() {
    // kill COVID-19 virus
}
