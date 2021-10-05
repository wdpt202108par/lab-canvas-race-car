class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      // une fois mon image chargee

      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight; // 50/100 = .5

      // TODO
      this.x = (W / 2) + 10
      this.y = H - 250
      this.w = 100
      this.h = this.w / imgRatio
    }
    img.src = "images/car.png"; // telecharger l'image
  }

  draw() {
    
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    // TODO
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveLeft() {
    this.x -= 20
  }

  moveRight() {
    this.x += 20
    if (this.x > (W / 2)) this.x = 0
  }
}