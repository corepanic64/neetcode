function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (target - current in obj) {
      return [obj[target - current], i];
    } else {
      obj[current] = i;
    }
  }
  return [];
}
