// 산술 연산자(arithmetic operator)

console.log('-------산술 연산자------')

console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

// 할당 연산자(assginment operator)

console.log('--------할당 연산자-----------');

let a = 2;
console.log(a);
a += 1;
// a -= 1;
// a *= 1;
// a /= 1;
console.log(a);


// 비교 연산자(comparison operator)

console.log('-------비교 연산자--------')

//  === : 일치 연산자
a = 3;
let b = 4;
console.log(a === b);

function isEqual(x, y){
  return x === y
}

console.log(isEqual(1,1));
console.log(isEqual(2, '2'));

//  !== : 불일치 연산자
console.log(a !== b);

// <, >, <=, >= : 크기 비교 연산자 
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


// 논리 연산자(logical operator)

console.log('-----------논리연산자----------');

a = 1 === 1
b = 'AB' === 'ABC'
let c = false
let d = (1 + 2) === 3

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// &&
console.log('&& : ', a && b && c);  
console.log('&& : ', a && d);

// ||
console.log('|| : ', b || c);
console.log('|| : ', a || b || c);

// !
console.log('! : ', !b);
console.log('! : ', a !== b);


// 삼항 연산자(ternary operator)

console.log('----------삼항연산자------------')

a = 1 < 2

if (a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓')