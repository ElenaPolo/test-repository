function addPositive(a,b,c){
	let res = 0;
			
	if (a > 0) {
		res += a;
	} else {
		res += 0;
	};

	if (b > 0) {
		res += b;
	} else {
		res += 0;
	};

	if (c > 0) {
		res += c;
	} else {
		res += 0;
	};

	return res;
}

console.log("Result", addPositive(1,2,3));