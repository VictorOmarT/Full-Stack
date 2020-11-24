let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = false;
let runnerAge = 0;

if (regEarly && runnerAge >= 18) {
    raceNumber += 1000
}

if (runnerAge >= 18 && regEarly ){
    console.log(`You will run at: 9:30 use your number: ${raceNumber}`)
}else if(runnerAge >= 18 && !regEarly){
    console.log(`You will run at 11:00 use your number: ${raceNumber} `)
}
if (runnerAge< 18){
    console.log(`You will run at 12:30 use your number: ${raceNumber}`)
}