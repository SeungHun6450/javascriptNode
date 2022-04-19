
// 1. 
// 함수 선언, 기명 함수, 호이스팅 가능
function sum(a, b) {  // parameter(매개변수) : 이름은 마음대로 사용 가능
  console.log(a + b)
}
sum(2, 4);   // 2, 4는 arguments(인수들)


// 2.
// callback
// ★함수는 하나의 데이터이다.
function callFn(callback) { // 2.callback에 함수 데이터인 sum이 들어감
  callback(2, 4); // 3. callback은 sum이므로 sum(2,4)를 실행한다.
}
callFn(sum);  // 1. sum은 인수(데이터) -> callback으로 들어감


// 3. 
function sum(a, b) {  // 2. 매개변수에 1번에서 온 인수들이 담긴다.
  return a + b; //  3. return을 통해 값을 함수 밖으로 내보낸다.
}
const res = sum(2, 4);  // 1. 함수 호출(실행)
console.log(res);  // 4. return 된 값 6 출력

res = sum('Hello ', 'world!');
console.log(res.slice(6,11)); // world

// 체이닝으로 형태 바꾸기(method Chaining)
// 메소드 체이닝 : 메소드를 이어서(붙혀서)사용하는 방법
console.log(sum('Hello ', 'world!').slice(6, 11));


// 4.반환과 종료
function sum2() {
  // 1. return x
  // 2. return 추가, return값을 반환하고 종료해라!
  return 456;
  console.log(123); // 1. 123
}
// 2. 456
console.log(sum2());  // 1. undefined

// 5. 매개변수 패턴
function sum3(a,b) {
  return a + b;
}
console.log(sum(2, 4)); //6
console.log(sum(4));  // NaN, b에는 들어간 값이 없으므로 undefined, 즉 숫자+undefined = 숫자로 표현이 안됨 = NaN
// 매개변수 기본 값: 위와 같이 인수가 안들어 갔을 경우를 대비해 숫자 데이터를 나오게 하려고 파라미터 자체에 기본 값을 미리 지정하는 방법이 있다.
// sum3(a=2, b=3) 이런식으로

// 객체데이터를 넣었을 경우(리터럴 방식)
const user = {
  name: 'Hun',
  age: 85
};
function getName(user) {  // parameter의 user는 객체로 선언한 user가 아니다.
  return user.name; // user는 getName의 user를 바라보고 있다.
};
console.log(getName(user)); // Hun


// 구조 분해 할당
function getName({name, age}) { // 매개변수를 구조분해, key 이름을 그대로 변수로 할당, key이름은 같아야함! ,바꾸려면 변수선언 or name: email이런식으로 해줘야함
  return [name, age]; 
};
console.log(getName(user)); // ['Hun', 85]

// 나머지 매개변수
function sum4(...rest) {  // 나머지 매개변수 작성 방법 ...매개변수이름, ...은 전개 연산자(spread operator)
//function sum4(a, b, ...rest) {  // 이렇게도 사용 가능
  // console.log(rest);  // 나머지 매개변수를 사용하면 [1, 2, 3] 배열데이터 타입이 된다.
  // return rest.reduce((acc, cur) => {
  //  return acc + cur
  // })
  //
  //
  //
  return a + b + c;
}

console.log(sum4(1, 2, 3));   // 6


// arguments 객체 : 함수로 들어오는 모든 인수를 가지고 있는 암시적인 데이터(변수, 객체)
// 선언을 하지 않아도 출력이 가능하다.
// 그냥 나머지 매개변수를 사용해라..(명시적이므로 권장됨)
function sum5() {
  // 유사 배열로 출력이 된다.
  console.log(arguments);
  
  // arguments는(유사 배열은) reduce 함수를 사용할 수 없다.
  // reduce에 익명함수 데이터가 인수로 들어감 : callback함수
  // return arguments.reduce(function(acc, cur) {
  //   return acc + cur;
  // })
  let res = 0;
  for (const item of arguments) {
    res += item;
  }
  return res;

}

console.log(sum5(1, 2, 3, 4, 5, 6, 7, 8, 9));





// 6. IIMF
// 익명 함수를 실행할 때 사용한다. function 앞 뒤에 ( )를 덮어써주면 된다.
console.log(456);

(function () { 
  console.log(123);
});



// 7. 호이스팅
// 함수 선언에서만 생김
abc();
function abc() {
  console.log(123);
}

// 8. Callback
function abc(callback) {
  callback()
}

// 8-1. abc함수 호출, 함수의 인수로 들어감 : 콜백
abc (function () {
  console.log('ABC');
})


// setTimeout(함수, 지연시간)
function abc1() {
  console.log('ABC')
}

setTimeout(abc1(), 1000);
// abc()는 "호출"이며 반환된 데이터 값이 나온다
// setTimeout(undefined, 1000);
// 즉 abc1(함수 데이터)를 써야한다. 콜백함수

// 난이도 up
function plus(a, b, cb) {
  return cb(a, b)
}

const resttt = plus(2, 5, function (a, b) {
  return a + b
})

console.log(resttt) // 7

// 난이도 up2
function plus(a, b, cb) {
  setTimeout(function() {
    cb(a+b)
  }, 1000)
}


plus(2, 5, function(res) {
  console.log(res);
})



