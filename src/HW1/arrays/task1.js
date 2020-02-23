"use strict";

function arrayMin(a){
	let amin = a[0];
	let len = a.length;
					
	for (let i=1; i<len; i++){
		if(a[i]<amin){
				amin=a[i];
			}
	}
	return amin;
}


let array = [1, 3, 7, -4, 2, 9];
console.log("Min element of array is " + arrayMin(array));