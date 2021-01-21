var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var player1Score=0;
var player2Score=0;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
     if(player1Score===50){
       fill("pink")
       text("Player1 is the WINNER",350,350)
       game.update(2);

     }
     if(player2Score===50){
       fill("pink")
      text("Player2 is the WINNER",350,350);

      game.update(2);
    }
   }
   if (gameState === 2) {
     textSize(100);
     fill("yellow")
     
    text("GAME OVER",200,300)
     game.end();
   }

   text("P1_Score : "+player1Score,20,50);
   text("P2_Score : "+player2Score,20,100);
}
