// for of loop

// ["", "", "",""];
// [{},{},{}]

const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

const greetings = "hello world !";
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

//maps unique values we get

const map = new map()
map.set('IN',"India");
map.set('USA',"united state of india");
map.set('FR',"France");

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
   'game1': 'NFS',
    'Game2':'spiderman'
}

for (const [key,value] of myObj) {
    console.log(key, ':-', value);
}