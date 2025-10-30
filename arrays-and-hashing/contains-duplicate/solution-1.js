function hasDuplicate(nums) {
  let dups = {};
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (dups[item]) {
      dups[item] += 1;
      return true;
    } else {
      dups[item] = 1;
    }
  }
  return false;
}
