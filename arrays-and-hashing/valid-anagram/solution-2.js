function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let a = conver(s);
  let b = conver(t);
  let c = 0;
  for (let key_a in a) {
    for (let key_b in b) {
      if (key_a == key_b) {
        if (a[key_a] === b[key_b]) c += a[key_a];
      }
    }
  }
  if (c === s.length) {
    return true;
  } else return false;
}

function conver(s) {
  let o = {};
  let a = s.split("");
  for (let i = 0; i < a.length; i++) {
    let item = a[i];
    if (o[item]) o[item] += 1;
    else o[item] = 1;
  }
  return o;
}
