# 함수

## 화살표 함수
화살표함수는 익명함수이다. 함수 표현, hoisting x
```js
const hello = () => {
  return 'hello'
}

// 1. 간소화, return은 생략이 가능하다, 단 return하나만 있을 때 가능하다!
const hello = () => 'hello';
console.log(hello())

// 2. 객체데이터를 사용할 때 소괄호로 감싸줘야한다.
const hello = () => ({});
console.log(hello())

// 3. 매개변수가 하나면 매개변수 좌우에 있는()는 생략 가능하다.
const hello = message => `hello ${message}`
console.log(hello('world'))

divEl.addEventListener('click', event => {

})


function reFunc (a, b) {
  return { a, b }
}
const reFunc = (a,b) =>({a, b});

console.log(reFunc('hello', 'world'));


```

## this
- 일반 또는 화살표 함수에서 정의가 다르다!
- 일반 함수에서 `this`는 호출되는 위치에서 정의된다!
- 화살표 함수에서 `this`는 자신이 선언된 함수(렉시컬) 범위에서 정의된다!


```js
// this: Global 전역 변수
// scope: 유효범위
console.log(this);  // window객체가 출력

// this: 아래에 있는 Hun을 참조한다.
// 아래의 일반함수에서의 this는 정확하게 정의를 내릴 수 없다.
// 호출되는 위치에서 정의가 되기 때문이다.(console.log(Hun.getNameAndAge))
// 1. 일반함수에서는 호출되는 위치에서 this가 정의된다. 그래서 this가 뭔지 정확하게 알 수 없다.
const Hun = {
  name: 'Hun',
  age: 27,
  email: 'theseisemail.com',
  phone: '01012345678',
  getNameAndAge: function () {
    return [this.name, this.age];
  }
}

const amy = {
  name: 'Amy',
  age: 22
}


console.log(Hun.getNameAndAge())  // ['Hun', 27]
console.log(Hun.getNameAndAge.call(amy))  // ['Amy', 22], amy객체로 호출해라 -> this가 amy를 바라보게됨


// 2. 화살표함수 안에서의 this: 선언된 위치에서 정의가 된다.
function wrapper() {
  this.name= 'Wrapper'
  this.age= 99;
const Hun = {
  name: 'Hun',
  age: 27,
  email: 'theseisemail.com',
  phone: '01012345678',
  getNameAndAge: () => {
    return [this.name, this.age];
  }
}

const amy = {
  name: 'Amy',
  age: 22
}


console.log(Hun.getNameAndAge.call(amy))  // ['', undefined]
}

wraaper();  // ['Wrapper', 99]
```

```js
const userA = {
  isValid: true,
  age: 85,
  getAge: function () {
    return this.age
  }
}
const userB = {
  isValid: false,
  age: 22,
  // getAge: function () {
  getAge: () => {
    return this.age
  }
}
console.log(userA.getAge) // 함수가 호출
console.log(userA.getAge()) // 85

// call, bind
console.log(userB.getAge.call(userA)) // 85
// 화살표 함수, 2번의 getAge가 실행되고 
console.log(userB.getAge.call(userA)) // undefined, 화살표 함수 때문에 범위가 window가 된다. window에 있는 age를 출력해서 undefined가 나오게 된다.


const userC = {
  isValid: true,
  age: 85,
  getAge: function () {
    setTimeout( function () {
      console.log(this.age)
    }, 1000)
  }
}
userC.getAge() // undefined, 호출되는 위치는 setTimeout, this의범위는 setTimeout함수로 들어가서 뒷단으로 넘어가서 호출하기에 범위가 window일 확률이 높다

// 화살표 함수면 85가 출력 된다, getAge()까지 범위이기 때문에

const userA = {
  age: 85
}
const userB = {
  getAge() {
    return this.age
  } 
}

const newGetAge = userB.getAge.bind(userA)
console.log(newGetAge())
```

## 비교연산자

연산자 | 이름
--|--
`==` | 동등
`!=` | 부등
`===` | 일치
`!==` | 불일치
a > b
a >= b
a < b
a <= b

## 논리연산자

a && b 그리고(And) 
  -  가장 먼저 찾은 Falsy를 반환한다. Falsy를 찾지 못하면 마지막 값을 반환한다.
a || b 또는(Or) :
  - 가장 먼저 찾은 Truthy를 반환한다. Truthy를 찾지 못하면 마지막 값을 반환한다.
!a     부정(Not) : 
  - a가 Truthy면 `false`로, Falsy면 `true`로 바뀐다.

## 삼항 연산자

조건 ? 2항 : 3항

## switch statement

조건이 어떤 값으로 딱 떨어질 때 사용한다.
switch문 -> if조건으로 변경해서 사용할 수 있지만 
if조건 -> switch문으로 완벽하게 바꾸는 것을 보장할 수 없다.


```js
const inputEl = document.querySelector('input')

inputEl.addEventListener('keydown', event => {
  if (
    event.key === 'Enter' || 
    event.key === 'Escape'
  ) {
    console.log('Wow')
  } else {
    console.log('eieieig')
  }
})

switch (event.key) {
  case: 'Enter' :
  case: 'Escape' :
    console.log('Wow')
    break;
  case: 'Shift':
    cosoel.log('shift')
    break;
  default:
    console.log('eieieig')
}

```

