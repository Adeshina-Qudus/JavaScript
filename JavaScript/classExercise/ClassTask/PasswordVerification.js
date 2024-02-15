let prompt = require("prompt-sync")();
const isSafe = (password )=>{
    const regex = /^[A-Z]+&&[a-z]+&&[0-9]+\w,{6}$/
    return regex.test(password)  
}
console.log(isSafe("Quduz12@"))

