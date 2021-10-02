class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      // TODO
      //ctx.drawImage(this.img, 500, 1600);
      //this.w = 100;
      //this.h = 
      //this.x = 
      //this.y = 

    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    // TODO
    
  }

  moveLeft() {
    // TODO
  }
  moveRight() {
    // TODO
  }
}