//게임 관련 함수 정리

function newText(){
  console.log(this.value());
}

function actEvent() {
  // words that split to several pieces and be checked by original acting lines
  
  let inputMsg = input2.value();
  let words = inputMsg.split(" ");
  console.log(words);
  
  if (words.includes("계획이") || words.includes("계획") == true) {

    stage2 = 8;
    frame = 0;
    //value값 초기화하고 나머지 애들 숨기기
    input2.value(null);
    input2.hide();
    button2.hide();
    myMovie1.hide();
 
    
  } else {
    
    stage2 = 6;
    frame = 0; 
    //value 값 초기화하고 나머지 애들 숨기기
    input2.value(null);
    input2.hide();
    button2.hide(); 
    myMovie1.hide();
   
  }
}

function movieControl(){
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
}

function hintControl(){
  
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
}
