let array = [1, 3, 7, -4, 2, 9];
let amin = array[0];
let imin = 0;
let len = array.length;
            	
for (let i=1; i<len; i++){
	if(array[i]<amin){
     		amin=array[i];
    		imin = i;
        }
}
 console.log("3. индекс минимального элемента массива "+ imin);