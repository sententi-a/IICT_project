let stage0 = 0;
let stage1 = 0;
let stage2 = 0;
let stage3 = 0;
let frame = 0;
let days = 0;
let bom, room;
let ear = 0;
let late = 0;

let hint = 1;

let insoundstr;
let insoundlast;
let outsoundstr;
let outsoundlast;
let outsoundout;
let insoundout;
let parksound;
let parksoundout;
let endingsound;
let testsound;

let bgmcontrol1 = false;
let bgmcontrol2 = false;
let bgmcontrol3 = false;
let bgmcontrol4 = false;
let bgmcontrol5 = false;
let bgmcontrol6 = false;
let bgmcontrol7 = false;
let volumecontrol1;
let volumeAmount;

//오프닝
let phone = 500;
let speed = 10;

//1일차
let input;
let button;
let mySound1;
let mySound2;
let mySound3;
let mySound4;
let mySound5;
let actCreated = false;
let hintSound;
let computer;
let arscellphone;
let fade = 200;
let fadeAmount = 1;
let arr = [6, 8, 10, 12, 14];
let randomStage;
let doorclose;
let dooropen;
let giftfail;
let giftsuc;
let moviefail;
let moviesuc;
let flowerfail;
let flowersuc;
let missionsuc1 = 0;
let missionsuc2 = 0;
let missionsuc3 = 0;

//2일차
let input2, button2;
let myMovie1, myMovie2, myMovie3, myMovie4;
let movieCreated = false;
let mvSound1, mvSound2, mvSound3, mvSound4;
let day2game = 0;
let parasites = [];
//3일차
/*****폰트*****/
let nanum1;
let nanum2;
//이미지
let station_m;
let park;
let watch;
let flowerin;
let flowerout;
let owner;
let memo;
let flower1;
let flower2;
let subway_back;
let subway_front;
let game3_ex;
let sweat;
let rperson = [];
let lperson = [];
let girl;
let girlwalk;
let road;
let man = []; //지하철에 서있는 사람들
//속도 및 위치 제어 변수
let wobble = 0;
let wobble1 = 0;
let wobble2 = 0;
let wobble3 = 0;
let wobble4 = 0;
let wobble5 = 0;
let wobble6 = 0;
let memo_h = 350;
let flower1_h = -100;
let flower2_h = -100;
let speed3 = 10;
let frame3 = 0;
let flowerfade = 255;
let flowerspeed = 10;
let girlx = 0;
let girly = 0;
//꽃 선택시 달라지는 변수
let anemone = false;
let tulip = false;

/***** 3일차 게임을 위한 변수들! *****/
let start_timer = 3; //start 카운트다운 초
let game3_timer = 63; //게임 총 소요시간
let game3_trigger = 1; //start 카운트다운 후 게임 스테이지 시작하게 만들 변수
let timerOn;
let px = [4200, 4400, 4350, 4480, 4400]; //역이름 위치

let game3_imgs = []; //게임에 쓰일 이미지 모음
let game3_sw; //sound wave
let game3_playing = false; //sound wave 관리
let game3_snds = []; //게임에 쓰일 사운드 모음
let game3_answer = [];

let game3_stages = 5; //게임 스테이지 개수
let st3 = 0; //game stage 번호
let game3_nums = []; //이미지/사운드 번호 (랜덤)

function preload() {
  //서로 공유하는 에셋들
  bom = loadFont("assets/font/DXBSuB-KSCpc-EUC-H.ttf");
  best = loadFont("assets/font/OdBestFreind.ttf");
  nanum1 = loadFont("assets/font/NanumBarunGothicBold.ttf");
  nanum2 = loadFont("assets/font/NanumBarunGothic.ttf");
  nanum3 = loadFont("assets/font/NanumBarunGothicLight.ttf");
  han = loadFont("assets/font/한겨레결체.TTF");

  room = loadImage("assets/image/room.jpg");
  kakao1 = loadImage("assets/image/kakao1.png");
  ys = loadImage("assets/image/chat_ys.png");
  yb = loadImage("assets/image/chat_yb.png");
  mb = loadImage("assets/image/chat_mb.png");
  ms = loadImage("assets/image/chat_ms.png");
  opening = loadImage("assets/image/opening.PNG");
  forest = loadImage("assets/image/forest.JPG");
  title = loadImage("assets/image/title.PNG");
  earphone = loadImage("assets/image/earphone.PNG");

  insoundstr = loadSound("assets/background/실내웅성도입.mp3");
  insoundlast = loadSound("assets/background/실내웅성유지.mp3");
  outsoundstr = loadSound("assets/background/실외웅성도입.mp3");
  outsoundlast = loadSound("assets/background/실외웅성유지.mp3");
  outsoundout = loadSound("assets/background/실외아웃.mp3");
  insoundout = loadSound("assets/background/실내아웃.mp3");
  parksound = loadSound("assets/background/공원소리.mp3");
  parksoundout = loadSound("assets/background/공원소리아웃.mp3");
  endingsound = loadSound("assets/background/엔딩.mp3");
  testsound = loadSound("assets/background/테스트.mp3");
  //1일차
  computer = loadImage("assets1/image/computer.jpg");
  arscellphone = loadImage("assets1/image/ars.png");
  mySound1 = loadSound("assets1/sound/인증34.mp3");
  mySound2 = loadSound("assets1/sound/인증73.mp3");
  mySound3 = loadSound("assets1/sound/인증91.mp3");
  mySound4 = loadSound("assets1/sound/인증62.mp3");
  mySound5 = loadSound("assets1/sound/인증83.mp3");
  hintSound1 = loadSound("assets1/sound/힌트34.mp3");
  hintSound2 = loadSound("assets1/sound/힌트73.mp3");
  hintSound3 = loadSound("assets1/sound/힌트91.mp3");
  hintSound4 = loadSound("assets1/sound/힌트62.mp3");
  hintSound5 = loadSound("assets1/sound/힌트83.mp3");
  doorcloseOff = loadImage("assets1/image/doorcloseOff.jpg");
  doorcloseOn = loadImage("assets1/image/doorcloseOn.jpg");
  dooropenOn = loadImage("assets1/image/dooropenOn.jpg");
  dooropenOff = loadImage("assets1/image/dooropenOff.jpg");

  giftfail = loadImage("assets1/image/giftfail.png");
  giftsuc = loadImage("assets1/image/giftsuc.png");
  moviefail = loadImage("assets1/image/moviefail.png");
  moviesuc = loadImage("assets1/image/moviesuc.png");
  flowerfail = loadImage("assets1/image/flowerfail.png");
  flowersuc = loadImage("assets1/image/flowersuc.png");

  //2일차
  cinema = loadImage("assets2/image/cinema.jpg");
  ticketbox = loadImage("assets2/image/ticketbox.jpg");
  mall = loadImage("assets2/image/mall.JPG");
  timetable = loadImage("assets2/image/timetable.jpg");
  barrier = loadImage("assets2/image/barrier.png");

  /* 이 부분 꼭 추가해주셔야 합니다!! */
  //2일차 소게임 관련 파일 (mvsound 3,4 추가)
  mvSound1 = loadSound("assets2/sound/hintsound1.wav");
  mvSound2 = loadSound("assets2/sound/hintsound2.wav");
  mvSound3 = loadSound("assets2/sound/hintsound3.wav");
  mvSound4 = loadSound("assets2/sound/hintsound4.wav");

  //2일차
  /******* 2일차 setup 에 많이 추가했어요!*********/
  //stage 2 게임입력창
  input2 = createInput();
  input2.position(300, 465);
  input2.size(200, 30);
  input2.hide();

  //stage 2 게임 확인 버튼
  button2 = createButton("확인", "button");
  button2.position(input2.x + input2.width, input2.y);
  button2.size(50, 38);
  button2.hide();

  //stage 2 영화1 기생충 송강호
  myMovie1 = createVideo("assets2/sound/movie1.mp4");
  myMovie1.position(200, 100);
  myMovie1.size(480, 360);
  myMovie1.volume(1);
  myMovie1.hide();

  //stage 2 영화2 기생충 최우식
  myMovie2 = createVideo("assets2/sound/movie2.mp4");
  myMovie2.position(200, 100);
  myMovie2.size(480, 360);
  myMovie2.volume(1);
  myMovie2.hide();

  //영화추가한부분
  //stage 2 영화3 연애의온도 김민희
  myMovie3 = createVideo("assets2/sound/movie3.mp4");
  myMovie3.position(200, 100);
  myMovie3.size(480, 360);
  myMovie3.volume(1);
  myMovie3.hide();

  //stage 2 영화4 암살 이정재
  myMovie4 = createVideo("assets2/sound/movie4.mp4");
  myMovie4.position(200, 100);
  myMovie4.size(480, 360);
  myMovie4.volume(1);
  myMovie4.hide();

  //3일차
  park = loadImage("assets3/image/park.jpg");
  station_m = loadImage("assets3/image/subway.jpg");
  watch = loadImage("assets3/image/watch.png");
  flowerin = loadImage("assets3/image/flowerin.JPG");
  flowerout = loadImage("assets3/image/flowerout.JPG");
  owner = loadImage("assets3/image/owner.PNG");
  memo = loadImage("assets3/image/memo.png");
  flower1 = loadImage("assets3/image/flower1.png");
  flower2 = loadImage("assets3/image/flower2.png");
  subway_back = loadImage("assets3/image/station_back.png");
  subway_front = loadImage("assets3/image/subway_front.png");
  game3_ex = loadImage("assets3/image/game3_example.png");
  sweat = loadImage("assets3/image/sweat.png");
  girl = loadImage("assets3/image/girl.PNG");
  girlwalk = loadImage("assets3/image/girlwalk.PNG");
  road = loadImage("assets3/image/road.png");
  //게임3 사운드
  game3_sw = new p5.Oscillator();
  game3_sw.setType("triangle");

  /*****밑은 싹 다 복붙 부탁드려요~ */
  for (let i = 0; i < game3_stages; i++) {
    game3_imgs[i] = loadImage("assets3/image/station_name" + i + ".png");
    game3_answer[i] = loadImage("assets3/image/station" + i + ".png");
    game3_snds[i] = loadSound("assets3/sound/station_announce" + i + ".mp3");
  }
  for (let i = 0; i < 8; i++) {
    man[i] = loadImage("assets3/image/man" + (i + 1) + ".png");
  }
  for (let i = 0; i < 9; i++) {
    rperson[i] = loadImage("assets3/image/rperson" + (i + 1) + ".png");
  }
  for (let i = 0; i < 7; i++) {
    lperson[i] = loadImage("assets3/image/lperson" + (i + 1) + ".png");
  }
}

