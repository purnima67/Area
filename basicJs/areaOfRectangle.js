function area(){
    return this.length * this.breadth;
}


const square = {
    length :5,
    breadth: 5,
    area: area
}

const rectangle = {
    length:5,
    breadth:2,
    area:area
}

console.log("area of the rectangle is:" , square.area());
console.log("area of the rectangle is:", rectangle.area());