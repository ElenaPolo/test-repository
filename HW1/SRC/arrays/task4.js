let array = [1, 3, 7, -4, 2, 9];
   let max = array[0];
                let imax = 0;
                
            	for (let i=1; i<len; i++){
            	    if(array[i]>max){
            	        max=array[i];
            	        imax = i;
            	    }
            	}
console.log("4. индекс максимального элемента массива "+ imax);