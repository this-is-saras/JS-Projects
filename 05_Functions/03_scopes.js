let a =300;
const b=5;
//var c=20;

if(true){
    let a =10
    const b=5;
    //console.log(a);//10
}

//console.log(a);//300
//console.log(b);//no value
//console.log(c);//20 will be printed

function one() {
    const userName = "saruu"
    function two() {
        const website= "youtube"
        console.log(userName);//accessed
    }
    console.log(website);//declined
    two()

}
one()

if(true){
    const userName = "saru"
    if(userName === "saru"){
        const website= "github"
        console.log(userName+website);
    }
    console.log(website);
}

console.log(userName);

//**********interesting*******//
function addOne (num){
    return num+1
}
addOne(5);

const addTwo = function(num){
    return num+2;
}
addTwo(5);

