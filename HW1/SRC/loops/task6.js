let number = 14263;
                    
let reverse = 0;
        
                    

while (number>0){
                        
	reverse *= 10;
                        
	reverse += (number%10);
                        
	number = Math.floor(number/10);
                    
}
        
                

console.log("6. "+ reverse);