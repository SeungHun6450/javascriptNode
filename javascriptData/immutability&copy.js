import _ from 'lodash'

// 데이터 불변성(Immutability)
// 원시형 데이터(js에서 사용할 수 있는 기본 data) : String, Number, undefined, null
// 참조형 데이터 : Object, Array, Function

// 메모리 주소 그림
// -------------------------------------------------
// |1:          |2:          |3:          |4:
// -------------------------------------------------

// 원시형 데이터 : 데이터가 변하지 않는 성질을 가지고 있다.
let a = 1;  // 메모리 주소 1번
let b = 4;  // 메모리 주소 2번
console.log(a, b, a === b); // 1 4 false
b = a;  // a의 메모리 주소(1번)를 바라보게 된다.
console.log(a, b, a === b); // 1 1 true
a = 7;      // 메모리 주소 3번
console.log(a, b, a === b); // 7 1 false
let c = 1;  // 기존 메모리 주소 1번(메모리에 1이 존재하기 때문에)
console.log(b, c, b === c); // 1 1 true

// 참조형 데이터 : 똑같이 생겨도 서로 같은 데이터가 아닐 수 있다, 가변성을 가지고 있다.
let d= { k: 1 };  // 메모리 주소 1
let e= { k: 1 };  // 메모리 주소 2
console.log(d, e, d === e); // {k: 1} {k: 1} false
d.k = 7;
e = d;
console.log(d, e, d === e); // {k:7} {k:7} true
d.k = 2;
console.log(d, e, d === e); // {k:2} {k:2} true, 의도치 않게 값이 바뀐다, 서로 같은 메모리 주소를 바라보고 있기 때문에
let f = e;
console.log(d, e, f, d === f);  // {k:2} {k:2} {k:2} true
d.k = 9;
console.log(d, e, f,  d === f); // {k:9} {k:9} {k:9} true

// 얕은 복사(Shallow copy) : 주소값을 복사, 같은 메모리를 바라보게 된다.
const user = {
  name: 'Hun',
  age: 27,
  emails: ['rk645046@gmail.com']
}
const copyUser = user;
console.log(copyUser === user); // true

user.age = 22;
console.log('user: ', user);  // user: {name: 'Hun',age: 22,email: Array(1)}
// 바라보고 있는 메모리 주소가 같기 때문에 같은 데이터를 수정하게 되는 꼴이 된다.
console.log('copyUser: ', copyUser);  // // copyUser: {name: 'Hun',age: 22,emails: Array(1)}


// 이를 해결하기 위해 const copyUser = Object.assign({}, user);
// 또는 전개연산자를 사용하여 const copyUser = {...user};
// console.log(copyUser === user); // false

console.log('copyUser: ', copyUser);  // // copyUser: {name: 'Hun',age: 27,emails: Array(1)} 


console.log('------')
console.log('------')

// 배열은 참조형 데이터이며 이를 복사처리를 하지 않았기 때문에 같은 메모리 주소만 공유하고 있다.
user.emails.push('toffg6450@naver.com')
console.log(user.emails === copyUser.emails);  // true, {name: 'Hun',age: 27,emails: Array(2)} 


// 깊은 복사(Deep copy) : lodash를 이용, 내부의 새로운 참조형인 객체 데이터 까지 복사하여 새로운 메모리에 할당
// import _ from 'lodash'
// const copyUser = _.cloneDeep(user);  // 깊은 복제 생성
// console.log(copyUser === user);  // false
// console.log(user.emails === copyUser.emails);  // false, Array(1)유지





