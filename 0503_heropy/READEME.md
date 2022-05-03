# class (2250참고- prototype과instance static class 구분)
- 구조를 만들어놓고 인스턴스라고 불리우는 객체 데이터를 찍어낼 수 있다.
- 내부 메소드는 한 번만 만들어진다.
```js
// 생성자 함수로만 사용하라고 정의하기 위해 앞을 대문자로 사용(파스칼케이스)
// 생성자 함수의 장점: 구조를 만들어놓고 인스턴스라고 불리우는 객체 데이터를 찍어낼 수 있다.

// 1.
function Hello() {
  this.msg = 'Hello'
}
Hello.prototype.getMsg = function () {
  return this.msg
}

// this는 사용되는 곳마다 다름
// res1, res2 = instance
const res1 = new Hello() // res1만 있을 때 this.msg의 this = res1
console.log(res1)  // hello {msg: 'Hello!'}

const res2 = new Hello() 
console.log(res2) // hello {msg: 'Hello!'}

const res3 = {
  msg: 'Hello'
  getMsg: function() {  // 메소드
    return this.msg
  }
}
console.log(res.getMsg()) // Hello


const res4 = {
  msg: 'World'
  getMsg: function() {  // 메소드
    return this.msg
  }
}
console.log(res4.getMsg())  // World
console.log(res3.getMsg === res4.getMsg)  // false, 똑같이 생긴 참조형이지만 주소가 다름

// 2.
// class형태로 만들면 재활용이 가능하다.
function Hello() {
  this.msg = 'Hello'
}
Hello.prototype.getMsg = function () {
  return this.msg
}
const res1 = new Hello() 
console.log(res1)  // hello {msg: 'Hello!'} Prototype안에 getMsg존재

const res2 = new Hello() 
console.log(res2) // hello {msg: 'Hello!'} Prototype안에 getMsg존재

console.log(res1.getMsg === res2.getMsg)  // true, 같은 메모리에 있는 함수 데이터를 같은 주소로 바라보고 있다.

// 3. 
// class는 prototype으로 돌아간다
function Hello(str) {
  this.msg = str
}
Hello.prototype.getMsg = function () {
  return this.msg
}
const res1 = new Hello('팥') 
console.log(res1) // {msg: '팥'}

const res2 = new Hello('슈크림') 
console.log(res2) // {msg: '슈크림'}

console.log(res1.getMsg === res2.getMsg)  // true


// 4. 
Array.prototype.hun = function () {
  console.log('instance: ', this) // this는 인스턴스(prototype안에서 사용하기 때문에)
}

const arr = new Array(1, 2, 3, 4)
// 리터럴방식
const arr = [1, 2, 3, 4]
arr.hun();  // instance: [1, 2, 3, 4]

// 5. 2번 예제를 class 문법 사용
class Hello {
  constructor(str) {  // construtor = class Hello
    this.msg = str
  }
  getMsg () {
    return this.msg
  }
}
const res1 = new Hello('팥') 
console.log(res1) // {msg: '팥'}

const res2 = new Hello('슈크림') 
console.log(res2) // {msg: '슈크림'}

console.log(res1.getMsg === res2.getMsg)  // true


// 6. 

// html
<div class="font1">Hello</div>
<div class="font2">World</div>
<button>OK!</button>
// js
class Fonty {
  constructor(selector, options) {
    const defaultOptions = {
      fontSize: '16px',
      fontWeight: '700',
      color: 'black'
    }
    // option 병합
    this.options = {  // 얕은 복사
      ...defaultOptions,  // 전개연산자는 {}를 날려준다. 위의 fontSize ~ color까지 {}를 날리고 들어온다.
      ...options
    }
    // 요소를 검색
    this.els = document.querySelectorAll(selector)  // querySelectorAll 로 반환된 결과는 배열 데이터가 아닌 배열과 유사하게 생긴 NodeList이다.
    this.setStyle(this.options)
  }


  // { color: 'red', fontSize: '20px'} 
  setStyle(style) {
    this.els.forEach(el => {  // this는 인스턴스, forEach는 NodeList의 메소드이다.
      Object.assign(el.style, style)
    })
  }
  // 원래 prototype 메소드
  // static을 사용하여 정적 메소드로 선언
  static setRed(instance) {
    instance.setStyle({
      color: 'red'
    })
  }
  static getFamlies() {
    return ['serif', 'sans-serif', 'monospace', 'cursive']
  }
  // Getter, 메소드가 아닌 속성, 
  get fontSize() {
    console.log('in Getter: ', this.options.fontSize)
    return this.options.fontSize
  }
  // Setter
  set fontSize(value) {
    console.log('in Setter: ', value)
  }
}


// 사용예시!
new Fonty('.font1', {
  fontSize: '30px',
  fontWeight: '400',
  color: 'red'
})

const fonty = new Fonty('.font2', {
  fontSize: '30px',
  fontWeight: '400',
  color: 'green'
})

document.querySelector('button')
  .addEventListener('click', () => {
  // fonty.setStyle({
  //   color: 'yellowgreen'
  // })

  // Fonty.setRed(fonty)

  console.log(fonty.fontSize) // 30px
  fonty.fontSize = '99px'
})

console.log(Fonty.getFamlies)// ['serif', 'sans-serif', 'monospace', 'cursive']
```


