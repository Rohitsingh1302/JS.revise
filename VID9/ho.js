//high order function definition:-
// A function which takes another function as an argument or returns a function from it is called as a high order function.
function x(){
    console.log("Namaste");
}
function y(){
    x();
}
y(x);

// another fnxn
function  add(a,b,cb){
    let result=a+b;
    cb(result);
}
add(2, 3, function(result){
    console.log(result);
})

// return 
function  add(a, b,cb){
    let result=a+b;
    cb(result)
    return()=>console.log("result")
}
let ans=add(2, 3, function(result){
    console.log(result);
})
//
function mul(a,b){
    console.log(a*b);
}
function val(){
    return mul(2,6)
}
val(mul(2, 6));