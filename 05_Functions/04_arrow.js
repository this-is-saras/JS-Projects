const user = {
    username: "saru",
    price:999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);//it gives obj
    }

}
// user.welcomeMsg()
// user.username = "sunnu";
// user.welcomeMsg();

//console.log(this);//empty obj
// we will use this keyword in arrayFunc to access elements but in normal func its not used
// function chai(){
//     let username = 
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username = "saru";
//     console.log(this.username);
// }

//chai();

const chai = () => {
    let username = "saru"
    console.log(this.username);
}

//chai()

//const add = (num1,num2) => {
  //  return num1+num2;
//}
//implicit return
//const add = (num1,num2) => return num1+num2;
// when we use {} then return keyword is imp
const add = (num1,num2) =>   (num1+num2);
console.log(add(3,4));

const userN = () =>({username:"saru"}); //when we access object their we must use parenthesis

