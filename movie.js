//게임 관련 함수 정리

//기생충 input2
function newText1() {
  console.log(this.value());
}

function actEvent1() {
  // words that split to several pieces and be checked by original acting lines

  let inputMsg = input2.value();
  let words = inputMsg.split(" ");
  console.log(words);

  if (words.includes("계획이") || words.includes("계획") == true) {
    myMovie1.hide();
    stage2 = 16;
    frame = 0;
    //value값 초기화하고 나머지 애들 숨기기
    input2.value(null);
    input2.hide();
    button2.hide();
    
    
  } else {
    myMovie1.hide();
    stage2 = 14;
    frame = 0;
    //value 값 초기화하고 나머지 애들 숨기기
    input2.value(null);
    input2.hide();
    button2.hide();
    
  }
}

//두번째 기생충 input2
function newText2() {
  console.log(this.value());
}

function actEvent2() {
  // words that split to several pieces and be checked by original acting lines

  let inputMsg = input2.value();
  let words = inputMsg.split(" ");
  console.log(words);

  if (
    words.includes("위조나", "범죄라고") ||
    words.includes("생각하지") == true
  ) {
    myMovie2.hide();
    stage2 = 16;
    frame = 0;
    //value값 초기화하고 나머지 애들 숨기기
    input2.value(null);
    input2.hide();
    button2.hide();
    
  
  } else {
    myMovie2.hide();
    stage2 = 14;
    frame = 0;
    //value 값 초기화하고 나머지 애들 숨기기
    input2.value(null);
    input2.hide();
    button2.hide();
    
  }
} //기생충 두번째 input2 정리

//연애의 발견 input2 정리
function newText3() {
  console.log(this.value());
}

function actEvent3() {
  // words that split to several pieces and be checked by original acting lines

  let inputMsg = input2.value();
  let words = inputMsg.split(" ");
  console.log(words);

  if (
    words.includes("내맘대로") ||
    words.includes("내맘대로라고?") ||
    words.includes("하나부터", "열까지") ||
    words.includes("맞춰주고") == true
  ) {
    myMovie3.hide();
    stage2 = 16;
    frame = 0;
    //value값 초기화하고 나머지 애들 숨기기
    input2.value(null);
    input2.hide();
    button2.hide();
    
    
  } else {
    myMovie3.hide();
    stage2 = 14;
    frame = 0;
    //value 값 초기화하고 나머지 애들 숨기기
    input2.value(null);
    input2.hide();
    button2.hide();
    
  }
} //연애의 온도 input2 정리

//암살 input2
function newText4() {
  console.log(this.value());
}

function actEvent4() {
  // words that split to several pieces and be checked by original acting lines

  let inputMsg = input2.value();
  let words = inputMsg.split(" ");
  console.log(words);

  if (
    words.includes("몰랐으니까") ||
    words.includes("해방될" && "줄") ||
    words.includes("해방") ||
    words.includes("해방될줄") == true
  ) {
    myMovie4.hide();
    stage2 = 16;
    frame = 0;
    //value값 초기화하고 나머지 애들 숨기기
    input2.value(null);
    input2.hide();
    button2.hide();
    
  } else {
    myMovie4.hide();
    stage2 = 14;
    frame = 0;
    //value 값 초기화하고 나머지 애들 숨기기
    input2.value(null);
    input2.hide();
    button2.hide();
   
  }
} //암살 input2 정리

///영화 재생 관련 movie Control과 hint Control

//기생충 첫번째 영화 재생
function movieControl1() {
  butShape();

  //영화
  myMovie1.show();

  if (!movieCreated) {
    if (
      mouseIsPressed &&
      100 <= mouseX &&
      mouseX <= 150 &&
      150 <= mouseY &&
      mouseY <= 200
    ) {
      movieCreated = true;
      myMovie1.play();
    }
  } else {
    if (
      mouseIsPressed &&
      100 <= mouseX &&
      mouseX <= 150 &&
      300 <= mouseY &&
      mouseY <= 340
    ) {
      movieCreated = false;
      myMovie1.pause();
    }
  }
  if (
    mouseIsPressed &&
    100 <= mouseX &&
    mouseX <= 150 &&
    150 <= mouseY &&
    mouseY <= 200
  ) {
    myMovie1.stop();
    myMovie1.play();
  }
}

