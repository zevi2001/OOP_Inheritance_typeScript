class Rectangle {
hight:number;
width:number;

constructor(hight:number,width:number) {
  this.hight=hight
  this.width=width
}
 arae(){
  return this.hight*this.width;
 }
}
class Square extends Rectangle{
rib:number;

constructor(hight:number,width:number,rib:number) {
  super(hight,width);
  this.rib=rib
}
arae(){
  return this.rib*4;
 }
}