class Car {
  constructor(img,width,height,x,y) {
    const img = document.createElement('img');
    img.onload = function() {
      this.img = img;
      this.w = width;
      this.h = height;
      this.y = y;
      const imgRatio = img.naturalWidth/img.naturalHeight;
      // TODO
    
    }
    img.src = "images/car.png";
  }
  putCar(){
    const ctx = document.querySelector('canvas').getContext('2d');
    ctx.drawImage(img, 0, 0, 100,150);
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