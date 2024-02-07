const {intersection} = require('./MinimumInTwoArray')
test("Minumum in two array ",() =>{
    let array = [2,3,5,6,7,8]
    let array1 = [1,3,7,10,11,8]
    let output = intersection(array,array1)
    expect(output).toBe(3)
})
module.exports = {intersection}

