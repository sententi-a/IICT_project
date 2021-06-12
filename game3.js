/*****게임3 관련 함수들이 모여 있습니다! 꼭 index.html body 안에 import해주세요! *****/

/*****게임3 이전 스토리: 지하철에 사람이 많아짐*****/
function morePeople() {
  image(men[1], 430, 180, 150, 300);
  image(men[5], 460, 150, 150, 300);
  image(men[4], 400, 180, 200, 400);
  image(men[6], 600, 250, 300, 600);
  image(men[3], 480, 120, 200, 400);
}

/*****게임3 세부 스테이지 관리*****/
function game3() {
  game3_image(0);
  // fill(255, 230);
  rectMode(CORNER);
  // rect(0, 0, width, height);
  fill(255);
  rect(width/2 - 110, height/2 - 30, 240, 100, 60);
  //fill(255, 130, 130);
  fill(20);
  textFont(nanum1);
  textAlign(CENTER);
  textSize(65);

  if(start_timer > 0) {
    text(start_timer, width / 2, height / 2 + 42);
  }
  else if(start_timer > -1){
   
    //fill(255, 130, 130);
    textSize(55);
    text("게임 시작", width/2, height/2 + 37);
    game3_trigger = 0;
  }

  if (game3_trigger == 0) {
    //game3의 스테이지 0
    if(game3_timer <= 109 && game3_timer > 89) {
      game3_image(game3_nums[st3]);
      game3_obst();
      game3_text(st3, 89);
      game3_sound(game3_nums[st3]);
      game3_check(game3_nums[st3]);
    }
    
    else if(game3_timer <= 89 && game3_timer > 87) {
      game3_next(st3);
    }
    
    //game3의 스테이지 1
    else if(game3_timer <= 87 && game3_timer > 67) {
      st3 = 1;
      game3_image(game3_nums[st3]);
      game3_obst();
      game3_text(st3, 67);
      game3_sound(game3_nums[st3]);
      game3_check(game3_nums[st3]);
    }
    
    else if(game3_timer <= 67 && game3_timer > 65) {
      game3_next(st3);
    }
    
    //game3의 스테이지 2
    else if(game3_timer <=65 && game3_timer > 45) {
      st3 = 2;
      game3_image(game3_nums[st3]);
      game3_obst();
      game3_text(st3, 45);
      game3_sound(game3_nums[st3]);
      game3_check(game3_nums[st3]);
    }
    
    else if(game3_timer <= 45 && game3_timer > 43) {
      game3_next(st3);
    }
    
    //game3의 스테이지 3
    else if(game3_timer <= 43 && game3_timer > 23) {
      st3 = 3;
      game3_image(game3_nums[st3]);
      game3_obst();
      game3_text(st3, 23);
      game3_sound(game3_nums[st3]);
      game3_check(game3_nums[st3]);
    }
    
    else if(game3_timer <=23 && game3_timer > 21) {
      game3_next(st3);
    }
    
    //game3의 스테이지 4
    else if(game3_timer <= 21 && game3_timer > 1) {
      st3 = 4;
      game3_image(game3_nums[st3]);
      game3_obst();
      game3_text(st3, 1);
      game3_sound(game3_nums[st3]);
      game3_check(game3_nums[st3]);
    }
    
    //Time Over
    else if (game3_timer <= 1){
      clearInterval(timerOn);
      game3_playing = true;
      if(game3_playing) {
        game3_sw.stop();
      }
      if (game3_snds[st3].isPlaying()) {
        game3_snds[st3].stop();
      }
      stage3 = 24;
    }
  }
}

