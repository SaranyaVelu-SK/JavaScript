
// Write a function that takes an array containing a mix of characters and numbers and returns a sorted array

function customSort(arr) {

  let chars = [];
  let nums = [];
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === "string" && arr[i].length === 1) {
      chars.push(arr[i])
    } else if(typeof arr[i] === "number"){
      nums.push(arr[i])
    }
  }
  for (let x = 0; x < nums.length -1; x++){
    let min = x;
    for (let k = x + 1; k < nums.length; k++){
      if (nums[k] < nums[min]) {
        let temp = nums[k];
        nums[k] = nums[min];
        nums[min] = temp;
      }
    }
  }

  for (let d = 0; d <chars.length - 1; d++) {
    let min = d;
    for (let k = d + 1; k < chars.length; k++) {
      if (chars[k].charCodeAt(0) < chars[min].charCodeAt(0)) {
        let temp = chars[k];
        chars[k] = chars[min];
        chars[min] = temp;
      }
    }
  }
  
 return [...chars,...nums]
 
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
customSort(input);