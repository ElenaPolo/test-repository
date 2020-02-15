function sumChet(a,b){
	let suma = 0;
	let amount = 0;
	for(let i = a; i < b+1; i++){
                           
		if (i%2 == 0){
							
			suma += i;
			amount++;
						
		} else {
							
			suma += 0;
						
		}
	}
	
	answer = `Sum is ${suma}, amount is ${amount}`;
	return answer;
}
          
console.log(sumChet(1,99));