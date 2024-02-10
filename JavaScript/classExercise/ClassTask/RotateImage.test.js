const {rotateImage} = require("./RotateImage");
test("test",()=>{
    let input = [[5,3,1],[9,8,2],[1,2,3]];
    let ouput =  rotateImage(input);
    expect(ouput).toEqual([[5,9,1],[3,8,2],[1,2,3]]);
})