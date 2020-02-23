"use strict";

array = [1, 3, 7, -4, 2, 9];
let len = array.length;

// Bubble sort
    function bubbleSort(arr){
        for(let i = len-1; i>0; i--){
            for(let j=0; j<i; j++){
                if(arr[j]>arr[j+1]){
                    let temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }    
        }
        return arr;  
    }    
                        
    console.log(bubbleSort(array));
                  
// Select sort
    function selectSort(arr){
        for(let i=0; i<len-1; i++){
            let min = i;
            for (let j=i+1; j<len; j++){
                if(arr[j]<arr[min]){
                    min=j;
                }
            }
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }    
    
    console.log(selectSort(array));
    
// Insert sort
    
    function insertSort(arr){
        for (let i=1; i<len; i++){
            for(let j = i; j>0 && arr[j-1]>arr[j];j--){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
        return arr;
    }    
        
    console.log(insertSort(array));