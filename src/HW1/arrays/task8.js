"use strict";

function replHalf(a){
    let a2 = a.slice();
    let center = Math.round(a2.length/2);
    
    for(let i=0; i<center; i++){
        let a3 = a2.shift();
        a2.push(a3);
    }
    return a2;
}
 
                
let l = [1, 3, 7, -4, 2, 9];                
console.log("Половины массива поменялись местами: " + replHalf(l));