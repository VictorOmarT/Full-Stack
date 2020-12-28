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

  console.log(howOld(29,2019)) 


  // Write your code below
// Write your code below
// Write your code below
let bobsFollowers = ["kiki","cucu","cola","pipi"]
let tinasFollowers = ["pipi","caca","cola"]
let mutualFollowers = []

for(let b = 0; b < bobsFollowers.length; b++){
  for(let t = 0; t < tinasFollowers.length; t++ ){
    if (bobsFollowers[b] === tinasFollowers[t]){
      mutualFollowers.push(bobsFollowers[b])
    }
  }
}

console.log(mutualFollowers) 



let total = 0;
for (let n = 9 ; n >= 6  ; n -- ) {
  total *= 10;
  total += n;  
  //console.log(total)
}
console.log(total)
for (let a = 0; a <= 3; a += 1) {
  for (let b = 16; b > 1; b /= 2) {
    console.log(`** a is ${a}, b is ${b}`);
  }
}
const txt = 'remittance';
 
let res = '';
for (let n = 4 ; n > 0 ; n -- ) {
  res += txt[n];
}
console.log(res);


titles = ['The Philosopher\'s Stone', 'The Chamber of Secrets', 'The Prisoner of Azkaban', 'The Goblet of Fire', 'The Order of the Phoenix', 'The Half-Blood Prince', 'The Deathly Hallows'];
let i = 0
for(let con = 0 ; i <= titles.length; i += 1 ){
  con ++
  console.log(`${con}. ${titles[i]}`)
}

for(let i = 0; i<=10; i+=2){
  console.log(i)
}
x=0
i=0
console.log( " ")
do{
  x = x + i;
  console.log()
  console.log(x)
  i++
}while(i < 5)

let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
 
};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
 
/*spaceship = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.
spaceship
spaceship.motor = ["tracalosa"]  
spaceship.model = [{ford:["model 2", "contibyua"], comida: 9}]

console.log(spaceship)


let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 
 
// for...in
for (let popo in spaceship.crew) {
  console.log(`${popo}: ${spaceship.crew[popo].name} degree: ${spaceship.crew[popo].degree}`);

}
let mobile = {
  brand: 'Samsung',
  model: 'Galaxy Note 9'
};
 
for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`);
}

function frasePalindromo(fraseUser){
  fraseUser=fraseUser.toLowerCase().replace(/\s/g,"");

  fraserReverse=fraseUser.split("").reverse().toString();

  for (var i = 0; i < ((fraserReverse.length)-1); i++) {
    fraserReverse=fraserReverse.replace(",","");
  };

  if(fraseUser==fraserReverse){
    // Si el resultado es positivo
    return true;
  }
  else{
    // Si el resultado es negativo
    return false;
  }
}
// Llamo a la función comparación con el parámetro del user
console.log(frasePalindromo("Aman a Panama"));*/
function palindrome(str) {
  // Good luck!
  
  var rcase = str.replace(/[\W_]/g, "");
  var lcase = rcase.toLowerCase(); 
  var revcase = lcase.split("").reverse().join(""); 
  
  if (lcase == revcase) { 
    return true;
  } else if (lcase !== revcase) { 
    return false;
  }
  
}

console.log(palindrome("oso"))

console.log("Hello"[1])