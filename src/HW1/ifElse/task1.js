function addOrMult(a,b){
	let c;  
	if (a%2==0) {
    	c = a * b;
	} else {
    	c = a + b;
    };
	return c;
}

console.log("Result", addOrMult(5,2));