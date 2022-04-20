// 구조 분해 할당 (Destructurting assignment)
// 비 구조화 할당

// 객체
const user = {
  name: 'Hun',
  age: 27,
  email: "rk645046@gmail.com",
  address: 'KOREA'
}
const { name: hun, age, address='USA'} = user
// E.g, user.address
// 데이터의 이름을 변수로 활용하기 싫다면 위의 name처럼 다른 변수를 사용하면 된다.

console.log(`사용자의 이름은 ${hun}입니다.`);  // 사용자의 이름은 Hun입니다. 
console.log(`${hun}이 나이는 ${age}세 입니다.`);  // Hun의 나이는 27세입니다.
console.log(`${hun}의 이메일 주소는 ${user.email}입니다.`); // Hun의 이메일 주소는 rk645046@gamil.com입니다.
// console.log(address); // 선언 하지 않은 경우 undefined
console.log(address); // KOREA

// 배열
const fruits = ['Apple', 'Banana', 'Cherry'];
const [a, b, c, d] = fruits;
console.log(a, b, c, d);  // Appe Banana Cherry undefined, 순서대로 출력이 된다.
// 특정 배열의 item만 출력
// const [, b] = fruitsBanana;
// console.log(b);