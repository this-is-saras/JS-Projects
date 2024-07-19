const userEmail = "saru@gmail.com";//true

if(userEmail){
    console.log("Got user Email");
}else{
    console.log("dont have user mail");
}

//falsy value
//false,0,-0,BigInt 0n, "",null, undefined,NaN

//truthy Values
//"0","false"," ", [], {}, function(){}

if (userEmail.length===0) {
    console.log("array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length ===0)  {
    console.log("object is empty");
}

//nullish coalscing operator(??): null undefined

let val1;
//val1 = 5?? 10
//val1 = null ??10
//val1 = undefined??15
//val = null??10??15
console.log(val1);

//ternary operator

//condition ?true: false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")