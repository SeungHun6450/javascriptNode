// 상속

class Vehicle {
  constructor(name, wheel){
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle('운송수단', '2');
console.log(myVehicle);

// 새로운 클래스로 확장 or 상속
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    // super는 Vehicle을 의미
    super(name, wheel);
  }
}

const myBicycle = new Bicycle('삼천리', 2);
const daughtersBicycle = new Bicycle('세발', 3);
console.log(myBicycle);
console.log(daughtersBicycle);


// 진정한 의미의 확장의 예
// 정의되어져 있는 기능을 따로 작성하지 않고 Car에서 사용
// super라는 함수를 실행하여 super가 Vehicle클래스로 실행될 수 있게
// Vehicle클래스가 요구하는 인수들을 Car 클래스가 실행되는 부분에서 name, wheel을 담아 Vehicle을 실행
// 추가적으로 license를 매개변수로 받아 사용
class Car extends Vehicle{
  constructor(name, wheel, license){
  super(name, wheel);
  this.license = license;
  }
}
const myCar = new Car('벤츠', 4, true);
const daughtersCar = new Car('포르쉐', 4, false);
console.log(myCar);
console.log(daughtersCar);