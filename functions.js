 /*
  stroke(0);
  strokeWeight(0.5);
  fill(250);
      textSize(20);
  textFont(best);
      text('(Press ENTER to RESTART)', 592, 590);
      */


//next를 누르면 다음 stage로 넘어가도록 해줍니다
function next0(s) {
  frame = frame + 1;
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 400, 800, 150);
  if (30 <= frame) {
    noStroke();
    textSize(25);
    textAlign(LEFT);
    textFont(bom);
    if (700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      fill(3, 186, 252);
      text(">>NEXT", 710, 535);
    }
    else fill(0);
    text(">>NEXT", 710, 535);
    if (mouseIsPressed &&700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      stage0 = s;
      frame = 0;
    }
  }
}

//예하면 갈 stage 번호를 y에, 아니오 하면 갈 stage 번호를 n에 넣으면 됩니다
function choose0(x, y, z) {
  frame = frame + 1;
  textFont(bom);
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 400, 800, 165);
  textAlign(LEFT);
  push();
  translate(0, 15);
  if (30 <= frame) {
    stroke(250);
    strokeWeight(2);
    fill(151, 223, 247);
    rect(10, 440, 30, 30);
    rect(10, 475, 30, 30);
    rect(10, 510, 30, 30);
    noStroke();
    textSize(20);
    
    if (10 <= mouseX && mouseX <= 40 && 440 <= mouseY && mouseY <= 470) {
      fill(3, 186, 252);
    }
    else fill(250);
    text("1", 21, 462);
    
    if (10 <= mouseX && mouseX <= 40 && 475 <= mouseY && mouseY <= 505) {
      fill(3, 186, 252);
    }
    else fill(250);
    text("2", 20, 497);
    
    if (10 <= mouseX && mouseX <= 40 && 510 <= mouseY && mouseY <= 540) {
      fill(3, 186, 252);
    }
    else fill(250);
     text("3", 19, 532);
    if (
      mouseIsPressed &&10 <= mouseX && mouseX <= 40 && 440 <= mouseY && mouseY <= 470
    ) {
      stage0 = x;
      frame = 0;
    }
    if ( mouseIsPressed && 10 <= mouseX && mouseX <= 40 && 475 <= mouseY && mouseY <= 505
    ) {
      stage0 = y;
      frame = 0;
    }
    if (mouseIsPressed && 10 <= mouseX && mouseX <= 40 && 510 <= mouseY &&mouseY <= 540
    ) {
      stage0 = z;
      frame = 0;
    }
  }
  pop();
}

//이전 단계로 돌아갈 수 있게 해줍니다. 이전 단계의 stage를 a에 넣어줍니다.
function back0(a) {
  frame = frame + 1;
  if (30 <= frame) {
    noStroke();
    textSize(15);
    textAlign(LEFT);
    textFont(bom);
    if (4 <= mouseX && mouseX <= 54 && 0 <= mouseY && mouseY <= 30) {
      fill(245, 87, 66);
    }
    else fill(0);
    text("뒤로<<", 10, 20);
    
    if (
      mouseIsPressed &&4 <= mouseX &&mouseX <= 54 &&0 <= mouseY && mouseY <= 30
    ) {
      stage0 = a;
      frame = 0;
      phone = 500;
      speed = 10;
    }
  }
}

//next를 누르면 다음 stage로 넘어가도록 해줍니다
function next1(s) {
  frame = frame + 1;
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 400, 800, 150);
  if (30 <= frame) {
    noStroke();
    textSize(25);
    textAlign(LEFT);
    textFont(bom);
    if (700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      fill(3, 186, 252);
      text(">>NEXT", 710, 535);
    }
    else fill(0);
    text(">>NEXT", 710, 535);
    if (mouseIsPressed &&700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      stage1 = s;
      frame = 0;
    }
  }
}

