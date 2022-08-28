const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr)

// function myFunction(num) {
//     return num * 10;
// }
// const newArr1 = numbers.map(myFunction)

function myFunction1(num) {
    return num + num;
}
const newArr2 = numbers.map(myFunction1)
console.log(newArr2)

