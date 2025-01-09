// this 키워드는 일반 함수와 화살표 함수에 따라 다르게 정의됩니다.
// 일반 함수는 호출 위치에서 this가 정의됩니다.
// 화살표 함수는 선언 위치(렉시컬 스코프)에서 this가 정의됩니다.

// 일반 함수
function User() {
  this.name = 'User'
  // this.name : 'User' 문자 데이터 할당
  return {
    // 객체 데이터 반환
    name: 'Neo',
    age: 85,
    getInfo: function () {
      // getInfo 메소드 (: funcion 생략 가능)
      return `${this.name}는 ${this.age}세 입니다.`
      // 문자열 반환
    }
  }
}

const u = new User()
// User 함수의 호출결과를 u에 할당 (즉 u는 생성자 함수의 결과이므로 User함수의 인스턴스 이다)
console.log(u.name) // Neo
console.log(u.age) // 85
console.log(u.getInfo()) // Neo는 85세 입니다.
// 호출되는 시점에서 this key워드가 정의됨
// return의 객체 데이터에 관한 this값들이 반환

const evan = {
  // evan 객체 데이터 생성
  name: 'Evan',
  age: 25
}
console.log(u.getInfo.call(evan)) // Evan는 25세 입니다.
// 호출되는 시점에서 this key워드가 정의됨
// u(인스턴스)의 getInfo 함수데이터 call의 인수로 (evan) 호출

console.log('----구분선----')

// 화살표 함수
function User10() {
  this.name10 = 'User'
  // this.name10에 'User'의 문자가 정의됨
  // this.age는 정의되지 않았기에 undefined로 정의
  // 렉시컬 스코프(화살표 함수를 감싸는 가장 가까운 함수의 정의되는 부분)
  return {
    name10: 'Neo',
    age10: 85,
    getInfo10: () =>  {
      // 화살표함수 내부에서 this 키워드 사용시 정의되는 기준이 바뀜
      return `${this.name10}는 ${this.age10}세 입니다.`
      // this 키워드는 선언하는 위치에 따라 달라짐
    }
  }
}

const u10 = new User10()
console.log(u10.name10) // Neo
console.log(u10.age10) // 85
console.log(u10.getInfo10()) // User는 undefined세 입니다.

const evan10 = {
  name10: 'Evan',
  age10: 25
}
console.log(u10.getInfo10.call(evan10)) // User는 undefined세 입니다.

console.log('----구분선----')

// 일반 함수
function createTimer(duration) {
  return {
    // 객체 데이터 반환
    message: 'Timer!',
    timeout() {
      return setTimeout(function () {
        // setTimeout 함수 호출 duration 매개변수 시간 뒤에 함수를 콜백
        console.log(this.message) // undefined
      }, duration)
    }
  }
}

const t1 = createTimer(1000)
// 함수를 호출하여 반환되는 객체데이터를 t1에 저장
t1.timeout()
// timeout을 호출 시 setTimeout 이미 정의된 함수로
// function함수는 언제 호출되는 위치의 인지 알수가 없다.

const t2 = createTimer(2000)
t2.timeout()

console.log('----구분선----')

// 화살표함수
function createTimer10(duration10) {
  return {
    message10: 'Timer!',
    timeout10: function () {
      // 화살표함수의 가장 가까움 timeout10함수(일반함수)가 호출되는 시점(t10.timeout10())
      return setTimeout(() => {
        console.log(this.message10) // Timer!
      }, duration10)
    }
  }
}

const t10 = createTimer10(3000)
// 함수를 호출하여 반환되는 객체데이터를 t1에 저장
t10.timeout10()
// t10.timeout10()이 반환하는 객체데이터(message10: 'Timer!') 이 해당사항

const t11 = createTimer10(4000)
t11.timeout10()

console.log(t1 === t2) // false
// 각각의 함수로 진행한 다른 객체 데이터이다

console.log('----구분선----')

// 일반 함수
Array.prototype.abc = function () {
  // abc함수 : Array class에서 만들어지는 배열데이터의 prototype의 메소드
  return this.map(function (item) {
    return item.toUpperCase()
  })
}

const fruits = ['apple', 'banana', 'cherry']
const flowers = ['rose', 'tulip', 'lily']
console.log(fruits.abc()) // ['APPLE', 'BANANA', 'CHERRY']
// 호출되는 위치인 현재 값에 따른 this 키워드가 정의됨
console.log(flowers.abc()) // ['ROSE', 'TULIP', 'LILY']

console.log('----구분선----')

// 화살표함수
Array.prototype.abc10 = () => {
  return this.map(function (item) {
    // this가 선언된 현재위치에서 정의될수 있는 매체가 없기 때문에 undefined이다
    return item.toUpperCase()
  })
}

const fruits10 = ['apple', 'banana', 'cherry']
const flowers10 = ['rose', 'tulip', 'lily']
console.log(fruits10.abc10()) // Error.. this.map is not a function at Array.abc10
console.log(flowers10.abc10()) // Error.. this.map is not a function at Array.abc10