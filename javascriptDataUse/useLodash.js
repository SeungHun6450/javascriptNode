// lodash 함수
import _ from 'lodash'  //  _ : default export, 이름 자유롭게 사용가능

const usersA = [
  { userId: '1', name: 'Hun'},
  { userId: '2', name: 'toffg'}
]
const usersB = [
  { userId: '1', name: 'Hun'},
  { userId: '3', name: 'Amy'}
]

const usersC = usersA.concat(usersB);
console.log('concat: ', usersC);  // concat : [
                                  // { userId: '1', name: 'Hun'},
                                  // { userId: '2', name: 'toffg'},
                                  // { userId: '1', name: 'Hun'},
                                  // { userId: '3', name: 'Amy'}
                                  // ]
// uniqBy(중복된 데이터가 있는 배열 데이터, 중복을 구분할 고유의 속성) : 이미 중복이 발생한 배열 데이터에서 중복을 제거하기 위해 사용
console.log('uniqBy: ', _.uniqBy(usersC, 'userId'));  // uniqBy : [
                                                      // { userId: '1', name: 'Hun'},
                                                      // { userId: '2', name: 'toffg'},
                                                      // { userId: '3', name: 'Amy'} 
                                                      // ]

// unionBy() : 중복이 발생할 수 있는 배열 데이터들을 합치기 전에 사용
const usersD = _.unionBy(usersA, usersB, 'userId');
console.log('unionBy: ', usersD); // unionBy : [
                                  // { userId: '1', name: 'Hun'},
                                  // { userId: '2', name: 'toffg'},
                                  // { userId: '3', name: 'Amy'} 
                                  // ]

const users = [
  { userId: '1', name: 'Hun'},
  { userId: '2', name: 'toffg'},
  { userId: '3', name: 'Amy'},
  { userId: '4', name: 'Evan'},
  { userId: '5', name: 'Luminus'}
]
// find(배열데이터, 조건): 원하는 조건의 객체 데이터를 찾을 때 사용 
const foundUser = _.find(users, { name: 'Amy'})
console.log(foundUser); // { userId: '3', name: 'Amy'}
// findIndex(배열데이터, 조건): 해당 조건의 객체 데이터를 찾아 index번호를 반환 
const foundUserIndex = _.findIndex(users, { name: 'Amy'})
console.log(foundUserIndex);  //  2

// remove(배열데이터, 조건): 해당 조건의 객체 데이터를 찾아 삭제한다.
_.remove(users, { name: 'Amy'});
console.log(users)  // [
                    // { userId: '1', name: 'Hun'},
                    // { userId: '2', name: 'toffg'},
                    // { userId: '4', name: 'Evan'},
                    // { userId: '5', name: 'Luminus'}
                    // ]