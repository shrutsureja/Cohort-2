function findSum(n) {
  let ans = 0;
  for (let i = 0; i<n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
  return
  // return findSum(100);
}

setTimeout(findSumTill100, 1000)// async function
console.log("hello world");