const inputMethod = (inputArray) =>{
    for(let firstLoop = 0; firstLoop < inputArray.length; firstLoop++){
        for(let secondLoop = 0 ; secondLoop < inputArray[firstLoop].length; secondLoop++){
            if(secondLoop == inputArray[firstLoop].length -1){
                let temp = inputArray[firstLoop][secondLoop];
                inputArray[firstLoop][secondLoop] = inputArray[secondLoop][firstLoop];
                inputArray[secondLoop][firstLoop] = temp;
            }
        }
    }
    return inputArray;
}
module.exports = {inputMethod}

