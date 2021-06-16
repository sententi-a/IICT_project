/*****기존의 functions.js 파일에 있던 3일차 관련 함수들을 여기에 모두 빼왔습니다! functions.js에서는 function back3(a), function twoChoose3(x,y), function next3(s), function next33(s)에 해당하는 블록을 모두 지워주세요!! *****/

/*****꼭 index.html 파일에 import 부탁드립니다!*****/

//3일차 스토리 모음
function story3_0() {
  image(room, 0, 0, width, height);
  rectMode(CORNER);
  fill(255, 180);
  rect(0, 0, width, height);
  push();
  translate(width / 2, height / 2);
  rotate(map(sin(wobble), -0.5, 0.5, -QUARTER_PI / 40, QUARTER_PI / 40));
  image(watch, -400, -300, width, height);
  pop();
  wobble += 0.8;
  allmission();
  next33(1);
}

function story3_1() {
  image(room, 0, 0, width, height);
  back3(0);
  next3(2);
  main_text("오늘은 한번에 깼네.. 애플워치 차고 자길 잘했다..");
  allmission();
}

function story3_2() {
  frame += 0.3;
  image(room, 0, 0, width, height);
  stroke(255);
  strokeWeight(5);
  fill(60);
  textFont(bom);
  textSize(50);
  textAlign(CENTER);
  text("한 시간 후...".substring(0, frame), width / 2, 230);

  if (frame > 10) {
    back3(1);
    next3(3);
    main_text(
      "후.. 다 준비했다.. 선물도 챙겼고..! \n얼굴도 뭐 나쁘지 않고~ 옷도 이 정도면 괜찮네~ 이제 나가보자!"
    );
  }
  allmission();
}

function story3_3() {
  image(road, 0, 0, width, height);
  if (bgmcontrol3 == false) {
    outsoundstr.setVolume(0.2);
    outsoundstr.play();
    bgmcontrol3 = true;
  }

  back3(2);
  next3(4);
  main_text("밖으로 나오니까 이제 실감이 나네.. 너무 설렌다..");
  allmission();
}

function story3_4() {
  image(flowerout, 0, 0, width, height);
  back3(3);
  next3(5);
  main_text(
    "어? 꽃집이잖아? 지은이가 꽃 좋아한다고 했는데...\n오케이.. 한 번 사 보자! 꽃은 다 옳아~"
  );
  allmission();
}

function story3_5() {
  image(flowerin, 0, 0, width, height);
  back3(4);
  next3(6);
  main_text(
    "흠.. 이것도 예쁘고.. 저것도 예쁜데.. 뭘 사야 잘 샀다고 소문이 나려나~"
  );
  allmission();
}

function story3_6() {
  frame += 1;
  image(flowerin, 0, 0, width, height);
  allmission();
  if (frame > 10) {
    push();
    tint(255, frame * 15);
    image(owner, 0, 0, width, height);
    pop();
  }

  if (frame > 20) {
    back3(5);
    conversation3(7);
    con_text3("<사장님>\n @#$&!@#*$&!*#$!");
  }
}

function story3_7() {
  image(flowerin, 0, 0, width, height);
  image(owner, 0, 0, width, height);
  back3(6);
  next3(8);
  main_text(
    "마스크 때문에 무슨 말씀하시는지 하나도 모르겠네.. \n꽃 추천해주시는 것 같긴 한데.."
  );
  allmission();
}

function story3_8() {
  image(flowerin, 0, 0, width, height);
  image(owner, 0, 0, width, height);
  allmission();
  back3(7);
  twoChoose3(9, 15);
  push();
  translate(0, -5);
  main_text("아 어떡하지... 메모장에 써달라고 부탁해볼까..?");

  pop();
  stroke(220, 234, 252);
  strokeWeight(3);
  textFont(best);
  textSize(25);
  if (10 <= mouseX && mouseX <= 460 && 457 <= mouseY && mouseY <= 480) {
    fill(3, 186, 252);
  } else fill(0);
  text("대충 알아들은 척하며 꽃을 사서 후다닥 나간다.", 53, 479);
  if (10 <= mouseX && mouseX <= 640 && 510 <= mouseY && mouseY <= 540) {
    fill(3, 186, 252);
  } else fill(0);
  text(
    "사장님께 양해를 구하며 방금 한 말을 메모장에 써달라고 부탁한다.",
    53,
    532
  );
}

