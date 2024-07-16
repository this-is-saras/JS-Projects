//singleton 
//object.create

//object literals

const mySym = Symbol("key1");

const jsUser = {
    name:"saru",
    "full name": "saru morya",
    [mySym]: "mykey1",
    age: 20,
    location: "Indore",
    email: "saru@gmail.com",
    isLoggedIn: false,
    lastLOginDays: ["monday","tuesday","saturday"]
}

//one way to access
//1. console.log(jsUser.email)
//2.console.log(jsUser["email//string"])
//3. console.log(jsUser["full name"]);
//4. console.log(jsUser.mySym)// type  String but we want symbol so we need to write it in bracket
//5. console.log(jsUser[mySym])

jsUser.email = "saru@chatgpt.com";
//if we want that no one can change it
//Object.freeze(jsUser);
jsUser.email = "saru@microsoft.com";
console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello js user");
}

jsUser.greetingTwo = function () {
    console.log(`hello js user,$(this.name)`);
}
console.log(jsUser.greeting);//undefined

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());