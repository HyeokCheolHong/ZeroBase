// 객체 리터럴
const neo = {
  name: 'Neo',
  age: 22,
  getBirthYear() {
    const year = new Date().getFullYear()
    return year - this.age
  }
}
const evan = {
  name: 'Evan',
  age: 7
}
const lewis = {
  name: 'Lewis',
  age: 72
}

console.log(neo.getBirthYear()) // 2002
console.log(neo.getBirthYear.call(evan)) // 2017
// neo.getBirthYear()객체에서 evan객체를 (콜)부르겠다
// getBiirthYear에서 this.age로 작성되어있어서 evan.age의 값이 출력됨
console.log(neo.getBirthYear.call(lewis)) // 1952
// neo.getBirthYear()객체에서 lewis객체를 (콜)부르겠다
console.log(neo.getBirthYear === evan.getBirthYear) // false
// neo의 함수데이터와 evan의 함수데이터가 서로 다르다

console.log('----구분선----')

// 프로토타입
function User10(name10, age10) {
  this.name10 = name10
  this.age10 = age10
}

// getBirthYear10을 각각의 객체 데이터에서 잘 사용하기 위함
User10.prototype.getBirthYear10 = function () {
  const year10 = new Date().getFullYear()
  return year10 - this.age10
}
// prototype 속성을 통해서 User10을 통해 만들어지는 모든 객체 데이터가 접근할 수 있는 속성이나 메소드를 등록할 수 있다 

const neo10 = new User10('Neo', 22)
// new User10으로 생성자 함수의 매개변수 'Neo'와 22를 User10(name10, age10)에 대입 후 return 값(인스턴스)를 neo10에 저장
const evan10 = new User10('Evan', 7)
const lewis10 = new User10('Lewis', 72)

console.log(neo10) // {name10: 'Neo', age10: 22}
console.log(evan10) // {name10: 'Evan', age10: 7}
console.log(lewis10) // User10 {name10: 'Lewis', age10: 72}
console.log(neo10.getBirthYear10()) // 2002
console.log(evan10.getBirthYear10()) // 2017
console.log(lewis10.getBirthYear10()) // 1952
console.log(neo10.getBirthYear10 === evan10.getBirthYear10 && evan10.getBirthYear10 === lewis10.getBirthYear10) // true
// neo10의 함수데이터와 evan10의 함수데이터는 같다 and evan10의 함수데이터와 lewis10의 함수데이터는 같다

console.log('----구분선----')

// 클래스
// 프로토타입에서 function이 함수인지 객체인지 구분이 어렵기 때문에 나온 JS 최신 문법
class User20 {
  constructor(name20, age20) {
    this.name20 = name20
    this.age20 = age20
  }
  getBirthYear20() {
    const year20 = new Date().getFullYear()
    return year20 - this.age20
  }
  // 프로토타입 속성등록과 같은형식
}
const neo20 = new User20('Neo', 22)
const evan20 = new User20('Evan', 7)
const lewis20 = new User20('Lewis', 72)

console.log(neo20) // {name20: 'Neo', age20: 22}
console.log(evan20) // {name20: 'Evan', age20: 7}
console.log(lewis20) // {name20: 'Lewis', age20: 72}
console.log(neo20.getBirthYear20()) // 2002
console.log(evan20.getBirthYear20()) // 2017
console.log(lewis20.getBirthYear20()) // 1952
console.log(neo20.getBirthYear20 === evan20.getBirthYear20 && evan20.getBirthYear20 === lewis20.getBirthYear20) // true