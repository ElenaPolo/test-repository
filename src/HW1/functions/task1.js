"use strict";

function getWeekDay(dayNumber){
    let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return dayNames[dayNumber-1];
}

let number = 3;
console.log(getWeekDay(number));