/*****게임 설명*****/
function game3_description() {
  /**이미지 위 깔리는 사각형**/
  noStroke();
  fill(255, 220);
  rectMode(CORNER);
  rect(0, 0, width, height);
  
  /**Game stage bg**/
  rectMode(CENTER);
  //shadow
  fill(100,50); //A kind of darkish grey
  rect(width/2 + 3, 115 + 3, 360, 70, 20);  //Slight offset
  fill(255, 240, 240); //bg main color
  rect(width/2, 115, 360, 70, 20);
  // text
  fill(255, 130, 130);
  textFont(bom);
  textSize(45);
  textAlign(CENTER);
  text("GAME STAGE", width/2, 135);
  
  /**Game description bg**/ 
  //bg shadow
  fill(100,50); //A kind of darkish grey
  rect(width/2 + 3, 315 + 3, 600, 270, 20);  //Slight offset
  //description bg main
  fill(250);
  rect(width/2, 315, 600, 270, 20);
  //description text
  textFont(nanum2);
  textSize(24);
  fill(85);
  text("사람들 틈으로 역이름을 포착해 ‘합정역’에서 내려보자!", width/2, 235);
  //details
  textFont(nanum2);
  textSize(20);
  textLeading(50);
  text("* 안내 방송이 끝나기 전 ‘합정역’이 보이면 내리기 버튼을 눌러주세요.\n* 총 다섯 개의 역 중 합정역은 두 번 나옵니다.\n* 힌트 듣기를 누르면 안내 방송을 명확하게 들을 수 있어요.", width/2, 295);  
}

/*****게임시작 버튼*****/
function game3_start() {
  rectMode(CENTER);
  noStroke();
  if(mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 500 - 25 && mouseY <500 + 25) fill(255, 100, 100);
  else fill(255, 130, 130);
  rect(width/2, 500, 120, 50, 30);
  fill(255);
  textFont(bom);
  textSize(30);
  textAlign(CENTER);
  text("START", width/2, 500+10);
  
  if(mouseIsPressed && mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 500 - 25 && mouseY < 500 + 25) {
    stage3 += 1;
    if(stage3 == 23) { //꼭 stage3 숫자 맞춰 변경하기 (플레이테스트 말고 최종때!)
    timerOn = setInterval(timeCount, 1000);
    }
  }
}

/*****게임 타이머 시작*****/
function timeCount() {
  if (start_timer > -3) {
    start_timer--;
  }
  if(game3_timer > 0) {
    game3_timer--;
  }
}


/*****게임 이미지*****/
function game3_image(n) {
  image(game3_imgs[n],0,0,800,600);
}

/*****사운드 플레이, 플레이할 사운드는 n에 숫자 넣어서 선택!*****/
function game3_sound(n) { 
  if(hint != 1) {
    rectMode(CORNER);
    fill(150);
    rect(650, 35, 120, 40, 30);
    fill(0);
    textSize(23);
    textAlign(CENTER);
    textFont(nanum1);
    text("힌트 소진",710, 63);
  }
   //sound wave (좋지 않은 소리)
  game3_playing = false;
  game3_sw.freq(random(100));
  if(hint == -3) {
    game3_sw.amp(0);
  }
  else {
    game3_sw.amp(0.2);
  }
  if(!game3_playing) {
    game3_sw.start();
  }
    //밑에 조그맣게 원본 사운드 깔림
  if (!game3_snds[n].isPlaying()) {
    if(hint == -3) {
      game3_snds[n].amp(0.8);
    }
    else {
      game3_snds[n].amp(0.001);
    }
    game3_snds[n].play();
  }  

  if(hint == 1) {
    //힌트 듣기 버튼
    noStroke();
    fill(143, 212, 255); 
    rectMode(CORNER);
    rect(650, 35, 120, 40, 30);
    textSize(23);
    textFont(nanum1);
    if(mouseX >= 650 && mouseX <= 770 && mouseY >= 35 && mouseY <=75) fill(28, 170, 255);
    else fill(255);
    textAlign(CENTER);
    text("힌트 듣기",710, 63);
    if(mouseIsPressed && mouseX >= 650 && mouseX <= 770 && mouseY >= 35 && mouseY <=75) {
      hint = -3;
      game3_snds[n].amp(1);
    }
  }
}

function game3_obst() {
  for(let i = 0; i < people.length; i++) {
    people[i].move();
    people[i].display();
  }
}
 
/*****게임 상단 정보 텍스트*****/
function game3_text(n,time) {
  rectMode(CENTER);
  //shadow
  fill(100,50); //A kind of darkish grey
  rect(width/2 + 3, 55 + 3, 240, 60, 20);  //Slight offset
  fill(255, 247, 247); //bg main color
  rect(width/2, 55, 240, 60, 20);
  fill(255, 130, 130);
  textFont(bom);
  textSize(45);
  textAlign(CENTER);
  text("스테이지 " + (n + 1), width/2 , 70);
  textFont(nanum1);
  textSize(25);
  fill(85);
  text("남은 시간 : ", width/2 - 15, 120); 
  text((game3_timer - time), width/2 + 53,120);
}

