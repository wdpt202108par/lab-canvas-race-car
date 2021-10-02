class Car {
  constructor() {
    const img = document.createElement('img');

    img.onload = () => {
      this.img = img;

      // TODO
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 100;
      this.h = this.w / imgRatio;
      this.x = 500;
      this.y = 1600 - this.h;

      this.draw();
      
    }
    img.src = "../images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    // TODO
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

 moveLeft() {
    // TODO
    if (this.x === 0) {
      this.x = 0
    } else {
      this.x -=25;
    }
  }
    
  moveRight(){
    if (this.x === 1000) {
      this.x = 1000
    } else {
      this.x += 25;
    } 
  } 
}
