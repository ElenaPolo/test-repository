// Метод последовательного подбора
        
                

let x = 27;
                
let k = 1;
                
let answ = 1;
              
                

while(k<x){
                    
	let r=k*k;
                    
	if (r == x){
		answ = k;                  
		break;                    
	} else if (r > x){                        
		answ = k - 1;                       
		break;                    
	}
                    
	k++;
                
}
        
                

// Метод бинарного поиска
        
                

let y = 9;
                
let min = 1;
                
let max = y;
                
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
                    
	if (d == y){                    
		answer = mid;                        
		break;                    
	} else if (d > y){                        
		max = mid;                    
	} else { 
                        
		min = mid; 
                        
		prev = mid; 
                    
	}
                
}
       
                

console.log("3. Корень первого числа равен "+ answ +", \n а второго " + answer);     