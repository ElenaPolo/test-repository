"use strict";

function arrayMax(a){
	let amax = a[0];
	let len = a.length;

	for (let i=1; i<len; i++){
		if(a[i]>amax){
			amax=a[i];
		}
	}
	return amax;
}

              
let m = [1, 3, 7, -4, 2, 9];            	
console.log("Максимальный элемент массива " + arrayMax(m));