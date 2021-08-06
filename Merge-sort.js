final = [];
function merge_sort(arr, l, h) {
  if (l >= h) {
    return;
  }
  let mid = Math.floor((l + h) / 2);
  merge_sort(array, l, mid);
  merge_sort(array, mid + 1, h);
  merge_algo(array, l, mid, h);
  console.log(arr)
}

function merge_algo(arr, l, m, h) {
    var n1 = m - l + 1;
    var n2 = h - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    
}

let array = [1, 5, 4, 3],
  l = 0,
  h = array.length - 1;
merge_sort(array, l, h);
