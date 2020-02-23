"use strict";

function nechetNum(a){
    var num = 0;
    a.forEach(function(item){
        if(item % 2 !== 0){
        num ++;
        }
    });
    return num;
}
         

let bb = [1, 3, 7, -4, 2, 9];
console.log("Количество нечетных элементов массива - " + nechetNum(bb));