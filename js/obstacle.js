function random(from, to) {
  // TODO
  return Math.floor(Math.random() * (to - from) + from);
}

class Obstacle {
  constructor() {
    // TODO
    this.w = random(200, W-300-340);
    this.h = 50;
    this.x = random(170,W-this.w-170);
    this.y = 0;
  }

  draw() {
    // TODO
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update() {
    this.y += 450;
  }

  hits(car) {
    // TODO
  }
}