
const {Duplicate} = require("./Duplicate")
test("duplicate numbers test",()=>{
    let input = [7,8,9,5,7,6,5]
    let output = Duplicate(input)
    expect(output).toEqual(output)
})