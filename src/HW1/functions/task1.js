function getWeekDay(dayNumber){
    let dayNames = ["�����������", "�����������", "�������", "�����", "�������", "�������", "�������"];
    return dayNames[dayNumber];
}

let number = prompt("������� ����� ��� (������� � �����������)");
console.log(getWeekDay(number-1));