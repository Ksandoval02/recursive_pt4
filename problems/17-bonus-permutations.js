/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:


***********************************************************************/

const permutations = (array) => {
  if(array.length === 1){
    return [array]
  }
  let result = []
  for (let element of array) {
  const remain = array.filter(item => item !== element)
  const numPremutation = permutations(remain)
  // permutations.map(remain, numPremutation)
  const eachRemain = numPremutation.map((numPremutation) => [element, ...numPremutation])
  result = result.concat(eachRemain)
  }
  return result
};




console.log(permutations([1, 2])) // [[1, 2], [2, 1]]
console.log(permutations([1, 2, 3])) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
