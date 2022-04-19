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
const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
  // Apple-0
  // Banana-1
  // Cherry-2
})
console.log(a); // undefined

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
    const b = fruits.map((fruit, index) =>({
        id : index,
        name : fruit
    }) 
);
console.log(b); // 1. ["Apple-0", "Banana-1", "Cherry-2"], 2.[{id: 0, name: "Apple"},{id:1, name: "Banana"},{id:2, name: "Cherry"}}]