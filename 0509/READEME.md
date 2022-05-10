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

------------
bubbling과 capture
- Captuer: 위에서 아래로 내려갔다 올라옴
- Event Bubbling: 아래에서 위로 올라감

```html
  <link rel="stylesheet" href="./main.css">
  <script defer src="./main.js"></script>
<body>
  <div class="parent">
    <div class="child"></div>
  </div>
</body>
```
```js
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')


// 아래를 출력 시 아래서 부터(child부터) 위로 올라가면서 출력한다.(Bubbling)
// 이벤트는 위에서 아래로 찍은 다음에 아래서 부터 시작한다.
// child => parent -> body -> window
document.body.addEventListener('click', () => {
  console.log('Body!')
})

childEl.addEventListener('click', () => {
  console.log('Child!')
})

parentEl.addEventListener('click', () => {
  console.log('Parent!')
})

window.addEventListener('click', () => {
  console.log('Window!');
})


// body -> child -> parent -> window
document.body.addEventListener('click', () => {
  console.log('Body!')
},capture: true)

childEl.addEventListener('click', () => {
  console.log('Child!')
})

parentEl.addEventListener('click', () => {
  console.log('Parent!')
})

window.addEventListener('click', () => {
  console.log('Window!');
})


window.addEventListener('click', e => {
  console.log(e);
})
```
```css
.parent {
  width: 300px;
  height: 200px;
  border: 4px solid red;
}
.child {
  width: 100px;
  height: 100px;
  background-color: orange;
}
```

- preventDefault(): 기본 동작을 막아두는 용도로 사용한다.
- stopPropagation(): bubbling을 막기 위해 사용한다. 전파를 멈춘다.

- addEventListener(이벤트 이름(종류), 콜백(핸들러), {})
{}안에 capture: true, once: true 등 사용 가능
- once: true / 이벤트는 단 한번만 동작 후 핸들러가 지워짐
- capture: true / capture가 걸리면 먼저 실행하고 그 이후 원래대로 아래서 부터 실행한다. (위의 예제에 있다.), ★capture는 지울 때 removeEventListener에서도 capture를 부여해 줘야 한다.
- passive: true / 화면의 동작과 로직 처리를 분리시켜준다.

```html
  <link rel="stylesheet" href="./main.css">
  <script defer src="./main.js"></script>
<body>
  <div class="parent">
    <div class="child"></div>
  </div>
</body>
```
```js
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

parentEl.addEventListener('wheel', event => {
  event.preventDefault();
})
parentEl.addEventListener('wheel', event => {
  event.stopPropagation();
})

// stopPropagation(): Bubbling을 막기 위해 사용한다. (동시에 눌러지는 것을 방지)
childEl.addEventListener('click', e => {
  event.stopPropagation();
  console.log('Child');
})
parentEl.addEventListener('click', e => {
  console.log('Parent');
}, {
  // once: true, // 이벤트는 단 한번만 동작 후 핸들러가 지워짐
  captrue: true
})

// 위의 코드를 실행시키면 엄청난 버벅임(렉)이 일어난다.
// 이를 해결하기위해 passive를 사용해준다.
parentEl.addEventListener('wheel', e => {
  for (let i = 0; i < 10000 ; i += 1) {
    console.log(e);
  }
}, {
  // 화면의 동작과 로직 처리를 분리시켜준다.
  passive: true
})

const button = document.querySelector('button')

function back() {
  console.log('Child')
}

childEl.addEventListener('click', back, {
  capture: true
})

button.addEventListener('click', () => {
  childEl.removeEventListener('click', back, {
    captur: true
  })
})

```
```css
.parent {
  width: 300px;
  height: 200px;
  border: 4px solid red;
  overflow: auto;
}
.child {
  width: 100px;
  height: 1000px;
  background-color: orange;
}
```


# Scss
## 데이터
- Numbers: 1, .82, 20px, 2em
- Strings: 색상 제외 모든 문자 
- Colors: red, blue, #fff000...
- Booleans: true, false
- Nulls: null
- Lists: (apple, banana,corange), apple orange / 배열데이터(데이터가 나열)
- Maps: (apple: a, orange: o, banana: b) / 객체데이터(key: value 형태)

## 중첩
```html
<div class="container">
  <div class="item">1</div>
  <div class="item active">2</div>
</div>

<div class="item">3</div>
```
```scss
.container {
  border: 4px solid;
  .item {
    color: red;
  }
}
```
- 상위 선택자 참조
자기가 있는 중괄호 범위의 그 선택자를 참조한다.
```scss
.container {
  border: 4px solid;
  > .item {
    color: red;
    &.active {
      color: blue;
    }
  }
}
```

## !default
!default 플래그는 기본 값을 가져와서 쓸 때 사용한다.
```scss
$color-primary: red;
.box {
  $color-primary: blue !default // red
}
```
## 문자보간 {}
`{$this}`

## 연산자

+, -, *, /(math.div(,))

## 재활용 
@mixin

## 조건 반복
if, for