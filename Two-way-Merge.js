function merge_algo(arr1, arr2, m, n) {
  let i = 0,
    j = 0;
  while (i <= m && j <= n) {
    if (arr1[i] <= arr2[j]) {
      final.push(arr1[i]);
      i++;
    }
    if (arr1[i] > arr2[j]) {
      final.push(arr2[j]);
      j++;
    }
  }
  for (; i <= m; i++) {
    final.push(arr1[i]);
  }

  for (; j <= n; j++) {
    final.push(arr2[j]);
  }
}

let array1 = [1, 3, 5, 7,9,10],
  m = array1.length - 1,
  array2 = [2, 4, 6, 8,9,10],
  n = array2.length - 1;
var final = [];
merge_algo(array1, array2, m, n);
console.log(final);
