let students=["rohit", "rohan","ravi"]
// students.reverse()
// console.log(students) // reversed
students.forEach((val) => console.log(val + "singh"));
students.forEach((student)=>{console.log(student.toUpperCase())});
students.map((val)=> console.log(val+ "sharma"));
//dono same hi work kr rahe hai ..map and foreach but the difference is:
//foreach is used for printing and internal task  AND DO NOT RETURN A NEW ARRAY !
// MAP IS USED FOR RETURNING A NEW ARRAY AND PERFORMING SOME OPERATION ON IT !
let newarr=students.map((val)=>val.toUpperCase());
console.log(newarr);

//find num and index :-
const numbers=[1,2,3,4,5,6,7];
let num=numbers.find((num) => num ===4)
let num0=numbers.find((num) => num ===40)//undefined ayega
let num1=numbers.findIndex((num) => num ===4)
console.log(num); //4
console.log(num1); //index 3
console.log(num0); //undefined

//include return boolean value whether the element is present in the array oor  not
let num2=numbers.includes(41)
console.log(num2);//    false

//filter
let num3=numbers.filter((num) => num % 2 === 0)
console.log(num3); // [2,4,6]

//slice
let num4=numbers.slice(1,4) // 1 se leke 3 tak print krega
console.log(num4);

//splice
let num5=numbers.splice(1, 4) // 1 se leke 4 tak print krega and 1 se leke 4 tak delete krega
console.log(num5); //2345 ko delete krdiya 
console.log(numbers); //167 ko print krdiya

//concat
let num6=numbers.concat(students) ; //
console.log(num6); //concatenation

//push
let num7=numbers.push(8) ;
console.log(numbers);

//pop
let num8=numbers.pop() ;
console.log(numbers);