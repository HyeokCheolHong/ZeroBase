// 삼항 연산자(Teranry operator)
// 조건 ? (조건이 참일 때 실행) : (조건이 거짓일 때 실행)

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits[0]) // 배열0번인 'Apple 실행
console.log(fruits.length) // 배열이3개있음으로 '3' 실행

// -----------------------------------------------------------------

// IF 조건문
if (fruits.length > 0) {
  console.log('과일이 있습니다.')
} else {
  console.log('과일이 없습니다.')
}

// 삼항 연산자
const message = fruits.length > 0 ? '과일이 있습니다.' : '과일이 없습니다.'
console.log(message)

// ---------------------------------------------------------------------------

function includesText(el) {
  // el : element(요소)의 약어 [매개변수 즉 하나의 변수]
  // if (el.textContent) {
  //   return '글자 있음!'
  // } else {
  //   return '글자 없음!'
  // }
  return el.textContent ? '글자 있음!' : '글자 없음!'
  // textContent는 요소가 가지고있는 글자 내용 확인
}

const h1El = document.querySelector('h1')
console.log(includesText(h1El))
// 1. h1El에 문서 h1태그를 찾아서 넣는다.
// 2. includesText함수에 h1El의 요소를 넣는다
// 3. includesText함수에서 h1El.textContent를 확인한다.
// 4. 삼항연사자에서 연산하여 return(반환)한다.
// 5. console.log에 의해 반환된값을 출력한다