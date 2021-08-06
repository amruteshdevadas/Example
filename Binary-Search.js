//in binary search not every element is taken to searched
//instead we divide the array in middle = (l+h)/2
//and then search
// *******Binary search requires sorted array******
let array = [1, 3, 4, 78];
let key = 100,
  l = 0,
  h = array.length;
//the function is called recursively until the element is found in array if not found it will return -1

function recursiveBinarySearch(array, l, h, key) {
  if (l < h) {
    //dividing the array in (two parts
    let mid = Math.floor((l + h) /2);
    // let mid = l + Math.floor((h - l) / 2);

    //check whether the element is found in middle position
    if (key == array[mid]) {
      found = true;
      return mid;
    }
    // if the key value is less than the value present in the array[mid] then call binarysearch function passing the array,l,mid-1,and key by doing this we ignore the second part
    if (key < array[mid]) {
      return recursiveBinarySearch(array, l, mid - 1, key);
    }
    //if the key value is greater than the value present in the array[mid] then call binarysearch function passing the array,mid+1,h,and key by doing this we ignore the first part
    else {
      return recursiveBinarySearch(array, mid + 1, h, key);
    }
  }
  // if element is not found return -1
  return 0;
}

if (recursiveBinarySearch(array, l, h-1, key)) {
  console.log("Found!!");
} else {
  console.log("Not Found!!");
}
