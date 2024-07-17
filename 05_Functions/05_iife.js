//(IIFE) immediately invoked function expression
//To remove the polution of global scope within the func we will use iife

(function chai(){
    //names iife
    console.log('DB Connected');
})();

((name)=> {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('saru')//definition and execution 