function calcRating(rating){
	let finalresult;
	if (rating >= 0 && rating <= 100){
            
		if (rating <= 19){
						
			finalresult = "F";
				
		} else if (rating <= 39){
						
			finalresult = "E";
				
		} else if (rating <= 59){
						
			finalresult = "D";
				
		} else if (rating <= 74){
						
			finalresult = "C";
				
		} else if (rating <= 89){
						
			finalresult = "B";
				
		} else {
						
			finalresult = "A";
				
		}
			
	} else {
				
		finalresult = "Error!";
			
	};
	return finalresult;
}

console.log("Result"+ calcRating(42));