let stage0 = 0;
let stage1 = 0;
let stage2 = 0;
let stage3 = 0;
let frame = 0;
let days = 3;
let bom, room;

let hint = 1;

//오프닝
let phone = 500;
let speed = 20;

//1일차
let input;
let button;
let mySound;
let actCreated = false;
let hintSound;
let computer;
let arscellphone;

//2일차
let input2, button2;
let myMovie1, myMovie2;
let movieCreated = false;
let mvSound1, mvSound2;

//3일차
/*****폰트*****/
let nanum1;
let nanum2;
//이미지
let station_m;
let park;
//여기에서부터 다시 추가!!!!!!!!!!!!!
let watch;
let flowerout;
let owner;
let memo;
let flower1;
let flower2;
let subway_back;
let subway_front;
let game3_ex;

let rperson= [];
let lperson = [];
let man = []; //지하철에 서있는 사람들

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


/***** 3일차 게임을 위한 변수들! *****/
let start_timer = 3; //start 카운트다운 초
let game3_timer = 63; //게임 총 소요시간
let game3_trigger = 1; //start 카운트다운 후 게임 스테이지 시작하게 만들 변수
let timerOn;
let px = [4400, 4900, 4850, 4900, 4800]; //역이름 위치


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

  //1일차
  computer = loadImage("assets1/image/computer.jpg");
  arscellphone = loadImage("assets1/image/ars.png");
  mySound = loadSound("assets1/sound/이인증.mp3");
  hintSound = loadSound("assets1/sound/힌트1.mp3");

  //2일차
  cinema = loadImage("assets2/image/cinema.jpg");
  ticketbox = loadImage("assets2/image/ticketbox.jpg");
  //소게임 관련 파일
  mvSound1 = loadSound("assets2/sound/hintsound1.wav");
  mvSound2 = loadSound("assets2/sound/hintsound2.wav");

  //3일차
  park = loadImage("assets3/image/park.jpg");
  station_m = loadImage("assets3/image/subway.jpg");
  /*****여기에서부터  */
  watch = loadImage("assets3/image/watch.png");
  flowerout = loadImage("assets3/image/flowerout.JPG");
  owner = loadImage("assets3/image/owner.PNG");
  memo = loadImage("assets3/image/memo.png");
  flower1 = loadImage("assets3/image/flower1.png");
  flower2 = loadImage("assets3/image/flower2.png");
  subway_back = loadImage("assets3/image/station_back.png")
  subway_front = loadImage("assets3/image/subway_front.png")
  game3_ex = loadImage("assets3/image/game3_example.png");
  /*****여기까지 추가 */
  game3_sw = new p5.Oscillator();
  game3_sw.setType("triangle");
  /*****밑은 싹 다 복붙 부탁드려요~ */
  for (let i = 0; i < game3_stages; i++) {
    game3_imgs[i] = loadImage("assets3/image/station_name" + i + ".png");
    game3_answer[i] = loadImage("assets3/image/station" + i + ".png");
    game3_snds[i] = loadSound("assets3/sound/station_announce" + i + ".mp3");
  }
  for (let i = 0; i < 8; i++) {
    man[i] = loadImage("assets3/image/man" + (i+1) + ".png");
  }
  for(let i = 0; i< 9; i++) {
    rperson[i] = loadImage("assets3/image/rperson" + (i+1) +".png");
  }
  for(let i =0; i<7; i++) {
    lperson[i] = loadImage("assets3/image/lperson" + (i+1) +".png");
  }
}

