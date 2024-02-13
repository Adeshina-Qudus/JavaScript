const {takingZeroToTheBack} = require("./TakingZeroBack")
test("testInput",()=>{
    let input =  [0,4,2,0,5]
    let output = [4,2,5,0,0]
    let method = takingZeroToTheBack(input)
    expect(method).toEqual(output)
})
test("secondtest",()=>{
    let input =  [4,0,0,5,7]
    let output = [4,5,7,0,0]
    let method = takingZeroToTheBack(input)
    expect(method).toEqual(output)
})