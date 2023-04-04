//take nums
//create a for loop
//write an IF statement that compares the current number to the max number and keep the highest
//retrun max

let nums = [3,7,1135,58,365,586,1220,];
function findMax(arr) {

let max = 0
for (let i =0; i < arr.length; i++) {
  if (nums[i] > max) {
    max = nums[i]
    }
  }
  return max    
}
console.log (findMax(nums))