let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  //rectangle gris
  ctx.fillRect(100, 200, 800, 1400);
  ctx.fillStyle= "grey";

  // rectangle vert
  ctx.fillRect(160, 200, 680, 1600);
  ctx.fillStyle = "green";

  // ligne blanche de gauche
  ctx.clearRect(180, 200, 20, 1600);

  //ligne blanche de droite
  ctx.clearRect(800, 200, 20, 1600)

  // ligne du milieu
  for (let i = 250; i < 1600; i+= 100){
    ctx.clearRect(500, i, 10, 50)
  }
  

  // TODO

  //
  // Iteration 2: car drawing
  //
 


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

  // TODO
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
  car = new Car()
  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