//예하면 갈 stage 번호를 y에, 아니오 하면 갈 stage 번호를 n에 넣으면 됩니다
function choose1(x, y, z) {
  frame = frame + 1;
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 400, 800, 150);
  if (30 <= frame) {
    stroke(250);
    strokeWeight(2);
    fill(151, 223, 247);
    rect(10, 440, 30, 30);
    rect(10, 475, 30, 30);
    rect(10, 510, 30, 30);
    textAlign(LEFT);
    noStroke();
    textFont(bom);
    textSize(20);
    if (10 <= mouseX && mouseX <= 40 && 440 <= mouseY && mouseY <= 470) {
      fill(3, 186, 252);
    }
    else fill(250);
    text("1", 21, 462);
    
    if (10 <= mouseX && mouseX <= 40 && 475 <= mouseY && mouseY <= 505) {
      fill(3, 186, 252);
    }
    else fill(250);
     text("2", 20, 497);
    if (10 <= mouseX && mouseX <= 40 && 510 <= mouseY && mouseY <= 540) {
      fill(3, 186, 252);
    }
    else fill(250);
    text("3", 19, 532);
    if (mouseIsPressed &&10 <= mouseX &&mouseX <= 40 &&440 <= mouseY &&mouseY <= 470
    ) {
      stage1 = x;
      frame = 0;
    }
    if (mouseIsPressed &&10 <= mouseX &&mouseX <= 40 &&475 <= mouseY &&mouseY <= 505) {
      stage1 = y;
      frame = 0;
    }
    if (mouseIsPressed &&10 <= mouseX &&mouseX <= 40 &&510 <= mouseY &&mouseY <= 540) {
      stage1 = z;
      frame = 0;
    }
  }
}

//이전 단계로 돌아갈 수 있게 해줍니다. 이전 단계의 stage를 a에 넣어줍니다.
function back1(a) {
  frame = frame + 1;
  if (30 <= frame) {
    noStroke();
    textSize(15);
    textAlign(LEFT);
    textFont(bom);
    if (4 <= mouseX && mouseX <= 54 && 0 <= mouseY && mouseY <= 30) {
      fill(245, 87, 66);
    }
    else fill(0);
     text("뒤로<<", 10, 20);
    if (
      mouseIsPressed && 4 <= mouseX &&mouseX <= 54 &&0 <= mouseY &&mouseY <= 30) {
      stage1 = a;
      frame = 0;
    }
  }
}

//next를 누르면 다음 stage로 넘어가도록 해줍니다
function next2(s) {
  frame = frame + 1;
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 400, 800, 150);
  if (30 <= frame) {
    noStroke();
    textSize(25);
    textAlign(LEFT);
    textFont(bom);
    if (700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      fill(3, 186, 252);
      text(">>NEXT", 710, 535);
    }
    else fill(0);
    text(">>NEXT", 710, 535);
    if (mouseIsPressed &&700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      stage2 = s;
      frame = 0;
    }
  }
}

//예하면 갈 stage 번호를 y에, 아니오 하면 갈 stage 번호를 n에 넣으면 됩니다
function choose2(x, y, z) {
  frame = frame + 1;
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 400, 800, 150);
  if (30 <= frame) {
    stroke(250);
    strokeWeight(2);
    fill(151, 223, 247);
    rect(10, 440, 30, 30);
    rect(10, 475, 30, 30);
    rect(10, 510, 30, 30);
    noStroke();
    textSize(20);
    textAlign(LEFT);
    textFont(bom);
    if (10 <= mouseX && mouseX <= 40 && 440 <= mouseY && mouseY <= 470) {
      fill(3, 186, 252);
    }
    else fill(250);
    text("1", 21, 462);
    
    if (10 <= mouseX && mouseX <= 40 && 475 <= mouseY && mouseY <= 505) {
      fill(3, 186, 252);
    }
    else fill(250);
    text("2", 20, 497);
    
    if (10 <= mouseX && mouseX <= 40 && 510 <= mouseY && mouseY <= 540) {
      fill(3, 186, 252);
    }
    else fill(250);
     text("3", 19, 532);
    if (mouseIsPressed &&10 <= mouseX &&mouseX <= 40 &&440 <= mouseY &&mouseY <= 470) {
      stage2 = x;
      frame = 0;
    }
    if (mouseIsPressed &&10 <= mouseX &&mouseX <= 40 &&475 <= mouseY &&mouseY <= 505) {
      stage2 = y;
      frame = 0;
    }
    if (mouseIsPressed &&10 <= mouseX &&mouseX <= 40 &&510 <= mouseY &&mouseY <= 540) {
      stage2 = z;
      frame = 0;
    }
  }
}

