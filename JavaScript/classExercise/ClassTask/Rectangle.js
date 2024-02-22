const Shape = require("./Shape");

class Rectangle extends Shape{
    constructor(name,side1,side2){
        super(name) 
        this.side1 = side1
        this.side2 = side2
    }
    getArea(){
        return this.side1 * this.side2
    }
    isSquare(){
        if(this.side1 === this.side2){
            return true
        }
        return false
    }
}
module.exports = Rectangle 