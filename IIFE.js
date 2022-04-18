// 즉시 실행 함수
// IIFE, Immediately-Invoked Function Experssion

console.log('--------즉시 실행 함수--------')

const a = 7;
function double() {
  console.log(a * 2)
}

double();

// 즉시 실행 함수, 익명의 함수로 만들어 ()를 만들어 실행
(function() {
  console.log(a * 2);
})();

// 소괄호를 안에 넣어서도 가능, 권장 방법

(function() {
  console.log(a * 2);
}());