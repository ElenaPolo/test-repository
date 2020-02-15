// Метод последовательного подбора

function findKoren(a){
	                
	let k = 1;		
	let answ = 1;			
	
	while(k<a){
						
		let r=k*k;
						
		if (r == applicationCache){
			answ = k;                  
			break;                    
		} else if (r > a){                        
			answ = k - 1;                       
			break;                    
		}
					
		k++;
			
	}
	return answ;
}

// Метод бинарного поиска
        
function findKoren2(a){
	let min = 1;
    let max = a;
	let mid = 0;
	let prev = 0;
	let answer = 1;

	for(;;){
						
		mid = (min + max)/2;
					
		if (prev==mid){
							
			answer=mid; 
							
			break;
						
		}
						

		let d=mid*mid;
						
		if (d == a){                    
			answer = mid;                        
			break;                    
		} else if (d > a){                        
			max = mid;                    
		} else { 
							
			min = mid; 
							
			prev = mid; 
						
		}            
	}
	return answer;
}                
               

console.log("First result is", findKoren(25), "second result is", findKoren2(25));     