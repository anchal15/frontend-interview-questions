// Ques 4 - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Brute Force Solution
const twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // logic
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
// [3,2,4] => 3+2, 3+4, 2+4 => 7, 7, 6

// Using JS Objects
var twoSum = function(nums, target) {
  let hash = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [];  
}
