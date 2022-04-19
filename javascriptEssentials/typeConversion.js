// 형 변환(Type conversion)

console.log('-------형변환 & truthy, falsy')
const a = 1;
const b = '1';

// == : 동등 연산자, 의도치 않게 서로 다른 값이 같다고 나올수 있기 때문에 
// 사용하지 않는 것을 권장
console.log(a === b);


/*  Truthy(참 같은 값)
  true, {}, [], 1, 2, 'false', -12, '3.14' ...

    Falsy(거짓 같은 값)
  flase, '', null, undefined, 0, -0, NaN
*/

if ('false') {
  console.log(123);
}