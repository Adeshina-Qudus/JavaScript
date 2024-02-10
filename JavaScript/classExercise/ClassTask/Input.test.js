const {inputMethod} = require("./Input");
test("test",()=>{
    let input = [[2,3],[4,5]];
    let ouput =  inputMethod(input);
    expect(ouput).toEqual([[2,4],[3,5]]);
})
test("secondTest",()=>{
    let input = [[5,3,1],[9,8,2],[1,2,3]];
    let ouput =  inputMethod(input);
    expect(ouput).toEqual([[5,9,1],[3,8,2],[1,2,3]]);
})
