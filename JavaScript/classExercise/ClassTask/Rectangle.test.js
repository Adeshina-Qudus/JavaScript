const Rectangle = require('./Rectangle')
test("areaOfRectangleAndIsNotSquarishTest",()=>{
    let side1 = 5;
    let side2 = 4;
    const rectangle = new Rectangle("rec",side1,side2)
    let output = rectangle.getArea()
    expect(output).toBe(20)
    let isSquareOutput = rectangle.isSquare()
    expect(isSquareOutput).toBe(false)
})

test("areaOfRectangleAndIsSquarishTest",()=>{
    let side1 = 5;
    let side2 = 5;
    const rectangle = new Rectangle("rec",side1,side2)
    let output = rectangle.getArea()
    expect(output).toBe(25)
    let isSquareOutput = rectangle.isSquare()
    expect(isSquareOutput).toBe(true)
})