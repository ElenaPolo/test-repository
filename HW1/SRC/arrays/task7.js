let array = [1, 3, 7, -4, 2, 9];
var numb = 0;

                array.forEach(function(item){
                if(item % 2 !== 0){
                numb ++;
                }
                });
                console.log("7. количество нечетных элементов массива " + numb);