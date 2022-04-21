// 배열
// index : 배열 데이터 내부에 들어있는 특정 데이터의 위치를 가르키는 숫자
// indexing : 인덱스에 숫자를 넣어 조회하는 것
// element, item(요소) : 배열 데이터 내부에 들어있는 각각의 데이터

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

// 원하는 값 조회 방법 : zero-based를 이용하여 [숫자]를 입력, 인덱싱
console.log(numbers[1]);  // 2
console.log(fruits[2]);   // Cherry

// 배열의 메소드들
// .length
console.log(numbers.length);  // 4
console.log(fruits.length);   // 3
console.log([1, 2].length);   // 2

console.log([].length);  // 0 

// .concat() : 원본의 배열 데이터에 영향이 없고 새로운 배열 데이터가 합쳐져서 만들어진다.
console.log(numbers.concat(fruits));  // [1, 2, 3, 4, Apple', 'Banana', 'Cherry'];
console.log(numbers);   // [1, 2, 3, 4]
console.log(fruits);   // ['Apple', 'Banana', 'Cherry']

// .forEach() : 배열데이터의 아이템 갯수만큼 인수로 사용된 callback함수가 반복적으로 실행된다.
fruits.forEach(function (element, index, array) { //element대신 item도 가능, fruit도 가능, 자유롭게 작성 가능, array는 잘 사용하지 않는다.
  console.log(element, index, array); 
  //  Apple 0 ['Apple', 'Banana', 'Cherry']
  //  Banana 1 ['Apple', 'Banana', 'Cherry']
  //  Cherry 2 ['Apple', 'Banana', 'Cherry']
});

// .map() : callback에서 반환된 특정한 데이터를 기준으로 해서 데이터들의 새로운 배열을 반환해준다.
// const a = fruits.forEach(function (fruit, index) {
const map = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
  // Apple-0
  // Banana-1
  // Cherry-2
})
console.log(map); // undefined

// const b = fruits.map(function (fruit, index) {
// 1. 일반적인 방식
// return `${fruit}-${index}`;

// 2. 객체 리터럴 방식으로 작성
// return {
  //   id : index,
  //   name : fruit
  // };
// }

// 3. 화살표 함수로 변형
  const mapArrow = fruits.map((fruit, index) =>({
      id : index,
      name : fruit
  }) 
);
console.log(mapArrow); // 1. ["Apple-0", "Banana-1", "Cherry-2"], 2.[{id: 0, name: "Apple"},{id:1, name: "Banana"},{id:2, name: "Cherry"}}]


// .filter() : 배열데이터 안에 들어있는 각각의 item들을 특정한 기준으로 필터링한다. 새로운 배열을 반환해준다.
const mapVsFilter = numbers.map(number => {
  return number < 3; 
})
// 간결한 함수 버전
// const mapVsFilter = numbers.map(number => number < 3 );
console.log(mapVsFilter); // [true, true, false, false]

const filter = numbers.filter(number => {
  return number < 3;
})  
// 간결한 함수 버전
// const filter = numbers.filter(number => number < 3 );
console.log(filter); // [1, 2]


// .find() : 배열데이터 안에서 조건에 맞는 특정한 item을 찾을때 사용한다.
const find = fruits.find(fruit => {
  return /^B/.test(fruit);  // /^B/대문자 B로 시작하는 문자 데이터
})
// 간결한 함수 버전
// const find = fruits.find(fruit => /^B/.test(fruit));
console.log(find);

// .findIndex() : 배열데이터 안에서 조건에 맞는 특정한 item의 index를 반환한다.
const findIndex = fruits.find(fruit => {
  return /^B/.test(fruit);  // /^B/대문자 B로 시작하는 문자 데이터
})
// 간결한 함수 버전
// const findIndex = fruits.findIndex(fruit => /^B/.test(fruit));
console.log(findIndex);


// .includes(): 배열데이터 부분에 인수로 사용된 특정한 데이터가 포함되어 있는지 확인한다.
const includes1 = numbers.includes(3);
console.log(includes1); // true
const includes2 = numbers.includes('HUN');
console.log(includes2); // false

// 여기서 부터는 원본이 수정될 수 있음!!
// .push() : 배열데이터 가장 뒤쪽부분에 데이터가 삽입되어지는 메소드
numbers.push(5);
console.log(numbers);  // [1, 2, 3, 4, 5]

// .unshift() : 배열데이터 가장 앞부분에 데이터가 삽입되어지는 메소드
numbers.unshift(0);
console.log(numbers);  // [0, 1, 2, 3, 4, 5]

// .reverse() : 배열의 item의 순서를 뒤집어내는 용도로 사용하는 메소드
numbers.reverse();
fruits.reverse();

console.log(numbers); //  [4, 3, 2, 1]
console.log(fruits);  //  ["Cheery", "Banana", "Apple"]

// .splice() : .splice(index, 개수, 끼워넣을 값), 배열데이터에서 특정한 item들을 지울때 사용하는 메소드
// 새로운 item을 끼워넣는 메소드로 사용하기도 한다.

numbers.splice(2, 0, 999); //  [1, 2, 999, 3, 4] 
numbers.splice(2, 1, 99); // [1, 2, 99, 4] 
numbers.splice(2, 1); // [1, 2, 4]
fruits.splice(2, 0, "Orange");  // ["Apple", "Banana", "Orange", "Cheery"]
console.log(fruits);