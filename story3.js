function story3_0() {
  image(room, 0, 0, width, height);  
  rectMode(CORNER);
  fill(255, 180);
  rect(0, 0, width, height);
  push();
  translate(width/2, height/2);
  rotate(map(sin(wobble), -0.5, 0.5, -QUARTER_PI/40, QUARTER_PI/40));
  image(watch, -400, -300, width, height);
  pop();
  wobble += 0.8;
}

function story3_14() {
  frame = frame + 1;
  if (frame > 50) {
    image(memo, 0,memo_h, width, height);
    memo_h -= speed3;
    speed3 -= 1;
  }
  else memo_h = 0;
  
  if (150 <= frame) {
    conversation3(15);
    back3(8);
    main_text("제가 귀가 잘 안 들려서 그런데.. 혹시 방금 하셨던 말씀 여기에 적어주실 수 있나요?");
  }
}

function contact() {
    stroke(255, 255, 0);
    strokeWeight(5);
    line(0, 0, 30, 50); 
}

function conversation3(s) {
  frame = frame + 1;
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 400, 800, 150);
  if (30 <= frame) {
    noStroke();
    textSize(25);
    textFont(bom);
    if (700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      fill(3, 186, 252);
    }
    else fill(0);
    textAlign(LEFT);
    text(">>NEXT", 710, 535);
    if (mouseIsPressed &&700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      stage3 = s;
      frame = 0;
    }
  }
}

function flower1() {
  
}

function flower2() {
  
}