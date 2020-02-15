function calcFactorial(a){
	let fac = 1;

	for(let i=1; i<=a; i++){
						
		fac *= i;
					
	}
	return fac;
}
            

console.log("Result is ", calcFactorial(5));