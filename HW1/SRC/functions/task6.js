let numberString = prompt("¬ведите число от 0 до 999 прописью");

function writeMill(num){
	let mill = ["миллиард","миллиарда","миллиардов"];
	let mill2 = ["миллион", "миллиона", "миллионов"];
	let thou = ["тыс€ча", "тыс€чи", "тыс€ч"];
	let answer = 0;
	let numarray = num.split(" ");
	for (i=0; i<numarray.length; i++){
		for (j=0; j<mill.length; j++){
			if (numarray[i]=mill[j]){
				let a = num.indexOf(mill[j]);
				let str = num.slice(0,a-1);
				answer += writeChislo(str)*1000000000;
				let b = num.lastIndexOf(mill[j])+1;
				num = num.slice(b,num.length);
			} 
		} 
	}
	for (i=0; i<numarray.length; i++){
		for (j=0; j<mill2.length; j++){
			if (numarray[i]=mill2[j]){
				let c = num.indexOf(mill2[j]);
				let str2 = num.slice(0,c-1);
				answer += writeChislo(str2)*1000000;
				let d = num.lastIndexOf(mill2[j])+1;
				num = num.slice(d,num.length);
			} 
		} 
	}
	for (i=0; i<numarray.length; i++){
		for (j=0; j<thou.length; j++){
			if (numarray[i]=thou[j]){
				let e = num.indexOf(thou[j]);
				let str3 = num.slice(0,e-1);
				answer += writeChislo(str3)*1000;
				let f = num.lastIndexOf(thou[j])+1;
				num = num.slice(f,num.length);
			} 
		} 
	}
	answer += writeChislo(num);
return answer;
}

function writeChislo(num){
    let sotni = ["","сто", "двести", "триста", "четыреста", "п€тьсот", "шестьсот", "семьсот", "восемьсот", "дев€тьсот"];
    let dec = ["", "", "двадцать", "тридцать", "сорок", "п€тьдес€т", "шестьдес€т", "семьдес€т", "восемьдес€т", "дев€носто"];
    let dec2 = ["дес€ть", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "п€тнадцать", "шестнадцать", "семнадцать", "восемнадцать", "дев€тнадцать"]
    let edin = ["ноль", "один", "два", "три", "четыре", "п€ть", "шесть", "семь", "восемь", "дев€ть",];

let answer = 0;
let string = "";
let string2 = "";

for(i=1; i<sotni.length; i++){
   if(num.slice(0,(sotni[i].length))==(sotni[i])){
        answer += i*100;
        string = num.slice(sotni[i].length+1);
    }
}

for(i=2; i<dec.length; i++){
    if(answer>0){
        if(string.slice(0,(dec[i].length))==(dec[i])){
            answer += i*10;
            string2 = string.slice(dec[i].length+1);
        }
    } else {
        if(num.slice(0,(dec[i].length))==(dec[i])){
            answer += i*10;
            string2 = num.slice(dec[i].length+1);
        }
    }
}
for(i=0; i<dec2.length; i++){
   if(answer>0){
        if(string.slice(0,(dec2[i].length))==(dec2[i])){
            answer += 10+i;
            string2 = string.slice(dec2[i].length+1);
        }
    } else {
        if(num.slice(0,(dec2[i].length))==(dec2[i])){
            answer += 10+i;
            string2 = num.slice(dec2[i].length+1);
        }
    }
} 
for(i=0; i<edin.length; i++){
    if (answer>0){
        if(string2.slice(0,(edin[i].length))==(edin[i])){
        
        answer += i;
       }
    } else {
        if(num.slice(0,(edin[i].length))==(edin[i])){
        answer += i;
        }
    }
} 

    return answer;
}

console.log(writeMill(numberString));