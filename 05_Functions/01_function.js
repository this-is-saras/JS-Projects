console.log("S");
console.log("A");
console.log("R");
console.log("U");

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("U");
}

//sayMyName();

// function addTwoNums(num1, num2){ ////parameters
//     console.log(num1+num2);
// }

function addTwoNums(num1, num2){ ////parameters
    //  let result = num1+num2;
    //  return result;
    return num1+num2;
}
addTwoNums(3,4);
addTwoNums(3,"4");//args

const result = addTwoNums(1,2);
//console.log("Result",result);

function loginUserMsg(userName){
    return `${userName} just Logged in`
}

console.log(loginUserMsg("saru"));
console.log(loginUserMsg());//undefined if we donot pas value