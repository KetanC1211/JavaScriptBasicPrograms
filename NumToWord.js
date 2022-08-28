const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter num "));
console.log(num);
if(num==1){
    console.log("One");
}else if(num==10){
    console.log("Ten");
}else if(num==100){
    console.log("Hundred");
}else if(num==1000){
    console.log("Thousand");
}else if(num==10000){
    console.log("ten thousand");
}else if(num==100000){
    console.log("One Lakh");
}else{
    console.log("Enter Valid Input");
}