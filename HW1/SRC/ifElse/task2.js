let x = 7;

let y = 12;

let quart;
        


if (x > 0 && y > 0) {
        
	quart = "������ ��������";

} else if (x < 0 && y > 0) {
        
	quart = "������ ��������";

} else if (x < 0 && y < 0) {
        
	quart = "������ ��������";

} else if (x > 0 && y < 0) {
        
	quart = "��������� ��������";

} else if (x == 0 || y == 0) {
        
	quart = "����� ����� �� ���";

} else {
        
	quart = "������!";

} 
        


console.log(quart);