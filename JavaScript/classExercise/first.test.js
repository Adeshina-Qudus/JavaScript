const {sum} = require('./sum')
test("sum a and b that is 2sum",() =>{
    let a = 2;
    let b = 4;
    let result = sum(a,b)
    expect(result).toBe(6)
})