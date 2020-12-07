/*const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
}
console.log(rollTheDice())


const calculateWeight = (earthWeight, planet) =>{

  switch(planet){
    case "Mercury":
      return earthWeight * .378;
    case "Venus":
      return earthWeight * .907;
    case "Mars":
      return earthWeight * .377;
    case "Jupiter":
      return earthWeight * 2.36;
    case "Saturn":
      return earthWeight * .916;
    default:
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn."
  }
}

const truthyOrFalsy = (valu) =>{
  if(valu){
    return  true;
  }else if(!valu){
    return false;
  }
}
console.log(truthyOrFalsy(0))

const howOld = (age, year) => {
    // The following two lines make it so that our function always knows the current year.
        //let dateToday = new Date();
        //let thisYear = dateToday.getFullYear();
        const thisYear = 2020;
    // It is totally ok if your function used the current year directly!
      
        const yearDifference = year - thisYear
        const newAge = age + yearDifference
        if (newAge < 0) {
            return `The year ${year} was ${-newAge} years before you were born`
        } else if (newAge > age) {
            return `You will be ${newAge} in the year ${year}`
        } else {
            return `You were ${newAge} in the year ${year}`
        }
    }

console.log(howOld(29,2250))









function howOld(age,year){
  const currentYear = 2020;
  const ageDifference = year - currentYear ;
  const newAge = age + ageDifference;
  

  if (age < newAge ){
    return `You will be ${newAge} in the year ${year}`
  }else if(newAge < 0){
    return `The year ${year} was ${-newAge} years before you were born`
  }else{
    return `You were ${newAge} in the year ${year}`
  }
}

  console.log(howOld(29,2019)) */



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  