//이전 단계로 돌아갈 수 있게 해줍니다. 이전 단계의 stage를 a에 넣어줍니다.
function back2(a) {
  frame = frame + 1;
  myMovie1.hide();
  input2.hide();
  button2.hide();
  
  if (30 <= frame) {
    noStroke();
    textSize(15);
    textFont(bom);
    if (4 <= mouseX && mouseX <= 54 && 0 <= mouseY && mouseY <= 30) {
      fill(245, 87, 66);
    }
    else {
      fill(0);
    }
    textAlign(LEFT);
     text("뒤로<<", 10, 20);
    if (mouseIsPressed && 4 <= mouseX && mouseX <= 54 && 0 <= mouseY && mouseY <= 30) {
      stage2 = a;
      frame = 0;
    }
  }
}

//next를 누르면 다음 stage로 넘어가도록 해줍니다


//예하면 갈 stage 번호를 y에, 아니오 하면 갈 stage 번호를 n에 넣으면 됩니다
function choose3(x, y, z) {
  frame = frame + 1;
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 400, 800, 150);
  if (30 <= frame) {
    stroke(250);
    strokeWeight(2);
    fill(151, 223, 247);
    rect(10, 440, 30, 30);
    rect(10, 475, 30, 30);
    rect(10, 510, 30, 30);
    noStroke();
    textFont(bom);
    textSize(20);
    textAlign(LEFT);
   
    if (10 <= mouseX && mouseX <= 40 && 440 <= mouseY && mouseY <= 470) {
      fill(3, 186, 252);
    }
    else fill(250);
     text("1", 21, 462);
    
    if (10 <= mouseX && mouseX <= 40 && 475 <= mouseY && mouseY <= 505) {
      fill(3, 186, 252);
    }
    else fill(250);
    text("2", 20, 497);
    if (10 <= mouseX && mouseX <= 40 && 510 <= mouseY && mouseY <= 540) {
      fill(3, 186, 252);
    }
    else fill(250);
     text("3", 19, 532);
    if (mouseIsPressed &&10 <= mouseX &&mouseX <= 40 && 440 <= mouseY &&mouseY <= 470) {
      stage3 = x;
      frame = 0;
      memo_h = 350;
      flower1_h = -200;
      flower2_h = -200;
    }
    if (mouseIsPressed &&10 <= mouseX &&mouseX <= 40 && 475 <= mouseY &&mouseY <= 505
    ) {
      stage3 = y;
      frame = 0;
      memo_h = 350;
      flower1_h = -200;
      flower2_h = -200;
    }
    if (mouseIsPressed &&10 <= mouseX &&mouseX <= 40 && 510 <= mouseY &&mouseY <= 540) {
      stage3 = z;
      frame = 0;
      memo_h = 350;
      flower1_h = -200;
      flower2_h = -200;
    }
  }
}



/*function keyPressed() {
  if (keyCode === ENTER) {
    stage0 = 0;
    frame = 0;
    days = 0;
    phone = 500;
    speed = 10;
  }
}
*/

