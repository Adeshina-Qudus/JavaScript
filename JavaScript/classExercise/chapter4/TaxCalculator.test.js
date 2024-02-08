const {taxCalculator} = require("./TaxCalculator");
test("citizenEarningTest",()=>{
    let earning = 25000;
    let tax = taxCalculator(earning);
    expect(tax).toBe(3750)
})