function hintControl1() {
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
    hint = -999;
    mvSound1.play();
  }
}

//기생충 두번째
function movieControl2() {
  //
  butShape();

  //영화
  myMovie2.show();

  if (!movieCreated) {
    if (
      mouseIsPressed &&
      100 <= mouseX &&
      mouseX <= 150 &&
      150 <= mouseY &&
      mouseY <= 200
    ) {
      movieCreated = true;
      myMovie2.play();
    }
  } else {
    if (
      mouseIsPressed &&
      100 <= mouseX &&
      mouseX <= 150 &&
      300 <= mouseY &&
      mouseY <= 340
    ) {
      movieCreated = false;
      myMovie2.pause();
    }
  }
  if (
    mouseIsPressed &&
    100 <= mouseX &&
    mouseX <= 150 &&
    150 <= mouseY &&
    mouseY <= 200
  ) {
    myMovie2.stop();
    myMovie2.play();
  }
}

function hintControl2() {
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
    hint = -999;
    mvSound2.play();
  }
}

//연애의 온도
function movieControl3() {
  butShape();

  //영화
  myMovie3.show();

  if (!movieCreated) {
    if (
      mouseIsPressed &&
      100 <= mouseX &&
      mouseX <= 150 &&
      150 <= mouseY &&
      mouseY <= 200
    ) {
      movieCreated = true;
      myMovie3.play();
    }
  } else {
    if (
      mouseIsPressed &&
      100 <= mouseX &&
      mouseX <= 150 &&
      300 <= mouseY &&
      mouseY <= 340
    ) {
      movieCreated = false;
      myMovie3.pause();
    }
  }
  if (
    mouseIsPressed &&
    100 <= mouseX &&
    mouseX <= 150 &&
    150 <= mouseY &&
    mouseY <= 200
  ) {
    myMovie3.stop();
    myMovie3.play();
  }
}

function hintControl3() {
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
    hint = -999;
    mvSound3.play();
  }
}

//암살
function movieControl4() {
  butShape();

  //영화
  myMovie4.show();

  if (!movieCreated) {
    if (
      mouseIsPressed &&
      100 <= mouseX &&
      mouseX <= 150 &&
      150 <= mouseY &&
      mouseY <= 200
    ) {
      movieCreated = true;
      myMovie4.play();
    }
  } else {
    if (
      mouseIsPressed &&
      100 <= mouseX &&
      mouseX <= 150 &&
      300 <= mouseY &&
      mouseY <= 340
    ) {
      movieCreated = false;
      myMovie4.pause();
    }
  }
  if (
    mouseIsPressed &&
    100 <= mouseX &&
    mouseX <= 150 &&
    150 <= mouseY &&
    mouseY <= 200
  ) {
    myMovie4.stop();
    myMovie4.play();
  }
}

function hintControl4() {
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
    hint = -999;
    mvSound4.play();
  }
}

//버튼 모양만
function butShape() {
  noStroke();
  fill(220, 190);
  fill(0);
  textSize(25);
  textFont(han);

  //재생
  fill(247, 45, 0);
  rect(100, 150, 50, 50, 20);
  fill(255);
  triangle(110, 160, 110, 190, 140, 175);
  if (mouseX > 90 && mouseX < 160 && mouseY > 140 && mouseY < 210) {
    fill(245, 233, 66);
    rect(100, 150, 50, 50, 20);
    fill(255);
    triangle(110, 160, 110, 190, 140, 175);
  }
  //정지
  fill(247, 45, 0);
  rect(100, 300, 50, 50, 20);
  fill(255);
  rect(110, 310, 10, 30);
  rect(130, 310, 10, 30);
  if (mouseX > 90 && mouseX < 160 && mouseY > 290 && mouseY < 350) {
    fill(245, 233, 66);
    rect(100, 300, 50, 50, 20);
    fill(255);
    rect(110, 310, 10, 30);
    rect(130, 310, 10, 30);
  }
}