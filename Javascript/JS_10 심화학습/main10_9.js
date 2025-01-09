// 가비지 컬렉션(Garbage Collection)이란,
// 더 이상 사용되지 않는 메모리를 해제하는 프로세스로 자바스크립트 엔진이 자동으로 처리합니다.

// 메모리 누수(Memory Leak)란,
// 더 이상 필요치 않은 데이터가 해제되지 못해 메모리를 계속 차지되는 것을 말합니다.

// 불필요한 데이터 참조를 피하세요!
const user = {
  name: 'Neo',
  age: 85,
  emails: ['abc@gmail.com', 'xyz@naver.com']
}
// user변수에 객체데이터 속성으로 name, age, emails 생성
const removedEmail = user.emails.splice(1, 1)
// splice를 통해서 새로운 배열을 removedEmail로 저장
// console.log(removedEmail)
// splice로 제거가 된 배열은 완성단계에선 메모리에 저장할 필요가 없으므로 작성하지 않아야 메모리 낭비가 없다
console.log(user.emails) // ['abc@gmail.com']

// 불필요한 전역 변수 사용을 피하세요!
window.hell = 'Hello world!'
window.heropy = { name: 'Heropy', age: 85}
// window : 전역 객체(최상위 객체)
// 전역객체는 메모리상 삭제가 어렵기에 사용의 주의해야한다

// 제거된 요소가 참조되지 않도록 주의하세요!
// const h1El = document.querySelector('h1')
window.addEventListener('click', () => {
  const h1El = document.querySelector('h1')
  // 제거될 요소를 핸들러 함수 안에 작성하여 참조되지 않도록 함
  if (h1El) {
    console.log(h1El) // <h1>Hello world!</h1>
    h1El.remove()
  }
})
// h1El을 제거해도 click 이벤트 지속 발생시 console.log가 발생한다.

// 불필요한 타이머를 해제하세요!
let a = 0
// setInterval(() => {
//   a += 1
// }, 100)
// 콜백함수가 지속적으로 0.1초마다 1씩 더한다.
// setTimeout(() => {
//   console.log(a) // 10
// }, 1000);

// 타이머 메모리 낭비를 막기 위한 코드
const intervalId = setInterval(() => {
    a += 1
  }, 100)
setTimeout(() => {
  console.log(a) // 10
  clearInterval(intervalId)
  // 타이머가 초기화 하여 메모리 낭비를 막음
}, 1000);

// 1.5초 뒤 실행
// 불필요한 클로저를 제거하세요!
setTimeout(() => {
  const getFn = x => {
    console.log(x)
    // 메모리 낭비를 막기위해서 getFn이 동작할때 한번만 동작하게 함
    return name => {
      x += 1
      // x변수는 name의 화살표함수에 따라 getFn의 매개변수로 지정된다.
      // 렉시컬스코프에 따라 해당값은 누적되어 사용가능하다
      // console.log(x)
      return `Hello ${name}~`
    }
  }
  const fn = getFn(0)
  // getFn의 매개변수 x 에 인수 0 값을 할당하여 return값인 name화살표함수를 반환받음
  console.log(fn('Neo'))
  // getFn인 name의 화살표함수의 값에 'Neo'를 할당
  console.log(fn('Lewis'))
  fn('Evan')
  fn('Amy')
}, 1500);