function setup() {
  //1일차
  createCanvas(800, 600);

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
          image(room, 0, 0, 800, 600);
          frame = frame + 1;
          noStroke();
          fill(182, 209, 240, 180);
          rect(0, 400, 800, 150);
          stroke(89, 154, 227);
          strokeWeight(5);
          fill(255);
          textAlign(LEFT);
          textFont(bom);
          textSize(50);
          text("너의 목소리를 따라", 200, 230);
          fill(0);
          noStroke();
          textSize(20);
          textFont(bom);
          text("소리가 중심이 되는 게임이니", 295, 435);
          text("이어폰을 꼭 착용해주세요!", 305, 465);
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
            noStroke();
            fill(255);
          } else fill(0);
          text("GAME START!", 315, 530);

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
            next0(2);
            main_text("널 알게 된 지 벌써 세 달째.");
            push();
            translate(0, 40);
            main_text(
              "화면 너머로만 연락해온 게 전부지만, 너는 내가 아는 그 누구보다도 상냥하다."
            );
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
          back0(1);
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
          textFont(bom);
          textSize(25);
          if (10 <= mouseX && mouseX <= 450 && 457 <= mouseY && mouseY <= 505) {
            fill(3, 186, 252);
          }
          else fill(0);
          text("전화는 아직 어색할 것 같다고 말한다.", 53, 479);
          if (10 <= mouseX &&mouseX <= 450 &&510 <= mouseY && mouseY <= 540) {
            fill(3, 186, 252);
          }
          else fill(0);
          text("귀가 들리지 않는다고 솔직하게 말한다.", 53, 532);
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
          noStroke();
          fill(182, 209, 240, 200);
          rect(100, 100, 600, 400);
          fill(0);
          noStroke();
          textSize(30);
          textFont(bom);
          text("3일 동안 다양한 미션을 통과하여", 205, 245);
          text("'너'에게 고백을 성공하세요!", 230, 300);
          push();
          translate(0, 50);
          stroke(89, 154, 227);
          strokeWeight(5);
          fill(255);
          textSize(20);
          text("소리 듣기 힌트는 전체 게임에서", 275, 355);
          text("단 한 번만 사용할 수 있으니 주의하세요!", 235, 390);
          pop();
          frame = frame + 1;
          if (30 <= frame) {
            noStroke();
            textSize(25);
            textFont(bom);
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
              stage0 = 15;
              frame = 0;
            }
          }
          break;
        case 15:
          image(room, 0, 0, 800, 600);
          stroke(209, 122, 46);
          strokeWeight(5);
          fill(255);
          textFont(bom);
          textSize(50);
          text("DAY1", 350, 230);
          frame = frame + 1;
          if (30 <= frame) {
            noStroke();
            textSize(25);
            textFont(bom);
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
      }
      break;
    case 1:
      switch (stage1) {
        case 0:
          image(room, 0, 0, width, height);
          next1(1);
          main_text("음.....");
          push();
          translate(0, 40);
          main_text("작은 선물이라도 준비해볼까...??");
          pop();
          break;
        case 1:
          noStroke();
          image(computer, 0, 0, width, height);
          twoChoose1(2, 2);
          push();
          translate(0, -5);
          main_text("어떤 선물이 좋으려나.... 나의 감을 믿어보겠어..!");
          pop();
          fill(0);
          stroke(220, 234, 252);
          strokeWeight(3);
          textFont(bom);
          textSize(25);
          if (10 <= mouseX && mouseX <= 240 && 457 <= mouseY && mouseY <= 505) {
            fill(3, 186, 252);
          }
          else fill(0);
          text("분위기 있는 무드등", 53, 479);
          if (10 <= mouseX &&mouseX <= 200 &&510 <= mouseY && mouseY <= 540) {
            fill(3, 186, 252);
          }
          else fill(0);
          text("힐링이 되는 책", 53, 532);
          back1(0);

          break;

        case 2:
          image(computer, 0, 0, width, height);
          next1(3);
          noStroke();

          fill(220, 190);
          fill(0);
          main_text("좋아! 이걸로 정했다!");
          push();
          translate(0, 40);
          main_text("분명 맘에 들어할거야ㅎㅎ");
          pop();
          back1(1);

          break;
        case 3:
          image(computer, 0, 0, width, height);
          next1(4);

          noStroke();
          fill(220, 190);
          main_text("이제 주문만 하면 ㄷ.. 어..?");
          push();
          translate(0, 40);
          main_text("ARS 인증을 해야 하네.. 어떡하지..?");
          pop();

          actCreated = false;

          back1(2);

          break;

        case 4:
          //화면 앞에 휴대폰
          image(computer, 0, 0, width, height);

          push();
          scale(2.5);
          image(arscellphone, 0, 0, 340, 220);

          pop();

          noStroke();
          fill(220, 190);

          //back
          frame = frame + 1;
          if (30 <= frame) {
            fill(0);
            noStroke();
            textSize(15);
            textFont(bom);
            text("뒤로<<", 10, 20);
            fill(100, 50);

            if (4 <= mouseX && mouseX <= 54 && 0 <= mouseY && mouseY <= 30) {
              fill(245, 87, 66);
              noStroke();
              textSize(15);
              text("뒤로<<", 10, 20);
            }
            if (
              mouseIsPressed &&
              4 <= mouseX &&
              mouseX <= 54 &&
              0 <= mouseY &&
              mouseY <= 30
            ) {
              stage1 = 3;
              frame = 0;
              mySound.stop();
              hintSound.stop();

              input.hide();
              button.hide();
            }
          }

          noStroke();
          fill(182, 209, 240, 150);
          rect(0, 450, 800, 150);
          stroke(220, 234, 252);
          strokeWeight(3);
          fill(0);
          textFont(bom);
          textSize(25);
          text(
            "선물 주문을 위해 ARS 소리를 듣고 숫자 두 자리를 입력해주세요!",
            50,
            500
          );

          fill(0);
          rect(325, 230, 200, 100);

          fill(255);

          if (
            mouseX >= 325 &&
            mouseX <= 525 &&
            mouseY >= 230 &&
            mouseY <= 330
          ) {
            fill(255);
          } else {
            fill(120);
          }
          textFont(bom);
          text("ARS 음성 듣기", 350, 285);

          if (
            mouseIsPressed &&
            330 <= mouseX &&
            mouseX <= 530 &&
            230 <= mouseY &&
            mouseY <= 330
          ) {
            mySound.play();
          }

          if (!actCreated) {
            actCreated = true;
            input = createInput();
            input.position(300, 565);

            button = createButton("입력");
            button.position(input.x + input.width, input.y);
            button.mousePressed(arsCheck);
          }

          noStroke();
          fill(255, 255, 0);
          rectMode(CORNER);
          rect(650, 30, 120, 40, 30);
          textSize(25);
          fill(0);
          textFont(bom);
          text("힌트듣기", 666, 60);
          if (
            hint == 1 &&
            mouseX >= 650 &&
            mouseX <= 770 &&
            mouseY >= 30 &&
            mouseY <= 70
          ) {
            fill(255, 0, 0);
            textSize(25);
            textFont(bom);
            text("힌트듣기", 666, 60);
          } else if (hint < 1) {
            noStroke();
            fill(150);
            rectMode(CORNER);
            rect(650, 30, 120, 40, 30);
            fill(0);
            textFont(bom);
            text("힌트소진", 666, 60);
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
            hintSound.play();
          }

          break;

        case 5:
          actCreated = false;

          image(room, 0, 0, width, height);
          next1(6);
          main_text("휴.. 끝났다...!");
          push();
          translate(0, 40);
          main_text("소리만 있는 ARS는 역시 어렵구나...");
          pop();
          back1(4);

          break;

        case 6:
          image(room, 0, 0, 800, 600);
          stroke(209, 122, 46);
          strokeWeight(5);
          fill(255);
          textFont(bom);
          textSize(50);
          text("DAY2", 350, 230);
          frame = frame + 1;
          if (30 <= frame) {
            noStroke();
            textSize(25);
            textFont(bom);
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
          main_text("어제 선물은 준비했고...오늘은 바람 좀 쐬볼까?");

          break;
        case 1:
          image(room, 0, 0, 800, 600);
          next2(2);
          noStroke();
          fill(220, 190);
          fill(0);
          main_text("요즘 인기 많은 영화를 봐야지!");
          back2(0);

          break;
        case 2:
          image(ticketbox, 0, 0, 800, 600);
          next2(3);
          noStroke();
          fill(220);
          fill(0);
          main_text("음..그런데 지금 이 시간대에 있는 영화는 마땅치 않네");
          back2(1);

          break;

        case 3:
          image(ticketbox, 0, 0, 800, 600);

          //선택지
          twoChoose2(4, 4);
          push();
          translate(0, -5);
          main_text("그래도.. 볼까?");
          pop();
          fill(0);
          stroke(220, 234, 252);
          strokeWeight(3);
          textFont(bom);
          textSize(25);
          if (10 <= mouseX && mouseX <= 460 && 457 <= mouseY && mouseY <= 505) {
            fill(3, 186, 252);
          }
          else fill(0);
          text("지금 아니면 올 시간이 없으니 보고 가자!", 53, 479);
          if (10 <= mouseX &&mouseX <= 320 &&510 <= mouseY && mouseY <= 540) {
            fill(3, 186, 252);
          }
          else fill(0);
          text("울며겨자 먹기로 봐야지..", 53, 532);
          back2(2);

          break;
        case 4:
          movieCreated = false;
          myMovie1.stop();
          image(cinema, 0, 0, 800, 600);
          next2(5);
          noStroke();
          fill(220, 190);
          fill(0);
          textSize(25);
          textFont(bom);
          main_text("맥락은 알겠는데... 지금 정확히 뭐라고 한거지?");
          back2(3);

          break;
        case 5:
          image(cinema, 0, 0, 800, 600);
          back2(4);

          //게임 입력창
          fill(0);
          textSize(25);
          textFont(han);
          text("배우의 입 모양과 소리를 듣고 대사를 맞춰보세요!", 150, 100);
          //입력창
          input2.show();
          input2.input(newText);

          //확인 버튼
          button2.show();
          button2.mousePressed(actEvent);
          //enter를 눌러도 확인이 될 수 있게
          if (keyIsDown(ENTER)) {
            actEvent();
          }

          movieControl();
          hintControl();
          /*
      noStroke();
      fill(220, 190);
      fill(0);
      textSize(25);
      textFont(han);

      fill(247, 45, 0);
      rect(100, 150, 50, 50, 20);
      rect(100, 300, 50, 50, 20);
      fill(255);
      //재생
      triangle(110, 160, 110, 190, 140, 175);
      //정지
      rect(110, 310, 10, 30);
      rect(130, 310, 10, 30);
      
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
      
     
      noStroke();
      fill(255,255,0);
      rectMode(CORNER);
      rect(650, 30, 120, 40, 30);
      textSize(25);
      fill(0);
      textFont(bom);
      text("힌트듣기", 666, 60);
      if (hint==1 && mouseX >= 650 && mouseX <= 770 && mouseY >= 30 && mouseY <= 70) {
        fill(255, 0, 0);
        textSize(25);
      textFont(bom);
      text("힌트듣기", 666, 60);
      } else if (hint < 1){
              noStroke();
      fill(150);
      rectMode(CORNER);
      rect(650, 30, 120, 40, 30);
        fill(0);
      textFont(bom);
      text("힌트소진", 666, 60);
      }
      if ( hint==1 &&
        mouseIsPressed &&
        mouseX >= 650 &&
        mouseX <= 770 &&
        mouseY >= 30 &&
        mouseY <= 70
      ) {
        hint = -999;
        mvSound1.play();
      }
      */

          break;
        case 6:
          movieCreated = false;
          myMovie1.stop();
          image(cinema, 0, 0, 800, 600);
          //오답일 경우
          next2(7);
          noStroke();
          fill(220, 190);
          fill(0);
          main_text("대사가 궁금하긴 했는데, 모르고 지나가서 조금은 아쉽다");

          back2(5);

          break;
        case 7:
          movieCreated = false;
          myMovie1.stop();
          image(cinema, 0, 0, 800, 600);
          //오답일 경우 2일차 끝
          next2(9);
          noStroke();
          fill(220, 190);
          fill(0);
          main_text("그래도 연기도 좋았고, 영화 영상미도 좋았어!");
          back2(6);

          break;

        case 8:
          movieCreated = false;
          myMovie1.stop();
          image(cinema, 0, 0, 800, 600);
          //정답일 경우 2일차 끝
          next2(9);
          noStroke();
          fill(220, 190);
          fill(0);
          main_text("정말 대사 잘 썼네! 엄청 재밌게 봤다 ㅎㅎ");
          back2(5);

          break;
        case 9:
          image(room, 0, 0, 800, 600);
          stroke(209, 122, 46);
          strokeWeight(5);
          fill(255);
          textFont(bom);
          textSize(50);
          text("DAY3", 350, 230);
          frame = frame + 1;

          if (30 <= frame) {
            noStroke();
            textSize(25);
            textFont(bom);
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

        case 38:
          story3_38(); //에필로그 
          if (keyCode === ENTER) {
            resetAll();
          }
          break;    

        default:
          break;
      }
      break;
  }

  //1일차
  function arsCheck() {
    let name = input.value();
    input.value("");

    if (name == 25) {
      stage1 = stage1 + 1;
      frame = 0;

      mySound.stop();
      hintSound.stop();

      input.hide();
      button.hide();
    } else {
      stage1 = stage1;
    }
  }
}

function resetAll() {
  stage0 = 0;
  stage1 = 0;
  stage2 = 0;
  stage3 = 0;
  frame = 0;
  days = 3;
  hint = 1;
  phone = 500;
  speed = 20;
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
  px[0] = 4400;
  px[1] = 4900;
  px[2] = 4850;
  px[3] = 5200;
  px[4] = 5800; 
  game3_playing = false;
  st3 = 0
}