function story3_9() {
  image(flowerin, 0, 0, width, height);
  image(owner, 0, 0, width, height);
  back3(8);
  next3(10);
  main_text("에잇! 몰라.. 그냥 예쁜 거 아무거나 사자! 그냥 다 똑같겠지 뭐~");
  allmission();
}

function story3_10() {
  image(flowerin, 0, 0, width, height);
  frame += 1;

  image(owner, 0, 0, width, height);
  back3(9);
  conversation3(11);
  con_text3(
    "< 나 >\n아.. 네네 ㅎㅎ.. 그냥 저기 두 번째 줄에 있는 보라색 꽃으로 주세요..! \n저게 제일 예쁘네요..ㅎㅎ"
  );
  allmission();
}

function story3_11() {
  image(flowerin, 0, 0, width, height);
  frame += 1;
  allmission();
  if (frame > 5) {
    image(flower1, 0, flower1_h, width, height);
    flower1_h += speed3;
  }

  if (frame >= 20) {
    flower1_h = -50;
  }

  if (frame > 30) {
    explain3(12);
    ex_text3("아네모네를 얻었다!");
    back3(10);
  }
}

function story3_12() {
  image(road, 0, 0, width, height);
  back3(11);
  next3(13);
  main_text(
    "그래도 꽃 사니까 기분이 좋네 ㅎㅎ 지은이도 좋아하겠지? \n이제 얼굴 볼 일만 남았네~~ 얼른 지하철 타고 가야겠다!"
  );
  allmission();
}

function story3_13() {
  image(flowerin, 0, 0, width, height);
  frame += 0.3;
  image(owner, 0, 0, width, height);
  stroke(255);
  strokeWeight(5);
  fill(60);
  textFont(bom);
  textSize(35);
  textAlign(CENTER);
  text("그 시각 꽃집 사장님은...".substring(0, frame), width / 2, 110);

  if (frame > 20) {
    back3(12);
    conversation3(14);
    con_text3(
      "<사장님> \n이상하네.. 분명 애인한테 주는 것 같았는데 아네모네를 고른다고?"
    );
  }
  allmission();
}

function story3_14() {
  image(flowerin, 0, 0, width, height);
  anemone = true;
  back3(13);
  explain3(20);
  ex_text3("그렇다.. 아네모네의 꽃말은 ‘덧없는 사랑’이었던 것이다..."); //가운데 정렬
  allmission();
}

function story3_15() {
  image(flowerin, 0, 0, width, height);
  image(owner, 0, 0, width, height);
  frame = frame + 1;
  if (frame > 5) {
    image(memo, 204, memo_h, 392, 700);
    memo_h -= speed3;
    speed3 -= 0.1;
  }

  if (frame > 30) {
    memo_h = 100;
  }

  if (50 <= frame) {
    conversation3(16);
    back3(8);
    con_text3(
      "< 나 >\n제가 귀가 잘 안 들려서 그런데.. \n혹시 방금 하셨던 말씀 여기에 적어주실 수 있나요?"
    );
  }
  allmission();
}

function story3_16() {
  image(flowerin, 0, 0, width, height);
  image(owner, 0, 0, width, height);
  frame = frame + 1;
  if (frame > 5) {
    image(memo, 204, memo_h - 600, 392, 700);
    phone_text(
      "그럼요! \n애인한테 줄 꽃 찾는 것 같아서 \n빨간 튤립 추천해주려고 했어요~ \n꽃말이 사랑의 고백이거든요~",
      260,
      memo_h - 460
    );
    memo_h += speed3;
    speed3 -= 0.1;
  }

  if (frame > 30) {
    memo_h = 600;
  }

  if (50 <= frame) {
    back3(15);
    next3(17);
    main_text("아~ 이런 얘기였구나!! 역시 부탁하길 잘했어!!");
  }
  allmission();
}

function story3_17() {
  image(flowerin, 0, 0, width, height);
  frame += 1;
  image(owner, 0, 0, width, height);
  conversation3(18);
  back3(16);
  con_text3("< 나 >\n그러면 빨간 튤립으로 주세요! 감사합니다 ㅎㅎ");
  allmission();
}

function story3_18() {
  image(flowerin, 0, 0, width, height);
  frame += 1;
  if (frame > 5) {
    image(flower2, 0, flower2_h, width, height);
    flower2_h += speed3;
  }

  if (frame >= 20) {
    flower2_h = -70;
  }

  if (frame > 30) {
    explain3(19);
    noStroke();
    ex_text3("빨간 튤립을 얻었다!");
    back3(17);
  }
  allmission();
}

