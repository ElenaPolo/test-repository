function whatQuart(x,y){
	let quart;

	if (x > 0 && y > 0) {
		quart = "First quarter";
	} else if (x < 0 && y > 0) { 
		quart = "Second quarter";
	} else if (x < 0 && y < 0) {
		quart = "Third quarter";
	} else if (x > 0 && y < 0) {
		quart = "Fourth quarter";
	} else if (x == 0 || y == 0) {
		quart = "Point on axe";
	} else {
		quart = "Error!";
	} 
	return quart;	
}
	
console.log("Result:", whatQuart(1,2));