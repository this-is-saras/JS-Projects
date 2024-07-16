//when we dont know num of args

function calcCartPrice(...num1){
  return num1;
}

console.log(calcCartPrice(200,300,400));

const user = {
    userName: "saru",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    userName:"sam",
    price:199
})

const myNewArr = [200,300,400];
function returnSecArr(getArr){
    return getArr[1]
}
console.log(returnSecArr(myNewArr));



//rest operator