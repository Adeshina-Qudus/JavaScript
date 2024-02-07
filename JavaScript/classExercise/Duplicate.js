const Duplicate = (inputArray) =>{
    let newArray = []
    for(let firstLoop = 0 ; firstLoop < inputArray.length; firstLoop++){
        for(let secondLoop = 0 ; secondLoop < inputArray.length; secondLoop++){
            if(inputArray[firstLoop] == inputArray[secondLoop]){
                newArray.push(inputArray[firstLoop])
            }
        }
    }
    return newArray;
}
module.exports = {Duplicate}