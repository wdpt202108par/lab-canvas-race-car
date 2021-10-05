let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Exectuer toutes les 16ms
  //

  // Iteration 1: road drawing
  //green rectangle
  ctx.fillStyle = 'green';
  ctx.fillRect(100,100,W,H);

  //gray rectangle
  ctx. fillStyle = 'gray';
  ctx.fillRect(200,100, W -300, H);

  // white rectangle
  ctx.fillStyle = 'white';
  ctx.fillRect(250,100, W -400, H);

  // gray inside rectangle
  ctx.fillStyle = 'gray';
  ctx.fillRect(300,100, W -500, H);

  // refactoring : for (let i= 0; i < ; i--)
  //Road middle white line 
  ctx.fillStyle = 'white';
  ctx.fillRect(550,150, W -985, H -1520);

  ctx.fillStyle = 'white';
  ctx.fillRect(550,300, W -985, H -1520);

  ctx.fillStyle = 'white';
  ctx.fillRect(550,450, W -985, H -1520);

  ctx.fillStyle = 'white';
  ctx.fillRect(550,600, W -985, H -1520);

  ctx.fillStyle = 'white';
  ctx.fillRect(550,750, W -985, H -1520);

  ctx.fillStyle = 'white';
  ctx.fillRect(550,900, W -985, H -1520);

  ctx.fillStyle = 'white';
  ctx.fillRect(550,1050, W -985, H -1520);

  ctx.fillStyle = 'white';
  ctx.fillRect(550,1200, W -985, H -1520);

  ctx.fillStyle = 'white';
  ctx.fillRect(550,1350, W -985, H -1520);

  ctx.fillStyle = 'white';
  ctx.fillRect(550,1500, W -985, H -1520);
  
  // TODO

  //
  // Iteration 2: car drawing
  //

  car.draw()

  // TODO

  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;

  switch (e.key) {
    case 'ArrowLeft' :
      car.moveLeft()
      break;
    case 'ArrowRight' : 
      car.moveRight()
      break;
  }
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  // TODO
  car = new Car();
  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
