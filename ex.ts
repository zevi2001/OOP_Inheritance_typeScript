// class Rectangle {
//   hight: number;
//   width: number;
//   constructor(hight: number, width: number) {
//     this.hight = hight;
//     this.width = width;
//   }
//   arae() :number{
//     return this.hight * this.width;
//   }
//   info():string {
//     return "this is a Rectangle";
//   }
//   scale(num: number, str: string) {
//     if (str === "hight") {
//       this.hight = num;
//     } else if (str === "width") {
//       this.width = num;
//     }
//   }

// }

class Shape {
  draw(): string {
    return "this is a Shape";
  }
}
class Square extends Shape {
  // rib: number;
  // constructor(hight: number, width: number, rib: number) {
  //   super(hight, width);
  //   this.rib = rib;
  // }
  // arae() :number{
  //   return Math.pow(this.rib,this.rib);
  // }

  draw() {
    return "this is a Rectangle";
  }
}
class Triangle extends Shape {
  draw() {
    return "this is a Triangle";
  }
}
class Circle extends Shape {
  draw() {
    return "this is a Circle";
  }
}
function renderShapes(array: Shape[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].draw());
  }
}
const S = new Square();
const T = new Triangle();
const SI = new Circle();
renderShapes([S, T, SI]);
