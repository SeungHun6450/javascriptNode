// 숫자와 수학
const pi = 3.14159265358979;
console.log(pi);  // 3.14159265358979

const str = pi.toFixed(2);  // 3.14, 숫자에서만 사용할 수 있는 메소드, 소수점 두 자리 까지 반환
console.log(str);
console.log(typeof str);  // string

// 전역함수
const integer = parseInt(str);  // 정수, 정수 부분을 반환, 숫자로 변환
const float = parseFloat(str);  // 실수, 실수 부분을 반환, 숫자로 변환
console.log(integer); // 3,  정수만 반환
console.log(float);   // 3.14, 실수로 반환
console.log(typeof integer, typeof float);  // number number


// 다른 메소드들
console.log('abs : ', Math.abs(-12));       // abc : 12, 절대 값
console.log('min : ', Math.min(2, 8));      // min : 2, 입력받은 수 중 최소 값
console.log('max : ', Math.max(2, 8));      // max : 8, 입력받은 수 중 최대 값
console.log('ceil : ', Math.ceil(3.14));    // ceil : 4, 올림
console.log('floor : ', Math.floor(3.14));  // floor: 3, 내림
console.log('round : ', Math.round(3.14));  // round: 3, 반올림
console.log('random : ', Math.random());    // random : 0.194961321, 0 ~ 1 사이의 숫자를 무작위로 반환(난수)

function random() {
  Math.floor(Math.random() * 10);
}
random(); // 0 ~ 9 사이를 출력하는 함수로 만들어 보기 