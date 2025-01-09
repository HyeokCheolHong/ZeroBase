// JSON(JavaScript Object Natotion)은 데이터 전달을 위한 표준 데이터 포맷입니다.
// 데이터 전달 : 클라이언트-서버 통신
// 문자, 숫자, 불린, Null, 객체, 배열만 사용!
// 문자는 큰 따옴표만 사용!
// 후행 쉼표 사용 불가!
// `.json` 확장자의 파일 사용 가능!

const user = {
  name: 'Neo',
  age: 85,
  isValid: true,
  email: ['neo@heropy.dev', 'thesecon@gmail.com'], // 후행 쉼표
}

// const json = {
//   "name": "Neo",
//   "age": 85,
//   "isValid": true,
//   "email": ["neo@heropy.dev", "thesecon@gmail.com"]
//   // json 변수에 작성된 내용은 실제 JSON이 아니고,
//   // JSON작성법 설명을 위한 참고용 단순 객체 데이터입니다.
// }
const json = JSON.stringify(user)
// 변수 json에 user객체 데이터를 JSON화 시킨다
console.log(json)
// JSON화 된 user의 객체 데이터
console.log(JSON.parse(json))
// JSON화된 변수 json의 데이터를 JS에서 분석한 JS데이터

fetch('https://api.heropy.dev/v0/users', {
  // 비동기 파트에서 배움
  method: 'POST',
  body: JSON.stringify(user)
})
// fetch로 데이터를 요청한다.
  .then(res => res.json())
  .then(res => console.log(res)) // {name: 'Neo', age: 85, isValid: true, emails: Array(0), id: 'Ju3-k'}
  // 응답받은 메소드를 분석

