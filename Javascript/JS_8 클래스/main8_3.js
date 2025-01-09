// 클래스 - 정적 메소드(Static method)
// - 정적 메소드는 주로 클래스의 유틸리티(보조) 함수를 만들 때 사용합니다.
// - 인스턴스와는 연결되지 않으며, 클래스 자체에서 호출해야 합니다.

const fruits = new Array('Apple', 'Banana', 'Cherry')
// 생성자 방식
// const fruits = ['Apple', 'Banana', 'Cherry']
// 리터럴(기호) 방식

// fruits.includes('Apple')
// fruits.filter(item => item)
// fruits.push('Orange')
Array.prototype.abc = function() {
  console.log(this) // ['Apple', 'Banana', 'Cherry']
  return this.map(item => item.slice(0, 1).toLowerCase())
  // map으로 새로운 배열 생성 후 item은 0~1번까지 잘라 소문자로 반환
}

const newFruits = fruits.abc()
// 생성된 새로운 배열은 newFruits에 저장
console.log(newFruits) // ['a', 'b', 'c']
console.log(Array.isArray(fruits)) // true
// 배열이 맞는지 확인
console.log(Array.isArray(newFruits)) // true
// 배열이 맞는지 확인

const user = { name: 'Neo'}
console.log(Array.isArray(user)) // false

console.log(['Orange', 'Mango'].abc())

// class.prototype.method
// class의 prototype에 등록되는 메소드는 class의 모든 instance에서 사용 가능
// 정적 메소드는 intance와는 연결되지 않음
// ex) isArray의 경우    fruits.isArray라는 구문은 없음
// isArray는 정적메소드임 Array.isArray(fruits) class의 보조함수로 사용해서 작성해야함

console.log('----구분선----')

class User10 {
  constructor(first10, last10) {
    this.firstName10 = first10
    this.lastName10 = last10
  }
  static isUser10(user10) {
    // 정적메소드 만드는 방식 (static)
    return user10 instanceof User10
    // user10라는 매개변수가 User10의 instance인지 아닌지 확인
  }
}

const neo10 = new User10('Neo', 'Park')
const evan10 = new User10('Evan', 'Yang')
const lewis10 = {
  name: 'Lewis Lee',
  age: 72
}

// neo10, evan10은 생성자 함수로 만든 객체
// lewis10은 객체 리터럴로 만든것
console.log(User10.isUser10(neo10)) // true
console.log(User10.isUser10(evan10)) // true
console.log(User10.isUser10(lewis10)) // false