function story3_19() {
  image(road, 0, 0, width, height);
  next3(20);
  back3(18);
  main_text(
    "예쁘다..ㅎㅎ 꽃말도 좋고.. 지은이가 좋아하겠지? \n이제 지하철만 타면 본다니.. 떨려.."
  );
  allmission();
}

function story3_20() {
  if (bgmcontrol4 == false) {
    insoundout.setVolume(0.5);
    insoundout.play();
    bgmcontrol4 = true;
  }

  outsoundstr.stop();
  outsoundlast.stop();
  outsoundout.stop();

  image(station_m, 0, 0, width, height);
  frame += 0.3;
  stroke(255);
  strokeWeight(5);
  fill(68, 149, 242);
  textFont(bom);
  textSize(50);
  textAlign(CENTER);
  text("지하철 안".substring(0, frame), width / 2, 230);

  if (frame > 10) {
    next3(21);
    main_text("주말이라 그런가..? 사람이 점점 많아지네..");
  }
  allmission();
}

function story3_21() {
  image(station_m, 0, 0, width, height);
  next3(22);
  main_text(
    "흠... 이러면 이따 안내 화면도 안 보일 것 같은데? \n불길하네... 나 잘 내릴 수 있을까..?"
  );
  back3(20);
  allmission();
}

function story3_26() {
  //게임 실패 후
  frame += 1;
  outsoundlast.stop();

  if (bgmcontrol5 == false) {
    parksound.playMode("restart");
    parksound.setVolume(0.15);
    parksound.play();
    bgmcontrol5 = true;
  }

  image(forest, 0, 0, 800, 600);
  allmission();
  if (frame > 10) {
    push();
    translate(300, 100);
    rotate(radians(40));
    tint(255, frame * 15);
    image(sweat, 40, 0, 150, 190);
    pop();
    push();
    translate(350, 170);
    rotate(radians(-20));
    tint(255, frame * 15);
    image(sweat, 5, 40, 115, 135);
    pop();
  }

  if (frame > 20) {
    conversation3(27);
    con_text3("< 나 > \n헉헉.. ");
  }
}

function story3_27() {
  image(forest, 0, 0, 800, 600);
  next3(28);
  main_text("일찍 나왔으니 망정이지 하마터면 못 만날 뻔했네.. 휴..");
  back3(26);
  allmission();
}

function story3_28() {
  frame += 1;
  image(forest, 0, 0, 800, 600);

  allmission();
  if (frame > 10) {
    // noStroke();
    stroke(255);
    strokeWeight(3);
    textFont(bom);
    fill(255, 100, 100);
    textAlign(CENTER);
    textSize(130);
    text("....?".substring(0, frame / 5), width / 2, 250);
  }

  if (frame > 30) {
    next3(29);
    main_text("어? 뭐야.. 꽃 어디갔어..?");
    back3(27);
  }
}

function story3_29() {
  frame += 1;

  image(forest, 0, 0, 800, 600);
  allmission();
  if (frame > 10) {
    stroke(255);
    strokeWeight(3);
    textFont(bom);
    fill(255, 70, 70);
    textAlign(CENTER);
    textSize(130);
    text("....!!!!!".substring(0, frame / 3), width / 2, 250);
  }

  if (frame > 30) {
    next3(30);
    main_text("헐!! 없잖아??? 지하철에 놓고 내렸나??");
    back3(28);
  }
}

function story3_30() {
  image(forest, 0, 0, 800, 600);
  allmission();
  frame += 1;
  flowerfade -= speed;
  speed += 20;

  if (anemone) {
    push();
    tint(255, flowerfade);
    image(flower1, 0, -30, width, height);
    pop();
  }

  if (tulip) {
    push();
    tint(255, flowerfade);
    image(flower2, 0, -30, width, height);
    pop();
  }

  if (frame > 5) {
    next3(31);
    main_text(
      "하씨.. 아니야.. 괜찮아.. \n꽃 줬으면 부담스러웠을 수도 있어.. 그래.."
    );
    back3(29);
  }
}

function story3_31() {
  image(forest, 0, 0, 800, 600);
  next3(34);
  main_text("에휴 일단 도착했다고 카톡 먼저 보내자..");
  back3(30);
  allmission();
}

function story3_32() {
  //게임 성공 후

  if (bgmcontrol5 == false) {
    parksound.playMode("restart");
    parksound.setVolume(0.15);

    parksound.play();
    bgmcontrol5 = true;
  }

  image(forest, 0, 0, 800, 600);
  next3(33);
  main_text("휴.. 다행히 잘 내렸다! 지은이는 잘 오고 있겠지?");
  allmission();
}

