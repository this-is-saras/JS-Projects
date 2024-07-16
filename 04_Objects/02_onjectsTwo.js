//const tinderUser = new Object();
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "sunnu"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "soma@gmail.com",
    fullname: {
        userFullname: {
            firstName: "saru",
            lastName:"morya"
        }
    }
}
//console.log(regularUser.fullname.userFullname.firstName);

const objOne = {
    1:"a",
    2: "b"
}

const objTwo = {
    3: "a",
    4: "b"
}
const objFour = {
    5: "a",
    6: "b"
}

//const objThree = {objOne,objTwo}
//const objThree = Object.assign({},objOne,objTwo,objFour)
const objThree = {...objOne, ...objTwo}
console.log(objThree);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "js in hindi",
    price: 999,
    courseInstructor:" hitesh"
}

//course.courseInstructor

const{courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name":"hitash",
//     "courseName": "js in hindi",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]

//json formattor