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
    translate(width/2 , 300);
    rotate(map(sin(wobble3), -1, 1, QUARTER_PI/80, - QUARTER_PI/80));
    image(rperson[5], -250, -140, 150, 600);
    pop();
    
    push();
    translate(width/2 + 250, 300);
    rotate(map(sin(wobble3), -5, 5, QUARTER_PI/80, - QUARTER_PI/80));
    image(man[0], -100, -200, 300, 600);
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
    translate(width/2 , 0);
    rotate(map(sin(wobble3), -1, 1, QUARTER_PI/80, - QUARTER_PI/80));
    image(lperson[1], -440, 100, 300, 600);
    pop();
      
    push();
    translate(width/2 - 150, 300);
    rotate(map(sin(wobble6), -1, 1, -QUARTER_PI/60, QUARTER_PI/60));
    image(rperson[0], -20, -140, 300, 600);
    pop();
      
    push();
    translate(width/2 - 300, 250);
    rotate(map(sin(wobble4), -1, 1, QUARTER_PI/100, - QUARTER_PI/100));
    image(man[3], -10, -200, 400, 800);
    pop();
    
    push();
    translate(width/2 , 300);
    rotate(map(sin(wobble2), -1, 1, -QUARTER_PI/80, QUARTER_PI/100));
    image(man[2], -20, -210, 300, 600);
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
    translate(width/2, 500);
    rotate(map(sin(wobble5), -1, 1, QUARTER_PI/120, -QUARTER_PI/120));
    image(rperson[6], 70, -350, 150, 600);
    pop();
      
    push();
    translate(width/2 + 250, 300);
    rotate(map(sin(wobble3), -1, 1, QUARTER_PI/60, - QUARTER_PI/60));
    image(man[0], -330, -170, 300, 600);
    pop();
      
    push();
    translate(width/2, 500);
    rotate(map(sin(wobble5), -1, 1, QUARTER_PI/120, -QUARTER_PI/120));
    image(lperson[6], -60, -330, 150, 600);
    pop();
      
    push();
    translate(width/2 - 500 , 0);
    rotate(map(sin(wobble5), -1, 1, -QUARTER_PI/100, QUARTER_PI/100));
    image(man[6], 700, 80, 300, 600);
    pop();
      
    push();
    translate(width/2, 500);
    rotate(map(sin(wobble1), -1, 1, QUARTER_PI/20, -QUARTER_PI/40));
    image(man[5], -210, -410, 300, 600);
    pop();
      
    push();
    translate(width/2, 500);
    rotate(map(sin(wobble1), -1, 1, QUARTER_PI/120, -QUARTER_PI/120));
    image(lperson[5], -420, -340, 150, 600);
    pop();
      
    push();
    translate(width/2, 500);
    rotate(map(sin(wobble5), -1, 1, QUARTER_PI/120, -QUARTER_PI/120));
    image(rperson[2], 160, -360, 300, 600);
    pop();
      
    push();
    translate(width/2, 500);
    rotate(map(sin(wobble5), -1, 1, QUARTER_PI/120, -QUARTER_PI/120));
    image(lperson[0], -430, -360, 300, 600);
    pop();
     
    push();
    translate(width/2 - 150, 300);
    rotate(map(sin(wobble4), -1, 1, QUARTER_PI/100, - QUARTER_PI/100));
    image(man[3], 0, -240, 350, 750);
    pop();
    
    push();
    translate(width/2 + 250, 300);
    rotate(map(sin(wobble4), -1, 1, QUARTER_PI/100, - QUARTER_PI/100));
    image(man[4], -170, -200, 300, 600);
    pop();
    
    push();
    translate(width/2 - 150, 300);
    rotate(map(sin(wobble6), -1, 1, -QUARTER_PI/60, QUARTER_PI/60));
    image(man[7], -150, -160, 300, 600);
    pop();
      
    push();
    translate(width/2 - 300, 500);
    rotate(map(sin(wobble2), -1, 1, -QUARTER_PI/40, QUARTER_PI/40));
    image(man[2], -80, -430, 350, 650);
    pop(); 
    
    wobble1 += 0.03;
    wobble2 += 0.03;
    wobble3 += 0.05;
    wobble4 += 0.04;
    wobble5 += 0.02;
    wobble6 += 0.06;
  }

  else {
    push();
    translate(width/2, 100);
    rotate(map(sin(wobble2), -1, 1, -QUARTER_PI/100, QUARTER_PI/100));
    image(rperson[7], -240, 50, 150, 600);
    pop();
      
    push();
    translate(width/2 + 250, 300);
    rotate(map(sin(wobble3), -1, 1, QUARTER_PI/60, - QUARTER_PI/60));
    image(man[0], -660, -170, 300, 600);
    pop();
        
    push();
    translate(width/2, 100);
    rotate(map(sin(wobble2), -1, 1, -QUARTER_PI/100, QUARTER_PI/100));
    image(rperson[1], -200, 0, 300, 600);
    pop();
  
    push();
    translate(width/2 - 500 , 0);
    rotate(map(sin(wobble5), -1, 1, -QUARTER_PI/100, QUARTER_PI/100));
    image(man[6], 700, 100, 300, 600);
    pop();
        
    push();
    translate(width/2, 100);
    rotate(map(sin(wobble2), -1, 1, -QUARTER_PI/100, QUARTER_PI/100));
    image(rperson[8], 250, 50, 150, 600);
    pop();
      
    push();
    translate(width/2, 500);
    rotate(map(sin(wobble1), -1, 1, QUARTER_PI/40, -QUARTER_PI/40));
    image(man[5], -20, -400, 300, 600);
    pop();
    
    push();
    translate(width/2 , 300);
    rotate(map(sin(wobble1), -1, 1, QUARTER_PI/100, - QUARTER_PI/100));
    image(man[3], -490, -200, 300, 600);
    pop();
      
    push();
    translate(width/2, 480);
    rotate(map(sin(wobble2), -1, 1, -QUARTER_PI/80, QUARTER_PI/80));
    image(lperson[2], 30, -400, 300, 600);
    pop();   
    
    push();
    translate(width/2 - 150, 300);
    rotate(map(sin(wobble6), -1, 1, -QUARTER_PI/60, QUARTER_PI/60));
    image(man[7], 50, -180, 300, 600);
    pop();
      
    push();
    translate(width/2, 480);
    rotate(map(sin(wobble2), -1, 1, -QUARTER_PI/100, QUARTER_PI/20));
    image(man[4], -260, -400, 300, 600);
    pop();
      
    push();
    translate(width/2+100, 480);
    rotate(map(sin(wobble2), -1, 1, -QUARTER_PI/100, QUARTER_PI/100));
    image(man[2], 0, -400, 300, 600);
    pop();
    
    wobble1 += 0.03;
    wobble2 += 0.04;
    wobble3 += 0.02;
    wobble4 += 0.04;
    wobble5 += 0.02;
    wobble6 += 0.03;
  }
}
