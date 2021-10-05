let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  // Iteration 1: road drawing

  //rectangle vert
  ctx.fillStyle = "green";
  ctx.fillRect(0, 200, W, H);
  

  // rectangle gris
  ctx.fillStyle= "grey";
  ctx.fillRect(50, 200, 900, H);
  

  // ligne blanche de gauche
  ctx.clearRect(70, 200, 20, H);

  //ligne blanche de droite
  ctx.clearRect(910, 200, 20, H)

  // ligne blanche du milieu
  for (let i = 250; i < 1600; i+= 100){
    ctx.clearRect(500, i, 10, 50)
  }
  
  // Iteration 2: car drawing
  car.draw();
   
  // Iteration #4: obstacles
  
  // Iteration #5: collisions
  
  // Iteration #6: points
  

}

document.onkeydown = function (e) {
  if (!car) return;

  // TODO
  switch (e.key){
    case 'ArrowLeft': 
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
