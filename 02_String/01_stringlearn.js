const name = "saru";
const roll = 148;

//console.log(name + roll);

console.log(`Hello, my name is ${name} and my roll no is ${roll}`);

const gameName = new String ('saru');

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newStr = gameName.substring(0,4);
console.log(newStr);

const anotherStr = gameName.slice(-8,4);
console.log(anotherStr);

const newString = "     saru.    ";
console.log(newString.trim);//space remove

const url = "https:// saru.com/saru%20morya"
console.log(url.replace("%20","_"));

console.log(url.includes("beauty"));//f
console.log(gameName.split("/"));
