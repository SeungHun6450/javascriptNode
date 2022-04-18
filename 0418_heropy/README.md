# 1. JS 데이터(자료형, Data type)


## 원시형 : 생긴게 똑같으면 같은 주소다!

1. 문자(string)
1. 숫자(number)
1. 불린(boolean)
1. null
1. undefined
1. 심볼(Symbol)
1. 큰 정수(BigInt)


## 참조형 : 생긴게 똑같아도 주소가 다를 수 있다!

1. 배열(Array)
1. 객체(Object)
1. 함수(function)


## 문자

따옴표로 묶여 있어야 함!

```js
'Hun' // 권장!
"Hun"
`Hun` // 보간을 할 때만 사용! ${}

// console.log(승훈);  // ()안은 변수이다. reference error

const abc = 'ABC' // abc : 메모리 주소, ABC를 담고 있는 그릇
console.log(`Hello ${abc}`);  // 보간
```


## 숫자

Not-A-Number - 숫자 데이터 / 숫자로 표시가 불가!
NaN

```js
1
1234123
0.12313546156

//부동 소수점 오류
let a = 0.1;
let b = 0.2;
console.log(
  parseFloat((a + b).toFixed(1))  // 소수점 자리 1개로
  );

a = 1;
b = undefined;

console.log(a*b); // NaN

```


## 불린(Boolean)
```js
true
false
```


## null

내가 **직접** 지정하는 **명시적**으로 사용하는 빈 값.
'존재하지 않는', '비어 있는', '알 수 없는' 값을 명시적으로 나타냄


## undefined

값이 할당되지 않는 변수는 undefined가 된다.
**암시적**
'값이 할당되지 않은 상태'를 암시적으로 나타냄


## 심볼

유일한 식별자(ID) 데이터 이름을 만들 때 사용

```js
const s = Symbol('Hello world');  // 설명

const user = {
  name: 'Hun',
  [s]: 82
}
console.log(user.name);
console.log(user[s]);
```


## BigInt

큰(Big) 정수(Integer)

2^53 - 1


## 배열

```js
const a = [1, '2', 3, {}, () => {}] //  각각배열의 아이템, 배열의 요소

// index 번호 0,1,2,3,4 ... => zero-based numbering
// indexing(배열 조회)
console.log(a[3]); // {}
```
리터럴 방식 : 기호를 통해서 (배열, 객체, 문자) 만드는 것


## 객체

```js

// Key : Value
const obj = {
  a: 'Apple',
  // 'aasfagnkq!@#!@EDSAFe': 'Apple',
  b: 'Banana',
  c: 'Cherry'
  // _c: 'Cherry' // 의미를 가지면 _를 사용해준다
}

// Apple찾기
console.log(obj.a);       // 점(Dot) 표기법
console.log(obj['a']);    // 괄호(Bracket) 표기법
// console.log(obj['aasfagnkq!@#!@EDSAFe']);
// console.log(obj._c);
```


## 함수

function 키워드로 시작한다.
★함수도 하나의 데이터이다.

```js

function hun() {
  // 명령1
  // 명령2
  // 명령3
  // 명령4
}
hun();

// 아래 두개는 같다
c() {

},
c: function () {
  
},
```


## 형(Type)변환

```js
let a = 123;
let b = 123;

console.log(a == b); // true

b = '123';
console.log(a == b); // true => ??, 자동으로 형 변환이 일어나 비교를 했다.
// == : 동등연산자, 위와 같은 현상이 일어나기 때문에 문제가 생기므로 쓰지 말자!

a = {};
b = {};
console.log(a === b); // false, 주소가 달라서!

```

## Truthy & Falsy : 참과 같은 & 거짓과 같은

```js
// Falsy 종류!!
if(false)
if(null)
if(undefined)
if(0)
if(-0)
if(NaN)
if(0n)
if('')
// if(' ') // 공백문자 -> falsy가 아님! truthy임!
```


# 2. 자료형 확인

1. `typeof 데이터`
1. `데이터.constructor`
1. `Object.prototype.toString.call(데이터)`


null과 Array는 typeof로 알아낼 수 없다.
그러므로 아래와 같은 방법을 사용해서 알아낼 수 밖에 없다.

```js
// Array
console.log([].constructor === Array); // true
console.log(Array.isArray([])); // true

function checkType(data) {
  return Object.prototype.toString.call(data)
  // return Object.prototype.toString.call(data).slice(8, -1)
  // 위와 같이 slice를 사용하면 [object 와 ]를 자르고 나머지만 나오게 한다.
}

console.log(checkType([]))  // [object Array]
console.log(checkType(null))  // [object Null]

```


# 3. 변수

1. `const(상수)` : 무조건 먼저 사용할 것, const로 쓰고 시작해라!
  - 유효범위: 블록 레벨
  - 재할당: X
  - 중복 선언: X
  - 호이스팅(Hositing) : X
  - 전역 등록 : X
1. `let` : 재할당이 필요할 때 let을 사용할 것, const를 let으로 바꿔라!
  - 유효범위: 블록 레벨
  - 재할당 : O
  - 중복 선언: X
  - 호이스팅(Hositing) : X
  - 전역 등록 : X
1. `var` : 사용하지 말 것
  - 유효범위: 함수 레벨
  - 재할당 : O
  - 중복 선언: O
  - 호이스팅(Hositing) : O
  - 전역 등록 : O

- 유효범위(scope)
- 재할당
- 중복선언
- 호이스팅(Hoisting)
- 전역(Global) 선언 시 전역 객체(`window`)의 속성으로 등록

- 호이스팅(Hositing) : 선언부를 유효범위 최상위로 끌어올리는 현상
선언은 밑에, 사용은 위에서 하는 것

```js
// 변수별 유효 범위
function abc() {
  console.log(a); // 호이스팅
  if (true) {
    var a = 123;
    let b = 123;
    const c = 123;
    console.log('in : ', a);
    console.log('in : ', b);
    console.log('in : ', c);
  }
  console.log('out : ', a);
}
abc()

// 중복 선언:X
const a = 123;
console.log(a);
a = 456;

let b = 123;
console.log(b);
let b = 456;

// 중복선언 : O
var c = 123;
console.log(c);
var c = 456;

```


# 4. 함수

## 선언과 표현

1. 선언 : 호이스팅 O
1. 표현 : 호이스팅 X

```js
// 함수 선언 : function키워드로 시작하고 그 뒤에 이름이 있다. 기명 함수이다.
function abc() {

}

// 함수 선언 예시, 호이스팅이 가능
hun();
function hun() {
  console.log('Hun');
}


// 함수 표현 : 함수를 어딘가에(변수) 할당하고 있다. 익명 함수이다.
const abc = functon () {

}

// 함수 표현 예시, 호이스팅이 안됨
const abc = {
  fn:function () {
    console.log('FN')
  }
}
abc.fn();


//기명함수는 기명에 이름이 지워진다.
const a = function abc() {
  console.log('ABC');
}
a()
abc() //  reference Error
```