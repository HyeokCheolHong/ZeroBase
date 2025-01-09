// 콜백(Callback) : 뒤쪽에서 호출한다
// 함수가 뒤쪽으로 넘어가서 Call(호출) 한다

const a = callback => {
  // a 함수에 callback이란 매개변수

  console.log('A')

  callback()
  // 매개변수를 호출을 함
  // 소괄호를 열어서 호출할 수 있는 것은 함수 데이터
}

const b = () => {
  console.log('B')
}

a(b)
// a Data의 넣어주는 b는 함수 데이터이다
// a에 b함수 데이터를 넣어 함수 a를 진행하고 callback() 함수를 호출 시 함수 b 진행

// -------- 구분선 --------

function add(a, b, cb) {
  // a, b, callback 매개변수 생성

  // 1초 후 실행
  // setTimeout(함수데이터, 표현 Delay 시간(ms))
  setTimeout(() => {
    cb(a + b)
    // (a + b)의 결과를 cb 매개변수를 호출할때 넣어주고있다
    // cb는 호출할 수 있는 함수 데이터
  }, 1000)
}
add(3, 7, result => {
  // 3(숫자), 7(숫자), result(화살표 함수 데이터)
  console.log(result) // 1초 뒤 10
})

// -------- 구분선 --------

const h1El = document.querySelector('h1')
// h1El 변수에 h1 tag를 찾아서 넣음
h1El.addEventListener('click', () => {
  // h1El이 클릭되었을 때 함수가 호출
  console.log(h1El.textContent)
})