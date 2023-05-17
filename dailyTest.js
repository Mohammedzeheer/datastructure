const a = [1, 3, 6, 0, 9, 13];

function testing(a) {
  let pos = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 0) {
      pos = i;
      break;
    }
  }

  for (let j = a.length - 2; j > pos; j--) {
    a[j + 1] = a[j];
  }
  a[pos + 1] = 0;
  return a;
}

console.log(testing(a));
