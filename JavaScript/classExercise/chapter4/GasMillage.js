let prompt = require("prompt-sync")();
const millage = ()=>{
    let count = 0 ;
    let total = 0;
    let averageOfMiles = 0;
    let miles  = prompt("Enter miles driven : ");
    let milesValue = parseFloat(miles);
    let gallon = prompt("Enter Gallon Used : ");
    let gallonValue =  parseFloat(gallon);
    let condition = true;
    while(condition){
        total += milesValue/ gallonValue;
        count++;
        let question = prompt("do you wish to continue : ");
    if ((question.match("no"))){
        condition = false;
        break;
    }
    miles  = prompt("Enter miles driven : ");
    milesValue = parseFloat(miles);
    gallon = prompt("Enter Gallon Used : ");
    gallonValue =  parseFloat(gallon);
    }   
    averageOfMiles = totalAverageOfMiles(total,count);
    return `THE COMBINED MILES PER GALLON IS : ${parseFloat(total)},
            TOTAL AVERAGE OF ALL MILES IS :${parseFloat(averageOfMiles)}`
}
const milesPerGallonObtain = (milesDriven,gallonUsed) =>{
    let mgp = milesDriven / gallonUsed;
    return mgp;
}

const totalAverageOfMiles = (combinedMiles,counter) =>{
    let average = combinedMiles / counter;
    return average;
}
console.log(millage())
module.exports = {milesPerGallonObtain}