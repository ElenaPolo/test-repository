let x = 7;

let y = 12;

let quart;
        


if (x > 0 && y > 0) {
        
	quart = "Первая четверть";

} else if (x < 0 && y > 0) {
        
	quart = "Вторая четверть";

} else if (x < 0 && y < 0) {
        
	quart = "Третья четверть";

} else if (x > 0 && y < 0) {
        
	quart = "Четвертая четверть";

} else if (x == 0 || y == 0) {
        
	quart = "Точка лежит на оси";

} else {
        
	quart = "Ошибка!";

} 
        


console.log(quart);