function setup() {
  //1일차
  createCanvas(800, 600);
  fadetime = 0;

  //2일차
  /******* 2일차 setup 에 많이 추가했어요!*********/
  //stage 2 게임입력창
  input2 = createInput();
  input2.position(300, 465);
  input2.size(200, 30);
  input2.hide();

  //stage 2 게임 확인 버튼
  button2 = createButton("확인");
  button2.position(input2.x + input2.width, input2.y);
  button2.size(50, 38);
  button2.hide();

  //stage 2 영화
  myMovie1 = createVideo("assets2/sound/movie1.mp4");
  myMovie1.position(200, 100);
  myMovie1.size(480, 360);
  myMovie1.volume(1);
  myMovie1.hide();

  //3일차
  for (let i = 0; i < game3_stages; i++) {
    game3_nums[i] = int(random(5));
    for (let j = 0; j < i; j++) {
      if (game3_nums[i] == game3_nums[j]) {
        i--;
        break;
      }
    }
  }
}

function draw() {
  background(220);
  switch (days) {
    case 0:
      switch (stage0) {
        case 0:
          image(forest, 0, 0, 800, 600);
          fill(255, 100);
          rect(0, 0, 800, 600);
          noStroke();
          fill(182, 209, 240, 180);
          rect(0, 450, 800, 100);
          image(earphone, 10, 0, 800, 600);
          image(title, 0, 0, 800, 600);
          frame = frame + 1;

          noStroke();
          fill(0);
          textFont(best);
          textSize(15);
          text(
            "본 게임은 청각장애인의 일상생활 불편함을 담은 연애 시뮬레이션 게임으로 내용과 상황이 실제와 다를 수 있습니다.",
            115,
            590
          );

          textSize(40);
          textFont(best);
          if (
            315 <= mouseX &&
            mouseX <= 505 &&
            490 <= mouseY &&
            mouseY <= 530
          ) {
            noStroke();
            fill(3, 186, 252);
          } else if (frame % 50 < 25 && frame % 50 > 0) {
            stroke(129, 196, 240);
            strokeWeight(2.5);
            fill(255);
          } else fill(0);
          stroke(129, 196, 240);
          strokeWeight(2.5);
          text("GAME START!", 315, 520);

          if (
            mouseIsPressed &&
            315 <= mouseX &&
            mouseX <= 505 &&
            490 <= mouseY &&
            mouseY <= 530
          ) {
            stage0 = 1;
            frame = 0;
          }

          //소리테스트 버튼
          noStroke();
          fill(168, 216, 247);
          rectMode(CORNER);
          rect(650, 25, 120, 40, 30);
          textSize(20);
          textFont(nanum2);

          textSize(11);
          fill(0);
          text("볼륨을 최대로 하고", 668, 77);
          text("소리를 확인해주세요", 665, 90);

          textSize(20);
          if (mouseX >= 650 && mouseX <= 770 && mouseY >= 25 && mouseY <= 65)
            fill(12, 146, 235);
          else fill(0);
          text("음성테스트", 665, 52);

          if (
            mouseIsPressed &&
            mouseX >= 650 &&
            mouseX <= 770 &&
            mouseY >= 25 &&
            mouseY <= 65
          ) {
            testsound.setVolume(0.002);
            testsound.play();
          }

          break;
        case 1:
          image(room, 0, 0, 800, 600);
          back0(0);
          frame = frame + 1;
          if (frame > 50) {
            if (phone > 70) {
              phone = phone - speed;
              speed = speed - 0.1;
            } else {
              phone = 70;
            }
            image(kakao1, 204, phone, 392, 700);
          }
          if (150 <= frame) {
            next0(16);
            main_text("널 알게 된 지 벌써 세 달째.");
            push();
            translate(0, 40);
            main_text("우리는 한 채팅 어플에서 처음 만났다.");
            pop();
          }
          break;
        case 2:
          image(room, 0, 0, 800, 600);
          image(kakao1, 204, 70, 392, 700);
          fill(0);
          noStroke();
          textFont(best);
          textSize(25);
          if (frame > 100 && frame < 550) {
            image(ys, 235, 230, 250, 62.5);
            phone_text("잘 잤어?", 300, 275);
          }
          if (frame > 250 && frame < 550) {
            image(mb, 360, 310, 200, 100);
            phone_text("알람을 못 들어서", 375, 350);
            phone_text("늦잠 자 버렸어..ㅠㅠ", 375, 390);
          }
          if (frame > 400 && frame < 550) {
            image(yb, 235, 425, 250, 100);
            phone_text("진짜? 내가 모닝콜", 300, 470);
            phone_text("해줄 수 있는데...", 300, 510);
          }
          if (frame > 550) {
            image(yb, 235, 230, 250, 100);
            phone_text("아직도 전화는 조금", 300, 275);
            phone_text("불편해..?", 300, 312);
          }
          frame = frame + 1;
          if (700 <= frame) {
            next0(3);
            main_text("그런 너는 아직 내가 청각장애인이라는 사실을 모른다.");
          }
          back0(18);
          break;
        case 3:
          image(room, 0, 0, 800, 600);
          image(kakao1, 204, 70, 392, 700);
          image(yb, 235, 230, 250, 100);
          fill(0);
          textFont(best);
          textSize(25);
          phone_text("아직도 전화는 조금", 300, 275);
          phone_text("불편해..?", 300, 312);
          twoChoose0(4, 5);
          push();
          translate(0, -5);
          main_text("너에게 내가 전화를 받지 못하는 이유를 사실대로 말할까?");
          pop();
          stroke(220, 234, 252);
          strokeWeight(3);
          textFont(best);
          textSize(27);
          textSize(25);
          if (10 <= mouseX && mouseX <= 400 && 457 <= mouseY && mouseY <= 505) {
            fill(3, 186, 252);
          } else fill(0);
          text("전화는 아직 어색할 것 같다고 말한다.", 53, 479);
          if (10 <= mouseX && mouseX <= 400 && 510 <= mouseY && mouseY <= 540) {
            fill(3, 186, 252);
          } else fill(0);
          text("귀가 들리지 않는다고 솔직하게 말한다.", 53, 532);
          ear = 0;
          back0(2);
          break;

        case 4:
          image(room, 0, 0, 800, 600);
          frame = frame + 1;
          image(kakao1, 204, 70, 392, 700);
          fill(0);
          textFont(best);
          textSize(25);
          if (0 < frame) {
            image(yb, 235, 230, 250, 100);
            phone_text("아직도 전화는 조금", 300, 275);
            phone_text("불편해..?", 300, 312);
          }
          if (50 < frame) {
            image(mb, 310, 350, 250, 100);
            phone_text("응.. 아직 전화는 조금", 325, 390);
            phone_text("어색할 것 같아..", 325, 430);
          }
          if (frame > 150) {
            image(ms, 310, 460, 250, 50);
            phone_text("미안..", 325, 495);
          }
          if (frame > 250) {
            next0(6);
            main_text("너에게 거짓말을 해버렸다..", 15, 435);
          }
          ear = 0;
          back0(3);
          break;
        case 5:
          image(room, 0, 0, 800, 600);
          frame = frame + 1;
          image(kakao1, 204, 70, 392, 700);
          fill(0);
          textFont(best);
          textSize(25);
          if (0 < frame && frame < 250) {
            image(yb, 235, 230, 250, 100);
            phone_text("아직도 전화는 조금", 300, 275);
            phone_text("불편해..?", 300, 312);
          }
          if (50 < frame && frame < 250) {
            image(mb, 310, 350, 250, 100);
            phone_text("사실 나는 태어날 때부터", 325, 390);
            phone_text("귀가 안 들려서..", 325, 430);
          }
          if (frame > 150 && frame < 250) {
            image(ms, 310, 460, 250, 50);
            phone_text("전화를 받기가 어려워.", 325, 495);
          }
          if (frame > 250) {
            image(mb, 310, 230, 250, 100);
            phone_text("늦게 말해줘서", 325, 275);
            phone_text("미안..", 325, 312);
          }
          if (frame > 350) {
            next0(7);
            main_text("너에게 사실대로 말해버렸다..", 15, 435);
          }
          ear = 1;
          back0(3);
          break;
        case 6:
          image(room, 0, 0, 800, 600);
          frame = frame + 1;
          image(kakao1, 204, 70, 392, 700);
          if (frame > 50) {
            image(yb, 235, 230, 250, 100);
            phone_text("그렇구나..ㅠ", 300, 275);
            phone_text("어쩔 수 없지ㅠ", 300, 312);
          }
          if (frame > 150) {
            next0(8);
            main_text("다행히 너는 이해해준다.", 15, 435);
          }
          back0(4);

          break;
        case 7:
          image(room, 0, 0, 800, 600);
          frame = frame + 1;
          image(kakao1, 204, 70, 392, 700);
          image(mb, 310, 230, 250, 100);
          phone_text("늦게 말해줘서", 325, 275);
          phone_text("미안..", 325, 312);
          if (50 < frame) {
            image(ys, 235, 350, 250, 62.5);
            phone_text("미안하긴..!", 300, 396);
          }
          if (150 < frame) {
            image(yb, 235, 420, 250, 100);
            phone_text("지금이라도", 300, 465);
            phone_text("얘기해줘서 고마워.", 300, 505);
          }

          if (250 < frame) {
            next0(9);
            main_text("너는 여전히 내게 상냥하다.");
          }
          back0(5);
          break;
        case 8:
          image(room, 0, 0, 800, 600);
          frame = frame + 1;
          image(kakao1, 204, 70, 392, 700);
          image(yb, 235, 230, 250, 100);
          phone_text("그렇구나..ㅠ", 300, 275);
          phone_text("어쩔 수 없지ㅠ", 300, 312);
          if (50 < frame) {
            image(yb, 235, 340, 250, 100);
            phone_text("그럼 있잖아.. 혹시", 295, 385);
            phone_text("직접 만나는 건 어때?", 295, 425);
          }
          if (frame > 200) {
            image(ys, 235, 450, 250, 62.5);
            phone_text("3일 뒤에!", 300, 495);
          }
          if (350 < frame) {
            next0(10);
            main_text("너무도 듣고 싶었던 말이다.");
            push();
            translate(0, 40);
            main_text("그럼에도 겁이 나는 말이다.");
            pop();
          }
          back0(6);
          break;
        case 9:
          image(room, 0, 0, 800, 600);
          frame = frame + 1;
          image(kakao1, 204, 70, 392, 700);
          if (50 < frame) {
            image(yb, 235, 230, 250, 100);
            phone_text("나는 그것도 모르고", 300, 275);
            phone_text("전화하자고 했네ㅠ", 300, 312);
          }
          if (200 < frame) {
            image(yb, 235, 340, 250, 100);
            phone_text("그럼 있잖아.. 혹시", 295, 385);
            phone_text("직접 만나는 건 어때?", 295, 425);
          }
          if (frame > 350) {
            image(ys, 235, 450, 250, 62.5);
            phone_text("3일 뒤에!", 300, 495);
          }
          if (500 < frame) {
            next0(11);
            main_text("너무도 듣고 싶었던 말이다.");
            push();
            translate(0, 40);
            main_text("그럼에도 겁이 나는 말이다.");
            pop();
          }
          back0(7);
          break;
        case 10:
          image(room, 0, 0, 800, 600);
          frame = frame + 1;
          image(kakao1, 204, 70, 392, 700);
          image(yb, 235, 230, 250, 100);
          phone_text("그렇구나..ㅠ", 300, 275);
          phone_text("어쩔 수 없지ㅠ", 300, 312);
          image(yb, 235, 340, 250, 100);
          phone_text("그럼 있잖아.. 혹시", 295, 385);
          phone_text("직접 만나는 건 어때?", 295, 425);
          image(ys, 235, 450, 250, 62.5);
          phone_text("3일 뒤에!", 300, 495);
          if (frame > 50) {
            next0(12);
            main_text("그래도 용기를 내보려고 한다.");
            push();
            translate(0, 40);
            main_text("그만큼 너를 좋아하니까.");
            pop();
            back0(8);
          }
          break;
        case 11:
          image(room, 0, 0, 800, 600);
          frame = frame + 1;
          image(kakao1, 204, 70, 392, 700);
          image(yb, 235, 230, 250, 100);
          phone_text("나는 그것도 모르고", 300, 275);
          phone_text("전화하자고 했네ㅠ", 300, 312);
          image(yb, 235, 340, 250, 100);
          phone_text("그럼 있잖아.. 혹시", 295, 385);
          phone_text("직접 만나는 건 어때?", 295, 425);
          image(ys, 235, 450, 250, 62.5);
          phone_text("3일 뒤에!", 300, 495);
          if (frame > 50) {
            next0(13);
            main_text("그래도 용기를 내보려고 한다.");
            push();
            translate(0, 40);
            main_text("그만큼 너를 좋아하니까.");
            pop();
            back0(9);
          }
          break;
        case 12:
          image(room, 0, 0, 800, 600);
          frame = frame + 1;
          image(kakao1, 204, 70, 392, 700);
          back0(10);
          if (50 < frame) {
            image(yb, 235, 230, 250, 100);
            phone_text("난 널 더 많이", 300, 275);
            phone_text("알고 싶거든!ㅎㅎ", 300, 312);
          }
          if (200 < frame) {
            image(mb, 310, 350, 250, 100);
            text("나도 그래.", 325, 390);
            text("그럼 우리 3일 뒤에 보자.", 325, 430);
          }
          if (frame > 350) {
            image(ms, 310, 460, 250, 50);
            text("얼굴 보고 직접!", 325, 495);
          }
          if (frame > 500) {
            next0(14);
            main_text("그 날, 너에게 고백할 거다.");
          }
          break;
        case 13:
          image(room, 0, 0, 800, 600);
          frame = frame + 1;
          image(kakao1, 204, 70, 392, 700);
          back0(11);
          if (50 < frame) {
            image(yb, 235, 230, 250, 100);
            phone_text("난 널 더 많이", 300, 275);
            phone_text("알고 싶거든!ㅎㅎ", 300, 312);
          }
          if (200 < frame) {
            image(mb, 310, 350, 250, 100);
            text("나도 그래.", 325, 390);
            text("그럼 우리 3일 뒤에 보자.", 325, 430);
          }
          if (frame > 350) {
            image(ms, 310, 460, 250, 50);
            text("얼굴 보고 직접!", 325, 495);
          }
          if (frame > 500) {
            next0(14);
            main_text("그 날, 너에게 고백할 거다.");
          }
          break;
        case 14:
          image(room, 0, 0, 800, 600);
          image(opening, 0, 0, 900, 600);
          back0(13);
          noStroke();
          textSize(30);
          textFont(best);
          textAlign(LEFT);
          fill(0);
          text("미션을 성공할 때마다", 100, 155);
          text("아이콘이 색칠돼요!", 120, 200);
          textSize(18);
          text(
            "(미션을 더 많이 성공할수록 고백 성공 확률도 올라갑니다!)",
            55,
            240
          );
          textSize(30);
          text("※ 단, 소리 듣기 힌트는", 525, 175);
          text("전체 게임에서 단 한 번만", 500, 220);
          text("사용할 수 있어요!", 540, 265);
          push();
          translate(15, 5);
          noStroke();
          fill(255, 255, 0);
          rectMode(CORNER);
          rect(650, 15, 120, 40, 30);
          textSize(21);
          textFont(nanum2);
          fill(0);
          text("힌트 듣기", 672, 43);
          pop();
          noStroke();
          fill(255, 200);
          rect(0, 350, 800, 200);
          fill(0);
          textAlign(CENTER);
          textFont(nanum2);
          textSize(32);
          text("3일 동안 다양한 미션을 성공하여", width / 2, 430);
          fill(0);
          textSize(32);
          text("고백을 준비하세요!", width / 2, 485);
          frame = frame + 1;
          if (30 <= frame) {
            noStroke();
            textSize(30);
            textFont(best);
            if (
              700 <= mouseX &&
              mouseX <= 800 &&
              510 <= mouseY &&
              mouseY <= 545
            ) {
              fill(3, 186, 252);
              text("OKAY!", 710, 535);
            } else fill(0);
            text("OKAY!", 710, 535);
            if (
              mouseIsPressed &&
              700 <= mouseX &&
              mouseX <= 800 &&
              510 <= mouseY &&
              mouseY <= 545
            ) {
              stage0 = 15;
              frame = 0;
            }
          }
          break;
        case 15:
          image(room, 0, 0, 800, 600);
          // stroke(209, 122, 46);
          stroke(255);
          strokeWeight(5);
          // fill(255);
          fill(255, 133, 25);
          textFont(bom);
          textSize(50);
          textAlign(CENTER);
          text("DAY1", width / 2, 230);
          frame = frame + 1;
          if (30 <= frame) {
            noStroke();
            textSize(30);
            textFont(best);
            if (
              700 <= mouseX &&
              mouseX <= 800 &&
              510 <= mouseY &&
              mouseY <= 545
            ) {
              fill(3, 186, 252);
              text(">>NEXT", 710, 535);
            } else fill(0);
            text(">>NEXT", 710, 535);
            if (
              mouseIsPressed &&
              700 <= mouseX &&
              mouseX <= 800 &&
              510 <= mouseY &&
              mouseY <= 545
            ) {
              frame = 0;
              days = 1;
              stage1 = 0;
            }
          }
          break;
        case 16:
          image(room, 0, 0, 800, 600);
          image(kakao1, 204, 70, 392, 700);
          next0(17);
          main_text(
            "얼굴 한 번 본 적 없는데도 우리는 성격부터 취향, 취미까지,"
          );
          push();
          translate(0, 40);
          main_text("모든 것이 놀랍도록 비슷했다.");
          pop();
          back0(1);
          break;
        case 17:
          image(room, 0, 0, 800, 600);
          image(kakao1, 204, 70, 392, 700);
          next0(18);
          back0(16);
          main_text("무엇보다도 너는 내가 아는 그 누구보다도 상냥하다.");
          push();
          translate(0, 40);
          main_text("화면 너머로만 연락해온 게 전부인데도.");
          pop();
          break;
        case 18:
          image(room, 0, 0, 800, 600);
          image(kakao1, 204, 70, 392, 700);
          next0(2);
          back0(17);
          main_text("그래서 너를 좋아하지 않을 수 없었다.");
          break;
      }
      break;
    case 1:
      switch (stage1) {
        case 0:
          image(room, 0, 0, width, height);
          next1(1);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("후.. 이제 진짜 만날 날이 얼마 안 남았네...");
          push();
          translate(0, 40);
          main_text("더 준비할 건 없나....??");
          pop();
          allmission();
          break;

        case 1:
          image(room, 0, 0, width, height);
          next1(2);
          main_text("음.....");
          push();
          translate(0, 40);
          main_text("작은 선물이라도 준비해볼까...??");
          pop();
          back1(0);
          allmission();
          break;

        case 2:
          image(room, 0, 0, width, height);

          next1(3);
          fill(0);
          textSize(25);
          textFont(bom);

          main_text("요즘은 퀵 서비스도 있으니까 금방 받을 수 있겠다!");
          push();
          translate(0, 40);
          main_text("오랜만에 인터넷 쇼핑을 해봐야지!");
          pop();
          back1(1);
          allmission();
          break;

        case 3:
          noStroke();
          image(computer, 0, 0, width, height);
          twoChoose1(4, 4);
          push();
          translate(0, -5);
          main_text("어떤 선물이 좋으려나.... 나의 감을 믿어보겠어..!");
          pop();
          fill(0);
          stroke(220, 234, 252);
          strokeWeight(3);
          textFont(best);
          textSize(25);
          if (10 <= mouseX && mouseX <= 210 && 457 <= mouseY && mouseY <= 505) {
            fill(3, 186, 252);
          } else fill(0);
          text("분위기 있는 무드등", 53, 479);
          if (10 <= mouseX && mouseX <= 180 && 510 <= mouseY && mouseY <= 540) {
            fill(3, 186, 252);
          } else fill(0);
          text("힐링이 되는 책", 53, 532);
          back1(2);
          allmission();
          break;

        case 4:
          image(computer, 0, 0, width, height);
          next1(5);
          noStroke();

          fill(220, 190);
          fill(0);
          main_text("좋아! 이걸로 정했다!");
          push();
          translate(0, 40);
          main_text("분명 맘에 들어할거야ㅎㅎ");
          pop();
          back1(3);
          allmission();
          break;
        case 5:
          console.log(randomStage);
          image(computer, 0, 0, width, height);
          randomStage = int(random(0.5, 4.2));
          next1(arr[randomStage]);

          noStroke();
          fill(220, 190);
          main_text("이제 주문만 하면 ㄷ.. 어..?");
          push();
          translate(0, 40);
          main_text("ARS 인증을 해야 하네.. 어떡하지..?");
          pop();

          actCreated = false;

          back1(4);
          xxx();

          break;

        case 6:
          //경우의 수1  = 34
          image(computer, 0, 0, width, height);

          push();
          scale(2.5);
          image(arscellphone, -10, 0, 340, 220);
          pop();

          arsgame1();
          arshint1();
          giveupButton();
          xxx();
          break;

        case 7:
          //경우의 수1  = 오답
          image(computer, 0, 0, width, height);

          push();
          scale(2.5);
          image(arscellphone, -10, 0, 340, 220);
          pop();

          arsgame1();
          arshint1();
          arsFail();
          giveupButton();

          xxx();

          break;

        case 8:
          //경우의 수2 == 73
          image(computer, 0, 0, width, height);

          push();
          scale(2.5);
          image(arscellphone, -10, 0, 340, 220);
          pop();

          arsgame2();
          arshint2();
          giveupButton();
          xxx();
          break;

        case 9:
          //경우의 수2 오답

          image(computer, 0, 0, width, height);

          push();
          scale(2.5);
          image(arscellphone, -10, 0, 340, 220);
          pop();

          arsgame2();
          arshint2();
          arsFail();
          giveupButton();
          xxx();
          break;

        case 10:
          //경우의 수 3  == 91
          image(computer, 0, 0, width, height);

          push();
          scale(2.5);
          image(arscellphone, -10, 0, 340, 220);
          pop();

          arsgame3();
          arshint3();
          giveupButton();
          xxx();
          break;

        case 11:
          //경우의 수 3 오답

          image(computer, 0, 0, width, height);

          push();
          scale(2.5);
          image(arscellphone, -10, 0, 340, 220);
          pop();

          arsgame3();
          arshint3();
          arsFail();
          giveupButton();
          xxx();
          break;

        case 12:
          //경우의 수 4  == 62
          image(computer, 0, 0, width, height);

          push();
          scale(2.5);
          image(arscellphone, -10, 0, 340, 220);
          pop();

          arsgame4();
          arshint4();
          giveupButton();
          xxx();
          break;

        case 13:
          //경우의 수 4 오답

          image(computer, 0, 0, width, height);

          push();
          scale(2.5);
          image(arscellphone, -10, 0, 340, 220);
          pop();

          arsgame4();
          arshint4();
          arsFail();
          giveupButton();
          xxx();
          break;

        case 14:
          //경우의 수 5   == 83

          image(computer, 0, 0, width, height);

          push();
          scale(2.5);
          image(arscellphone, -10, 0, 340, 220);
          pop();

          arsgame5();
          arshint5();
          giveupButton();

          xxx();

          break;

        case 15:
          //경우의 수 5 오답
          image(computer, 0, 0, width, height);

          push();
          scale(2.5);
          image(arscellphone, -10, 0, 340, 220);
          pop();

          arsgame5();
          arshint5();
          arsFail();
          giveupButton();
          xxx();
          break;

        case 16:
          image(computer, 0, 0, width, height);
          next1(35);

          noStroke();
          fill(220, 190);
          main_text("도저히 모르겠다ㅠㅠㅠㅠㅠ");
          push();
          translate(0, 40);
          main_text("선물은 포기해야겠어....");
          pop();

          xxx();

          break;

        case 17:
          actCreated = false;

          image(computer, 0, 0, width, height);

          input.hide();
          button.hide();

          fill(169, 210, 214, 200);
          rect(200, 200, 400, 130);
          fill(0);
          textSize(29);
          textAlign(CENTER);
          text("결제가 완료되었습니다.", width / 2, 255);
          text("주문해주셔서 감사합니다.", width / 2, 305);

          next1(18);
          main_text("휴.. 끝났다...!");
          push();
          translate(0, 40);
          main_text("소리만 있는 ARS는 역시 어렵구나...");
          pop();

          xxx();

          break;

        case 18:
          image(room, 0, 0, width, height);
          next1(19);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text(
            "그래도 선물까지 주문하니까 상쾌해!\n퀵배송이니까 오늘 안에 오겠지?? 세상참 좋아졌어ㅎㅎㅎㅎ"
          );
          back1(17);
          xxx();

          break;

        case 19:
          image(room, 0, 0, width, height);
          next1(20);
          fill(0);
          main_text(
            "어.. 근데 퀵배송은 바로 받아야 하는데..\n초인종 소리는 잘 안 들릴텐데...\n문앞에서 기다려야하나..?"
          );

          back1(18);
          xxx();

          break;

        case 20:
          image(doorcloseOff, 0, 0, width, height);
          noStroke();
          twoChoose11(21, 28);
          fill(0);
          textSize(27);
          textAlign(LEFT);
          textFont(best);
          text("퀵배송.. 어떻게 받지...?", 15, 430);
          fill(0);
          stroke(220, 234, 252);
          strokeWeight(3);
          textSize(25);
          if (10 <= mouseX && mouseX <= 420 && 457 <= mouseY && mouseY <= 505) {
            fill(3, 186, 252);
          } else fill(0);
          text("지겹지만 확실히! 문 앞에서 기다린다", 53, 479);
          if (10 <= mouseX && mouseX <= 580 && 510 <= mouseY && mouseY <= 540) {
            fill(3, 186, 252);
          } else fill(0);
          text("불안하지만 몸은 편히! 다른 일 하다가 나중에 열어본다", 53, 532);
          back1(19);
          xxx();

          break;

        case 21:
          image(doorcloseOff, 0, 0, width, height);
          next1(22);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text(
            "그래도 퀵 배송이니까 바로 받는 게 좋겠지..??\n그래 좀 기다리지 뭐!!"
          );
          xxx();

          break;

        case 22:
          image(doorcloseOff, 0, 0, width, height);
          next1(23);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("(그렇게 한참의 시간이 흐르고...)");
          back1(21);
          xxx();

          break;

        case 23:
          image(doorcloseOff, 0, 0, width, height);
          next1(24);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("으... 지루하다...ㅠㅠㅠ 언제쯤 오시려나...");
          back1(22);
          xxx();

          break;

        case 24:
          image(doorcloseOff, 0, 0, width, height);
          next1(25);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("(또 한참의 시간이 흐르고...)");
          back1(23);
          xxx();

          break;

        case 25:
          image(doorcloseOn, 0, 0, width, height);
          next1(26);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("와! 오셨나보다!!\n잠시만요~~!!~!");
          back1(24);
          xxx();

          break;

        case 26:
          image(dooropenOn, 0, 0, width, height);
          next1(27);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("감사합니다!");

          back1(25);
          oxx();

          break;

        case 27:
          image(doorcloseOff, 0, 0, width, height);
          next1(34);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("후아.. 한참 기다리느라 혼났다..!");
          back1(26);
          oxx();
          break;

        case 28:
          image(doorcloseOff, 0, 0, width, height);
          next1(29);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text(
            "그래 조금 늦게 받는다고 문제가 생기겠어?!\n할일 좀 하다가 느긋하게 문 열어봐야겠다!"
          );
          xxx();
          break;

        case 29:
          image(room, 0, 0, width, height);
          next1(30);
          main_text("(뚝딱 뚝딱.. 한참의 시간이 흐르고..)");
          back1(28);
          xxx();
          break;

        case 30:
          image(doorcloseOff, 0, 0, width, height);
          next1(31);
          main_text("이제 택배가 도착했겠지?!");
          back1(29);
          xxx();
          break;

        case 31:
          image(dooropenOff, 0, 0, width, height);
          next1(32);

          back1(30);
          xxx();
          break;

        case 32:
          image(dooropenOff, 0, 0, width, height);
          next1(33);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text(
            "으악 이게 뭐야... 상자가 왜 다 찌그러졌지...\n누가 그런거야ㅠㅠㅠㅠ"
          );

          back1(31);
          xxx();

          break;

        case 33:
          image(doorcloseOff, 0, 0, width, height);
          next1(35);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text(
            "역시 퀵배송은 바로 받아야했나...\n큰 맘 먹고 산건데.. 이건 못 주겠다...ㅠㅠㅠ"
          );

          back1(32);

          xxx();
          break;

        case 34:
          // 선물 미션 성공 페이지
          image(doorcloseOff, 0, 0, width, height);
          next1(37);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text(
            "후.. 선물을 잘 받아서 다행이야!\n하루종일 신경썼더니 몸은 뻐근하지만..ㅠㅠ"
          );

          oxx();
          break;

        case 35:
          //선물 미션 실패
          image(room, 0, 0, width, height);
          next1(36);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text(
            "후... 아직은 너무 어렵다..ㅠㅠ\n그치만 선물이 없어도 괜찮을거야...!!"
          );
          input.hide();
          button.hide();

          xxx();

          break;

        case 36:
          //day1 마무리 실패

          image(room, 0, 0, width, height);
          next1(38);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("아무튼 기운내서 내일을 잘 보내보자!\n화이팅!!");
          missionsuc1 = 0;

          xxx();

          break;

        ///day1 마무리 성공

        case 37:
          image(room, 0, 0, width, height);
          next1(38);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text(
            "오늘은 여러모로 피곤한 하루야..\n얼른 자고 내일 일어나야지!"
          );
          back1(35);
          oxx();
          missionsuc1 = 1;

          break;

        case 38:
          image(room, 0, 0, width, height);
          stroke(255);
          strokeWeight(5);
          fill(255, 133, 25);
          textFont(bom);
          textSize(50);
          text("DAY2", 350, 230);
          frame = frame + 1;
          if (30 <= frame) {
            noStroke();
            textSize(30);
            textFont(best);
            if (
              700 <= mouseX &&
              mouseX <= 800 &&
              510 <= mouseY &&
              mouseY <= 545
            ) {
              fill(3, 186, 252);
              text(">>NEXT", 710, 535);
            } else fill(0);
            text(">>NEXT", 710, 535);
            if (
              mouseIsPressed &&
              700 <= mouseX &&
              mouseX <= 800 &&
              510 <= mouseY &&
              mouseY <= 545
            ) {
              frame = 0;
              days = 2;
              stage2 = 0;
            }
          }
          break;
      }
      break;

    case 2:
      switch (stage2) {
        case 0:
          image(room, 0, 0, 800, 600);

          next2(1);
          fill(0);
          main_text("어제 선물 준비하느라 애썼으니...오늘은 바람 좀 쐬볼까?");

          allmission();

          break;
        case 1:
          image(room, 0, 0, 800, 600);

          next2(2);
          noStroke();
          fill(220, 190);
          fill(0);
          main_text("집 근처에 새로 생긴 쇼핑몰에 가봐야겠다!");
          back2(0);

          allmission();

          break;

        case 2:
          if (bgmcontrol1 == false) {
            insoundstr.setVolume(0.4);
            insoundstr.play();
            bgmcontrol1 = true;

            insoundlast.setVolume(0.2);
            insoundlast.playMode("restart");
            insoundlast.play();
          }

          image(mall, 0, 0, 800, 600);

          next2(3);
          noStroke();
          fill(220);
          fill(0);
          main_text("우와 소문대로 엄청 크다. 여기 와봤다고 알려줘야지");
          back2(1);
          allmission();

          break;

        case 3:
          image(mall, 0, 0, 800, 600);

          frame = frame + 1;
          if (frame > 50) {
            if (phone > 70) {
              phone = phone - speed;
              speed = speed - 0.1;
            } else {
              phone = 70;
            }
            image(kakao1, 204, phone, 392, 700);
          }
          //image(kakao1, 204, 70, 392, 700);
          fill(0);
          noStroke();
          textFont(best);
          textSize(25);
          if (frame > 200 && frame < 950) {
            image(mb, 280, 230, 290, 62.5);
            phone_text("지금 새로 생긴 쇼핑몰에 왔어!", 295, 273);
          }
          if (frame > 350 && frame < 950) {
            image(ys, 235, 315, 280, 62.5);
            phone_text("아 진짜?", 295, 360);
          }
          if (frame > 500 && frame < 950) {
            image(ys, 235, 375, 280, 62.5);
            phone_text("거기 영화관도 생겼던데,", 295, 420);
          }
          if (frame > 650 && frame < 950) {
            image(ys, 235, 435, 280, 62.5);
            phone_text("영화관도 가봤어?", 295, 483);
          }
          if (frame > 800 && frame < 950) {
            image(mb, 270, 515, 300, 62.5);
            phone_text("아니 아직. 요즘 재미있는거 해?", 285, 560);
          }

          if (frame > 1000) {
            image(ys, 235, 230, 320, 70);
            textSize(20);
            phone_text("요즘 나온 영화들 다 재미있어!", 300, 277);
          }
          if (frame > 1150) {
            image(ys, 235, 305, 320, 70);
            phone_text("지난 주에 세 편이나 봤는데", 300, 355);
          }
          if (frame > 1300) {
            image(ys, 235, 380, 320, 70);
            phone_text("전부 재미있었어!", 300, 433);
          }
          //next 대신에 넘어가게 하기
          frame = frame + 1;
          if (frame > 1450) {
            noStroke();
            fill(182, 209, 240, 180);
            rectMode(CORNER);
            rect(0, 400, 800, 150);
            if (30 <= frame) {
              noStroke();
              textSize(30);
              textAlign(LEFT);
              textFont(best);
              if (
                700 <= mouseX &&
                mouseX <= 800 &&
                510 <= mouseY &&
                mouseY <= 545
              ) {
                fill(3, 186, 252);
                text(">>NEXT", 710, 535);
              } else fill(0);
              text(">>NEXT", 710, 535);
              if (
                mouseIsPressed &&
                700 <= mouseX &&
                mouseX <= 800 &&
                510 <= mouseY &&
                mouseY <= 545
              ) {
                stage2 = 4;
                frame = 0;
              }
            }
            main_text("호오... 영화를 좋아하는구나. 나도 한번 봐볼까?");
            back2(2);
          }

          allmission();
          break;
        case 4:
          image(ticketbox, 0, 0, 800, 600);

          next2(5);
          noStroke();
          fill(220, 190);
          fill(0);
          main_text("줄거리랑 명대사만이라도 알아가면 대화할 때 더 낫겠지?");
          back2(3);

          allmission();

          break;

        case 5:
          image(timetable, 0, 0, 800, 600);

          next2(6);
          noStroke();
          fill(220, 190);
          fill(0);
          main_text("음… 그런데 지금 이 시간대에 있는 영화가...마땅치 않네");
          back2(4);

          allmission();
          break;
        case 6:
          image(timetable, 0, 0, 800, 600);

          back2(5);
          noStroke();
          fill(220, 190);
          fill(0);

          noStroke();
          fill(182, 209, 240, 180);
          rectMode(CORNER);
          rect(0, 400, 800, 150);
          main_text("역시 이 시간에는 배리어프리 영화가 없구나");
          //배리어프리 영화 설명

          frame = frame + 1;
          if (frame > 50) {
            if (phone > 20) {
              phone = phone - speed * 0.99;
              speed = speed - 0.1;
            } else {
              phone = 20;
            }
            image(barrier, 150, phone, 480, 380);
            next22(7);
          }
          allmission();

          break;
        /* 2일차 소게임 많이 바뀜!! 시작이에요!!!*/
        case 7:
          if (bgmcontrol3 == false) {
            insoundout.setVolume(0.1);
            insoundout.play();
            bgmcontrol3 = true;
          }

          insoundlast.stop();

          image(timetable, 0, 0, 800, 600);

          //기생충 영화 스테이지를 배열로 갖는 parasites 배열
          let parasites = [8, 17];
          let parasite = random(parasites);
          //선택지
          choose2(parasite, 10, 12);
          noStroke();
          fill(220, 190);
          fill(0);
          push();
          translate(0, -5);
          main_text(
            "그래도 여기까지 왔는데 하나라도 보고가자. 어떤 영화를 볼까?"
          );
          pop();
          //선택지 멘트
          textFont(best);
          textSize(25);
          stroke(220, 234, 252);
          strokeWeight(3);
          if (mouseX > 21 && mouseX < 100 && mouseY > 440 && mouseY < 470) {
            stroke(220, 234, 252);
            strokeWeight(3);

            fill(3, 186, 252);
          } else {
            fill(0);
          }
          text("기생충", 45, 465);

          if (mouseX > 20 && mouseX < 160 && mouseY > 475 && mouseY < 505) {
            stroke(220, 234, 252);
            strokeWeight(3);
            fill(3, 186, 252);
          } else {
            fill(0);
          }
          text("연애의 온도", 45, 497);

          if (mouseX > 21 && mouseX < 90 && mouseY > 510 && mouseY < 540) {
            stroke(220, 234, 252);
            strokeWeight(3);
            fill(3, 186, 252);
          } else {
            fill(0);
          }
          text("암살", 45, 532);

          back2(6);
          allmission();
          break;

        //기생충 선택시 영화 2
        case 8:
          movieCreated = false;
          myMovie2.stop();
          image(cinema, 0, 0, width, height);

          next2(9);
          noStroke();
          fill(220, 190);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("맥락은 알겠는데... 최우식이 지금 정확히 뭐라고 한거지?");
          allmission();
          insoundlast.stop();

          break;

        case 9:
          image(cinema, 0, 0, 800, 600);

          //게임 입력창
          fill(0);
          textSize(25);
          textFont(han);
          text("배우의 입 모양과 소리를 듣고 대사를 맞춰보세요!", 150, 120);
          //입력창
          input2.show();
          input2.input(newText2);

          //확인 버튼
          button2.show();
          button2.mousePressed(actEvent2);
          //enter를 눌러도 확인이 될 수 있게
          if (keyIsDown(ENTER)) {
            actEvent2();
          }

          movieControl2();
          hintControl2();
          allmission();
          break;

        //연애의 온도 대사
        case 10:
          movieCreated = false;
          myMovie3.stop();
          image(cinema, 0, 0, 800, 600);

          next2(11);
          noStroke();
          fill(220, 190);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("맥락은 알겠는데... 김민희가 지금 정확히 뭐라고 한거지?");
          //back2(3);
          allmission();
          insoundlast.stop();
          break;

        case 11:
          image(cinema, 0, 0, 800, 600);

          //게임 입력창
          fill(0);
          textSize(25);
          textFont(han);
          text("배우의 입 모양과 소리를 듣고 대사를 맞춰보세요!", 150, 120);
          //입력창
          input2.show();
          input2.input(newText3);

          //확인 버튼
          button2.show();
          button2.mousePressed(actEvent3);
          //enter를 눌러도 확인이 될 수 있게
          if (keyIsDown(ENTER)) {
            actEvent3();
          }

          movieControl3();
          hintControl3();
          allmission();
          break;

        //암살 대사
        case 12:
          movieCreated = false;
          myMovie4.stop();
          image(cinema, 0, 0, 800, 600);

          next2(13);
          noStroke();
          fill(220, 190);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("맥락은 알겠는데... 이정재가 지금 정확히 뭐라고 한거지?");
          //back2(3);
          insoundlast.stop();
          allmission();

          break;
        case 13:
          image(cinema, 0, 0, 800, 600);

          //게임 입력창
          fill(0);
          textSize(25);
          textFont(han);
          text("배우의 입 모양과 소리를 듣고 대사를 맞춰보세요!", 150, 120);
          //입력창
          input2.show();
          input2.input(newText4);

          //확인 버튼
          button2.show();
          button2.mousePressed(actEvent4);
          //enter를 눌러도 확인이 될 수 있게
          if (keyIsDown(ENTER)) {
            actEvent4();
          }

          movieControl4();
          hintControl4();
          allmission();

          break;

        case 14:
          //movieCreated = false;
          myMovie1.stop();
          myMovie2.stop();
          myMovie3.stop();
          myMovie4.stop();
          myMovie1.hide();
          myMovie2.hide();
          myMovie3.hide();
          myMovie4.hide();
          image(cinema, 0, 0, 800, 600);

          fill(245, 151, 120, 200);
          rect(200, 200, 400, 130);
          fill(0);
          textSize(30);
          text("대사 받아쓰기 실패!", 285, 280);

          //오답일 경우
          next2(15);
          noStroke();
          fill(220, 190);
          fill(0);
          main_text(
            "대사 내용이 궁금하긴 했는데, 모르고 지나가서 조금은 아쉽다"
          );
          allmission();

          break;
        case 15:
          //movieCreated = false;
          image(cinema, 0, 0, 800, 600);

          //오답일 경우 2일차 끝
          next2(19);
          noStroke();
          fill(220, 190);
          fill(0);
          main_text(
            "비록 대사는 알아듣지 못했지만, 연기도 좋았고, 영화 영상미도 좋았어!"
          );

          allmission();

          break;

        case 16:
          //movieCreated = false;
          myMovie1.stop();
          myMovie2.stop();
          myMovie3.stop();
          myMovie4.stop();
          myMovie1.hide();
          myMovie2.hide();
          myMovie3.hide();
          myMovie4.hide();
          image(cinema, 0, 0, 800, 600);

          missionsuc2 = 1;
          fill(169, 210, 214, 200);
          rect(200, 200, 400, 130);
          fill(0);
          textSize(30);
          text("대사 받아쓰기 성공!", 285, 280);

          //정답일 경우 2일차 끝
          next2(19);
          noStroke();
          fill(220, 190);
          fill(0);
          main_text(
            "대사 잘 썼네! 간만에 대사 내용도 이해했고, 엄청 재밌게 봤다 ㅎㅎ"
          );
          text("만나면 영화봤다고 말 꺼내봐야겠어!", 15, 475);
          allmission();

          break;

        //기생충 영화 1 송강호 기생충 대사
        case 17:
          movieCreated = false;
          myMovie1.stop();
          image(cinema, 0, 0, 800, 600);

          next2(18);
          noStroke();
          fill(220, 190);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("맥락은 알겠는데... 송강호가 지금 정확히 뭐라고 한거지?");
          //back2(3);
          allmission();

          break;

        case 18:
          image(cinema, 0, 0, 800, 600);

          //게임 입력창
          fill(0);
          textSize(25);
          textFont(han);
          text("배우의 입 모양과 소리를 듣고 대사를 맞춰보세요!", 150, 120);
          //입력창
          input2.show();
          input2.input(newText1);

          //확인 버튼
          button2.show();
          button2.mousePressed(actEvent1);
          //enter를 눌러도 확인이 될 수 있게
          if (keyIsDown(ENTER)) {
            actEvent1();
          }

          movieControl1();
          hintControl1();
          allmission();

          break;
        case 19:
          image(room, 0, 0, 800, 600);
          stroke(209, 122, 46);
          stroke(255);
          strokeWeight(5);
          // fill(255);
          fill(255, 133, 25);
          textFont(bom);
          textSize(50);
          text("DAY3", 350, 230);
          frame = frame + 1;

          if (30 <= frame) {
            noStroke();
            textSize(30);
            textFont(best);
            if (
              700 <= mouseX &&
              mouseX <= 800 &&
              510 <= mouseY &&
              mouseY <= 545
            ) {
              fill(3, 186, 252);
              text(">>NEXT", 710, 535);
            } else fill(0);
            text(">>NEXT", 710, 535);
            if (
              mouseIsPressed &&
              700 <= mouseX &&
              mouseX <= 800 &&
              510 <= mouseY &&
              mouseY <= 545
            ) {
              frame = 0;
              days = 3;
              stage3 = 0;
            }
          }
          break;
      }
      break;
    case 3:
      /*****밑에 싹 다 복붙 부탁드립니다!*****/
      switch (stage3) {
        case 0:
          story3_0();

          break;

        case 1:
          story3_1();
          break;

        case 2:
          story3_2();
          break;

        case 3:
          story3_3();
          break;

        case 4:
          story3_4();
          break;

        case 5:
          story3_5();
          break;

        case 6:
          story3_6();
          break;

        case 7:
          story3_7();
          break;

        case 8:
          story3_8();
          break;

        case 9:
          story3_9();
          break;

        case 10:
          story3_10();
          break;

        case 11:
          story3_11();
          break;

        case 12:
          story3_12();
          break;

        case 13:
          story3_13();
          break;

        case 14:
          story3_14();
          break;

        case 15:
          story3_15();
          break;

        case 16:
          story3_16();
          break;

        case 17:
          story3_17();
          break;

        case 18:
          story3_18();
          break;

        case 19:
          story3_19();
          break;

        case 20:
          story3_20();
          break;

        case 21:
          story3_21();
          break;

        case 22:
          image(station_m, 0, 0, width, height);
          game3_description();
          game3_start();
          back3(21);
          break;

        case 23:
          game3();
          break;

        case 24:
          game3_fail();
          break;

        case 25:
          game3_success();
          break;

        case 26:
          story3_26();

          //에필로그 함수
          late = 0;
          break;

        case 27:
          story3_27();
          break;

        case 28:
          story3_28();
          break;

        case 29:
          story3_29();
          break;

        case 30:
          story3_30();
          break;

        case 31:
          story3_31();
          break;

        case 32:
          story3_32();

          //에필로그 함수
          late = 1;
          break;

        case 33:
          story3_33();
          break;

        case 34:
          story3_34();
          break;

        case 35:
          story3_35(); //지은이 다가오는 모습
          break;

        case 36:
          story3_36(); //안녕?ㅎㅎ 카톡
          break;

        case 37:
          story3_37(); //지은이 얼굴 크게
          break;

        case 38: //에필로그 #1
          if (bgmcontrol7 == false) {
            endingsound.setVolume(0.003);
            endingsound.play();
            bgmcontrol7 = true;
          }

          image(forest, 0, 0, 800, 600);
          fill(255, 100);
          rect(0, 0, 800, 600);
          textFont(best);
          fill(255);
          textSize(40);
          stroke(114, 186, 224);
          strokeWeight(5);
          text("에필로그", 345, 80);
          push();
          translate(10, 25);
          push();
          translate(0, -300);
          ending_text("너는 환하게 웃으며 나를 향해 달려왔다.");
          pop();
          if (ear == 0) {
            push();
            translate(0, -260);
            ending_text("널 보자마자 내 귀가 들리지 않는다는 사실을 말했다.");
            pop();
            push();
            translate(0, -220);
            ending_text("너는 문제 없다고 말하며 핸드폰을 흔들어보였다.");
            pop();
            push();
            translate(0, -180);
            ending_text("그렇게 우리는 하루종일 채팅으로 대화를 하기로 했다.");
            pop();
          } else if (ear == 1) {
            push();
            translate(0, -260);
            ending_text("내 앞에 서자 마자 너는 핸드폰을 흔들어 보였다.");
            pop();
            push();
            translate(0, -220);
            ending_text(
              "입 모양을 읽는 게 힘들테니 채팅으로 대화를 하자는 거였다."
            );
            pop();
            push();
            translate(0, -180);
            ending_text("그렇게 우리는 하루종일 채팅으로 대화를 하기로 했다.");
            pop();
          }

          if (missionsuc1 == 1 && late == 1) {
            push();
            translate(0, -120);
            ending_text("우선 우리는 식당에 갔다.");
            pop();
            push();
            translate(0, -80);
            ending_text("나는 준비한 선물과 꽃을 너에게 주었다.");
            pop();
            push();
            translate(0, -40);
            ending_text("너는 선물을 보고 너무 마음에 든다며 기뻐했다.");
            pop();
            ending_text("이틀 전 고생을 한 게 너무 뿌듯했다.");
          } else if (missionsuc1 == 0 && late == 1) {
            push();
            translate(0, -120);
            ending_text("우선 우리는 식당에 갔다.");
            pop();
            push();
            translate(0, -80);
            ending_text("나는 선물 없이 꽃만 너에게 주었다.");
            pop();
            push();
            translate(0, -40);
            ending_text("선물까지 주지 못한 게 너무 아쉬웠다.");
            pop();
            ending_text("그래도 꽃이라도 사서 다행이라고 생각했다.");
          } else if (missionsuc1 == 1 && late == 0) {
            push();
            translate(0, -120);
            ending_text("우선 우리는 식당에 갔다.");
            pop();
            push();
            translate(0, -80);
            ending_text("나는 꽃 없이 선물만 너에게 주었다.");
            pop();
            push();
            translate(0, -40);
            ending_text("꽃까지 주지 못한 게 너무 아쉬웠다.");
            pop();
            ending_text("그래도 선물이라도 사서 다행이라고 생각했다.");
          } else if (missionsuc1 == 0 && late == 0) {
            push();
            translate(0, -120);
            ending_text("우선 우리는 식당에 갔다.");
            pop();
            push();
            translate(0, -80);
            ending_text("꽃과 선물을 주기 좋은 타이밍이었는데,");
            pop();
            push();
            translate(0, -40);
            ending_text("둘 중 어느 것도 너에게 주지 못했다.");
            pop();
            ending_text("제대로 준비하지 못한 내가 원망스러웠다.");
          }
          pop();
          next33(39);
          break;

        case 39: //에필로그 #2
          if (bgmcontrol7 == false) {
            endingsound.setVolume(0.003);
            endingsound.play();
            bgmcontrol7 = true;
          }

          image(forest, 0, 0, 800, 600);
          fill(255, 100);
          rect(0, 0, 800, 600);
          textFont(best);
          fill(255);
          textSize(40);
          stroke(114, 186, 224);
          strokeWeight(5);
          text("에필로그", 345, 80);
          push();
          translate(10, 25);

          if (missionsuc3 == 1 && late == 1) {
            push();
            translate(0, -300);
            ending_text("꽃을 받은 너는 밝게 웃으며 나를 보았다.");
            pop();
            push();
            translate(0, -260);
            ending_text("그러고서 혹시 이 꽃의 꽃말을 아느냐고 물었다.");
            pop();
            push();
            translate(0, -220);
            ending_text(
              "내가 '사랑의 고백'이 아니냐고 말하자, 너는 수줍게 웃으며 얼굴을 붉혔다."
            );
            pop();
            push();
            translate(0, -180);
            ending_text(
              "꽃집 사장님께 여쭤보기를 정말 잘했다는 생각이 들었다."
            );
            pop();
            push();
            translate(0, -140);
            ending_text("다음에 들르면 꼭 감사 인사를 드려야겠다.");
            pop();
          } else if (missionsuc3 == 0 && late == 1) {
            push();
            translate(0, -300);
            ending_text("그런데 꽃을 받은 너는 얼굴이 조금 굳어졌다.");
            pop();
            push();
            translate(0, -260);
            ending_text("그러고서 혹시 이 꽃의 꽃말을 아느냐고 물었다.");
            pop();
            push();
            translate(0, -220);
            ending_text(
              "내가 모르겠다고 말하자 너는 다행이라는 듯한 표정을 지으며 웃었다."
            );
            pop();
            push();
            translate(0, -180);
            ending_text(
              "찾아보니 내가 산 아네모네의 꽃말은 덧없는 사랑이더라.."
            );
            pop();
            push();
            translate(0, -140);
            ending_text("그래도 너는 꽃이 너무 예쁘다고 말해주었다.");
            pop();
          } else {
            push();
            translate(0, -300);
            ending_text("그때 우리 옆 테이블에 커플이 앉는 게 보였다.");
            pop();
            push();
            translate(0, -260);
            ending_text("그들은 앉자마자 서로에게 꽃을 선물했다.");
            pop();
            push();
            translate(0, -220);
            ending_text("그걸 보며 너는 부럽다는 듯한 표정을 지었다.");
            pop();
            push();
            translate(0, -180);
            ending_text("지하철에서 헤매다가 꽃을 두고 내린 게 후회되었다.");
            pop();
            push();
            translate(0, -140);
            ending_text("왜 하필 오늘 그런 실수를 했는지 모르겠다.");
            pop();
          }

          if (missionsuc2 == 1) {
            push();
            translate(0, -80);
            ending_text("밥을 먹은 후 우리는 카페에 갔다.");
            pop();
            push();
            translate(0, -40);
            ending_text(
              "카페에서 너는 마침 어제 내가 본 영화에 대해 이야기했다."
            );
            pop();
            ending_text("나도 인상깊었던 명대사를 언급하며 내 감상을 말했다.");
            push();
            translate(0, 40);
            ending_text(
              "너는 깜짝 놀라며 우리의 취향이 너무 잘 맞는다며 밝게 웃었다."
            );
            pop();
          } else if (missionsuc2 == 0) {
            push();
            translate(0, -80);
            ending_text("밥을 먹은 후 우리는 카페에 갔다.");
            pop();
            push();
            translate(0, -40);
            ending_text(
              "카페에서 너는 마침 어제 내가 본 영화에 대해 이야기했다."
            );
            pop();
            ending_text(
              "그런데 내가 영화를 제대로 이해하지 못해서 이야기가 계속 끊어졌다."
            );
            push();
            translate(0, 40);
            ending_text(
              "너는 다음에 배리어프리 영화로 다시 보자고 말하며 환하게 웃었다."
            );
            pop();
          }
          pop();
          next33(40);
          back3(38);

          break;

        case 40:
          if (bgmcontrol7 == false) {
            endingsound.setVolume(0.003);
            endingsound.play();
            bgmcontrol7 = true;
          }

          image(forest, 0, 0, 800, 600);
          fill(255, 100);
          rect(0, 0, 800, 600);
          textFont(best);
          fill(255);
          textSize(40);
          stroke(114, 186, 224);
          strokeWeight(5);
          text("에필로그", 345, 80);
          push();
          translate(10, 20);
          if (
            (missionsuc1 == 1 && missionsuc2 == 1 && missionsuc3 == 1) |
            (missionsuc1 == 1 && missionsuc2 == 1 && missionsuc3 == 0) |
            (missionsuc1 == 1 && missionsuc2 == 0 && missionsuc3 == 1) |
            (missionsuc1 == 0 && missionsuc2 == 1 && missionsuc3 == 1)
          ) {
            push();
            translate(0, -300);
            ending_text("마지막으로 우리는 처음 만난 공원으로 돌아왔다.");
            pop();
            push();
            translate(0, -260);
            ending_text(
              "가로등만으로 은은하게 밝혀진 공원에는 우리 둘뿐이었다."
            );
            pop();
            push();
            translate(0, -220);
            ending_text(
              "떨렸지만 나는 용기를 내어 너에게 좋아한다고 고백했다."
            );
            pop();
            push();
            translate(0, -180);
            ending_text("3일 전부터 이 말을 하려고 준비했다고 말했다.");
            pop();
            push();
            translate(0, -140);
            ending_text("너는 화들짝 놀랐다가 이내 밝게 웃었다.");
            pop();
            push();
            translate(0, -100);
            ending_text(
              "들리지 않아도 '나도 널 좋아해', 하는 입모양을 읽을 수 있었다."
            );
            pop();
            push();
            translate(0, -40);
            ending_text(
              "우리는 집에 가지 않고 오래도록 공원을 걸으며 채팅을 나눴다."
            );
            pop();
            ending_text("그 문자들에서 너의 목소리가 들리는 것만 같았다.");
            push();
            translate(0, 40);
            ending_text(
              "지금까지 그랬듯 앞으로도 이 문자들과  너와 걸어보려 한다."
            );
            pop();
            push();
            translate(0, 80);
            ending_text("들리지 않는 너의 목소리를 따라.   [THE END]");
            pop();
          } else {
            push();
            translate(0, -300);
            ending_text("마지막으로 우리는 처음 만난 공원으로 돌아왔다.");
            pop();
            push();
            translate(0, -260);
            ending_text(
              "가로등만으로 은은하게 밝혀진 공원에는 우리 둘뿐이었다."
            );
            pop();
            push();
            translate(0, -220);
            ending_text("고백을 하기 딱 좋은 타이밍인 것 같았다.");
            pop();
            push();
            translate(0, -180);
            ending_text(
              "그러나 고백 준비를 너무 못 한 것 같아 결국 조금 미루기로 했다."
            );
            pop();
            push();
            translate(0, -140);
            ending_text(
              "대신 다음주에 너와 한 번 더 만나 함께 영화를 보기로 했다."
            );
            pop();
            push();
            translate(0, -100);
            ending_text("그때는 꼭 너에게 고백하고 말 거다.");
            pop();
            push();
            translate(0, -40);
            ending_text(
              "우리는 집에 가지 않고 오래도록 공원을 걸으며 채팅을 나눴다."
            );
            pop();
            ending_text("그 문자들에서 너의 목소리가 들리는 것만 같았다.");
            push();
            translate(0, 40);
            ending_text(
              "지금까지 그랬듯 앞으로도 이 문자들을 따라 걸어보려 한다."
            );
            pop();
            push();
            translate(0, 80);
            ending_text("들리지 않는 너의 목소리를 따라.   [THE END]");
            pop();
          }
          pop();
          noStroke();
          fill(0);
          textFont(best);
          textSize(20);
          text("Press ALT to RESTART!", 328, 590);
          back3(39);

          if (keyCode === ALT) {
            resetAll();
          }
          break;

        default:
          break;
      }
      break;
  }
}
/*****엔터키 누르면 다 초기화 되게 만드는 함수입니다! 이것도 있어야 합니다!! *****/
function resetAll() {
  stage0 = 0;
  stage1 = 0;
  stage2 = 0;
  stage3 = 0;
  frame = 0;
  days = 0;
  hint = 1;
  phone = 500;
  speed = 10;
  actCreated = false;
  movieCreated = false;
  wobble = 0;
  wobble1 = 0;
  wobble2 = 0;
  wobble3 = 0;
  wobble4 = 0;
  wobble5 = 0;
  wobble6 = 0;
  memo_h = 350;
  flower1_h = -100;
  flower2_h = -100;
  speed3 = 10;
  frame3 = 0;
  start_timer = 3; //start 카운트다운 초
  game3_timer = 63;
  px[0] = 4200;
  px[1] = 4400;
  px[2] = 4350;
  px[3] = 4480;
  px[4] = 4400;
  game3_playing = false;
  st3 = 0;
  missionsuc1 = 0;
  missionsuc2 = 0;
  missionsuc3 = 0;
  ear = 0;
  late = 0;
  fade = 200;
  fadeAmount = 1;
  day2game = 0;
  anemone = false;
  tulip = false;
  flowerfade = 255;
  flowerspeed = 10;
  girlx = 0;
  girly = 0;
  bgmcontrol1 = false;
  bgmcontrol2 = false;
  bgmcontrol3 = false;
  bgmcontrol4 = false;
  bgmcontrol5 = false;
  bgmcontrol6 = false;
  bgmcontrol7 = false;
  endingsound.stop();
}
