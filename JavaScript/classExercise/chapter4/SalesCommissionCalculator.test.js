const {salesCommissionCalculator} = require("./SalesCommissionCalculator");

test("salesCommissionCalculator",()=>{
    let salesInaWeek = 5000;
    let salary = salesCommissionCalculator(salesInaWeek);
    expect(salary).toBe(650)
})