# 정규표현식(RegExp)

정규식, Regular Expression

정규표현식은 문자열을 검색하고 대체하는데 사용 가능한 일종의 형식 언어(패턴)이다.


## 1. 역할

간단한 검색부터 이메일, 패스워드 검사 등의 복잡한 문자 일치 기능 등을 정규표현식을 사용하여 만들 수 있다.

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 2. 정규표현식 테스트 사이트
>
https://regexr.com

## 3. javascript 정규식 생성

### 3-1. 생성자 함수 방식
RegExp 생성자 함수를 호출하여 사용하는 방식이다.
```js
// 생성자
new RegExp('표현의 패턴', '옵션')
new RegExp('[a-z]', 'gi')

// 예시
const str = `
  010-1234-5678
  thesecon@gmaile.com
  https://www.naver.com
  The quick beown fox jumps over the lazy dog.
  aaaaabbbbbbbccccccccddddd
`
const regexp = new RegExp('the', 'g') //'g'는 플래그, 모든 문자 일치
console.log(str.match(regexp))  // ["the", "the"]

const regexp2 = new RegExp('the', 'gi') //'g'는 플래그, 대소문자 구분 안한다
console.log(str.match(regexp2))  // ["the", "The","the"]

```

### 3-2. 리터럴 방식
'/'로 감싸진 패턴을 리터럴로 사용하는 방식이다.
```js
/표현/옵션
/[a-z]/gi

// 예시
const str = `
  010-1234-5678
  thesecon@gmaile.com
  https://www.naver.com
  The quick beown fox jumps over the lazy dog.
  aaaaabbbbbbbccccccccddddd
`

const regexp = /the/gi
console.log(str.match(regexp))
```

## 4. 메소드
메소드 | 문법 | 설명
--|--|--
test() | `정규식.test(문자열)` | 일치 여부를 boolean데이터로 반환한다
match() | `문자열.match(정규식)`| 일치하는 문자열의 배열(Array)을 반환한다
replace() | `문자열.replace(정규식, 대체문자)` | 일치하는 문자열을 대체하고 대체된 문자열(String)을 반환한다.

```js
const str = `
  010-1234-5678
  thesecon@gmaile.com
  https://www.naver.com
  The quick beown fox jumps over the lazy dog.
  aaaaabbbbbbbccccccccddddd
  동해물과 백두산이 마르고 닳도록

`

// test()
const regexp1 = /fox/gi
const regexp2 = /Hun/gi
console.log(regexp1.test(str))  // true
console.log(regexp2.test(str))  // false  // true

// replace()
console.log(str.replace(regexp1, 'AAA'))
console.log(str)  // 원본 데이터를 변경시키지 않는다. 
                  // let 변수로 재할당 해야 원본데이터 변경이 가능하다..
                       
// match()
const regexp = new RegExp('the', 'g') //'g'는 플래그, 모든 문자 일치
console.log(str.match(regexp))  // ["the", "the"]
```

## 5. 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분하지 않고 일치(ignore case)
m | 여러 줄 일치(multi line)

```js
const regexp1 = /the/
console.log(str.match(regexp1))

// g
const regexp2 = /the/g
console.log(str.match(regexp2))

// gi
const regexp3 = /the/gi
console.log(str.match(regexp3))

// m
// \ : 이스케이프 문자: \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자이다.
// 마침표는 일종의 패턴이므로 이스케이프를 사용해 일정한 문자로 해석하게끔 만들어 준다.
// 특정 기능으로 동작하는 특수 기호는 이스케이프를 사용하여 일반적인 문자로 해석되게 만들어 주면 된다.
// $: $앞에있는 하나의 단어로 해당하는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다.

console.log(str.match(/\.$/gim)) // ["."], The quick... 문장 끝에 .을 찾았다.
```

## 패턴(표현)

패턴 | 설명
^word | 줄(Line) 시작에 있는 ab와 일치
word$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A부터 Z 사이의 문자 구간에 일치(영어 대문자) 
[0-9] | 0부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)


```js
const str = `
  010-1234-5678
  thesecon@gmaile.com
  https://www.naver.com
  The quick beown fox jumps over the lazy dog.
  aaaabbbbccccdddd
  http://localhost:1234
  동해물과_백두산이 마르고 닳도록

`

// $
console.log(
  str.match(/d$/gm) //  ["d", "d"]
)

// ^
console.log(
  str.match(/^t/gm) //  ["t"]
)

// .
console.log(
  str.match(/./g) //문자 데이터 모두를 배열 데이터를 만들어 출력
)
console.log(
  str.match(/h..p/g) // ["http"]
)

// |
console.log(
  str.match(/fox|dog/g)  //  ["fox", "dog"]
)
console.log(
  str.match(/fox|dog/)  //  ["fox", input...]
)

// ?
console.log(
  str.match(/https?/g)  //  ["https", "http"]
)

// 연속일치 {}
console.log(
  str.match(/d{2}/g) // ["dd", "dd"]
)
console.log(
  str.match(/d{2,}/g) // ["dddd"]
)
console.log(
  str.match(/d{2,3}/g) // ["ddd"]
)


// []
console.log(
  str.match(/[가-힣]{1,}/g) // ["동해물과", "백두산이", "마르고", "닳도록"] 
)
// \w
console.log(
  str.match(/\w/g)
)

// \b: 알파벳, 숫자, 영어가 아닌부분을 경계로 만듬(-, . 등의 특수 문자)
console.log(
  str.match(/\bf\w{1,}\b/g)  // @, 띄어쓰기, . 등을 boundary라고 한다.
  // ["frozen", "fox"]
)
// \d
console.log(
  str.match(/\d{1,}/g)  // ["010", "1234", "5678", ...]
)

// \s
const h = `  the hello  world   !

`
console.log(
  h.match(/\s/g)  // thehelloworld!
)

// (?=)
console.log(
  str.match(/.{1,}(?=@)/g)  // ['  thesecon']
)
// (?<=)
console.log(
  str.match(/(?<=@).{1,}/g)  // ["gmail.com"]
)

```