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
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

document.querySelector('input')
  .addEventListener('keydown', () => {

  })
```

## DOM(Document Object Model) API
```html
<!-- Node는 <div> ~ </div>, 조직 -->
<!-- Element는 <div>, <span>, 조직원 -->
<div id="abc" title="dsda" data-이름="">
  123
  <span>abc</span>
</div>
```

```js
// Element vs Node
// Element

const divEl = document.querySelector('div')
console.log('Element: ', divEl)

const divEls = document.querySelectorAll('div')
console.log('NodeLsit(개체): ', divEls)

const divEl = document.querySelector('div').id
console.log(divEl)

console.log(divEl.classList.contains());  // 해당 class가 있는지 없는지true, false로 반환
//.class는 쓸 수 없다. 예약어들
// 클래스 추가(add) / 제거(remove) / 확인(contains)
// 클래스 이름만 기입해야한다
divEl.classList.add('heropy')
divEl.classList.remove('btn-xs')
console.log(divEl.classList)

const divEl = document.getElementById('abc')
// 요소
console.log(divEl.parentNode)
// 이전 형제 요소, 다음 형제 요소
console.log(divEl.previousElementSibling)
console.log(divEl.nextElementSibling)
// 체이닝 형태로 작성해도 된다.
divEl.parentNode.previousElementSibling
divEl.parentNode.nextElementSibling
// 내부 HTML구조 출력
divEl.innerHTML
// 요소 생성
document.createElement('h1')

// 둘 다 getter와 setter이므로 가져오고 넣는 것 둘 다 가능하다.
// HTML구조로 바꿔서 들어가고 넣어진다.
// innerHTML
// textContent

// innerText: 쓰지 말것

// prepend, append: 둘 다 getter와 setter이다. HTML구조로 들어가지 않고 글자로만 앞, 뒤로 들어간다.

// 1.
for(let i = 0l i< 10; i += 1) {
  const h2El = document.createElement('h2')
  h2El.textContent = i + 1
  divEl.append(h2El);
}

// 2. 
let h2Els = []
for(let i = 0; i< 10; i += 1) {
  const h2El = document.createElement('h2')
  h2El.push(h2El)
}
divEl.append(...h2Els)


// attributes: 속성들
console.log(divEl.getAttribute('title'))
console.log(divEl.setAttribute('title', 'abcdefg'))

// data-이름: 데이터를 잠시 보관해놓는 개념
const user = {
  name: 'Hun',
  age: 27
}
<div class="btn" data-user="{
  name: 'Hun',
  age: 27
  }"></div>
123
<span>abc</span>
// dataset
console.log(divEl.dataset.user) // 문자데이터로 출력


divEl.dataset.user = JSON.stringfy(user); // JSON문법에 맞게 문자화
// data-user
console.log(JSON.parse(divEl.dataset.user)) // 객체로 출력하려면 JSON이용

// 요소 크기
console.log(divEl.clientWidth)
console.log(divEl.clientHeight)

// 요소 렌더링 정보, 주의해서 써야한다, 함수 호출시 그때 그때 계산하기 때문이다.
console.log(divEl.getBoundingClientRect())

const h1El = document.createElement('h1');

// 둘 다 같다.
h1E1.id = 'abc'
h1El.setAttribute('id', 'abc')
h1El.classList.add('btn')

document.body.append(h1El)
```

## Event

```js

<input />
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
// click, input, keydown, mousemove, mouseenter, mouseleave, scroll, resize
```