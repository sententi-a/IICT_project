function arsgame1() {
  game1_explain();

  if (
    mouseIsPressed &&
    300 <= mouseX &&
    mouseX <= 500 &&
    230 <= mouseY &&
    mouseY <= 330
  ) {
    mySound1.setVolume(7);
    mySound1.play();
  }

  if (!actCreated) {
    actCreated = true;
    input = createInput();
    input.position(285, 540);

    button = createButton("입력");
    button.position(input.x + input.width + 15, input.y);
    input.size(220, 30);
    button.size(50, 37);
    button.mousePressed(arsCheck1);
  }
}

function arsgame2() {
  game1_explain();

  if (
    mouseIsPressed &&
    300 <= mouseX &&
    mouseX <= 500 &&
    230 <= mouseY &&
    mouseY <= 330
  ) {
    mySound2.setVolume(7);
    mySound2.play();
  }

  if (!actCreated) {
    actCreated = true;
    input = createInput();
    input.position(285, 540);

    button = createButton("입력");
    button.position(input.x + input.width + 15, input.y);
    input.size(220, 30);
    button.size(50, 37);
    button.mousePressed(arsCheck2);
  }
}

function arsgame3() {
  game1_explain();

  if (
    mouseIsPressed &&
    300 <= mouseX &&
    mouseX <= 500 &&
    230 <= mouseY &&
    mouseY <= 330
  ) {
    mySound3.setVolume(7);
    mySound3.play();
  }

  if (!actCreated) {
    actCreated = true;
    input = createInput();
    input.position(285, 540);

    button = createButton("입력");
    button.position(input.x + input.width + 15, input.y);
    input.size(220, 30);
    button.size(50, 37);
    button.mousePressed(arsCheck3);
  }
}

function arsgame4() {
  game1_explain();

  if (
    mouseIsPressed &&
    300 <= mouseX &&
    mouseX <= 500 &&
    230 <= mouseY &&
    mouseY <= 330
  ) {
    mySound4.setVolume(7);
    mySound4.play();
  }

  if (!actCreated) {
    actCreated = true;
    input = createInput();
    input.position(285, 540);

    button = createButton("입력");
    button.position(input.x + input.width + 15, input.y);
    input.size(220, 30);
    button.size(50, 37);
    button.mousePressed(arsCheck4);
  }
}

function arsgame5() {
  game1_explain();

  if (
    mouseIsPressed &&
    300 <= mouseX &&
    mouseX <= 500 &&
    230 <= mouseY &&
    mouseY <= 330
  ) {
    mySound5.setVolume(7);
    mySound5.play();
  }

  if (!actCreated) {
    actCreated = true;
    input = createInput();
    input.position(285, 540);

    button = createButton("입력");
    button.position(input.x + input.width + 15, input.y);
    input.size(220, 30);
    button.size(50, 37);
    button.mousePressed(arsCheck5);
  }
}

function arsCheck1() {
  let name = input.value();
  input.value("");

  if (name == 34) {
    stage1 = 17;
    frame = 0;

    mySound1.stop();
    hintSound1.stop();

    input.hide();
    button.hide();
  } else {
    stage1 = 7;

    mySound1.stop();
    hintSound1.stop();
    frame = 0;
    fadetime = 0;
    fade = 200;
  }
}

function arsCheck2() {
  let name = input.value();
  input.value("");

  if (name == 73) {
    stage1 = 17;
    frame = 0;

    mySound2.stop();
    hintSound2.stop();

    input.hide();
    button.hide();
  } else {
    stage1 = 9;
    mySound2.stop();
    hintSound2.stop();
    frame = 0;
    fadetime = 0;
    fade = 200;
  }
}

function arsCheck3() {
  let name = input.value();
  input.value("");

  if (name == 91) {
    stage1 = 17;
    frame = 0;

    mySound3.stop();
    hintSound3.stop();

    input.hide();
    button.hide();
  } else {
    stage1 = 11;
    mySound3.stop();
    hintSound3.stop();
    frame = 0;
    fadetime = 0;
    fade = 200;
  }
}

