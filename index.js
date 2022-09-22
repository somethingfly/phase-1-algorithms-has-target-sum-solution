function hasTargetSum(array, target) {
  // Write your algorithm here
  const object = {};
  for (const element of array) {
    if (object[target - element] == 1) {
      return true
    }
    object[element] = 1;    
  }
  return false
}

/* 
  Write the Big O time complexity of your function here

  linear.  O(n).  Same as I wrote in the last exercise.
  Glad to see I came up with the nearly best solution, except didn't know about sets.

*/

/* 
  Add your pseudocode here

  Copy the code from last exercise.
  Paste in here.
  Still don't get what I'm supposed to be doing here.

*/

/*
  Add written explanation of your solution here

  See explanation from last explanation.  (However, wrote "another arary" when I should have said "object.")

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
