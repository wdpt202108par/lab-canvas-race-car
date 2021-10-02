class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      // TODO
      this.w = 100;
      this.h = 100/imgRatio;
      this.x = 455;
      this.y = 1390;
      this.draw();
    
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    // TODO
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveLeft() {
    // TODO
    if (this.x >90){
    this.x -=10;
    }
  }
  moveRight() {
    // TODO
    if(this.x<810){
    this.x +=10;
    }
  }
}