function twoChoose0(x,y){
  frame = frame + 1;
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 390, 800, 160);
  stroke(250);
  strokeWeight(2);
  fill(151, 223, 247);
  rect(10, 457, 30, 30);
  rect(10, 510, 30, 30);
  textAlign(LEFT);
  noStroke();
  textSize(20);
  textFont(bom);
  if (10 <= mouseX && mouseX <= 450 && 457 <= mouseY && mouseY <= 505) {
    fill(3, 186, 252);
  }
  else fill(250);
  text("1", 21, 478);
  if (10 <= mouseX && mouseX <= 450 && 510 <= mouseY && mouseY <= 540) {
    fill(3, 186, 252);
  }
  else fill(250);
  text("2", 19, 532);

  if ( mouseIsPressed && 10 <= mouseX &&mouseX <= 450 &&457 <= mouseY &&mouseY <= 505) {
      stage0 = x;
      frame = 0;
  }
  if (mouseIsPressed &&10 <= mouseX &&mouseX <= 450 &&510 <= mouseY && mouseY <= 540) {
      stage0 = y;
      frame = 0;
  }
}

function twoChoose1(x,y){
  frame = frame + 1;
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 390, 800, 160);
  stroke(250);
  strokeWeight(2);
  fill(151, 223, 247);
  rect(10, 457, 30, 30);
  rect(10, 510, 30, 30);
  
  noStroke();
  textAlign(LEFT);
  textSize(20);
  textFont(bom);
  if (10 <= mouseX && mouseX <= 240 && 457 <= mouseY && mouseY <= 505) {
    fill(3, 186, 252);
  }
  else fill(250);
  text("1", 21, 478);
  if (10 <= mouseX && mouseX <= 200 && 510 <= mouseY && mouseY <= 540) {
    fill(3, 186, 252);
  }
  else fill(250);
  text("2", 19, 532);

  if ( mouseIsPressed &&10 <= mouseX &&mouseX <= 240 &&457 <= mouseY &&mouseY <= 505) {
      stage1 = x;
      frame = 0;
  }
  if (mouseIsPressed &&10 <= mouseX &&mouseX <= 200 &&510 <= mouseY && mouseY <= 540) {
      stage1 = y;
      frame = 0;
  }
}

function twoChoose2(x,y){
  frame = frame + 1;
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 390, 800, 160);
  stroke(250);
  strokeWeight(2);
  fill(151, 223, 247);
  rect(10, 457, 30, 30);
  rect(10, 510, 30, 30);
  
  noStroke();
  textAlign(LEFT);
  textSize(20);
  textFont(bom);
  if (10 <= mouseX && mouseX <= 460 && 457 <= mouseY && mouseY <= 505) {
    fill(3, 186, 252);
  }
  else fill(250);
  text("1", 21, 478);
  if (10 <= mouseX && mouseX <= 320 && 510 <= mouseY && mouseY <= 540) {
    fill(3, 186, 252);
  }
  else fill(250);
  text("2", 19, 532);

  if ( mouseIsPressed &&10 <= mouseX &&mouseX <= 460 &&457 <= mouseY &&mouseY <= 505) {
      stage2 = x;
      frame = 0;
  }
  if (mouseIsPressed &&10 <= mouseX &&mouseX <= 320 &&510 <= mouseY && mouseY <= 540) {
      stage2 = y;
      frame = 0;
  }
}




//next22는 next에서 불투명 흰 사각형을 빼고 next만 남긴 함수입니다.
function next22(s) {
  frame = frame + 1;
  noStroke();
  if (30 <= frame) {
    fill(0);
    noStroke();
    textAlign(LEFT);
    textSize(20);
    textFont(bom);
    if (700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      fill(3, 186, 252);
    }
    else fill(0);
     text(">>NEXT", 720, 535);
    if (mouseIsPressed &&700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      stage2 = s;
      frame = 0;
    }
  }
}


function main_text(t) {
  stroke(220, 234, 252);
  strokeWeight(3);
  fill(0);
  textAlign(LEFT);
  textFont(bom);
  textSize(25);
  text(t, 15, 435);
}

function phone_text(t,x,y) {
  noStroke();
  fill(0);
  textAlign(LEFT);
  textFont(best);
  textSize(25);
  text(t, x, y);
}