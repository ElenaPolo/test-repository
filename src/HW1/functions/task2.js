"use strict";

function writeNumber(num){
    let sotni = ["","сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];
    let dec = ["","","двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    let edin = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять", "одинадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    
    let answer = "";
    
    if(num == 0){
        answer = "����";
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


let task = 322;
console.log(writeNumber(task));