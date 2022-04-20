// Object.assgin(target, sourse) : 열거할 수 있는 하나 이상의 출처 객체로 부터 대상 객체로 속성을
// 복사할 때 사용한다.(예시를 통해 이해해보자)
// 하나 이상의 출처 객체 : source, 대상 객체 : target, 반환 값 : 대상 객체
// assgin() : Object라는 javascript의 전역객체에 prototype으로 만들어진 메소드가 아니기 때문에
// Object(전역객체)와 함께 써야한다.
// 이를 정적 메소드(static method) : prototype이 없는 메소드라 한다.
const userAge = {
  // key: value
  name: 'Hun',
  age: 27
};

const userEmail = {
  name: 'Hun',
  email: 'rk645046@gami.com'
};

const target = Object.assign(userAge, userEmail)
const target2 = Object.assign({}, userEmail)
console.log(target);  // {name: "Hun", age: 27, email: "rk645046@gmail.com"}
console.log(target2);  // {name: "Hun", age: 27}
console.log(userAge); // {name: "Hun", age: 27, email: "rk645046@gmail.com"}
console.log(target === userAge);  // true
console.log(target2 === userAge);  // false

// 하나의 객체 데이터는 특정 메모리 주소에 값이 들어가 있다.
const a = { k: 123 };
const b = { k: 123 };
console.log( a === b ); // false, 객체는 똑같이 생겼지만 다른 객체다


// Object.keys() : key들만 추출되서 새로운 배열 데이터를 만든다.
const user = {
  name: 'Hun',
  age: 27,
  email: "rk645046@gmail.com"
}

const keys = Object.keys(user)
console.log(keys) // ['name', 'age', 'email']

console.log(user['email']); // rk645046@gmail.com

const values = keys.map(key => user[key]);  // name, age, email value를 찾아 값을 반환(callback)
console.log(values);  //  ["Hun", 27, "rk645046@gmail.com"]