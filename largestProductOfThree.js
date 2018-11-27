// Sort the array.
// Scan the array and compute the maximums.
// Return the maximum of product of the maximums.

function largestProductOfThree (array) {

  let largest = [-999, -999, -999];

  array.sort();

  for(let i=array.length; i>=0; i--) {
    saveLargest(array[i]);
    console.log(array[i], largest)
  }

  return largest[0] * largest[1] * largest[2];

  function saveLargest(i) {
    for(let x=0; x<3; x++) {
      if(i>largest[x]) {
        largest[x] = i;
        return;
      }
    }
  }  

}

// console.log(largestProductOfThree([ 2, 1, 3, 7 ])); // 42
// console.log(largestProductOfThree([ 0, 2, 3 ])); // 0
console.log(largestProductOfThree([-5,-1,-3,-2,-4])); // -6
