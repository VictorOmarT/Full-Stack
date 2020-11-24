let userName = 'Victor Omar Toraño';
if(userName){
    console.log(`Hello, ${userName}` )
}else{
    console.log("Hello")
}

let userQuestion = 'Tendre exito?';

console.log(`${userName} ask: ${userQuestion}` );
let randomNumber = Math.floor(Math.random() *8);
let eightBall  = ""

switch(randomNumber){
    case 0: 
        eightBall=("It is centain")
    break;
    case 1:
        eightBall=("It is decidedly so")
        break;
    case 2:
        eightBall=("Try it later")
        break;
    case 3:
        eightBall=("Cannot predict now")
        break;
    case 4:
        eightBall=("Do not count on it")
        break;
    case 5:
        eightBall=("My source say no")
        break;
    case 6:
        eightBall =("Outlook not so good")
        break;
    case 7:
        eightBall=("Yes")
        break;
}

console.log(eightBall)