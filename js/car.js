class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      // une fois mon image chargee

      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight; // 50/100 = .5

      // TODO
      this.x = 0
      this.y = 0
      this.w = 100
      this.h = this.w / imgRatio
    }
    img.src = "images/car.png"; // telecharger l'image
  }
  putCar(){
    
  }

  draw() {
    
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    // TODO
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveLeft() {
    // TODO
  }
  moveRight() {
    // TODO
  }
}
