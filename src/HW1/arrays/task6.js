"use strict";

function reverseArray(arr){
    let tempArr = [];
    let temp = 0;
    for (let i=arr.length-1, j=0; i>=0, j<arr.length; i--, j++){
        temp = arr[i];
        tempArr[i] = arr[j];
    };
    return tempArr;
}

let arr777 = [5,6,2,3,4]
console.log(reverseArray(arr777));