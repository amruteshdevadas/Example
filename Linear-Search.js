var array = [1, 3, 4, 89, 90, 100];

let key = 5;
var found = false;
//in linear search the loop runs on every element of the array
for (let i = 0; i < array.length; i++) {
  if (key == array[i]) {
    found = true;
    break;
  }
}
if (found) {
  console.log("Key Found!!");
} else {
  console.log("Key not Found!!");
}
