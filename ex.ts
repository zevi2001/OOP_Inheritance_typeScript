class Rectangle {
  hight: number;
  width: number;
  constructor(hight: number, width: number) {
    this.hight = hight;
    this.width = width;
  }
  arae() {
    return this.hight * this.width;
  }
  info() {
    return "this is a Rectangle";
  }
}
class Square extends Rectangle {
  rib: number;

  constructor(hight: number, width: number, rib: number) {
    super(hight, width);
    this.rib = rib;
  }
  arae() {
    return this.rib * 4;
  }
}
class Shape extends Rectangle {
  info() {
    return "this is a Shape";
  }
}
class ColoredRectangle extends Rectangle {
  color: string;
  constructor(color: string, hight: number, width: number) {
    super(hight, width);
    this.color = color;
  }
  info() {
    return "this is a Rectangle with " + this.color + " color";
  }
}