## for
for(시작;종료;변화){

}

## for of

배열 반복 시 사용

```js
const users = [
{ name: 'Hun', age: 27},
{ name: 'Hyun', age: 18},
{ name: 'Jeung', age: 2}
]

for (const user of users) {
  console.log(user);
}

for (let i = 0; users.length; i += 1) {
  console.log(users[i]);
}

```
## for in

객체 반복 시 사용
```js
const hun = {
  name: 'Hun',
  age: 27,
  isValid: true
}

for (const key in hun) {
  console.lof(hun[key])
}
```

## while
조건이 falsy면 0번 실행한다.
```js
let i = 0;  // 시작
while (i<3) { // 종료
  console.log(i)
  i += 1; //  변화
}
```
## do while
조건이 falsy여도 한 번 실행한다.
```js
let j = 0;  // 시작
do {
  console.log(j);
  j += 1  // 변화
} while (false) // 종료

```

# 표준 내장 객체(메소드)

## 문자
slice
split 
includes()
indexOf()

```js
  
```

## 숫자
1. isNaN()
1. Nuber.isNaN()

1. parseInt()
1. Number.parseInt()

1. parseFloat()
1. Number.parseFloat()

## Math
every(): ()안이 truthy여야 통과, 모든 요소가 주어진 판별 함수를 통과(truthy)하는지 테스트하는 메소드
```js   
// callback 사용(화살표함수, return있음, 요소 갯수만큼 반복)
const arr = [1, 2, 3, 4];
console.log(  // true
  arr.every(item => item < 5>)  
)
```

filter(): 통과한 값들면 새로운 배열로 만듬(기존 배열은 존재)
find():
```js
const users = [
  {name: 'Hun', age: 27},
  {name: 'Hero', age: 85}
]
const foundUser = users.find(user => user.name {
  user.name === 'Hun'
}
console.log(foundUser);
```
findIndex(): 맨 처음 찾은 녀석의 "index" 번호를 반환
join(): 배열의 모든 요소를 연결해 하나의 "문자열"로 만든다.
map(): 배열 내의 모든 요소에 반환된 데이터로 새로운 배열을 만들어 준다.

```js
const arr = ['AR', '패션','스포츠', '인테리어'];
console.log(
  arr.map(item => {
    return {
      name: item
    }
  });

const arr = [1, 2, 3, 4];
console.log(
  arr.map((item,index) => {
    console.log(index)  // 0 1 2 3
    return item * 2;    // [2, 3, 6, 8]
  })
)
```
pop(): 배열의 마지막 요소를 제거한다. 그 제거된 요소를 반환한다. 
원본이 수정된다.
shift(): pop과 반대로 맨 앞의 요소를 제거하고 그 제거된 요소를 반환한다.
원본이 수정된다.

push(): 배열의 끝에 하나 "이상"의 요소를 추가하고 배열의 "새로운 길이"를 반환한다.
unshift(): 배열의 앞에 하나 "이상"의 요소를 추가하고 배열의 "새로운 길이"를 반환한다.

```js
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
console.log(
  arr1.push(99, 7, 1421);  // 7
  arr2.unshift(99, 7, 1421); // 7
)
console.log(arr1)  // [1, 2, 3, 4, 99, 7, 1421]
console.log(arr2)  // [99, 7, 1421, 1, 2, 3, 4]
```

reduce(): 
```js
const arr = [1, 2, 3, 4];
// reduce(accumlator, currentValue)
const sum = arr.reduce((acc, cur) => {  // 2. cur = 1부터 시작
  //callback함수
  return acc + cur  // 3. 값이 acc로 넘어감
}, 0);  // 뒤에 숫자는 초기 값, 1. acc로 들어감

console.log(sum); // 10

```
reverse(): 배열의 순서를 뒤집는(반전) 역할


# 구조 분해 할당

## 객체
```js
const user = {
  name: 'Hun',
  age: 27,
  isValid: true
}

// const e = user.name;
// const a = user.age;
// const i = user.isValid;

const {
  name: e,
  age: a,
  isValid: i,
  email: x= 'the'
} = user

console.log(e, a, i, x)

const {
  name: e,
  ...rest
}

console.log(e, rest)  // rest는 나머지 전부 꺼내서 객체 데이터 형태로 꺼내옴

const user = {
  name: 'Hun',
  age: 27
}

for (const [k, v] of Object.entries(user)) {
  console.log(k, y)
}


```

## 배열
나열되어 있기 때문에 순서를 맞춰라!
```js
const aee = [1, 2, 3];
const [x, y, z] = arr
console.log(x, y, z)  // 1 2 3

const [,,,z] = arr2
console.log(z)  // 3


// 값을 맞교환(순서만)바꿀 때 유용하게 사용 가능
let a = 1
let b = 3

// const backup = a
// a = b
// b = backup

[b, a] = [a, b];
console.log(a)  // 3
console.log(b)  // 1

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const [x, y, ...r] = arr
console.log(x, y, r)

```