/*****다음 스테이지로 가는 것 알려주기*****/
function game3_next(n) {
  game3_playing = true;
  if(game3_playing) {
      game3_sw.stop();
  }
  if (game3_snds[n].isPlaying()) {
    game3_snds[n].stop();
  }
  game3_image(game3_nums[n]);
  fill(255, 200);
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(70);
  textAlign(CENTER);
  textSize(40);
  textFont(bom);
  text("다음 스테이지 →", width/2, height/2 - 85);
}

/*****내리기 버튼*****/
function game3_check(n) {
  rectMode(CENTER);
  noStroke();
  if(mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 500 - 30 && mouseY < 500 + 30) fill(255, 100, 100);
  else fill(255, 130, 130);
  rect(width/2, 500, 120, 60, 30);
  textFont(bom);
  textSize(30);
  fill(255);
  textAlign(CENTER);
  text("내리기", width/2, 500 + 10);
  
  //합정역에서 내린다면 SUCCESS
  if( (mouseIsPressed && mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 500 - 30 && mouseY < 500 + 30) && (n == 0 || n ==4)) {
    clearInterval(timerOn);
    game3_playing = true;
    if(game3_playing) {
      game3_sw.stop();
    }
    if (game3_snds[n].isPlaying()) {
      game3_snds[n].stop();
    }
    stage3 = 25; //꼭 stage3 숫자 맞춰 변경하기 (플레이테스트 말고 최종때!)
  }
  //그 외의 역에서 내린다면 FAIL
  else if(mouseIsPressed && mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 500 - 30 && mouseY < 500 + 30) {
    game3_playing = true;
    if(game3_playing) {
      game3_sw.stop();
    }
    if (game3_snds[n].isPlaying()) {
      game3_snds[n].stop();
    }
    stage3 = 24; //꼭 stage3 숫자 맞춰 변경하기 (플레이테스트 말고 최종때!)
  }
}

/*****게임 실패*****/
function game3_fail() {
  clearInterval(timerOn);
  game3_image(game3_nums[st3]);
  fill(255, 50);
  rectMode(CORNER);
  rect(0, 0, width, height);
  textSize(70);
  textAlign(CENTER);
  textFont(bom);
  fill(255, 130, 130);
  text("GAME OVER", width/2, height/2 - 80);
  next33(6);

  //다음으로 버튼
  // rectMode(CENTER);
  // noStroke();
  // if(mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 450 - 25 && mouseY <450 + 25) fill(255, 100, 100);
  // else fill(255, 130, 130);
  // rect(width/2, 450, 120, 50, 30);
  // fill(255);
  // textFont(bom);
  // textSize(30);
  // textAlign(CENTER);
  // text("Next", width/2, 450+10);
  //  if(mouseIsPressed && mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 450 - 25 && mouseY <450 + 25) {
  //   stage3 = 6;
  // }
}

/*****게임 성공*****/
function game3_success() {
  game3_image(game3_nums[st3]);
  fill(255, 50);
  rectMode(CORNER);
  rect(0, 0, width, height);
  textSize(70);
  textFont(bom);
  textAlign(CENTER);
  fill(28, 170, 255);
  text("SUCCESS!", width/2, height/2 - 80);
  next33(6);
  //다음으로 버튼
  // rectMode(CENTER);
  // noStroke();
  // if(mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 450 - 25 && mouseY <450 + 25) fill(255, 100, 100);
  // else fill(255, 130, 130);
  // rect(width/2, 450, 120, 50, 30);
  // fill(255);
  // textFont(bom);
  // textSize(30);
  // textAlign(CENTER);
  // text("Next", width/2, 450+10);
  // if(mouseIsPressed && mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 450 - 25 && mouseY <450 + 25) {
  //   stage3 = 6; //stage3 번호 맞춰 변경하기 (플레이테스트 말고 최종때!)
  // }
}

