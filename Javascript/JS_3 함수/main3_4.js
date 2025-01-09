// 인수(Argument)와 매개변수(Parameter)

function add(a, b) {
  // add 함수의 a, b라는 변수는 함수밖에서 호출될 때 들어오는 Data
  // a, b는 매개변수라고 함

  return a + b
}

console.log(add(2, 1)) // 3
// add 함수의 2, 1은 함수를 호출할 때 넣어주는 각각의 Data
// 2, 1을 인수라고 함

console.log(add(7, 4)) // 11
// 인수 : 7, 4
console.log(add('A', 'B')) // AB
// 인수 : 'A', 'B'

console.log('====구분선====')

// 매개변수 기본값(Default Value)

function add_De(a, b = 1) {
  // b의 매개변수는 숫자 1을 기본값으로 할당 (인수값 작성시 인수값 따라감)
  if (a === undefined) {
    console.log('첫 번째 인수는 필수입니다')
    return
  } 
    return a + b
}

console.log(add_De(2)) // 3
// 첫번째 인수2가 a에 입력되고 b는 기본값인 1로 할당되어 함수 출력
// 두번째 인수를 생략한것
console.log(add_De(2, undefined)) // 3
// 두번째 인수를 정의하지 않음
console.log(add_De()) // undefined
// 첫번째 인수가 정의하지 않았기에 undefined 로 할당
// 두번째 인수는 b는 기본값이 1 할당
// undefined + 1 = NaN
console.log(add_De(2, 10))
// b의 기본값인 1이 아닌 할당값 10으로 함수 진행

console.log('====구분선====')

// 나머지 매개변수(Rest parameter)
function add_Rest(a, b, ...rest) {
  // a, b, rest 라는 3개의 매개변수가 존재하는 add_Rest 함수
  // ...(전개 연산자)로 인해 rerst에 3~8까지를 배열데이터 형식으로 저장
  console.log(a, b, rest)

  console.log(rest[3])
  // 배열데이터 rest의 Index3번 log 출력

  return rest.reduce((acc, cur) => acc + cur, 0)
  // reduce(함수 Data, 초기값) : 배열데이터가 가지고있는 아이템 개수만큼 함수를 호출
  // 초기값 0이 (acc, cur)의 매개변수 acc로 들어감 / rest 배열 데이터값 은 (acc, cur)의 매개변수 cur로 들어감
  // => : 반환하는 것 (즉, acc + cur 값을 다시 acc로 반환하는 것)
}

const res = add_Rest(1, 2, 3, 4, 5, 6, 7, 8)
console.log(res)