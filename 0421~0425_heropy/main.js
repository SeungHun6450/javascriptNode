const arr = [1, 2, 3, 4];
console.log(
  arr.map((item,index) => {
    console.log(index)  // 2 4 6 8
    return item * 2;    // [2, 3, 6, 8]
  })
)