// 동기(Synchronous) 코드는 작성된 순서대로 실행되며,
// 하나의 작업이 끝나기 전에는 다음 작업이 시작되지 않습니다.
console.log(1)
console.log(2)
alert('확인!')
// PoP Up창
console.log(3)
console.time('Loop!')
// Loop! 인수가 시작된 시간부터
for(let i = 0; i < 1000000000; i++) {} // 10억!
console.timeEnd('Loop!')
// Loop! 인수가 끝난 시간까지의 시간을 표기
console.log(4)

console.log('----구분선----')

// 비동기(Asynchronous) 코느는 작성된 순서대로 실행되지만,
// 특정 작업이 끝나기 전에 다음 작업이 시작될 수 있습니다.
console.log(1)
console.log(2)
console.log(3)
console.time('Loop!')
// 여기까지는 동기방식이 맞으나
setTimeout(() => {
  for(let i = 0; i < 1000000000; i++) {} // 10억!
  console.timeEnd('Loop!')
  console.log(5)
}, 2000)
// setTimeout은 비동기방식으로 진행
console.log(4)

console.log('----구분선----')

console.log(1)
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  console.log('클릭!!')
})
// 대표적인 비동기 코드
console.log(2)

console.log('----구분선----')

console.log(1)
fetch('https://api.heropy.dev/v0/users')
  .then(res => res.json())
  .then(data => console.log(data))
// fetch를 통해 서버에 data을 송수신하는데 걸리는 시간이 존재
// 비동기 방식 코드
console.log(2)

console.log('----구분선----')

const h1El10 = document.querySelector('h1')
h1El10.textContent = 'Loading!'
const timer10 = setInterval(() => {
  h1El10.textContent += '.'
}, 500)
// 0.5초마다 h1El 요소에 . 하나씩 추가한다

const imgEl10 = document.createElement('img')
imgEl10.src = 'https://picsum.photos/3000/2000'
// 실제 이미지의 주소 입력
imgEl10.addEventListener('load', () => {
  document.body.append(imgEl10)
  clearInterval(timer10)
  // timer10이 종료된다
  h1El10.textContent = 'Done!'
})
// 이미지를 불러오는동안 timer10의 동작은 계속 진행되고 있다