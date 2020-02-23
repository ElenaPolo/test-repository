"use strict"; 
 
 function pointDistance(ax, ay, bx, by) {
 let x = bx - ax;
 let y = by - ay;  

    return Math.round(Math.hypot(x, y));
  }



console.log(pointDistance(1,1,4,5));