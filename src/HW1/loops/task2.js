function ifSimple(a){
	let q = 0;
                
	let res = "";
	
	for (let i=1; i<a; i++){
				
						
		if (a % i == 0){
							
			q++;
						
		}			

		if(q == 1){
							
			res = " is simple";
						
		} else {
							
			res = " is not simple";
						
		}
	}
   return a + res;
}

console.log(ifSimple(27));