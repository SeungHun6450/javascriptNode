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

## for of

## for in