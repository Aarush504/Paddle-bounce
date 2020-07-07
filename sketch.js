var ball,paddle;
var ballimg, paddleimg;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimg = loadImage("ball.png");
  paddleimg = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
   ball= createSprite(200,200,30,30);
   paddle = createSprite(30,200,20,80);
  
  ball = addImage("ball",ballimg);
  paddle = addImage("paddle",paddleimg);
  
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
 edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
 // ball.bounceOff(edges[4]);
   
  

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y + 20;
  }
  
  randomVelocity();
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  if(ball.isTouching(edges[1]) || ball.isTouching(edges[2]) || ball.isTouching(edges[3]) || ball.isTouching(paddle)){
  ball.velocityY = random(1,8);
  }
}

