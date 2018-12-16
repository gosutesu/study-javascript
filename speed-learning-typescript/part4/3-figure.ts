interface Figure {
    getArea() : number;
}

class Triangle implements Figure {
    constructor(private width : number , protected height : number) {}

    getArea() :number {
        return this.width * this.height / 2;
    }
}

let p3 = new Triangle(10,5);
console.log(p3.getArea());
