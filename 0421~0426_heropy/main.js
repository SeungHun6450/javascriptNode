// const arr = [1, 2, 3, 4];
// console.log(
//   arr.map((item,index) => {
//     console.log(index)  // 2 4 6 8
//     return item * 2;    // [2, 3, 6, 8]
//   })
// )

// const hun = {
//   name: 'Hun'
// }
// const mari = {
//   name: 'Mari',
//   getName(age) {
//     return `${this.name} is ${age}`
//   }
// }

// // call
// console.log(mari.getName.call(hun, 27))
// // apply
// console.log( mari.getName.apply(hun[27]))
// // bind
// const hunsGetName = mari.getName.bind(hun)
// console.log(hunsGetName(27))
const arr = [1, 2, 3, 4];
// reduce(accumlator, currentValue)
const sum = arr.reduce((acc, cur) => {  // 2. cur = 1부터 시작
  //callback함수
  return acc + cur  // 3. 값이 acc로 넘어감
}, 0);  // 뒤에 숫자는 초기 값, 1. acc로 들어감

console.log(sum); // 10