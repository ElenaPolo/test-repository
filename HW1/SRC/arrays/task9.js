let array = [1, 3, 7, -4, 2, 9];
// Пузырьком
                    let array4 = array.slice();
                    
                    for(let i = len-1; i>0; i--){
                        for(let j=0; j<i; j++){
                           if(array4[j]>array4[j+1]){
                               let temp = array4[j+1];
                                array4[j+1] = array4[j];
                                array4[j] = temp;
                            }
                        }    
                    }  
                    
                    console.log("9.1. " + array4);
                  
                    // Выбором
                    let array5 = array.slice();
                    
                    for(let i=0; i<len-1; i++){
                        let min = i;
                        for (let j=i+1; j<len; j++){
                            if(array5[j]<array5[min]){
                                min=j;
                            }
                        }
                        let temp = array5[min];
                        array5[min] = array5[i];
                        array5[i] = temp;
                    }
                    
                    console.log("9.2. " + array5);
                 
                    // Вставками
                    
                    let array6 = array.slice();
                    
                    for (let i=1; i<len; i++){
                        for(let j = i; j>0 && array6[j-1]>array6[j];j--){
                            let temp = array6[j-1];
                            array6[j-1] = array6[j];
                            array6[j] = temp;
                        }
                    }
                    
                    console.log("9.3. " + array6);