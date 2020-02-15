function findMax(o,m,g){
	let sum = o + m + g;
	let mult = o * m * g;
	let result;
			
	if (sum >= mult) {
		result = sum + 3;
	} else {
		result = mult + 3;
	};
	return result;
}
 
console.log("Result"+ findMax(1,2,3));