const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter the number of n "));
for(let i =0;i<=n;i++){
    console.log("Power of 2^"+i+" is "+Math.pow(2,i));
}