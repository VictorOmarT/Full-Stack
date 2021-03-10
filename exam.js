// function gradingStudents(grades) {
//     let resultadoFin=[]
//     for(var i = 0; i < grades.length; i++){
//         let resultadoFin=[]
//         let numMult = grades[i] * 5 - 2 ;
//         let comprovasion = numMult + grades[i];

//         if(numMult < 3 && comprovasion >= 40){
//             resultadoFin.push(comprovasion);
//         }else{
//             resultadoFin.push(grades[i])
//         }
//     }
//     return this.resultadoFin
// }

// console.log(gradingStudents(58,22,78))
// function gradingStudents(grades){
//     let redondear = 2;
//     let multplic = 5;
//     for(var i = 0; i <grades.length; i++){
//         if(grades[i] >= 38 && grades[i] % multplic > redondear){
//             grades[i]= grades[i] + (multplic - (grades[i] % multplic));
//         }
//     }
//     return grades;
// }

// gradingStudents(57,25,35)


// function sockMerchant(n, ar){
//     let pares = 0;
//     let calcet = {}
//     ar.forEach ((cal) =>{
//         if(!calcet[cal]){
//             calcet[cal] = 0;
//         }
//         calcet[cal] = calcet[cal] + 1;
//         if(!(calcet[cal] % 2)){
//             pares = pares + 1;
//         }
//     })
//     return pares;
// }
// console.log(sockMerchant(9,[10,20,20,10,10,30,50,10,20]))


// function countingValleys(steps, path) {
//     let valles = 0;
//     let elev = 0;

//     for(let i = 0; i < steps; i++){
//         if(path[i] == "D"){
//             elev--;
//         }else{
//             if(elev == -1){
//                 valles ++;
//             }
//             elev++;
//         }
//     } 
//     return valles;
// }

// console.log(countingValleys(8,"U","D","D","D","U","D","U","U"))



function jumpingOnClouds(c) {
    // let saltos = 0
    // let larg = c.length;
    // for(let i = 0; i < larg; i ++){
    //     if(i + 2 < larg && i + 2 == '0'){
    //         saltos = saltos + 2;
    //     }else{
    //         saltos = saltos + 1;
    //     }
    //     larg ++
    // }
    // return this.i;

    var n = 0;
  for (var i = 0; i < c.length - 1;) {
    i += (c[i+2] ? 1 : 2);
    n++;
  }
  return n;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))
