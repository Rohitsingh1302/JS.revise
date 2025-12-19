1.//var= global
{
var age = 24;
} 
//can be accsessed globally
console.log(age)

2. //let= block scope

{
let age2 = 24;
}
console.log(age2) //error
//cannot be accessed globally
//correct way
{
let age3 = 45;
age3=50; //reassigned
console.log(age3)
}

3//const= block scope and cannot be reassigned
{
const pi = 3.14;
}
console.log(pi) //error
//cannot be accessed globally
{
const pi2 = 3.14;
pi2=3.14159 //error
console.log(pi2)
} //error cannot be reassigned
{
const pi3 = 3.14;
console.log(pi3)
} //correct way

//summary
//var= global scope and can be reassigned
//let= block scope and can be reassigned
//const= block scope and cannot be reassigned