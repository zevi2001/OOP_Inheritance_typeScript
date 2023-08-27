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
