const prompt = require('prompt-sync')();
let n1 = parseInt(prompt("To get prime numbers in given range enter start number"));
let n2 = parseInt(prompt("enter end number"));
function checkPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0||i<=1){
            return 1
        }
    }
    return 0;
}
let count=0;
for(let i=n1;i<=n2;i++){
    let checker = checkPrime(i)
    if(checker==0){
        console.log(i+" is prime")
        count++;
    }
}
if(count==0){
    console.log("There are no prime in given range")
}
