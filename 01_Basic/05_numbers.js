const score = 4000
console.log(score);

const balance =new Number(300);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 23.897;
console.log(otherNum.toPrecision(3)); //roundof

const hundreds= 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

//*************Maths**************

console.log(Math);
console.log(Math.abs(-4));//positive
console.log(Math.round(4.3));//4
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(3,4,5,6,7));
console.log(Math.max(4,5,8,2,1));
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max=20;
console.log(Math.floor(Math.random()* (max-min+1))+min);
