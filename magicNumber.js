let  magicNumber = 49;
let l = 0;
let h = 100;
let findMagicNum = 50;
while(findMagicNum!=magicNumber){
    if(findMagicNum<magicNumber){     
        l=findMagicNum
        findMagicNum = Math.floor(l+((h-l)/2))
    }else{
        h=findMagicNum
        findMagicNum = Math.floor(l+((h-l)/2))                  
    }   
}
console.log("Magic Number is "+findMagicNum)