//operators
//+ 
//-
//*
//%
//**
//=
//+=
//-=
//*=

{
    let num1=2;
    let num2=3;
    console.log("Addition: "+(num1+num2)); //+
    console.log("Subtraction: "+(num1-num2)); //-
    console.log("Multiplication: "+(num1*num2));
    console.log("Modulus: "+(num1%num2)); //%
    console.log("Exponentiation: "+(num1**num2));
    console.log("Assignment: "+(num1=num2));
    num1+=num2; //num1=num1+num2
    console.log("Addition Assignment: "+num1);
    num1-=num2;
    console.log("Subtraction Assignment: "+num1);
    num1*=num2;
    console.log("Multiplication Assignment: "+num1);
}

//boolean oprtr mai thoda change hai:- true ko 1 and false ko 0 maan ke chalta hai
{
    let a=true;
    let b=false;
    console.log("Addition of bool value: "+(a+10)); //11
    console.log("Subtraction of bool value: "+(b+10)); //10
}

//string concatenation operator
// '1' + '2' = '12' string
// '1' + 2 = '12' string
// '1' * 2 = 2 number
{
    console.log('1'+'2'); //12
    console.log('1'+2); //12
    console.log('1'*2); //2
    console.log('1'*'2'); //2
    console.log('1'-2); //-1
}