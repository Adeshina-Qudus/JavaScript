let prompt = require("prompt-sync")();

const main = ()=>{
    let earning = prompt("How much is your earning");
    let earningvalue = parseFloat(earning);
    let tax = taxCalculator(earningvalue);
    let taxValue = parseFloat(tax);
    return taxValue;
}

const taxCalculator = (earning) =>{
    let tax = 0.0
    if(earning <= 30000){
        tax = earning * 0.15;
    }else{
        tax = earning * 0.20;
    }
    return tax;
}
module.exports = {taxCalculator}