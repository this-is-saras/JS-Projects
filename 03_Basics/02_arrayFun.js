const myFriends = ["vinee", "shubh", "shreya","Teerth"];
const otherFriends = ["Tarun","Tanisha"];
// myFriends.push(otherFriends);
// console.log(myFriends);

// const allFriends= myFriends.concat(otherFriends);
// console.log(allFriends);

const newFriendList = [...myFriends, ...otherFriends];
//console.log(newFriendList);

const otherArr = [1,2,3,[4,5],6,[7,8,[9,10]]];
const realArr= otherArr.flat(Infinity);
console.log(realArr);

console.log(Array.isArray("saru"));
console.log(Array.from("saru"));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));