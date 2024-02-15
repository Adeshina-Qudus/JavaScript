const turnArrayElementToZero = (input)=>{
    let holdCountOfZeroElement = -1
    for(let eachElement = 0 ; eachElement < input.length ; eachElement++){
        for(let allElement = 0; allElement < input[eachElement].length; allElement++){
            if(input[eachElement][allElement] == 0){
                holdCountOfZeroElement = eachElement;
            }
        }
        turnElementToZero(input,holdCountOfZeroElement)
    }
    return input
}

const turnElementToZero = (input,holdCountOfZeroElement) =>{
    for(let eachElement = 0 ; eachElement < input.length ; eachElement++){
        for(let allElement = 0; allElement < input[eachElement].length; allElement++){
            if(eachElement === holdCountOfZeroElement){
                input[eachElement][allElement] = 0;
            }
        }
    }
}

console.log(turnArrayElementToZero([[4,5],[0,7]]))