let task = prompt("¬ведите число от 0 до 999")

function millions(num){
	let answer = "";
	if(Math.floor(num/1000000000)>0){
		answer += writeNumber(Math.floor(num/1000000000)) + " миллиардов ";
	}
	num = num - Math.floor(num/1000000000)*1000000000;
	if(Math.floor(num/1000000)>0){
		answer += writeNumber(Math.floor(num/1000000)) + " миллионов ";
	} 
	num = num - Math.floor(num/1000000)*1000000;
	if(Math.floor(num/1000)>0){
		answer += writeNumber(Math.floor(num/1000)) + " тыс€ч ";
	}
	num = num - Math.floor(num/1000)*1000;
	answer += writeNumber(num);
	return answer;	 
}

function writeNumber(num){
    let sotni = ["","сто", "двести", "триста", "четыреста", "п€тьсот", "шестьсот", "семьсот", "восемьсот", "дев€тьсот"];
    let dec = ["","","двадцать", "тридцать", "сорок", "п€тьдес€т", "шестьдес€т", "семьдес€т", "восемьдес€т", "дев€носто"];
    let edin = ["", "один", "два", "три", "четыре", "п€ть", "шесть", "семь", "восемь", "дев€ть", "дес€ть", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "п€тнадцать", "шестнадцать", "семнадцать", "восемнадцать", "дев€тнадцать"];
    
    let answer = "";
    
    if(num == 0){
        answer = "ноль";
    } 
	
    if(Math.floor(num/100)>0){
        let a = sotni[Math.floor(num/100)];
        answer += a + " ";
    }
    let i = num%100;
    if (i>19){
        let m = Math.floor(i/10);
        let b = dec[m];
        answer += b + " ";
        let n = i%10;
        let c = edin[n];
        answer += c + " ";
    } else {
        let d = edin[i];
        answer += d;
    }
    
    return answer;
}

console.log(millions(task));