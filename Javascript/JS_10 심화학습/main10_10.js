// 콜 스택과 이벤트 루프
// 자바스크립트는 저수준의 오래 걸릴 수 있는 일(Timer, Netword 등)은 Web(Browser) APi에게 위임하고,
// 고수준의 작업은 자바스크립트 엔진(싱글 스레드)에서 처리하는 방식으로 빠른 속도와 높은 확장성을 유지합니다.
// - FIFO(First In First Out) : 선입선출, 먼저 들어온 데이터가 먼저 나감
// - LIFO(Last In First Out) : 후입선출, 마지막에 들어온 데이터가 먼저 나감

// JS는 싱글 스레드 방식으로써 한번에 한가지일만 처리한다
// 즉 for 동작시 {}구문이 끝나야 다음 동작을 이어갈 수 있다

setTimeout(() => {
  console.log(1)
}, 0)
// 0초뒤에 콜백함수 실행
// Web API에서 동작하지만 JS보다 후순위이다
window.addEventListener('load', () => {
  console.log(2)
})
// window에 load될 경우 출력
fetch('/').then(() => console.log(3))
// 서버 주소를 입력하지 않았기에 Network 통신은 하지 않음
for(let i = 0; i < 1000; i += 1) {
  console.log(4)
  // 고수준의 작업이므로 JS에서 동작해서 가장 먼저 출력
}

// JS Runtime : JS가 동작하는 도중
// Call Stack(LIFO) : 호출되는 함수의 내역
// Web APIs에서 동작하는 부분들은 Queue누적이 되어 Call Stack이 전부 호출이되고 난후 하나씩 호출 된다
// 05:30분 부터 시청

function a() {
  console.log('A')
  function b() {
    setTimeout(() => {
      console.log('B1')
      console.log('B2')
    }, 0)
  }
  b()
}
function c() {
  console.log('C')
}
function first() {
  a()
  c()
}
function second() {
  c()
}
first()
// 동작 순서
  // first()함수를 Stack1에 쌓음
  // first()함수에 해당하는 a()함수를 Stack2에 쌓음
  // a()함수에 해당하는 consol.log('A')를 Stack3에 쌓는데 바로 출력하고 Stack3에서 제거됨
  // a()함수 다음 b()를 Stack3에 쌓음
  // b()함수에 해당하는 setTimeout()함수를 Web APIs로 넘겨 Event Loop에 저장시킴
  // b()함수가 완료되어 Stack3에서 제거됨
  // a()함수가 완료되어 Stack2에서 제거됨
  // a()함수 다음인 c()함수를 Stack2에 쌓음
  // c()함수에 해당하는 console.log('C')를 Stack3에 쌓는데 바로 출력하고 Stack3에서 제거됨
  // c()함수가 완료되어 Stack2에서 제거됨
  // first()함수가 완료되어 Stack1에서 제거됨
  // but 이때도 Queue에는 setTimeout()함수를 저장하고 있음

  // second()함수가 완료된 후
  // second()함수가 완료되어 CallStack에 실행될것이 없을 시 Queue에서 불러옴
  // setTimeout()함수를 Stack1에 쌓음
  // setTimeout()함수에 해당하는 console.log('B1')을 Stack2에 쌓는데 바로 출력하고 Stack2에서 제거됨
  // setTimeout()함수에 해당하는 console.log('B2')을 Stack2에 쌓는데 바로 출력하고 Stack2에서 제거됨
  // setTimeout()함수가 완료되어 Stack1에서 제거됨
second()
// 동작 순서
  // second()함수를 Stack1에 쌓음
  // second()함수에 해당하는 c()함수를 Stack2에 쌓음
  // c()함수에 해당하는 console.log('C')를 Stack3에 쌓는데 바로 출력하고 Stack3에서 제거됨
  // c()함수가 완료되어 Stack2에서 제거됨
  // second()함수가 완료되어 Stack1에서 제거됨