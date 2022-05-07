## 가져오기 내보내기+@
```js
// 2분 객체구조분해에서는  콜론을 사용하여 사용하고자 하는 이름을 바꿀 수 있는데, import에서는 as키워드를 대신 쓴다.
import {named1 as hun, named2} from './test.js'

console.log(hun, named2)


export const named1 = {
  a: 1,
  b: 2
}
export const named2 = 123

export default function() {
  return 'abc'
}

// node.js는 local을 제어하는 환경이라 생각
// node.jssms Common.js지원, Common.js는 기본 내보내기가 없다
// ESM
const path = require('path')
const _ = require('lodash')
module.exports = {
  a: 1,
  b: 2
}
```

## Call Stack && Event Loop

```js
setTimeout(() => {
  console.log('Timeout!')
}, 1000)
function a() {
  console.log('A')
  function b() {
    console.log('B')
  }
  b()
}
a()
// 1000 => A B Timeout!
// 0 => A B Timeout!
// setTimeout이 먼저 실행하는 것은 맞지만 web api를 통해 브라우저를 통해 돌리기 때문에(브라우저의 도움을 받아야하기 때문에) 이를 하는 동안 a와 b가 먼저 실행된다.
// 참조사이트:  http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

document.querySelector('input')
  .addEventListener('keydown', () => {

  })
```

## DOM(Document Object Model) API
- querySelector(): ( )안에 있는 첫 번째 요소를 찾는다.
- querySelectorAll(): ( )안에 있는 모든 요소를 찾는다.
```html
<div>
  123
  <span>abc</span>
</div>
<div></div>
<div></div>
```

- Element vs Node
Node는 <div> ~ </div>, div태그 내 모든 것들, 조직이라 생각하면 된다.
Element는 <div>, <span>, div, span 각 태그들, 조직원이라 생각하면 된다.

```js
const divEl = document.querySelector('div')
console.log('Element: ', divEl)

const divEls = document.querySelectorAll('div')
console.log('찾은 태그들, NodeLsit(개체): ', divEls)

// node구조 표시
console.log('Node 구조: 'divEl.childNodes)

// 각각의 div 반복
divEls.forEach(el => {
  console.log(el)
})

for (const el of divEls) {
  console.log(el)
}
```

- .id: 제일 먼저 찾은 querySelector에서 id라는 속성을 조회한다.
id를 나눠서 뭔가를 활용하려면 표준 내장 객체인 split()메소드를 사용한다.

```html
<div id="abc xyz">
  123
  <span>abc</span>
</div>
```
```js
// id가 하나 일 때
const divEl = document.querySelector('div').id
console.log(divEl)  // abc xyz

// id가 여러개 일 때 구분하기 위해 split을 사용
console.log(divEl.split(' ')) /// ['abc', 'xyz']

```
- classList: 클래스 추가(add) / 제거(remove) / 확인(contians)을 사용할 수 있다.
클래스 이름만 기입해야한다.
※ .class는 예약어 이기에 사용할 수 없다.

```html
<div id="abc xyz" class="btn btn-xs btn-primary">
  123
  <span>abc</span>
</div>
```
```js
console.log(divEl.classList)
// 클래스 추가(add) / 제거(remove) / 확인(contains)
// 클래스 이름만 기입해야한다
console.log(divEl.classList.contains());  // 해당 class가 있는지 없는지true, false로 반환
divEl.classList.add('heropy')
divEl.classList.remove('btn-xs')
```
- getElementById(): id를 통해 요소를 얻어서 사용한다.
- parentNode: 부모 요소
- previousElementSibling: 이전 형제 요소
- nextElementSibling: 다음 형제 요소
```html
<div class="parent">
  <div id="abc" class="btn btn-xs btn-primary">
    <h1>123</h1>
    <span>abc</span>
  </div>
  <div></div>
  <div></div>
</div>
<section></section>
```
```js
const divEl = document.querySelector('div')
const divElId = document.getElementById('abc')
console.log(divElId)
// 부모 요소
console.log(divEl.parentNode)
// 이전 형제 요소, 다음 형제 요소
console.log(divEl.previousElementSibling)
console.log(divEl.nextElementSibling)
// 체이닝 형태로 작성해도 된다.
divEl.parentNode.previousElementSibling
divEl.parentNode.nextElementSibling
```
- HTML구조: 둘 다 getter, setter이므로 가져오고, 넣는 것이 가능하다.
1. .innerHTML: getter로 사용하면 내부 HTML구조가 문자로 출력된다, setter로 사용하면 html구조로 출력이 된다.
2. .textContent: getter로 사용하면 요소의 text내용 출력된다, setter로 사용하면 글자 그대로 출력이 된다.
```html
  <div class="btn">
    123
    <span>abc</span>
  </div>
```
```js
const divEl = document.querySelector('div')

// getter
console.log(divEl.innerHTML)
console.log(divEl.textContent)

// setter
divEl.innerHTML = '<h1 style="color: red;">Hello!</h1>' // html구조로 출력
divEl.textContent = '<h1 style="color: red;">Hello!</h1>' // 글자 그대로 출력
```

