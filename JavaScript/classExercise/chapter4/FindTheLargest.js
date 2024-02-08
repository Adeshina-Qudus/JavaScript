let prompt = require("prompt-sync")();
let array = [];
let largest = 0;
for (let count = 0; count < 10 ; count++){
    let input = prompt("Enter a number ")
    array.push(input) 
}
array.forEach(element =>{
    let smallest = array[0];
    if(element >= smallest){
        largest = element;
    }
})
