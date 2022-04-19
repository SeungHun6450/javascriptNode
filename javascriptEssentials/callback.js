// 콜백(Callback)
// 함수의 인수로 사용되는 함수
// 실행 위치를 보장하는 용도로 많이 사용한다.

// setTimeout(함수, 시간)
console.log('------callback--------');

function timeout(callback) {
  setTimeout(() => {
    console.log('Hun!');
    callback();
  }, 3000);
};

// callback함수, 실행을 보장해준다
timeout(() => {
  console.log('Done!');
});