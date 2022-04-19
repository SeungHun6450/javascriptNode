// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

console.log("---------타이머 함수----------");

//setTimeout
const timeoutTimer = setTimeout(() => {
  console.log('Hun!');
}, 3000); // ms단위, 3초후 Hun!을 출력


// h1 태그를 클릭 시 clearTimeout이 실행
const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  clearTimeout(timeoutTimer);
});

// setInterval
const intervalTimer = setInterval(() => {
  console.log('Hun!');
}, 3000); // ms단위, 3초마다 실행

// h1 태그를 클릭 시 clearInterval 실행
const h1El2 = document.querySelector('h1');
h1El2.addEventListener('click', () => {
  clearInterval(intervalTimer);
});