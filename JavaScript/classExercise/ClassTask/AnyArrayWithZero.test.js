const {turnArrayElementToZero} = require("./AnyArrayWithZero")
test("test",()=>{
    let input = [[0,5],[2,3]]
    let output = [[0,0],[2,3]]
    let operation = turnArrayElementToZero(input)
    expect(operation).toEqual(output)
})
test("secondTest",()=>{
    let input = [[2,3],[1,0],[5,3]];
    let output = [[2,3],[0,0],[5,3]]
    let operation = turnArrayElementToZero(input)
    expect(operation).toEqual(output)
})