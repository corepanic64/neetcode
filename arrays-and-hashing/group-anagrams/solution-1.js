function groupAnagrams(strs) {
  let obj = {};
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");
    if (obj[sorted]) {
      obj[sorted].push(strs[i]);
    } else {
      obj[sorted] = [strs[i]];
    }
  }
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}
