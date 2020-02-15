function getWeekDay(dayNumber){
    let dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return dayNames[dayNumber];
}

let number = prompt("Введите номер дня (начиная с Воскресенья)");
console.log(getWeekDay(number-1));