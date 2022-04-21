// Storage: 저장소
// 브라우저에서 개발자 도구를 열고 Application탭을 눌러 localStorage에 접근

const user = { 
  name: 'Hun',
  age: 27,
  emails: [
      'rk645046@gmail.com',
      'toffg6450@naver.com'
    ]
 }

// localStorage.setItem('key','value'): key-value형태로 데이터로 저장하고 value는 문자 데이터로 저장해야한다.
// localStorage.getItem('key'): 데이터를 읽어오는 용도, key값만 적어서 사용한다.
// localStorage.removeItem('key'): 데이터를 삭제하는 용도, key값만 적어서 사용한다.

// value를 문자 데이터로
localStorage.setItem('user', JSON.stringify(user)); 
// 문자 데이터 -> 객체 데이터(javascript데이터) 변환
console.log(JSON.parse(localStorage.getItem('user')));  //{ name: "Hun",
                                                        //   age: 27,
                                                        //   emails: Array(2)
                                                        //  }
localStorage.removeItem('user');  // Local Storage에서 제거됨, console에는 남음

// 위의 코드에서 removeItem()부분을 주석 처리하고 다시 실행 시키면 Local Storage에 데이터가 남아있음

// 데이터를 가지고 와서 수정
const str = localStorage.getItem('user');
const obj = JSON.parse(str);
console.log(obj); //{ name: "Hun",
                  //   age: 27,
                  //   emails: Array(2)
                  //  }
obj.age = 22;
console.log(obj); //{ name: "Hun",
                  //   age: 22,
                  //   emails: Array(2)
                  //  }

// localSotrage에 데이터를 수정하기위해서는 데이터를 가져와서 코드 내에서 수정하고
// 다시 해당하는 key의 이름으로 덮어쓰기를 해주면 된다. 
localStorage.setItem('user', JSON.stringify(obj));
