/*
2020-1 Computer Grapics :: PROJECT 3 - VIRTUAL WORLD
20141150 Minwoo Choo
*/

let scene = 0;

let font_georgia;
let coronaImg;
let disinfectantImg;
let cgSplashName;
let cgCoronaCnt;
let cgPov;
let rot = 0;
let sc = 0.2;
let scene_timer;

let building_sl, rotate_sl;
let CITY_SIZE = 800;
let BUILDING_MAX_SIZE = 40;
let gridSz = CITY_SIZE / BUILDING_MAX_SIZE;
let map = [];

let covid;
let coronaCnt = 0;
let disinfectantDrop = false;
let disinfectant = [];
const typeOfObj = ['building', 'corona'];

function preload() {
  font_georgia = loadFont('assets/georgia.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 1);
  //rot = 0;

  coronaImg = loadImage('assets/corona.png');
  disinfectantImg = loadImage('assets/disinfectant.png');
  //cgSplashName = new Text("Corona Extra", 100, windowWidth/2 - 300, windowHeight/2 - 70, color(195, 56, 51, 1), font_georgia);
  cgCoronaCnt = new Text("Num of Corona", 20, 150, 40, color(195, 56, 51, 1), font_georgia);
  cgPov = new Text("POV", 20, 150, 65, color(240, 240, 240, 1), font_georgia);

  //scene_timer = new Timer(3000, handleScene);

  for (let i = 0; i < gridSz; i++) {
    map[i] = [];
    for (let j = 0; j < gridSz; j++) {
      map[i][j] = false;
    }
  }
  resetMap();
  building_sl = createSlider(1, 300, 3);
  building_sl.position(10, 30);
  rotate_sl = createSlider(0, 180, 0);
  rotate_sl.position(10, 50);
  building_sl.value(178);
  rotate_sl.value(37);

  covid = new Corona(0.4, 0, -100, 0);
  //covid = new Corona(1, windowWidth/2, windowHeight/2, 0);

  for (i = 0; i < 100; i++) {
    disinfectant[i] = new Rain(random(-400, 400), random(0, -3000), random(-500, 300));
  }
}

function draw() {
  background(0);
  lights();
  directionalLight(1, 0, 0, 1, 0, 0);

  // scene control
  if (scene === 0) {
    drawSplash();
    return;
  }

  drawBuildings();
  //covid.display();
  if (disinfectantDrop) {
    for (i = 0; i < disinfectant.length; i++) {
      disinfectant[i].dropRain();
      disinfectant[i].splash();
      image(disinfectantImg, 400, -500);
    }
    if (coronaCnt > 1) {
      coronaCnt -= 2;
    }
  } else {
    if (coronaCnt < 300) {
      coronaCnt += 1;
    } else {
      background(250, 0, 0);
    }
  }

  building_sl.value(coronaCnt);

  cgCoronaCnt.display();
  cgPov.display();
  push();
  //translate(150, 40, 0);
  /*
  textSize(20);
  textFont(font_georgia);
  fill(195, 56, 51);
  text('Num of Corona', 20, 150, 40);
  text('POV', 20, 150, 65);
  pop();
  */

  // draw score and the num of corona virus
}

function mousePressed() {
  // kill COVID-19 virus
  disinfectantDrop = true;
}

function mouseReleased() {
  disinfectantDrop = false;
}