let prompt = require("prompt-sync")();
const api = ()=>{
    let input = prompt("how much merchandise do you sell this week : ");
    let sales = parseInt(input);
    let salary = salesCommissionCalculator(sales);
    return `Your Salary Is ${salary}`
}
const salesCommissionCalculator = (sales) =>{
      let montlySalary = 200;
      let percentage = (9/100) * sales;
      let salary = montlySalary + percentage;
      return salary;
}
module.exports = {salesCommissionCalculator}
console.log(api())