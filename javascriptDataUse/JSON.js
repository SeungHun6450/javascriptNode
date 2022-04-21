// JSON (JavaScript Object Notation): 속성-값 쌍 또는 키-값 상 으로 이루어진 데이터 오브젝트를 전달하기 위해
// 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷, 서버와의 통신을 주고받는 하나의 포맷
// javascript의 객체 표기법
// JSON은 문자 데이터이다. import로 가져오면 객체데이터처럼 사용되는 것을 볼 수 있다. 

import myData from './myData.json'

console.log(myData);  //  { "name": "Hun",
                      //   "age": 27,
                      //   "emails": [
                      //   "rk645046@gmail.com",
                      //   "toffg6450@naver.com"
                      //    ]
                      //  }

const user = {
  name: 'Hun',
  age: 27,
  emails: [
    'rk645046@gmail.com',
    'toffg6450@naver.com'
  ]
}
console.log('user', user);  //  { name: 'Hun',
                            //   age: 27,
                            //   emails: Array(2)
                            //  }

// JSON.stringify(): 특정 데이터를 JSON포맷으로 문자데이터화 시켜주는 메소드
const str = JSON.stringify(user);
console.log('str', str);  // str
                          //  { "name": "Hun",
                          //   "age": 27,
                          //   "emails": [
                          //   "rk645046@gmail.com",
                          //   "toffg6450@naver.com"
                          //    ]
                          //  }

console.log(typeof str);  // string


// JSON.parse(): 데이터를 javascript데이터처럼 변경시키는 메소드
const obj = JSON.parse(str);
console.log('obj', obj);  // obj
                          //  { name: 'Hun',
                          //   age: 27,
                          //   emails: Array(2)
                          //  }