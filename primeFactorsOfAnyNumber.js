const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter the number n to get its prime factors"));
function checkPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0||i<=1){
            return 1
        }
    }
    return 0;
}
let i = 2;
while(n!=0){  
    if(n%i==0){
        let checkPrimeFactor = checkPrime(i)
        if(checkPrimeFactor==0){
            console.log(i)
            n=n/i;
            continue;
        }
    }
    i++;
}