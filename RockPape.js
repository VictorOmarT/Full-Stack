const getUserChoise = userImput =>{
    userImput = userImput.toLowerCase();
    if(userImput === "rock" || userImput=== "paper" || userImput=== "scissors"|| userImput === "bomb" ){
        return userImput;
    }
    else{
        return console.log("ERROR")}
}

const getComputerChoise =() =>{
    randomNumber = Math.floor(Math.random() * 3)
     switch(randomNumber){
        case 0:
            return"rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
    }

}

const determineWinner = (userChoise, computerChoise) =>{
    if (userChoise === "bomb"){
        return "User WON"
    }
    if(userChoise === computerChoise){
        return "Tie";
    }
    if(userChoise === "rock"){
        if (computerChoise === "paper"){
            return "Computer WOW"
        }else {
            return"User WON"}
    }

    if(userChoise === "paper"){
        if(computerChoise=== "scissors"){
            return "Computer WON"
        }else{
            return "User WON"}
    }

    if(userChoise === "scissors"){
        if(computerChoise === "rock"){
            return "Computer WON"
        }else{
            return "User WON"}
    }
}
const playGame = () =>{
    const userChoise = getUserChoise("paper");
    const computerChoise = getComputerChoise();
    console.log("Your threw " + userChoise);
    console.log("The Computer threw " + computerChoise);
    console.log(determineWinner(userChoise,computerChoise));
    
}
playGame()