- prepend: HTML구조로 들어가지 않고 글자로만 앞으로 들어간다. getter와 setter이다. 
- append: HTML구조로 들어가지 않고 글자로만 뒤로 들어간다. getter와 setter이다. 
- for 반복문까지 같이 사용한 예시를 아래에 작성해 두었다.
```html
  <div class="btn">
    123
    <span>abc</span>
  </div>
```
```js
const divEl = document.querySelector('div')
divEl.innerHTML = /* html */
  <h1 style="color: red">
    Hello!
    <div style="color: blue;">Good!</div>
  </h1>;

divEl.append('<h2>Hi</h2>');

// 요소 생성
const h2El = document.createElement('h2')
divEl.prepend(h2El)

// 1. for 반복문 방법1
for(let i = 0; i< 10; i += 1) {
  const h2El = document.createElement('h2')
  h2El.textContent = i + 1
  divEl.append(h2El);
}

// 2. for 반복문 방법2
let h2Els = []
for(let i = 0; i< 10; i += 1) {
  const h2El = document.createElement('h2')
  h2El.push(h2El)
}
divEl.append(...h2Els)
```

- attributes(속성들)
1. getAttribute: 요소가 가지고 있는 속성의 값을 얻을 수 있다.
2. setAttribute: 요소의 속성 값을 정해줄 수 있다.
```html
  <div class="btn" title="asfwqdsa">
    123
    <span>abc</span>
  </div>
```
```js
const divEl = document.querySelector('div')
// attributes: 속성들
console.log(divEl.getAttribute('title'))
console.log(divEl.setAttribute('title', 'abcdefg'))
```
- data-이름: 데이터를 잠시 보관해 놓는 개념이다. getter, setter 둘 다 가능하다.
dataset: 데이터 속성들 중에서 원하는 것을 가져오는 방법이다.
```html
<div class="btn" data-user="{
  name: 'Hun',
  age: 27
  }"></div>
123
<span>abc</span>
</div>
```
```js
const divEl = document.querySelector('div')

const user = {
  name: 'Hun',
  age: 27
}

// dataset, getter
console.log(divEl.dataset.user) // 문자데이터로 출력, get

// 
divEl.dataset.user = JSON.stringfy(user); // JSON문법에 맞게 문자화, 데이터 할당 setter

// data-user
console.log(JSON.parse(divEl.dataset.user)) // 객체로 출력하려면 JSON이용
```

- 요소 크기
1. clientWidth: 클라이언트 가로 길이
2. clientHeight: 클라이언트 세로 높이
3. getBoundingClientRect: 요소 렌더링 정보, 주의해서 써야한다, 함수 호출시 그때 그때 계산하기 때문이다.
이 정보를 이용하여 값을 찾아낼 수 있다.
```html
<div class="btn" data-user="{
  name: 'Hun',
  age: 27
  }"></div>
123
<span>abc</span>
</div>
```
```css
div {
  width: 200px;
  height: 100px;
  border: 2px solid;
  top: 200px;
  left: 10px;
}
```
```js
const divEl = document.querySelector('div')
// 요소 크기
console.log(divEl.clientWidth)
console.log(divEl.clientHeight)

// 요소 렌더링 정보, 주의해서 써야한다, 함수 호출시 그때 그때 계산하기 때문이다.
console.log(divEl.getBoundingClientRect()) 

// 추가 내용
const h1El = document.createElement('h1');

// 둘 다 같다.
h1E1.id = 'abc'
h1El.setAttribute('id', 'abc')
h1El.classList.add('btn')

document.body.append(h1El)
```
```js


```

## Event
Event handler(Callback): addEventListener부분을 의미한다.
아래의 예시를 보자
```html
<div class="btn" data-user="Hun">
123
<span>abc</span>
</div>
<input />
```
```js
const divEl = document.querySelector('div')
const inpuEl = document.querySelector('input')

// Event handler == Callback
divEl.addEventListener('click', e => {  // e는 매개변수
  console.log(e);
})

// 입력이 될 때의 정보
// input, keydown
// inpuEl.addEventListener('input', e => {
inpuEl.addEventListener('keydown', e => {
  if(e.isComposing) return  // ★한글이 2번 이상 입력될 시 이 코드를 사용해라!
  console.log(event.target.value);
})

// prevent default: 기본 동작 방지
// stop propagtion: 이벤트 버블링 정지(방지)
// 이벤트 버블링 vs 이벤트 캡처링
// currentTarget vs target
, { capture: true })
// 이벤트 종류
// click, input, keydown, mousemove, mouseenter, mouseleave, scroll, resize..
```