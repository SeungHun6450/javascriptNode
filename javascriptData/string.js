// String : String 전역 객체는 문자열(문자의 나열)의 생성자이다.

// String.prototype.indexOf()
let result = 'Hello world!'.indexOf('world');
console.log(result);  // 6, 첫 번째 등장 인덱스
result = 'Hello world!'.indexOf('Hun');
console.log(result); //  -1, 찾을 수 없으면 -1 반환


let str = '0123';
// 문자의 갯수
console.log(str.length);    // 4
console.log('01 23'.length); // 5, 띄어쓰기도 포함

str = 'Hello world!';
console.log(str.indexOf('Hun') !== -1);  // false, 이런 방식으로 boolean확인 가능
console.log(str.slice(0, 3));   // Hel, (beginIndex, endIndex), endIndex는 그 ★직전까지 추출
console.log(str.slice(6, 11));  // world

console.log(str.replace('world', 'Hun')); // Hello Hun!, 첫 번째 인수를 두 번째 인수로 교체해준다.
console.log(str.replace(' world!', ''));  // Hello, 지우고 싶을때도 사용이 가능하다.

str = 'rk645046@gamil.com'; 
console.log(str.match(/.+(?=@)/));  // 정규 표현식 사용, ["rk645046", index:0, input:"rk645046@gmail.com", groups: undefined]
console.log(str.match(/.+(?=@)/)[0]); // rk645046

str = '     Hello world  ';
console.log(str); //     Hello world  
console.log(str.trim()); // Hello world, 공백 제거

