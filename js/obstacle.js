function random(from, to) {
  // TODO
}

class Obstacle {
  constructor() {
    var minX = 300;
    var maxX = 800;

    var minW = 200;
    var maxW = (maxX - minX) - 100 // 800-300 - car.w

    //this.x = random avec minX et maxX
    //this.y = 0
    //this.w = random avec minW et maxW (en fonction de this.x )
    //this.h = 30

    //le faire descendre vers la voiture 
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }

  hits(car) {
    // TODO
  }
}