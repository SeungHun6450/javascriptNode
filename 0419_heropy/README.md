# 4. 함수(Function)

## 선언과 표현

1. 선언 : 호이스팅 O
1. 표현 : 호이스팅 X

```js
function hello() {  // 함수 선언, 호이스팅 가능, 기명함수
  console.log(123)
}
hello();

const hello = function() {  // 함수 표현, 호이스팅 불가, 익명함수

}
```


```js

function sum(a, b) {  // parameter(매개변수)
  console.log(a + b)
}
sum(2, 4);   // 2, 4는 arguments(인수들)
```

call : 함수 호출


## new Function()

생성자 함수 호출로 함수를 만드는 법!
근데 자주 안씀.

```js
// 생성자 함수, Function 클래스, 객체, () : 호출
// const sum = new Function('a','b','console.log(a + b)') 
// sum(2, 4);
```

## 반환과 종료

`return`  
`undefined`

`return` 키워드를 사용하면 함수가 종료된다!


## 매개변수 패턴

- 매개변수 기본 값
- 구조 분해 할당(Destrucuring assignment)
- 나머지 매개변수(Rest parameter)
- `arguments` 객체


## IIFE

Immediately-Invoked Function Expression
즉시 실행 함수(표현) : 익명 함수를 선언하면서 실행할 때 사용한다. 

```js
// ;은 종료의 의미(; 사용 안하는 경우를 위해)
;(익명함수)()
;(익명함수())
```

## 호이스팅

함수 선언에서만 생긴다.
함수 선언을 뒤에 호출을 앞에 하는 것을 의미한다. 
활용하는 이유는 코드를 볼 때 중요 코드, 로직들을 먼저 보고 그 다음 함수를 보는게 효율적이라 활용한다.

```js
abc();
function abc() {

}
```

## Callback

콜백 함수(Callback function) 줄여서 콜백이라 부른다.
콜백은 함수의 인수로 사용되는 함수