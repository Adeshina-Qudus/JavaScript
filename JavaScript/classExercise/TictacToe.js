let object = [
    {row : 0, column : 0, value :"X"},
    {row : 0, column : 1, value :"X"},
    {row : 0, column : 2, value :"0"},
    {row : 1, column : 0, value :"0"},
    {row : 1, column : 2, value :"0"},
    {row : 2, column : 0, value :"X"},
    {row : 2, column : 1, value :"0"},
    {row : 2, column : 2, value :"0"},     
]
function ticTacToe(length,width,object){
    let array = [[],[],[]];
    for(let obj of object){
        array[obj.row][obj.column] = obj.value;
    }
    for(let count = 0 ; count < length; count++){
        for(let counter = 0; counter < width; counter++){
            if(array[count][counter] != "X" && array[count][counter] != "0"){
                array[count][counter] = "";
            }
        }
    }
    return array;
}   
console.log(ticTacToe(3,3,object))