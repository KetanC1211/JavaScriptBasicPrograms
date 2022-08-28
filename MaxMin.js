const prompt = require('prompt-sync')();
let a = parseInt(prompt("Enter a "));
let b = parseInt(prompt("Enter b "));
let c = parseInt(prompt("Enter c "));
let d = parseInt(prompt("Enter d "));
let randomNumbers = new Array(4)
randomNumbers[0] = a + b * c;
randomNumbers[1] = c + a/b;
randomNumbers[2] = a % b * c;
randomNumbers[3] = a * b + c;
let max = randomNumbers[0];
let min = randomNumbers[0];
for(let i=0;i<randomNumbers.length;i++){
    console.log("NUmber"+(i+1)+" "+randomNumbers[i])
    if(max<randomNumbers[i]){
        max = randomNumbers[i]
    }
    if(min>randomNumbers[i]){
        min = randomNumbers[i]
    }   
}
console.log("Maximum number is "+max)
console.log("Minimum number is "+min)