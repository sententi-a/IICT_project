/*****꼭 index.html 파일에 import 해주세요!*****/

function standing(n) {
  if(n==0) {
 
    push();
    translate(width/2, 500);
    rotate(map(sin(wobble1), -1, 1, QUARTER_PI/20, -QUARTER_PI/40));
    image(man[5], -130, -380, 300, 600);
    pop();
    
      
    push();
    translate(width/2 + 250, 300);
    rotate(map(sin(wobble3), -1, 1, QUARTER_PI/80, - QUARTER_PI/80));
    image(lperson[5], -80, -120, 150, 600);
    pop();
    
    push();
    translate(width/2 + 150, 500);
    rotate(map(sin(wobble2), -1, 1, -QUARTER_PI/40, QUARTER_PI/40));
    image(man[2], -150, -400, 300, 600);
    pop();
    
    
    push();
    translate(width/2 + 250, 300);
    rotate(map(sin(wobble3), -5, 5, QUARTER_PI/80, - QUARTER_PI/80));
    image(man[0], -100, -200, 300, 600);
    pop();
    
    push();
    translate(width/2 - 250, 300);
    rotate(map(sin(wobble4), -1, 1, QUARTER_PI/100, - QUARTER_PI/100));
    image(man[3], -10, -200, 300, 600);
    pop();
    
    push();
    translate(width/2 - 500 , 0);
    rotate(map(sin(wobble5), -1, 1, -QUARTER_PI/100, QUARTER_PI/100));
    image(man[6], 0, 80, 300, 600);
    pop();
    
    push();
    translate(width/2 - 150, 300);
    rotate(map(sin(wobble6), -1, 1, -QUARTER_PI/60, QUARTER_PI/60));
    image(man[7], -250, -160, 300, 600);
    pop();
      
    push();
    translate(width/2 - 150, 300);
    rotate(map(sin(wobble6), -1, 1, -QUARTER_PI/60, QUARTER_PI/60));
    image(rperson[0], -20, -140, 300, 600);
    pop();
      
      
    
    wobble1 += 0.07;
    wobble2 += 0.05;
    wobble3 += 0.03;
    wobble4 += 0.04;
    wobble5 += 0.02;
    wobble6 += 0.06;
    
 
  }

  else if (n == 1) {
    push();
    translate(width/2 + 250, 300);
    rotate(map(sin(wobble3), -1, 1, QUARTER_PI/60, - QUARTER_PI/60));
    image(man[0], -330, -170, 300, 600);
    pop();
      
    push();
    translate(width/2 - 500 , 0);
    rotate(map(sin(wobble5), -1, 1, -QUARTER_PI/100, QUARTER_PI/100));
    image(man[6], 700, 80, 300, 600);
    pop();
      
    push();
    translate(width/2, 500);
    rotate(map(sin(wobble1), -1, 1, QUARTER_PI/20, -QUARTER_PI/40));
    image(man[5], -210, -380, 300, 600);
    pop();
    
    push();
    translate(width/2 + 150, 500);
    rotate(map(sin(wobble2), -1, 1, -QUARTER_PI/40, QUARTER_PI/40));
    image(man[2], -80, -400, 300, 600);
    pop();
  
    
    push();
    translate(width/2 - 250, 300);
    rotate(map(sin(wobble4), -1, 1, QUARTER_PI/100, - QUARTER_PI/100));
    image(man[3], -170, -200, 300, 600);
    pop();
    
   
    
    push();
    translate(width/2 - 150, 300);
    rotate(map(sin(wobble6), -1, 1, -QUARTER_PI/60, QUARTER_PI/60));
    image(man[7], -150, -160, 300, 600);
    pop();
    
    wobble1 += 0.07;
    wobble2 += 0.03;
    wobble3 += 0.05;
    wobble4 += 0.04;
    wobble5 += 0.02;
    wobble6 += 0.06;
  }

  else {
    push();
    translate(width/2 + 250, 300);
    rotate(map(sin(wobble3), -1, 1, QUARTER_PI/60, - QUARTER_PI/60));
    image(man[0], -660, -170, 300, 600);
    pop();
      
    push();
    translate(width/2 - 500 , 0);
    rotate(map(sin(wobble5), -1, 1, -QUARTER_PI/100, QUARTER_PI/100));
    image(man[6], 700, 100, 300, 600);
    pop();
      
    push();
    translate(width/2, 500);
    rotate(map(sin(wobble1), -1, 1, QUARTER_PI/20, -QUARTER_PI/40));
    image(man[5], -20, -400, 300, 600);
    pop();
    
    push();
    translate(width/2, 500);
    rotate(map(sin(wobble2), -1, 1, -QUARTER_PI/100, QUARTER_PI/20));
    image(man[2], -260, -400, 300, 600);
    pop();

    
    push();
    translate(width/2 - 250, 300);
    rotate(map(sin(wobble4), -1, 1, QUARTER_PI/100, - QUARTER_PI/100));
    image(man[3], 340, -180, 300, 600);
    pop();
    
  
    
    push();
    translate(width/2 - 150, 300);
    rotate(map(sin(wobble6), -1, 1, -QUARTER_PI/60, QUARTER_PI/60));
    image(man[7], 40, -160, 300, 600);
    pop();
    
    wobble1 += 0.03;
    wobble2 += 0.04;
    wobble3 += 0.02;
    wobble4 += 0.04;
    wobble5 += 0.02;
    wobble6 += 0.03;
  }
}
