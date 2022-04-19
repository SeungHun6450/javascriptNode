// 1. Test
// import _ from 'lodash';

// console.log("hello world");
// console.log(_.camelCase("hello world"));

// typeof : 특정한 데이터의 타입을 알아낼 수 있다

import getType from './getType'

console.log('-----typeof------')

console.log(typeof 'Hello world');  // string
console.log(typeof 123);  // Number
console.log(typeof true); // boolean
console.log(typeof undefined);  // 의도하지 않은 비어있는 값, undefined
console.log(typeof null);  // 의도해서 비워놓은 값, object
console.log(typeof {}); // object
console.log(typeof []); // object



console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))