let array = [1, 3, 7, -4, 2, 9];
 let array3 = array.slice();
                let center = Math.round(array3.length/2);
                
                for(let i=0; i<center; i++){
                    let a = array3.shift();
                    array3.push(a);
                }
                
                console.log("8. " + array3);