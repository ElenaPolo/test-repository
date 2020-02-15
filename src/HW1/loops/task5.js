function summaChisel(a){
	let summa = 0;

	while (a > 0){            
		summa += (a % 10);
		a = Math.floor(a/10);
	}
	return summa;
}


console.log("Result is " + summaChisel(1234));