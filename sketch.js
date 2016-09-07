function preload(){
  moon = loadImage("moon.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Abril Fatface");
}

lastTimeChanged = null;
poemIndex = 0;

function draw() {
  background(125, 171, 177); 
  
  seconds = millis()/1000;
  change = map(sin(seconds * 2), -1, 1, 0, 50);
  
  moonRise = map(sin(seconds * .1), -1, 1, -100, 200);
 
  image(moon, windowWidth/2, windowHeight/2 + moonRise, windowWidth/1.2, windowWidth/1.2);
 
  noTint();
  fill(89, 195, 234, 200);
  noStroke();
  triangle (0, height, width/4 + change, height/1.2, width/2, height);
  fill(89, 195, 255, 200);
  triangle (width/4, height, width/2, height/1.3 + change * 2, width/1.6 + change, height);
  fill(89, 180, 234, 200);
  triangle (width/2, height, width/1.4, height/1.2 + (change * - 1.1), width/1.1, height);
  fill(89, 195, 234, 200);
  triangle (width/1.5, height, width/1.1, height/1.2 + (change * .5), width, height);
 
  tint(200,60);
  imageMode(CENTER);
  

// stroke(1);
 fill(199, 229, 181);
 textAlign(CENTER);

 
 var poemFunctions = [poem1, poem2, poem3,poem4,poem5,poem6,poem7];
 if (millis() - lastTimeChanged >= 2500) {
    poemIndex = poemIndex + 1;
    if(poemIndex == poemFunctions.length) poemIndex = 0;
    lastTimeChanged = millis();
 }
 poemFunctions[poemIndex]();
  
}

function poem1() {
  fill(199, 229, 255, 120);
  textSize(90);
  text("if she didn't work the knots",width/2, height/2);
}

function poem2(){
  fill(199, 229, 255, 120);
  textSize(120);
  text("day and night", width/2, height/2);
}

function poem3(){
  fill(199, 229, 255, 120);
  textSize(70);
  text("to keep the boat safe to the dock", width/2, height/2);
}

function poem4(){
  fill(199, 229, 255, 120);
  textSize(90);
  text("he would float away", width/2, height/2);
}

function poem5(){
  fill(199, 229, 255, 120);
  textSize(115);
  text("into the sea", width/2, height/2);
}

function poem6(){
  fill(199, 229, 255, 120);
  textSize(110);
  text("resigned", width/2, height/2);
}

function poem7(){
  fill(199, 229, 255, 120);
  textSize(115);
  text("but lonely", width/2, height/2);
}