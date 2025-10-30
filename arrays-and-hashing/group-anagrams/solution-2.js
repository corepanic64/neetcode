function groupAnagrams(strs) {
  let obj = {};
  strs.forEach((value) => {
    let sorted = value.split("").sort().join("");
    if (obj[sorted]) {
      obj[sorted].push(value);
    } else {
      obj[sorted] = [value];
    }
  });

  return Object.values(obj);
}
