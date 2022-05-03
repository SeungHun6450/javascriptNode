
```js
// https://omdbapi.com/?apikey=7035c60c&s=frozen

// 1.
// fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
//   .then(res => res.json())
//   .then(res => console.log(res))


// 2.
// let res = fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
// res.then(res => res.json())
// res.then(res => console.log(res))
```
# 비동기

## 1. callback 지옥
비동기를 callback패턴으로 해결할 때 일어나는 문제
비동기1 함수 실행 후 처리 -> 비동기2 함수 실행 후 처리 -> 비동기3 ...
처리를 해야 그 다음으로 넘어갈 수 있는 구조, 구조가 점점 깊어진다. 
```js
function getMovie(cb) {
  fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json())
    .the(res => {
      cb(res)
    })
};

getMovie(movies => {
  console.log(movies);
  비동기1() => {
    비동기2() ={
      비동기3()
    }
  }
});
```
## 2. Promise instance(객체)
callback을 해결하기 위해 등장, 비동기 처리가 되면 그때 callback안에서 처리 하겠다.

로직이 언제 처리가 될 지 알 수 없으니까 getMovie()로 호출해서 비동기코드 then()을 사용하여 처리가 되면 그 때 결과를 callback안에서 작성하여 쓰겠다. 이때 사용하는 것이 Promise 생성자 함수(Promise class)를 사용한다.
비동기처리가 해결이 되면 해결된 함수를 실행한다.
async await는 Promise객체와 같이 사용한다.

Promise는 대기, 이행, 거부 중 하나의 상태를 가진다.
- 대기(pending): 이행하지도, 거부하지도 않는 초기 상태.
- 이행(fulfilled): 연산이 성공적으로 완료 됨.
- 거부(rejected): 연산이 실패함.
```js
// getMovie()는 new promise 생성자에서 반환된 결과가 남는다.
// promise instance(객체)가 반환
function getMovie() {
  return new Promise(resolve => {
    fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
      .then(res => res.json())
      .the(res => {
        resolve(res)
    })
  })
};

// 1. then() 사용
getMovie().then(res => console.log(res));
// {res => console.log(res)} 가 resolve로 들어간다.
// resolve(res)가{ res => console.log(res) }의 res이다.
// resolve는 then에 작성한. 콜백함수이다.


// 2. async await를 사용
// res는 위의 1번의 res와 같다.
// 즉시 실행함수
(async function () {
const res = await getMovie();
console.log(res);
})();
```

### Promise.resolve(), Promise.reject()
- resovle: 특정한 인수로 넣은 데이터를 가지고 있는 Promise instance를 만드는 정적 메소드이다.
정상적으로 처리 됐을 때 완료가 됐음을 실행하는 개념이다.
해결이 된 상태의 instance이다.
- reject: 문제가 생기면 호출이 되어 catch로 넘겨주는 역할을 한다.
거부가 된 상태의 instance이다.

둘 중 하나가 실행되면 다른 하나는 실행이 되지 않는다.
```js

// 1. Promise.resolve()
function imageLoad(src) {
  return new Promise(resolve => {
      const imgEl = document.createElement('img');
      imgEl.src = src;
      imgEl.addEventListener('load', {} => {
      resolve(123);
    })
  })
}

imageLoad('https://gstatic.com/webp/gallary/1.jpg')
  .then(res => console.log(res))

const pi = Promise.resolve(123)
pi.then(res => console.log(res))

// 2. Promise.resolve()
await Promise.resolve() // Macro Task 시간을 지연
console.log(123)

// Macro Task
setTimeout({} => {
  console.log(123)
}, 0)


// 1. Promise.reject()

function imageLoad(src) {
  return new Promise((resolve, reject) => {
    if(!src){ // undefined이면, true
      reject('이미지 경로가 존재하지 않습니다.')
      return  // resolve나 reject둘 중 하나가 실행되면 다른 하나는 실행이 되지 않는다.
      // 여기서 return을 넣지 않으면 아래의 이벤트 자체는 실행이 되고 resolve만 실행이 되지 않는다. 
    }
    const imgEl = document.createElement('img');
    imgEl.src = src;
    imgEl.addEventListener('load', {} => {
      resolve('이미지 로드 완료');
    })
  })
}

imageLoad()
  .then(() => {
    console.log(res)
  })
  .catch(error => {
    console.log(error)
  })



// 2. Promise.reject()
function getMovie() {
  return new Promise((resolve, reject) => {
    fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
      .then(res => res.json())
      .the(res => {
        resolve(res)
      })
      .catch({} => {
        reject('교통 사고!')
      })
  })
};

getMovie()
 .then()  // x
 .catch(e => {
   console.log(e)
 }) // o
```

## 3. Loading 화면 만들기

