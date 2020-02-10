let task = prompt("������� ����� �� 0 �� 999")

function writeNumber(num){
    let sotni = ["","���", "������", "������", "���������", "�������", "��������", "�������", "���������", "���������"];
    let dec = ["","","��������", "��������", "�����", "���������", "����������", "���������", "�����������", "���������"];
    let edin = ["", "����", "���", "���", "������", "����", "�����", "����", "������", "������", "������", "�����������", "����������", "����������", "������������", "����������", "�����������", "����������", "������������", "������������"];
    
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

console.log(writeNumber(task));