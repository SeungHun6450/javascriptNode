const str = `
  010-1234-5678
  thesecon@gmaile.com
  https://www.naver.com
  The quick beown fox jumps over the lazy dog.
  aaaabbbbccccdddd
  http://localhost:1234
  동해물과_백두산이 마르고 닳도록
`

// match()
// 생성자 방식
const regexp = new RegExp('the', 'g') //'g'는 플래그, 모든 문자 일치
console.log(str.match(regexp))  // ["the", "the"]

const regexp2 = new RegExp('the', 'gi') //'g'는 플래그, 대소문자 구분 안한다
console.log(str.match(regexp2))  // ["the", "The","the"]

// 리터럴 방식
const regexp3 = /the/gi
console.log(str.match(regexp3))

// test()
const regexp4 = /fox/gi
const regexp5 = /Hun/gi
console.log(regexp4.test(str))  // true
console.log(regexp5.test(str))  // false  // true

// replace()
console.log(str.replace(regexp4, 'AAA'))
console.log(str)  // 원본 데이터를 변경시키지 않는다. 
                  // let 변수로 재할당 해야 원본데이터 변경이 가능하다.

const regexp6 = /the/
const regexp7 = /the/g
console.log(str.match(regexp6))
console.log(str.match(regexp7))

// \ : 이스케이프 문자: \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자
console.log(str.match(/\.$/gim))


// 패턴
console.log(
  str.match(/d$/g)  // ["d"]
)

console.log(
  str.match(/d$/gm) //  ["d", "d"]
)

console.log(
  str.match(/^t/gm) //  ["t"]
)
console.log(
  str.match(/d$/gm) //  ["d", "d"]
)

console.log(
  str.match(/./g) //문자 데이터 모두를 배열 데이터를 만들어 출력
)

console.log(
  str.match(/h..p/g) // ["http"]
)

console.log(
  str.match(/fox|dog/g)  //  ["fox", "dog"]
)

console.log(
  str.match(/https?/g)  //  ["https", "http"]
)

console.log(
  str.match(/d{2}/g) // ["dd"]
)
console.log(
  str.match(/d{2,}/g) // ["dddd"]
)
console.log(
  str.match(/d{2,3}/g) // ["ddd"]
)
console.log(
  str.match(/\b\w{2,3}\b/g) // 
)

console.log(
  str.match(/[가-힣]{1,}/g) // ["동해물과", "백두산이", "마르고", "닳도록"] 
)

console.log(
  str.match(/\w/g)
)
console.log(
  str.match(/\bf\w{1,}\b/g)  // @, 띄어쓰기, . 등을 boundary라고 한다.
  // ["frozen", "fox"]
)

console.log(
  str.match(/\d{1,}/g)
)
const h = `  the hello  world   !

`
console.log(
  h.replace(/\s/g, '')  // thehelloworld!
)
  

console.log(
  str.match(/.{1,}(?=@)/g)  // ['  thesecon']
)

console.log(
  str.match(/(?<=@).{1,}/g)  // ["gmail.com"]
)