```html
<div class="image">
  <div class="loader">Loading...</div>
</div>
```
```css
.image {
  width: 360px;
  height: 200px;
  margin: 10px;
  border: 4px; solid;
  border-radius: 10px;
  font-size: 28px;
  font-weight: 700;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center; 
}
.image.done {
  background-image: url("https://gstatic.com/webp/gallary/1.jpg");
}
.image.done .loader{
  display: none;
}
```
```js
// 비동기 처리

// 1.
// 그림이 src, 'Done'이 있는 callback함수가 cb에 들어간다.
// src가 load되면 cb함수를 실행시킨다.
function imageLoad(src, cb) {
  const imgEl = document.createElement('img');
  imgEl.src = src;
  // 요소가 load되면 callback을 실행
  imgEl.addEventListener('load', {} => {
    cb();
  })
}

// 2. Promise
// resolve는 imageLoad의 then()의 화살표 함수로 들어간다.
function imageLoad(src) {
  return new Promise(resolve => {
    const imgEl = document.createElement('img');
    imgEl.src = src;
    imgEl.addEventListener('load', {} => {
    resolve();
    })
  })
}

const imgContainer = document.querySelector('.image');


imageLoad('https://gstatic.com/webp/gallary/1.jpg')
  .then({} => {
    console.log('Done!');
    imgContainer.classList.add('done');
  })


// 3. async await
async function() {
  await imageLoad('https://gstatic.com/webp/gallary/1.jpg')
  console.log('Done!');
  imgContainer.classList.add('done');
}
```

## OMDbapi를 이용한 loading화면 구현?
```js
// https://omdbapi.com/?apikey=7035c60c&s=frozen
async function getMovie() {
  let res = await fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
  res = await res.json()
  return res
}

const res = getMovie()
console.log(res)  // Promise 객체 출력, async라는 키워드가 붙어있는 비동기 함수 이기 때문에
// return res는 return new Promise(resolve -> {
//  resolve(res)
// })
// 가 생략되었다고 보면 된다.

// 고로 제대로 불러올려면 아래와 같이 사용을 해야 한다.
const res = await getMovie()
const res = getMovie().then()
```

## 4. try / catch / finally
예외 사항을 처리하기 위해 사용한다. 보통 비동기에서 예외가 많이 발생한다.

- try: 에러가 발생할 수도 있는 부분의 코드를 넣어서 시도를 해보는 부분
- catch: 에러가 확인이 되면 에러에 대한 처리를 담당하는 부분, e(error)는 매개변수
- finally: try, catch의 성공 유무와 관계 없이 코드가 처리 되면 최종 적으로 무조건 실행이 되는 부분이다. 처리할 코드를 넣어주는 것이 좋다.

```js
// async / await
try {

} catch(e) {

} finally {

}

// ex)
async function getMovie() {
  try {
    let res = await fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    res = await res.json()
    console.log(res)
    return res
  } catch (e) {
    console.log('error 발생! ', e)
  } finally {
    console.log('실행 완료!')
  }
}

const res = getMovie()
console.log(res)



// then()
.then()
.catch()
.finally()

// ex)
function getMovie() {
  fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json())
    .then(res => res)
    .catch(error => alert('~~~~'))
    .finally(() => {console.log('Done!')})
}

const res = getMovie();
console.log(res);
```
## 5. Promise.all([promise1, promise2])
비동기 코드들을 동시에 출발 시키면 어떤 비동기 코드가 먼저 올지 모른다.
순서를 보장하기 위해 비동기 안에 비동기... 식으로 작성을 하면 callback지옥에 빠진다.
이를 해결하기 위해 Promise.all()을 사용하여 비동기 코드를 전부 동시 실행, 출발해서 모두 도착하면 넘어가게 만들어 준다.

```js
// 함수를 실행시키면 비동기 코드들이 출발을 동시에 해서 fetch1이 먼저 올지, fetch2가 먼저 올지 모른다.
function getMovie() {
  fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json())
    .then(res => {
      console.log('fetch1:', res)
    })
  fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json())
    .then(res => {
      console.log('fetch2:', res)
    })
}

getMovie()

// 순서를 보장하려면 다음과 같이 써야하지만 callback 지옥 형태이다.
function getMovie() {
  fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json())
    .then(res => {
      console.log('fetch1:', res);
      fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
        .then(res => res.json())
        .then(res => {
          console.log('fetch2:', res);
          console.log('Done!');
        })
    })
}

getMovie()

// 이를 해결하기 위해 Promise.all()을 사용한다.
// 정적 메소드, 인수로 배열을 넣음, 각각 하나의 Promise instance
// 1, 2번 비동기 코드를 전부 실행해서 전부 도착하면 넘어간다
// 일종의 병렬 처리이다.
function getMovie() {
  Promise.all([ 
  fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json()),
  fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json())
  ])
    .then(([res1, res2]) => {
      console.log('fetch1:', res[0]);
      console.log('fetch2:', res[1]);
      console.log('Done!');
    })
)
getMoive();


// async await
// Promise.all()에 비해 단점이 있는데 한 코드가 출발하고 도착해야 다음 코드가 출발한다.
// 일종의 직렬 처리이다.
async function getMovie() {
  const res1 = await fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json()),
  const res2 = await fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json())

  console.log('async1:', res1);
  console.log('async2:', res2);
  console.log('Done!');
}

// 이런 문제를 해결하기 위해 Promise.all을 적용해보면 다음과 같다.
async function getMovie() {
  const [res1, res2] = await Promise.all([fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json()),
  fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json())
  ])

  console.log('async1:', res1);
  console.log('async2:', res2);
  console.log('Done!');
}

getMoive();
```

