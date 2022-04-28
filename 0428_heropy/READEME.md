
## 데이터의 불변성과 가변성

참조형 : 객체 배열 함수
원시형 : 나머지


```js

// 메모리
// |M1|M2|M3|M4|M5|M6|M7|M8|

// 원시형 : 똑같이 생긴 것은 같은 메모리 주소를 참조한다.
// 1.
const a = 1;  // M1
let b = 1;    // M1
b = 7;        // M2

// 2. M2는 현재 상태에서 가비지콜렉션이 비워준다.
// 근데 가비지 콜렉션이 언제 비워줄지 몰라서 메모리에 남아있을 수 있다.
// 메모리가 낭비되고 있다.
// 고로 메모리 관리를 잘 해줘야한다!
const a = 'A' // M1
let b = 'B'   // M2
b = 123;      // M3


// 3. 직접적으로 메모리 관리를 할 수 없지만 상황에 맞게 정리를 해줄 수 있다.
let btnEl = document.querySelector('button')  // M1, Element {}
const handler = event => {                      // M2, handler() => {}
  console.log(123)
}
btnEl.addEventListener('click', handler)        // M2 
btnEl.removeEventListener('click', handler)     // M2를 지워라, 메모리 관리
btnEl = null; // M3, 상황이 되서 필요가 없으면 M1을 가비지 컬렉션이 와서 비워준다.




// 참조형: 

// 메모리
// |M1|M2|M3|M4|M5|M6|M7|M8|

// 예시 1
const a = { x: 1 }; // M1: { x: }, M2: 1 => { x: M2 }
const b = a;        //  
b.x = 7;            // M3: 7, { x: M3 }


// 예시 2
const a = {         // M1: {x:M2 ,y:M3 }
  x: 1,             // M2: 1
  y: [1, 2]         // M3: [M2, M4]
}                   // M4: 2
const b = a.y       // M3: [M2, M4]
b[0]  = 7           // M5: 7 => M3: [M5, M4]

console.log(a.y)    // [7, 2]


// 예시 3
const a = {         // M1: {x: M2,y: M3, z: M4}
  x: 1,             // M2: 1
  y: [1, 2],        // M3: [M2, M4]
  z: { a:2, b:3 }   // M4: 2
}                   // M5: {a: M4, b:M6}
                    // M6: 3
const b = a.z       // M7: {}
b.a = {}            // M8: {}



```

## 재귀(recursive) 함수
내 자신 안에서 나를 실행 시킨다.
자기 자신을 자기 자신 안에서 호출하는 것, 무한 반복됨
재귀함수 사용 시 항상 종료조건이 있어야 한다.
깊은 복사에서 참조형 안에 참조가 없을 때 까지 재귀함수가 사용된다.

```js
let i = 0;

function abc() {
  console.log(i)
  i += 1;
  if (i < 10) {
    abc();
  }
}
abc();
```

## 비동기
동기는 순차적으로 처리를한다. 하나를 처리가 완전히 끝나야 다음으로 넘어간다.
비동기는 하나의 코드를 처리하고 있는 도중 다음 코드를 처리할 수 있다.

동기: 1 -> 끝 -> 2 -> 끝 -> 3 -> 끝 -> ..
비동기: 1 -> 2 -> 3 -> 끝 -> 4 -> ..

```js
// 전송, fetch: 비동기 함수, 1. then(): 값을 가지고 돌아 오면 그 때 실행
fetch('https://www.omdbapi.com?apikey=7035c60c&s=frozen', {
  method: 'GET' // 기본 메소드 GET, 안적어줘도 되는데 method에 다른 값도 가능
})
  .then(res => res.json())
  .then(res => {
    console.log(res)
  })
  console.log(123)

// 2. axios library 활용, 하위호환성이 좋음
axios({
  url: 'https://www.omdbapi.com?apikey=7035c60c&s=frozen',
  method: 'GET'
})
.then(res => console.log(res));

console.log(123)


// 3. async await: 같이 세트로 묶어서 사용해야 한다. 비동기 함수임을 선언한다.
// 동기처럼 처리할 수 있게 만들어 준다.

// 1. fetch 사용
async function getMovie() {
let res = await fetch('https://www.omdbapi.com?apikey=7035c60c&s=frozen')
  res = await res.json()
  console.log(res)
}

// 2. axios 사용
async function getMovie() {
  const { data } = await axios({
    url: 'https://www.omdbapi.com?apikey=7035c60c&s=frozen',
    method: 'GET'
  })
  console.log(data)
}

// 원하는 정보 빼오기?
// index.html
// <button></button>
// <div class="movies"></div>


const moviesEl = document.querySelector('.movies');
const anotherMoviesEl = document.querySelector('.another');
getMovie(1, moviesEl);
getMovie(1, anotherMoviesEl);


const btnEl = document.querySelector('button');
btnEl.addEventListener('click', () => {
  getMovie(2, moviesEl);
});

async function getMovie(page, containerEl) {
  const { data } = await axios({
    url: `https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=${this}`,
    method: 'GET'
  })
  console.log(data);
  const movies = data.Search; 
  renderMovies(movies);
};

function renderMovies(movies) {
  movies.forEach(movie => {
    console.log(movie);
    const movieEl = document.createElement('div');
    movieEl.textContent = movie.Title;
    document.body.append(movieEl);
  }) 
};
```
