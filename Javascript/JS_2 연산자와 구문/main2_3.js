
// 호이스팅(Hoisting)
// 함수를 호출
hello() //OK!
world() //Error..
// world함수를 초기화(정의되기) 전까지 접근할수 없다


// 함수 선언문(Declaration)
// 함수 선언문의 경우 먼저 사용 후 정의해도 사용가능
function hello() {
  console.log('Hello~')
}

// 함수 표현식(Expression)
// 함수 표현식의 경우 정의되기 전 사용 불가능
const world = function () {
  //변수 world에 함수를 할당하는 방법 [function abc() 처럼 함수의 이름을 저장할 필요 없음]
  console.log('World~')
}

// ----------------------------------------------------------------
const fruits = getFruits()
const movies = getMovies()


// 추상화 : 함수의 명칭을 통해 어떤 함수인지 유추할수 있도록 하는것
function getFruits() {  
  // 함수 선언문(호이스팅 가능)
  console.log('fruits~')
  // 코드1
  // 코드2
  // 코드3
  // 코드4
  // 코드5
  // return fruits
}

const getMovies = function() {
  // 함수 표현식
  console.log('movies~')
  // 코드1
  // 코드2
  // 코드3
  // 코드4
  // 코드5
  // return movies 
}