function arsCheck4() {
  let name = input.value();
  input.value("");

  if (name == 62) {
    stage1 = 17;
    frame = 0;

    mySound4.stop();
    hintSound4.stop();

    input.hide();
    button.hide();
  } else {
    stage1 = 13;
    mySound4.stop();
    hintSound4.stop();

    frame = 0;
    fadetime = 0;
    fade = 200;
  }
}

function arsCheck5() {
  let name = input.value();
  input.value("");

  if (name == 83) {
    stage1 = 17;
    frame = 0;

    mySound5.stop();
    hintSound5.stop();

    input.hide();
    button.hide();
  } else {
    stage1 = 15;
    mySound5.stop();
    hintSound5.stop();
    frame = 0;
    fadetime = 0;
    fade = 200;
  }
}

function arsFail() {
  fadetime = fadetime + 1;

  fill(235, 117, 125, fade);
  rect(210, 200, 400, 150);
  fill(0, fade);
  textSize(25);
  textAlign(CENTER);
  textFont(best);
  text("ARS 인증에 실패하였습니다", width / 2, 260);
  text("다시 시도해주세요", width / 2, 310);

  if (fade < 0) fadeAmount = 0;

  if (fadetime > 80) {
    fadeAmount = fadeAmount + 0.05;

    fade -= fadeAmount;
  }
}

function arshint1() {
  noStroke();
  fill(255, 255, 0);
  rectMode(CORNER);
  rect(650, 30, 120, 40, 30);
  textSize(23);
  fill(0);
  textAlign(LEFT);
  textFont(nanum2);
  text("힌트듣기", 668, 60);
  if (
    hint == 1 &&
    mouseX >= 650 &&
    mouseX <= 770 &&
    mouseY >= 30 &&
    mouseY <= 70
  ) {
    fill(255, 0, 0);
    text("힌트듣기", 668, 60);
  } else if (hint < 1) {
    noStroke();
    fill(150);
    rectMode(CORNER);
    rect(650, 30, 120, 40, 30);
    fill(0);
    text("힌트소진", 668, 60);
  }
  if (
    hint == 1 &&
    mouseIsPressed &&
    mouseX >= 650 &&
    mouseX <= 770 &&
    mouseY >= 30 &&
    mouseY <= 70
  ) {
    hint = -1;
    hintSound1.setVolume(1.5);
    hintSound1.play();
    mySound1.stop();
  }
}

function arshint2() {
  noStroke();
  fill(255, 255, 0);
  rectMode(CORNER);
  rect(650, 30, 120, 40, 30);
  textSize(23);
  fill(0);
  textAlign(LEFT);
  textFont(nanum2);
  text("힌트듣기", 668, 60);
  if (
    hint == 1 &&
    mouseX >= 650 &&
    mouseX <= 770 &&
    mouseY >= 30 &&
    mouseY <= 70
  ) {
    fill(255, 0, 0);
    text("힌트듣기", 668, 60);
  } else if (hint < 1) {
    noStroke();
    fill(150);
    rectMode(CORNER);
    rect(650, 30, 120, 40, 30);
    fill(0);
    text("힌트소진", 668, 60);
  }
  if (
    hint == 1 &&
    mouseIsPressed &&
    mouseX >= 650 &&
    mouseX <= 770 &&
    mouseY >= 30 &&
    mouseY <= 70
  ) {
    hint = -1;
    hintSound2.setVolume(1.5);
    hintSound2.play();
      mySound2.stop();
  }
}

function arshint3() {
  noStroke();
  fill(255, 255, 0);
  rectMode(CORNER);
  rect(650, 30, 120, 40, 30);
  textSize(23);
  fill(0);
  textAlign(LEFT);
  textFont(nanum2);
  text("힌트듣기", 668, 60);
  if (
    hint == 1 &&
    mouseX >= 650 &&
    mouseX <= 770 &&
    mouseY >= 30 &&
    mouseY <= 70
  ) {
    fill(255, 0, 0);
    text("힌트듣기", 668, 60);
  } else if (hint < 1) {
    noStroke();
    fill(150);
    rectMode(CORNER);
    rect(650, 30, 120, 40, 30);
    fill(0);

    text("힌트소진", 668, 60);
  }
  if (
    hint == 1 &&
    mouseIsPressed &&
    mouseX >= 650 &&
    mouseX <= 770 &&
    mouseY >= 30 &&
    mouseY <= 70
  ) {
    hint = -1;
    hintSound3.setVolume(1.5);
    hintSound3.play();
      mySound3.stop();
  }
}

