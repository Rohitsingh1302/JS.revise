for(let i=1;i<=5;i=i+1){
    console.log("ROHIT"+i)
}

//while loop
let i=0;
let house=10;
while(i != house){
    i=i+1;
    console.log("steps taken" + i);
}

//do while loop
do{
    console.log("steps taken" + i);
    i=i+1;
}while(i != house);


//guess game
let guess=10;
let num = 11;
do {
    guess=parseInt(prompt("guess the number"));
    if(guess==num){
        console.log("you won");
    }   
}