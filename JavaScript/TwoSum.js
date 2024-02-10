const twoSum = (inputArray,target)=>{
    let newArray = []
    for(let count = 0 ; count < inputArray.length; count++){
        for(let counter = 1 ; counter < inputArray.length;counter++){
            if(inputArray[count]+inputArray[counter] ==target){
                newArray.push(count)
                newArray.push(counter)
            }
        }
    }
    return newArray
}
module.exports = {twoSum}