```js
// getter, setter
class User {
  constructor(first, last) {
    this.first = first
    this.last = last
  }
  get fullName() {
    return `${this.first} ${this.last}`
    // return this.first + ' ' + this.last
  }
  set fullName(v) {
    // console.log(v.split(' ')) //   ['tomas', 'Miller']
    // const res = v.split(' ')
    // this.first = res[0]
    // this.last = res[1]
    const [first, last] = v.split(' ')
    this.last = first
    this.last = last
  }
}

const hun = new User('Hun', 'Byeon')
console.log(hun.fullName) // Hun Byeon
hun.fullName = 'tomas Miller'
console.log(hun.fullName) // tomas Miller
```

# 상속
```js
class User {
  first
  last
  constructor() {
    // No use
  }
  get fullName() {
    return `${this.first} ${this.last}`
  }
  set fullName(v) {
    const [first, last] = v.split(' ')
    this.last = first
    this.last = last
  }
}

class Hun extends User {
  constructor () {
    super() // User의 constructor()
    this.first = 'Hun'
    this.last = 'Byeon'
  }
}

const hun = new Hun()
console.log(hun.fullName)
```
## 얕은 복사, 깊은 복사
```html
<!-- lodash -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
```js
// 얕은 복사
const ref = {
  a: 1,
  b: 'abc',
  c: [
    { x:1, y:2 },
    { x:1, y:2 },
    { x:1, y:2 }
  ]
}

const refClone = {
  ...ref
}

console.log(ref === refclone) // false
refClone.c[0].x = 999;

// 껍데기만 복사하고 안에는 복사가 아니다.
console.log(ref)  // x: 999


// 깊은 복사: lodash이용
const refClone = _.cloneDeep(ref)
```

## 모듈 가져오기, 내보내기
```html
<!-- type="module"이 있어야 import, export를 사용할 수 있다. -->
<script type="module" defer src="./main.js"></script>
```
```js
// 가져오기(import), 내보내기(export) => 모듈(module)
// test.js: index.html에 연결이 되어있지 않음, 모듈
// 1. 이름을 가지는 내보내기, 이름 내보내기(다중 출구)
// 중복이 가능하며 import에서 hello로 밖에 가져오지 못한다.
export function hello() {
  console.log('Hello world')
}

export function world = {
  a: 1,
  b: 2
}

// 기본 내보내기 (단일 출구)
// export default 데이터
export default function hun() {
  console.log('guakakakakakakaka')
}

// main.js: index.html에 연결이 되어 있음
// import 기본내보내기(이름을 꼭 맞춰줄 필요 없다), { 이름내보내기(이름을 꼭 맞춰줘야 한다) } from ''
import hun, { hello, world } from './test.js'

hello();

// ★모듈 안에서의 this는 `undefined`이다. 모듈은 틀에 갇혀져 버리기 때문이다.
```