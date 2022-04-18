// 화살표 함수
// () => {} vs function () {}

console.log('--------화살표 함수----------')

const double = function (x) {
  return x * 2
};

console.log('double: ', double(7));

// const doubleArrow = (x) => {
//   return x * 2
// }

// 축약형
const doubleArrow = x => x * 2
// 객체데이터 축약형, ★소괄호를 사용해줘야함!
// const doubleArrow = x => ({name:'Hun'})


console.log('doubleArrow', doubleArrow(7));