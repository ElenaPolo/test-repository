"use strict";

function indexMin(a){
	
	let amin = a[0];
	let imin = 0;
	let len = a.length;
					
	for (let i=1; i<len; i++){
		if(a[i]<amin){
				imin = i;
			}
	}
 return imin;
}

let s = [1, 3, 7, -4, 2, 9];
console.log("Индекс минимального элемента массива "+ indexMin(s));