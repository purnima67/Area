const cylinder = {
    radius: 5,
    height:10,
    area: function(){
        const pi =3.14159;
        return pi * this.radius * this.radius * this.height;
    }
    };

console.log("area of the cylinder is:", cylinder.area())