function arshint4() {
  noStroke();
  fill(255, 255, 0);
  rectMode(CORNER);
  rect(650, 30, 120, 40, 30);
  textSize(23);
  fill(0);
  textAlign(LEFT);
  textFont(nanum2);
  text("힌트듣기", 668, 60);
  if (
    hint == 1 &&
    mouseX >= 650 &&
    mouseX <= 770 &&
    mouseY >= 30 &&
    mouseY <= 70
  ) {
    fill(255, 0, 0);
    text("힌트듣기", 668, 60);
  } else if (hint < 1) {
    noStroke();
    fill(150);
    rectMode(CORNER);
    rect(650, 30, 120, 40, 30);
    fill(0);

    text("힌트소진", 668, 60);
  }
  if (
    hint == 1 &&
    mouseIsPressed &&
    mouseX >= 650 &&
    mouseX <= 770 &&
    mouseY >= 30 &&
    mouseY <= 70
  ) {
    hint = -1;

    hintSound4.setVolume(1.5);
    hintSound4.play();
   mySound4.stop();
  }
}

function arshint5() {
  noStroke();
  fill(255, 255, 0);
  rectMode(CORNER);
  rect(650, 30, 120, 40, 30);
  textSize(23);
  textAlign(LEFT);
  fill(0);
  textFont(nanum2);
  text("힌트듣기", 668, 60);
  if (
    hint == 1 &&
    mouseX >= 650 &&
    mouseX <= 770 &&
    mouseY >= 30 &&
    mouseY <= 70
  ) {
    fill(255, 0, 0);

    text("힌트듣기", 668, 60);
  } else if (hint < 1) {
    noStroke();
    fill(150);
    rectMode(CORNER);
    rect(650, 30, 120, 40, 30);
    fill(0);

    text("힌트소진", 668, 60);
  }
  if (
    hint == 1 &&
    mouseIsPressed &&
    mouseX >= 650 &&
    mouseX <= 770 &&
    mouseY >= 30 &&
    mouseY <= 70
  ) {
    hint = -1;
    hintSound5.setVolume(2);
    hintSound5.play();
      mySound5.stop();
  }
}

function giveupButton() {
  noStroke();
  fill(219, 151, 184);
  rectMode(CORNER);
  rect(650, 100, 120, 40, 30);
  textAlign(LEFT);
  textSize(23);
  fill(0);
  textFont(nanum2);
  text("넘어가기", 668, 130);
  if (mouseX >= 650 && mouseX <= 770 && mouseY >= 100 && mouseY <= 140) {
    fill(255, 0, 0);
    text("", 668, 130);
  }
  if (
    mouseIsPressed &&
    mouseX >= 650 &&
    mouseX <= 770 &&
    mouseY >= 100 &&
    mouseY <= 140
  ) {
    
    
     mySound1.stop();
  mySound2.stop();
  mySound3.stop();
  mySound4.stop();
  mySound5.stop();
  hintSound1.stop();
  hintSound2.stop();
  hintSound3.stop();
  hintSound4.stop();
  hintSound5.stop();
    
    
    stage1 = 35;
    
    
    
    
    
    
    
  }
}

function game1_explain() {
  rectMode(CORNER);
  noStroke();
  fill(182, 209, 240, 150);
  rect(0, 450, 800, 150);
  stroke(220, 234, 252);
  strokeWeight(2);
  fill(0);
  textFont(best);
  textAlign(CENTER);
  textSize(27);
  text(
    "선물 주문을 위해 ARS 소리를 듣고 숫자 두 자리를 입력해주세요!",
    width / 2,
    500
  );

  fill(0);
  rect(300, 230, 200, 100);

  fill(255);

  if (mouseX >= 300 && mouseX <= 500 && mouseY >= 230 && mouseY <= 330) {
    fill(255);
  } else {
    fill(180);
  }
  strokeWeight(1);
  textFont(best);
  textSize(29);
  text("ARS 음성 듣기", width / 2, 295);
}