function story3_33() {
  image(forest, 0, 0, 800, 600);
  next3(34);
  main_text("설렌다..ㅎㅎ 일단 카톡 보내놓고 기다리자..!");
  back3(32);
  allmission();
}

function story3_34() {
  image(forest, 0, 0, 800, 600);
  frame = frame + 1;
  if (frame > 5) {
    image(kakao1, 204, memo_h, 392, 700);
    memo_h -= speed3;
    speed3 -= 0.1;
  }

  if (frame > 30) {
    memo_h = 100;
  }

  if (frame > 40) {
    image(mb, 310, memo_h + 160, 250, 100);
    phone_text("지은아 나 도착했어~", 325, memo_h + 205);
    phone_text("기다리고 있을게!", 325, memo_h + 242);
  }

  if (frame > 50) {
    next33(35);
    back3(33);
  }
  allmission();
}

function story3_35() {
  if (bgmcontrol6 == false) {
    parksoundout.setVolume(0.5);

    parksoundout.play();
    bgmcontrol6 = true;
  }

  parksound.stop();

  frame += 1;
  image(forest, 0, 0, 800, 600);
  allmission();
  if (frame > 10) {
    push();
    tint(255, frame * 15);
    image(girlwalk, girlx, girly, width, height);
    pop();
    girlx -= 0.2;
    girly += 0.1;
  }
  if (frame > 30) {
    girlx = -4;
    girly = 2;
  }

  if (frame > 35) {
    next3(36);
    main_text("어? 지은인가..?");
    back3(34);
  }
}

function story3_36() {
  image(forest, 0, 0, 800, 600);
  allmission();
  image(girlwalk, girlx, girly, width, height);
  girlx -= 0.1;
  girly += 0.05;
  frame = frame + 1;
  if (frame <= 50) {
    strokeWeight(20);
    stroke(255, 255, 0);
    if (frame >= 0) {
      line(width / 2 - 100, 520, width / 2 - 160, 430);
    }
    if (frame >= 10) {
      line(width / 2, 500, width / 2, 400);
    }

    if (frame >= 20) {
      line(width / 2 + 100, 520, width / 2 + 160, 430);
    }
  }
  if (frame > 50) {
    image(kakao1, 204, memo_h, 392, 700);
    memo_h -= speed3;
    speed3 -= 0.1;
  }

  if (frame > 75) {
    memo_h = 100;
  }

  if (frame > 85) {
    image(yb, 235, memo_h + 160, 250, 100);
    phone_text("안녕?ㅎㅎ", 300, memo_h + 205);
  }

  if (frame > 95) {
    girlx = -16;
    girly = 10;
    next33(37);
    back3(35);
  }
}

function story3_37() {
  frame += 1;
  image(forest, 0, 0, 800, 600);
  allmission();
  push();
  tint(255, frame * 20);
  image(girl, 0, 0, width, height);
  pop();
  //지은이 얼굴 크게 !
  if (frame > 7) {
    back3(36);
    next33(38); //에필로그 보러 가기 !
  }
}

function conversation3(s) {
  frame = frame + 1;
  noStroke();
  fill(255, 230, 232, 180);
  rectMode(CORNER);
  rect(0, 400, 800, 150);
  if (30 <= frame) {
    noStroke();
    textSize(30);
    textFont(best);
    if (700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      fill(255, 163, 182);
    } else fill(0);
    textAlign(LEFT);
    text(">>NEXT", 710, 535);
    if (
      mouseIsPressed &&
      700 <= mouseX &&
      mouseX <= 800 &&
      510 <= mouseY &&
      mouseY <= 545
    ) {
      stage3 = s;
      frame = 0;
      memo_h = 350;
      flower1_h = -200;
      flower2_h = -200;
      speed3 = 10;
      girlx = 0;
      girly = 0;
    }
  }
}

function con_text3(t) {
  stroke(255, 245, 246);
  strokeWeight(2);
  fill(0);
  textAlign(LEFT);
  textFont(best);
  textSize(27);
  text(t, 15, 437);
}

