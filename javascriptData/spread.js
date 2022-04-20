// 전개 연산자
const fruits = ['Apple', 'Banana', 'Cherry', 'Orange'];
console.log(fruits);

// 전개 연산자 : ...
console.log(...fruits);  // console.log('Apple', 'Banana', 'Cherry', 'Orange')

function toObject(a, b, ...c) {  // 매개변수에도 전개연산자 사용가능 : 나머지 매개변수 rest parameter
  return {
    a: a,
    b: b,
    c: c
  }
}
// function toObject (a, b, ...c) => ({a, b, c}); // 화살표 함수로 표현


console.log(toObject(...fruits));
// {a: "Apple", b:"Banana", c: Array(2) 0: "cherry" 1: "Orange"}