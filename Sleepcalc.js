const getSleepHours = (day) =>{
switch(day){
    case "monday":
        return 8
        break;
    case "tuesday":
        return 7
        break;
    case "wednesday":
        return 4
        break;
    case "thursday":
        return 6
        break;
    case "friday":
        return 8
        break;
    case "saturday":
        return 10
        break;
    case "sunday":
        return 9
        break;
        default:
        return " Error invalid Input"
}
}
const getIdealSleepHours = () =>{
    let idealHours = 8;
    return idealHours * 7;
}

const getActualSleepHours = () =>{
   return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + 
    getSleepHours("saturday") + getSleepHours("sunday");
}

const calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
        return `You got a good amount of sleep`
    }else if(actualSleepHours < idealSleepHours){
        return `You got ${actualSleepHours} hours of Sleep and you should Get ${idealSleepHours} hours, Your are under ${idealSleepHours - actualSleepHours} hours, Sleep more. ` 
    }else if(actualSleepHours > idealSleepHours){
        return "You are too lazy"
    }

}
console.log(calculateSleepDebt())

