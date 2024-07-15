//arrays

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["ss","sm","sc"];
console.log(myArr[0]);
const myArr2 = new Array(1,2,3,4)
//shallow copy(original array)


//array methods
myArr.push(6)
console.log(myArr);
console.log(myArr.pop());
console.log(myArr.unshift(3));//start me pushh
console.log(myArr.shift());//remove start value
console.log(myArr.includes(8));//f
console.log(myArr.indexOf(3));

const newArr = myArr.join();//string conversion

//slice and splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1,3);//original array manipulate
console.log(myn2);