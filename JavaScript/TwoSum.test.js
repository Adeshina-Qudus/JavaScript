const {twoSum} = require("./TwoSum")
test("TwoSumTest",()=>{
    let inputArray = [2,7,11,15]
    let target = 9
    let output = twoSum(inputArray,target)
    expect(output).toEqual([0,1])
})