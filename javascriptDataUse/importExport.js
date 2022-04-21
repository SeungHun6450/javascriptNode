import _ from 'lodash'  // From `node_modules`!,  _ : default export, 이름 자유롭게 사용가능
import checktype from '../javascriptEssentials/getType' // getType.js
import * as R from '../javascriptEssentials/getRandom' // getRandom.js

// javascript파일은 기본적으로 외부에 있는 다른 javascript파일을 가져올 수 있는 하나의 통로가 있다.
// 이를 import로 작성하여 가져온다.
// javascript파일은  특정 내용을 밖으로 내보낼 수 있는 2개의 통로를 가지고 있다.
// 1. Default export: 이름 지정 필요 없음, export와 default키워드를 사용한다.
// import시 다른 이름으로 지정해서 사용해도 상관 없다.
// 2. Named export: 이름을 지정해서 데이터를 내보내야 한다.
// import시 이름은 { }를 묶어서 사용해야한다. 객체구조 분해처럼 이름을 as를 사용하여 바꿀 수 있다.
// import {random, user as Hun} from '../javascriptEssentials/getRandom' // getRandom.js
// console.log(Hun)  // {name: "Hun", age: 27}
// module.js : 내보내는(export) 코드만 존재하여 사용할 수 있는 파일

// getType.js, 기본통로, 하나의 모듈에서 하나의 데이터만 내보내기 가능
export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

// getRandom.js, Named export는 하나의 모듈에서 여러개의 데이터를 내보낼 수 있다.
export function random() {
  return Math.floor(Math.random() * 10)
}
export const user = {
  name: 'Hun',
  age: 27
}
// Named export와 default export는 같이 사용할 수 있다.ㄴ
export default 123

console.log(_.camelCase('the hello world')) // theHelloWorld
console.log(checktype([1, 2, 3])) // Array
console.log(random(), random()) // 4 7
// import {random, user} from '../javascriptEssentials/getRandom' // getRandom.js
console.log(user)  // {name: "Hun", age: 27}
console.log(R)  // {name: "Hun", age: 27}


// random과 user 한번에 꺼내오기 *(와일드 카드)사용
import * as R from '../javascriptEssentials/getRandom' // getRandom.js
console.log(R) // {user:{...}, random, default:123}
