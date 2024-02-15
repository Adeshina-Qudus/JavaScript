const turnArrayElementToZero = (input)=>{
    let holdIndex = -1
    for(let eachIndex = 0 ; eachIndex < input.length ; eachIndex++){
        for(let eachElement = 0; eachElement < input[eachElement].length; eachElement++){
            if(input[eachElement][eachElement] == 0){
                holdIndex = eachElement;
            }
        }
        turnElementToZero(input,holdIndex)
    } 
    return input
}
const turnElementToZero = (input,holdCountOfZeroElement) =>{
    for(let eachIndex = 0 ; eachIndex < input.length ; eachIndex++){
        for(let eachElement = 0; eachElement < input[eachIndex].length; eachElement++){
            if(eachIndex == holdCountOfZeroElement){
                input[eachIndex][eachElement] = 0;
            }
        }
    }
}
module.exports = {turnArrayElementToZero}