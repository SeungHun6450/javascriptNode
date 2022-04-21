// OMDb API: The Open Movie Database

//  Query String: 특정한 웹의 주소에 ?로 시작하는 속성과 값의 모음
//  특정 주소로 접근할 때 기본적인 페이지에 대한 옵션을 명시하는 용도의 문자이다.
//  주소?속성=값&속성=값&속성=값
//  주소?apiKey=Key&s=movieName&

// axios 패키지 설치 npm i axios
import axios from 'axios'

function fetchMovies() {
  // get(): 해당 페이지에 접근
  // then(): 처리 
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log(res);  // 해당 url에서 나온 데이터가 출력됨
      // 데이터를 이용한 출력
      const h1El = document.querySelector('h1');
      const imgEl = document.querySelector('img');
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}
fetchMovies();