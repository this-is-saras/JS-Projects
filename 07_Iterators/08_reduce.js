const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (scc, currVal){
//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc + currVal
// },0)

const myTotal= myNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "java Course",
        price: 4999
    },
    {
        itemName: "dsa Course",
        price: 2999
    },
]
const priceToPay= shoppingCart.reduce((acc, item) => acc+ item.price, 0)
console.log(priceToPay);