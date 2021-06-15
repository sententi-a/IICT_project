function game3() {
 //힌트 이미지
  console.log(frameRate());
  if (game3_trigger == 1) {
    //game3의 스테이지 0
    if(game3_timer > 59) {
      image(game3_ex, 0, 0, width, height); 
    }
    else if(game3_timer <= 59 && game3_timer > 49) {
      st3 = 0;
      game3_image(game3_nums[st3]);
      game3_text(49);
      game3_info("첫 번째 역");
      game3_sound(game3_nums[st3]);
      standing(0);
      game3_check(game3_nums[st3]);
    }
    
    else if(game3_timer <= 49 && game3_timer > 47) {
      game3_next(st3);
    }
    
    //game3의 스테이지 1
    else if(game3_timer <= 47 && game3_timer > 37) {
      st3 = 1;
      game3_image(game3_nums[st3]);
      game3_text(37);
      game3_info("두 번째 역");
      game3_sound(game3_nums[st3]);
      
      standing(1);
      game3_check(game3_nums[st3]);
    }
    
    else if(game3_timer <= 37 && game3_timer > 35) {
      game3_next(st3);
    }
    
    //game3의 스테이지 2
    else if(game3_timer <=35 && game3_timer > 25) {
      st3 = 2;
      game3_image(game3_nums[st3]);
      game3_text(25);
      game3_info("세 번째 역");
      game3_sound(game3_nums[st3]);
      standing(2);
      game3_check(game3_nums[st3]);
    }
    
    else if(game3_timer <= 25 && game3_timer > 23) {
      game3_next(st3);
    }
    
    //game3의 스테이지 3
    else if(game3_timer <= 23 && game3_timer > 13) {
      st3 = 3;
      game3_image(game3_nums[st3]);
      game3_text(13);
      game3_info("네 번째 역");
      game3_sound(game3_nums[st3]);
      standing(1);
      game3_check(game3_nums[st3]);
    }
    
    else if(game3_timer <=13 && game3_timer > 11) {
      game3_next(st3);
    }
    
    //game3의 스테이지 4
    else if(game3_timer <= 11 && game3_timer > 1) {
      st3 = 4;
      game3_image(game3_nums[st3]);
      game3_text(1);
      game3_info("마지막 역");
      game3_sound(game3_nums[st3]);
      standing(0);
      game3_check(game3_nums[st3]);
    }
    
    //Time Over
    else {
      clearInterval(timerOn);
      game3_playing = true;
      if(game3_playing) {
        game3_sw.stop();
      }
      if (game3_snds[st3].isPlaying()) {
        game3_snds[st3].stop();
      }
      stage3 = 24;
      missionsuc3 = 0;
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
  textFont(nanum1);
  textSize(43);
  textAlign(CENTER);
  text("GAME STAGE", width/2, 130);
  
  /**Game description bg**/ 
  //bg shadow
  fill(100,50); //A kind of darkish grey
  rect(width/2 + 3, 315 + 3, 600, 270, 20);  //Slight offset
  //description bg main
  fill(250);
  rect(width/2, 315, 600, 270, 20);
  //description text
  textFont(best);
  textSize(28);
  fill(65);
  text("‘합정역’에서 내려보자!", width/2, 235);
  //details
  textSize(24);
  textLeading(50);
  fill(85);
  text("* 지하철 창문 밖으로 ‘합정역’이 보이면 내리기 버튼을 눌러주세요.\n* 총 다섯 개의 역 중 합정역은 두 번 나옵니다.\n* 힌트 듣기를 누르면 안내 방송을 명확하게 들을 수 있어요.", width/2, 295);  
}

/*****게임시작 버튼*****/
function game3_start() {
  rectMode(CENTER);
  noStroke();
  if(mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 500 - 25 && mouseY <500 + 25) fill(255, 100, 100);
  else fill(255, 130, 130);
  rect(width/2, 500, 120, 50, 30);
  fill(255);
  textFont(nanum2);
  textSize(28);
  textAlign(CENTER);
  text("START", width/2, 500+10);
  
  if(mouseIsPressed && mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 500 - 25 && mouseY < 500 + 25) {
    stage3 += 1;
    frame = 0;
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
  image(subway_back, 0, 0, width, height);
  image(game3_imgs[n],px[n],-5,800,600);
  px[n] -= 13;
  image(subway_front, 0, 0, width, height);
}

function game3_answershow(n) {
  image(game3_answer[n], 0, 0, 800, 600);
   
}

/*****사운드 플레이, 플레이할 사운드는 n에 숫자 넣어서 선택!*****/
function game3_sound(n) { 
  if(hint != 1) {
    rectMode(CORNER);
    fill(150);
    rect(600, 25, 120, 40, 30);
    fill(0);
    textSize(23);
    textAlign(CENTER);
    textFont(bom);
    text("힌트 소진",660, 53);
  }

    //sound wave (좋지 않은 소리)
  if(hint == 1 || (hint == -3 && (game3_timer == 59 || game3_timer == 47 || game3_timer == 35 || game3_timer == 23 || game3_timer == 11))) {
    game3_playing = false;
  }
  game3_sw.amp(0.01);
  game3_sw.freq(random(20, 50));
  if(!game3_playing) {
    game3_sw.start();
  }
      //밑에 조그맣게 원본 사운드 깔림
  if (!game3_snds[n].isPlaying()) {
    game3_snds[n].amp(0.001);
    game3_snds[n].play();
  }  
  

  if(hint == 1) {
    //힌트 듣기 버튼
    noStroke();
    // fill(143, 212, 255); 
    fill(255, 255, 0);
    rectMode(CORNER);
    rect(600, 25, 120, 40, 30);
    textSize(23);
    textFont(nanum2);
    if(mouseX >= 600 && mouseX <= 720 && mouseY >= 25 && mouseY <=65) fill(255,0,0);
    else fill(0);
    textAlign(CENTER);
    text("힌트 듣기",660, 53);
    if(mouseIsPressed && mouseX >= 600 && mouseX <= 720 && mouseY >= 25 && mouseY <=65) {
      game3_playing = true;
      if(game3_playing) {
        game3_sw.stop();
      }
      hint = -3;
      game3_snds[n].amp(0.2);
    }
  }
}

 
/*****게임 상단 정보 텍스트*****/
function game3_text(n) {
  textAlign(CENTER);
  textFont(best);
  textSize(20);
  fill(85);
  text("남은 시간 : ", width/2 - 10, 120); 
  text((game3_timer - n), width/2 + 43, 120);
}

function game3_info(t) {
  fill(60);
  textFont(best);
  textAlign(CENTER);
  textSize(35);
  text(t, width/2, 60);
}

/*****다음 스테이지로 가는 것 알려주기*****/
function game3_next(n) {
  frame = 0;
  game3_playing = true;
  if(game3_playing) {
      game3_sw.stop();
  }
  if (game3_snds[n].isPlaying()) {
    game3_snds[n].stop();
  }
  game3_answershow(game3_nums[n]);
  fill(255, 200);
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(100);
  textFont(best);
  textAlign(CENTER);
  textSize(35);
  textFont(best);
  text("다음 역으로...", width/2, 55);
}

/*****내리기 버튼*****/
function game3_check(num) {
  rectMode(CENTER);
  noStroke();
  if(mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 500 - 30 && mouseY < 500 + 30)  fill(255, 100, 100);
  else fill(255, 130, 130);
  rect(width/2, 500, 120, 60, 30);
  textFont(nanum2);
  textSize(30);
  fill(255);
  textAlign(CENTER);
  text("내리기", width/2, 500 + 10);
  
  //합정역에서 내린다면 SUCCESS
  if( (mouseIsPressed && mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 500 - 30 && mouseY < 500 + 30) && (num == 0 || num == 4)) {
    clearInterval(timerOn);
    game3_playing = true;
    if(game3_playing) {
      game3_sw.stop();
    }
    if (game3_snds[num].isPlaying()) {
      game3_snds[num].stop();
    }
    missionsuc3 = 1;
    stage3 = 25; //꼭 stage3 숫자 맞춰 변경하기 (플레이테스트 말고 최종때!)
  }
  //그 외의 역에서 내린다면 FAIL
  else if(mouseIsPressed && mouseX >= width/2 - 60 && mouseX < width/2+60 && mouseY >= 500 - 30 && mouseY < 500 + 30) {
    clearInterval(timerOn);
    game3_playing = true;
    if(game3_playing) {
      game3_sw.stop();
    }
    if (game3_snds[num].isPlaying()) {
      game3_snds[num].stop();
    }
    missionsuc3 = 0
    stage3 = 24; //꼭 stage3 숫자 맞춰 변경하기 (플레이테스트 말고 최종때!)
  }
}

/*****게임 실패*****/
function game3_fail() {
  game3_answershow(game3_nums[st3]);
  fill(245, 151, 120, 200);
  rectMode(CORNER);
  rect(200, 70, 400, 100);
  fill(0);
  textSize(30);
  textAlign(CENTER);
  textFont(best);
  text("게임 실패!", width/2, 130);
  allmission();
  next33(26);

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
  game3_answershow(game3_nums[st3]);
  fill(169, 210, 214, 200);
  rectMode(CORNER);
  rect(200, 70, 400, 100);
  fill(0);
  textSize(30);
  textFont(best);
  textAlign(CENTER);
  text("게임 성공!", width/2, 130);
   allmission();
  next33(32);
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

