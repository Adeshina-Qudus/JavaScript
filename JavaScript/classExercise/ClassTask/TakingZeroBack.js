const takingZeroToTheBack = (input) =>{
    let puttingAllNumbersTogether = [];
    let zeroArray = []
    let exceptZeroArray = []
    zeroArray = takingZero(input)
    exceptZeroArray = takingNumbersExceptZero(input)
    puttingAllNumbersTogether = allNumbers(exceptZeroArray,zeroArray)
    return puttingAllNumbersTogether;
}
const takingZero = (input)=>{
    let newArray = []
    for(let count = 0 ; count < input.length; count ++){
        if(input[count] == 0){
            newArray.push(input[count])
        }
    }
    return newArray;
}
const takingNumbersExceptZero = (input) =>{
    let newArray = []
    for(let count = 0; count < input.length;count++){
        if(input[count] != 0){
            newArray.push(input[count])
        }
    }
    return newArray
}

const allNumbers = (numbers,zero)=>{
    let array = []
    for(let loop = 0; loop < numbers.length; loop++){
        array.push(numbers[loop])
    }
    for(let zeroLoop = 0; zeroLoop < zero.length; zeroLoop++){
        array.push(zero[zeroLoop])
    }
    return array;
}
module.exports = {takingZeroToTheBack}