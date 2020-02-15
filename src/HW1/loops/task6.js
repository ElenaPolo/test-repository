function reverseNum(a){
	let reverse = 0;
 
	while (a>0){
							
		reverse *= 10;
							
		reverse += (a%10);
							
		a = Math.floor(a/10);
						
	}
	return reverse;
}

console.log("Result is ", reverseNum(14263));