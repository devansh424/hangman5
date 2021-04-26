var words = ["NONPLUSSED", "INCHOATE", "PANACHE", "INDEFATIGABLE"];
// meaning of word 1  “Filled with bewilderment”
// meaning of word 2  “Only partly in existence; imperfectly formed”
// meaning of word 3  “distinctive and stylish elegance,”
// meaning of word 4  “Showing sustained enthusiastic action with unflagging vitality”

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
var clickSound;
var button = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var answerArray = [];
var num1,num2,num3,num4,num5,num6;

function preload() {
  clickSound=loadSound("sound/clickbutton.mp3");
}

function setup() {
  createCanvas(550, 600);
  background("pink");
}

function draw() {

  stroke("gray");
  line(250, 100, 250, 350); //gallows
  line(250, 100, 300, 100); //top line
  line(200, 350, 350, 350); //base line
  line(300, 100, 300, 150); //rope

  fill("pink");
  num1 = circle(300, 160, 50); //head
  fill(255);
  num2 = line(300, 185, 300, 260); //body
  num3 = line(300, 195, 280, 250); //left hand
  num4 = line(300, 195, 320, 250); //right hand
  num5 = line(300, 255, 280, 320); //left leg
  num6 = line(300, 255, 320, 320); //right leg

  b1 = createButton(button[0]);
  b1.position(120, 400);
  b1.mousePressed(() => {
    checkLetter(button[0]);
  });

  b1 = createButton(button[1]);
  b1.position(150, 400);
  b1.mousePressed(() => {
    checkLetter(button[1]);
  })

  b1 = createButton(button[2]);
  b1.position(180, 400);
  b1.mousePressed(() => {
    checkLetter(button[2]);
  })

  b1 = createButton(button[3]);
  b1.position(210, 400);
  b1.mousePressed(() => {
    checkLetter(button[3]);
  })

  b1 = createButton(button[4]);
  b1.position(240, 400);
  b1.mousePressed(() => {
    checkLetter(button[4]);
  })

  b1 = createButton(button[5]);
  b1.position(270, 400);
  b1.mousePressed(() => {
    checkLetter(button[5]);
  })

  b1 = createButton(button[6]);
  b1.position(300, 400);
  b1.mousePressed(() => {
    checkLetter(button[6]);
  })

  b1 = createButton(button[7]);
  b1.position(330, 400);
  b1.mousePressed(() => {
    checkLetter(button[7]);
  })

  b1 = createButton(button[8]);
  b1.position(360, 400);
  b1.mousePressed(() => {
    checkLetter(button[8]);
  })

  b1 = createButton(button[9]);
  b1.position(385, 400);
  b1.mousePressed(() => {
    checkLetter(button[9]);
  })

  b1 = createButton(button[10]);
  b1.position(415, 400);
  b1.mousePressed(() => {
    checkLetter(button[10]);
  })

  b1 = createButton(button[11]);
  b1.position(120, 430);
  b1.mousePressed(() => {
    checkLetter(button[11]);
  })

  b1 = createButton(button[12]);
  b1.position(150, 430);
  b1.mousePressed(() => {
    checkLetter(button[12]);
  })

  b1 = createButton(button[13]);
  b1.position(180, 430);
  b1.mousePressed(() => {
    checkLetter(button[13]);
  });

  b1 = createButton(button[14]);
  b1.position(210, 430);
  b1.mousePressed(() => {
    checkLetter(button[14]);
  });

  b1 = createButton(button[15]);
  b1.position(240, 430);
  b1.mousePressed(() => {
    checkLetter(button[15]);
  });

  b1 = createButton(button[16]);
  b1.position(270, 430);
  b1.mousePressed(() => {
    checkLetter(button[16]);
  });

  b1 = createButton(button[17]);
  b1.position(300, 430);
  b1.mousePressed(() => {
    checkLetter(button[17]);
  });

  b1 = createButton(button[18]);
  b1.position(330, 430);
  b1.mousePressed(() => {
    checkLetter(button[18]);
  });

  b1 = createButton(button[19]);
  b1.position(360, 430);
  b1.mousePressed(() => {
    checkLetter(button[19]);
  });

  b1 = createButton(button[20]);
  b1.position(385, 430);
  b1.mousePressed(() => {
    checkLetter(button[20]);
  });

  b1 = createButton(button[21]);
  b1.position(415, 430);
  b1.mousePressed(() => {
    checkLetter(button[21]);
  });

  b1 = createButton(button[22]);
  b1.position(230, 460);
  b1.mousePressed(() => {
    checkLetter(button[22]);
  });

  b1 = createButton(button[23]);
  b1.position(263, 460);
  b1.mousePressed(() => {
    checkLetter(button[23]);
  });

  b1 = createButton(button[24]);
  b1.position(290, 460);
  b1.mousePressed(() => {
    checkLetter(button[24]);
  });

  b1 = createButton(button[25]);
  b1.position(318, 460);
  b1.mousePressed(() => {
    checkLetter(button[25]);
  });

  b2 = createButton('Hint ?');
  b2.position(100,200);
  b2.mousePressed(() =>{
    hint();
    clickSound.play();
  });
  

  for (var j = 0; j < word.length; j++) {
    text("_",  j* 20 + 200, 375);
  }

  function checkLetter(r) {
    console.log(r)
    for (var i = 0; i < word.length; i++) {
      clickSound.play();
      if (r === word[i]) {
        fill("black");
        text(r, i * 20 + 200, 370);
        answerArray[i] = r;
        console.log(answerArray);
      }else{

      }

      var x = answerArray.join('');
      if (x === word) {
        console.log(x) ;
        fill("red") ;
        textSize(28) ;
        text("YOU WON", 200, 70);
      }
    }
  }
}

function hint(){
  if(words[0]===word || words[1]===word || words[2]===word || words[3]===word){
    if(words[0]===word){
      text("Hint - meaning of the word - Filled with bewilderment",50,500);
    }else if(words[1]===word){
      text("Hint - meaning of the word - Only partly in existence; imperfectly formed",50,500);
    }else if(words[2]===word){
      text("Hint - meaning of the word - distinctive and stylish elegance",50,500);
    }else if(words[3]===word){
      text("Hint - meaning of the word - Showing sustained enthusiastic action with unflagging vitality",10,500);
    }
  }
}

function reset(){

}