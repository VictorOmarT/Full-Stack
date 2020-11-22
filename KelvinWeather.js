const kelvin = 293;
// Constant Temp K
const celsius = kelvin - 273;
// Constant Tem C°
let fahrenheit = celsius * (9/5) +32;
// Formula for C°
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit. `)

let newton = celsius * (33/100)
newton = Math.floor(newton);
console.log(newton)