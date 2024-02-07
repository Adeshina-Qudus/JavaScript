function intersection(array,array1) {
    let newArray = []
    for (let firstLoop = 0; firstLoop < array.length; firstLoop++) {
        for (let secondLoop = 0; secondLoop < array1.length; secondLoop++) {
            if (array[firstLoop] == array1[secondLoop]) {
                newArray.push(array[firstLoop])
            }
        }
    }
    return minmum(newArray)
}

function minmum(newArray){
    let mini = newArray[0]
    let result = 0;
    for (let iterator of newArray) {
        if(iterator <= mini){
            result = iterator
        }
    }
    return result;
}

module.exports = {intersection}
