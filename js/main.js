let car;
let obstacles = [];
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  //
  ctx.fillStyle = 'green';
  ctx.fillRect(0,0, 100, 1600);
  ctx.fillRect(900,0,100,1600);

  ctx.fillStyle = 'gray';
  ctx.fillRect(100,0, 800, 1600);

  ctx.fillStyle = 'white';
  ctx.fillRect(130,0, 30, 1600);
  ctx.fillRect(840,0,30,1600);

  ctx.beginPath();
  ctx.setLineDash([60,50]);
  ctx.moveTo(500,0);
  ctx.lineTo(500,1600);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 10;
  ctx.stroke();

  //
  // Iteration 2: car drawing
  //
  car.draw();

  //
  // Iteration #4: obstacles
  //
  obstacles.map(obstacle => obstacle.draw());

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

  // TODO
  if (e.keyCode === 37) {
    car.moveLeft()
  } else if (e.keyCode === 39) {
    car.moveRight()
  }
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if(frames % 120 === 0){
    obstacles.map(obstacle => obstacle.update())
    obstacles.push(new Obstacle());
  }


  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }

  obstacles.map(obstacle => obstacle.hits(car))
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
