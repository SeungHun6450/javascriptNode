// 함수 복습

console.log('------------함수-------------');

// 기명함수
function sum(x, y) {
  return x + y;
};

// 익명함수
// const sum = function (x,y){
//   return x + y;
// }

// return 키워드 사용된 후 그 함수는 종료된다.
// return이후의 코드는 실행되지 않는다. 

// 단일로 사용될 때 그대로 함수 호출
console.log(sum(1,2));



// 함수가 반복적으로 사용될 때, 변수에 담아서 사용
const a = sum(1,3);
const b = sum(4,12);


console.log(a);
console.log(b);
console.log(a+b);