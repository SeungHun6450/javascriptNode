// ESC classes

// prototype을 class 문법으로 바꿔보자!

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

class User {
  // constructor: function(first, last) {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() { // prototype을 사용하지 않아도 만들 수 있는 장점이 있다.
    return `${this.firstName} ${this.lastName}`
  }
}


const Huun = new User('Seunghun', 'Byeon');
const amy = new User('Amy', 'Clarke');
const neo = new User('Neo', 'Smith');


console.log(Huun);
console.log(amy.getFullName());
console.log(neo.getFullName());