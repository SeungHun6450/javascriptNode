// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의! 

const hun = {
  name: 'SeungHun',
  normal() {
  // normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
}
hun.normal();
hun.arrow();


const amy = {
  name: 'Amy',
  normal: hun.normal,
  arrow: hun.arrow
}
amy.normal();
amy.arrow();

// prototype이용한 this
function User(name) {
  this.name = name;
}
User.prototype.normal = function () {
  console.log(this.name);
}
User.prototype.arrow = () => {
  console.log(this.name);
}

const Huun = new User('SeungHun');
Huun.normal();
Huun.arrow();


const timer = {
  name:'Hun!!',
  timeout: function () {  // 함수 범위
    setTimeout(() => {
      console.log(this.name);
    }, 2000)
  }
}
timer.timeout();