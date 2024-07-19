//if
const isUserLoggedIn =true
const temperature =41;
if(temperature<50){
    console.log("yes, its less then 50");
}
if(2 == "2"){
  console.log("executed");
}
//>,<,<=,>=,==,!=,===(type)
const score =200;
if(score >100){
    const power = "fly"
    console.log((`user power : ${power}`));
}

console.log(`user power: ${power}`);

//shorthand Notation

if(balance>50000) console.log("test");

if(balance < 50){
  console.log("less then");
}else if(balance<75){
  console.log("less then 75")
}else{
  console.log("greater then 100");
}

const userLoggedIn = true
const debitCard =true
const loggedInFromGoogle =false
const loggedInFromEmail = true
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("user logged in");
}

if (userLoggedIn && debitCard && 2==3) {
  console.log("Allow to buy");
}