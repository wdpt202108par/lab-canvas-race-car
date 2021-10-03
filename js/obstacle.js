function random(from, to) {
  return Math.floor(Math.random() * (to - from) + from);
  // TODO
}

class Obstacle {
  constructor() {
    this.w = random(200, W-300-340);
    this.h = 50;
    this.x = random(170,W-this.w-170);
    this.y = 0;
    // TODO
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.w, this.h);
  

    // TODO
  }

  hits(car) {
    // TODO
  }
}