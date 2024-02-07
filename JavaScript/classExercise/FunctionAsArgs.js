let birthYears = [1999,1993,2001,2007];
let currentYear = 2024;

const getResultArray = (birthYears,functionAsArgs) =>{
    const result = [];

    for(let birthYear of birthYears){
        let value = functionAsArgs(birthYear);
        result.push(value);
    }
    return result;
} 
const calculateAge = (birthYear) =>{
    let age = currentYear - birthYear;
    return age ;
}
let ages = getResultArray(birthYears,calculateAge);
console.log(ages);