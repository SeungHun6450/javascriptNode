// prototype

const { takeRightWhile } = require("lodash");

console.log('--------생성자 함수--------')


// 멤버(Member) : 속성 + 메소드 
// this : this가 소속되어있는 함수가 실행되는 객체데이터를 지칭한다.


const Hun = {
  firstName: 'SeungHun',
  lastName: 'Byeon',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
};

console.log(Hun.getFullName());

// 리터럴 방식 : 특정 기호로 데이터를 만드는 방식  ex) "", {}, [] ...
// class : prototype을 사용해서 new라는 키워드와 함께 생성자 함수로 인스턴스를 만들어내는 개념
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// prototype : 메모리를 효율적으로 관리해주기 위해 사용, 메모리에 딱 한 번 만들어짐
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}


// User는 생성자 함수, 생성자 함수는 파스칼case로 작성!
// 인스턴스 : new라는 키워드를 통해서 생성자 함수로 실행한 결과를 반환해서 할당된 변수
// Huun, amy, neo
const Huun = new User('Seunghun', 'Byeon');
const amy = new User('Amy', 'Clarke');
const neo = new User('Neo', 'Smith');


// 아래의 메소드들은 전부 한 번만 만들어진 함수를 참조한다
console.log(Huun.getFullName());
console.log(amy.getFullName());
console.log(neo.getFullName());

console.log(Huun);
console.log(amy);
console.log(neo);
