// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

console.log('-------호이스팅---------');

const a = 7;

double();


// const double = function () {
//   console.log(a * 3);
// };

// 호이스팅 현상
function double() {
  console.log(a * 3);
}