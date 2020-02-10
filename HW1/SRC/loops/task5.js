let chislo = 3248;
let summa = 0;

while (chislo > 0){            
	summa += (chislo % 10);
	chislo = Math.floor(chislo/10);
}

console.log("5. " + summa);