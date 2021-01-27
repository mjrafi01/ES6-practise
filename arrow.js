// function doubleIt(num) {
//     return num *2;
// }
// const doubleIt =function myFun(num) {
//     return num*2;
// }

const doubleIt = num => num*2; //arrow function(short version of function)
const add =(x,y) => x+y;
const give5 = () => 5

const doMath =(x,y) =>{
    const sum =x+y;
    const diff =x-y;
    const result =sum * diff;
    return result;


}

const result=doubleIt(5);
const res=add(50,40);
const resu=give5;
const answer =doMath(9,6)

console.log(result);
console.log(resu);
console.log(res);
console.log(answer);