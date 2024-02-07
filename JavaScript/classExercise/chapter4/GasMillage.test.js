import { milesPerGallonObtain } from "./GasMillage";

test("milesPerGallonObtain",()=>{
    let milesDriven = 100;
    let gallonUsed = 10;
    let mgp = milesPerGallonObtain(milesDriven,gallonUsed);
    expect(mgp).toBe(2);
})

