// Data(날짜) 표준 내장 객체(Built-in Object)
// `new Data()`를 통해 반환된 인스턴스를 '타임스탬프'(Timestamp)라고 합니다.

let date = new Date()
// let 변수 = new 함수() : 생성자 함수 호출
console.log(date)

// 지정 날짜 저장
// 2024년 12월 16일 17일 23분 31초
date = new Date(2024, 11, 16, 17, 23, 31)
console.log(date)

// 타임스탬프에서 각 정보를 얻을 수 있습니다.
console.log(date.getFullYear())
console.log(date.getMonth()) // 월
// 1월 부터 12월은 맞으나 0 ~ 11을 반환하기에 잘 해석해야함
console.log(date.getMonth() + 1) // 월
console.log(date.getDate()) // 일
console.log(date.getDay()) // 요일 ( 0(일) ~ 6(토) )
console.log(getDayKo(date.getDay())) // 아래 getDayko 함수로 요일 분리
console.log(date.getHours()) // 시
console.log(date.getMinutes()) // 분
console.log(date.getSeconds()) // 초

const h1El = document.querySelector('h1')
h1El.textContent = `${date.getFullYear()}년`

function getDayKo(day) {
  switch (day) {
    case 0: return '일요일'
    case 1: return '월요일'
    case 2: return '화요일'
    case 3: return '수요일'
    case 4: return '목요일'
    case 5: return '금요일'
    case 6: return '토요일'
  }
}

console.log('----구분선----')
// .getTime() - 유닉스 타임(UNIX Time)으로부터 경과한 시간(ms)을 반환합니다.
// Date.now() - 현재 시간을 유닉스 타임으로 반환합니다.
// 유닉스 타임이란, 1970.01.01 00:00:00 시간을 의미합니다.

const date1 = new Date()
// 호출된 시간을 기준으로 date1에 할당됨
const date2 = Date.now()

console.log(date1)
console.log(date1.getTime())
// data1의 현재시간을 유닉스 타임으로 반환 (변수값은 바뀌지 않음)
console.log(date2)

setTimeout(() => {
  // sestTimeout : 몇초뒤에 함수를 실행할 것인가
  console.log(Date.now() - date2)
  // 현재시간의 유닉스 타임 - date2가 할당된 시간의 유닉스 타임
  // 시간의 오차가 생기는 이유는 '콜 스택과 이벤트 루프' 개념을 이해 해아함
}, 1000)

console.log('----구분선----')
// 날짜 인스턴스의 협정 세계시(UTC)를 'ISO 8601' 포맷으로 반환합니다.
// 'ISO 8601'는 날짜와 시간을  표현하는 국제 표준 규격입니다.
console.log(new Date())
console.log(new Date().toISOString())