let numberString = prompt("������� ����� �� 0 �� 999 ��������");

function writeChislo(num){
    let sotni = ["","���", "������", "������", "���������", "�������", "��������", "�������", "���������", "���������"];
    let dec = ["", "", "��������", "��������", "�����", "���������", "����������", "���������", "�����������", "���������"];
    let dec2 = ["������", "�����������", "����������", "����������", "������������", "����������", "�����������", "����������", "������������", "������������"]
    let edin = ["����", "����", "���", "���", "������", "����", "�����", "����", "������", "������",];

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


console.log(writeChislo(numberString));