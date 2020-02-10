let array = [2, 7, -5, 0, 12, 1, 34];

// Сортировка quick

   function QuickSort(array)
{
    if (array.length == 0) return [];
    var a = [], b = [], p = array[0];
    for (var i = 1; i < array.length; i++)
     { if (array[ i ] < p) a[a.length] = array[ i ];
       else b[b.length] = array[ i ];
     }
    return QuickSort(a).concat( p,QuickSort(b) );
}
console.log(QuickSort(array));


// Сортировка merge

function Merge(a,low,mid,high)    
{
    var b = new Array(high+1-low), h, i, j = mid+1, k, h = low, i = 0;
    while (h <= mid && j <= high )
     { if (a[h] <= a[j]){ b[ i ]=a[h]; h++; }
       else             { b[ i ]=a[j]; j++; }
       i++;
     }
    if (h > mid){ for (k = j; k <= high; k++){ b[ i ]=a[k]; i++; } }
    else        { for (k = h; k <= mid; k++){  b[ i ]=a[k]; i++; } }    
    for (k=0; k<=high-low; k++) a[k+low]=b[k];
    return a;
}

function MergeSort(A)   
{
    function merge_sort(a,low,high)
     { if (low < high)
        { var mid = Math.floor((low+high)/2);
          merge_sort(a, low, mid);
          merge_sort(a, mid+1, high);
          Merge(a, low, mid, high);
        }
     }
    var n = A.length;
    merge_sort(A, 0, n-1);
    return A;
}
console.log(MergeSort(array));

// Сортировка shell

    let n = array.length, i = Math.floor(n/2);
    while (i > 0)
     { for (var j = 0; j < n; j++)
        { var k = j, t = array[j];
          while (k >= i && array[k-i] > t)
           { array[k] = array[k-i]; k -= i; }
          array[k] = t;
        }
      i = (i==2) ? 1 : Math.floor(i*5/11);
     }
    
	console.log (array);


// Сортировка heap


   function HeapSort(A) 
{
    if (A.length == 0) return [];
    var n = A.length, i = Math.floor(n/2), j, k, t;
    while (true)
    { if (i > 0) t = A[--i];
      else { n--;
             if (n == 0) return A;
             t = A[n];  A[n] = A[0];
           }        
      j = i;  k = j*2+1;
      while (k < n)
       { if (k+1 < n && A[k+1] > A[k]) k++;
         if (A[k] > t)
          { A[j] = A[k];  j = k;  k = j*2+1; }
         else break;
       }
      A[j] = t; 
    }
}
	console.log (HeapSort(array));