"use strict";

function indexMax(a){

	let max = a[0];
	let imax = 0;
	let len = a.length;
                
        for (let i=1; i<len; i++){
            if(a[i]>max){
            	imax = i;
            	}
			}
	return imax;
}   
 
				

let q = [1, 3, 7, -4, 2, 9];
console.log("Индекс максимального элемента массива "+ indexMax(q));