function explain3(s) {
  frame = frame + 1;
  noStroke();
  fill(180, 180);
  rectMode(CORNER);
  rect(0, 400, 800, 150);

  if (30 <= frame) {
    textSize(30);
    textFont(best);
    if (700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      fill(255, 80, 80);
    } else fill(0);
    textAlign(LEFT);
    text(">>NEXT", 710, 535);
    if (
      mouseIsPressed &&
      700 <= mouseX &&
      mouseX <= 800 &&
      510 <= mouseY &&
      mouseY <= 545
    ) {
      stage3 = s;
      frame = 0;
      memo_h = 350;
      flower1_h = -200;
      flower2_h = -200;
      girlx = 0;
      girly = 0;
    }
  }
}

function ex_text3(t) {
  noStroke();
  stroke(230);
  strokeWeight(2);
  fill(0);
  textAlign(LEFT);
  textFont(best);
  textSize(27);
  text(t, 15, 437);
}

//이전 단계로 돌아갈 수 있게 해줍니다. 이전 단계의 stage를 a에 넣어줍니다.
function back3(a) {
  frame = frame + 1;
  if (30 <= frame) {
    noStroke();
    textSize(20);
    textFont(best);
    if (4 <= mouseX && mouseX <= 54 && 0 <= mouseY && mouseY <= 30) {
      fill(245, 87, 66);
    } else {
      fill(0);
    }
    textAlign(LEFT);
    text("뒤로<<", 10, 30);
    if (
      mouseIsPressed &&
      4 <= mouseX &&
      mouseX <= 54 &&
      0 <= mouseY &&
      mouseY <= 30
    ) {
      stage3 = a;
      frame = 0;
      memo_h = 350;
      flower1_h = -200;
      flower2_h = -200;
      speed3 = 10;
      girlx = 0;
      girly = 0;
      if (stage3 == 9) {
        anemone = false;
        tulip = false;
      }
    }
  }
}
function next3(s) {
  frame = frame + 1;
  noStroke();
  fill(182, 209, 240, 180);
  rectMode(CORNER);
  rect(0, 400, 800, 150);
  if (30 <= frame) {
    noStroke();
    textSize(30);
    textFont(best);
    if (700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      fill(3, 186, 252);
    } else fill(0);
    textAlign(LEFT);
    text(">>NEXT", 710, 535);
    if (
      mouseIsPressed &&
      700 <= mouseX &&
      mouseX <= 800 &&
      510 <= mouseY &&
      mouseY <= 545
    ) {
      stage3 = s;
      frame = 0;
      memo_h = 350;
      flower1_h = -200;
      flower2_h = -200;
      speed3 = 10;
    }
  }
}

function twoChoose3(x, y) {
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
  if (30 <= frame) {
    noStroke();
    textSize(20);
    textAlign(LEFT);
    textFont(bom);
    if (10 <= mouseX && mouseX <= 460 && 457 <= mouseY && mouseY <= 480) {
      fill(3, 186, 252);
    } else fill(250);
    text("1", 21, 478);
    if (10 <= mouseX && mouseX <= 640 && 510 <= mouseY && mouseY <= 540) {
      fill(3, 186, 252);
    } else fill(250);
    text("2", 19, 532);

    if (
      mouseIsPressed &&
      10 <= mouseX &&
      mouseX <= 460 &&
      457 <= mouseY &&
      mouseY <= 480
    ) {
      stage3 = x;
      frame = 0;
      memo_h = 350;
      flower1_h = -200;
      flower2_h = -200;
      speed3 = 10;
      girlx = 0;
      girly = 0;
      anemone = true;
    }
    if (
      mouseIsPressed &&
      10 <= mouseX &&
      mouseX <= 640 &&
      510 <= mouseY &&
      mouseY <= 540
    ) {
      stage3 = y;
      frame = 0;
      memo_h = 350;
      flower1_h = -200;
      flower2_h = -200;
      speed3 = 10;
      girlx = 0;
      girly = 0;
      tulip = true;
    }
  }
}

function next33(s) {
  frame = frame + 1;
  noStroke();
  if (30 <= frame) {
    noStroke();
    textSize(30);
    textFont(best);
    if (700 <= mouseX && mouseX <= 800 && 510 <= mouseY && mouseY <= 545) {
      fill(3, 186, 252);
    } else fill(0);
    textAlign(LEFT);
    text(">>NEXT", 710, 535);
    if (
      mouseIsPressed &&
      700 <= mouseX &&
      mouseX <= 800 &&
      510 <= mouseY &&
      mouseY <= 545
    ) {
      stage3 = s;
      frame = 0;
      memo_h = 350;
      flower1_h = -200;
      flower2_h = -200;
      speed3 = 10;
      girlx = 0;
      girly = 0;
    }
  }
}
