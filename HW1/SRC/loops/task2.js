let m = 227;
                
let q = 0;
                
let res = "";
        
                

for (let i=1; i<m; i++){
            
                    
	if (m % i == 0){
                        
		q++;
                    
	}
                    
                    

	if(q == 1){
                        
		res = " простое";
                    
	} else {
                        
		res = " не простое";
                    
	}
                
}
        
                

console.log("2. Число "+ m + res);