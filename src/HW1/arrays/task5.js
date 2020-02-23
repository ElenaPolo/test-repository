"use strict";

function nechetSum(a){
    let sum = 0;
                
    for (let i=1; i<a.length; i=i+2){
        sum = sum+a[i];
    }
    return sum;
}
               
                
let w = [1, 3, 7, -4, 2, 9];
console.log("Сумма элементов массива с нечетными индексами "+ nechetSum(w));