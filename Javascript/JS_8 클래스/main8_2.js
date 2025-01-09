// 클래스 - Getter & Setter

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
    // this.fullName = `${first} ${last}`
  }
  get fullName() {
    // fullName의 함수를 속성과 같이 사용하기 위해 앞에 get 붙임
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(value) {
    // fullName에 지정될때 사용하기 위해 앞에 set을 붙임
    // 사용할 땐 value(매개변수)로 받아서 사용
    const names = value.split(' ') // ['Lewis', 'Park']
    // 이름이 들어올때 firstName lastName으로 공백으로 분리되어있으니 value값을 ' '으로 쪼갬
    this.firstName = names[0]
    this.lastName = names[1]
  }
  // constructor 함수 지정
}
// class body

const neo = new User('Neo', 'Park')

// Get
console.log(neo.fullName)
// Set
neo.fullName = 'Lewis Park'
// neo의 이름이 Lewis Park으로 변경되었다면?
// 풀네임은 Lewis Park으로 입력해줬지만 firstName의 경우 neo로 남아있다.
// 풀네임을 변경했을때 연동된 다른 데이터도 같이 변경해보자.

console.log(neo)