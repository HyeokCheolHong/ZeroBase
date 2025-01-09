// 함수 재귀(Recursion)란, 함수가 자기 자신을 호출하는 것을 말합니다.

let i = 0
function a() {
  console.log(i, 'A')
  i += 1
  if (i < 4) {
    a()
    // 재귀 호출
    // i 가 4보다 작다면 다시 함수 a를 호출
  }
}

a()
// 최초 함수 호출

console.log('----구분선----')

const neo = { name: 'Neo' }
const evan = { name: 'Evan', parent: neo}
// name 속성과 parent 객체 neo 지정
const lewis = { name: 'Lewis', parent: evan}
const amy = { name: 'Amy', parent: lewis}

const getRootUser = user => {
  // user 매개변수로 화살표 함수를 호출
  
  if(user.parent) {
    // user 속성의 parent속성이 참이라면
    // amy 객체가 호출되면 parent 속성이 존재하기에 참
    // 다시 getRootUser(user.parent) 인 lewis의 객체데이터를 매개변수로 전달
    return getRootUser(user.parent)
  }
  return user
  // neo 객체데이터에선 parent 속성이 존재하지 않기에 user의 객체인 neo가 출력
}
// 부모사용자(최상위 사용자)를 찾는 함수

console.log(getRootUser(amy)) // {name: 'Neo'}
// amy의 객체데이터를 매개변수로 전달

console.log('----구분선----')

class User10 {
  constructor(name10, parent10) {
    // 매개변수로 name10, parent10을 받음
    this.name10 = name10
    this.parent10 = parent10

  }
  
  static getRootUser10(user10) {
    // 정적메소드 생성
    if(user10.parent10) {
      return User10.getRootUser10(user10.parent10)
      // getRootUser10은 정적 메소드 이므로 class에서만 호출 가능 (User10.메소드)
    }
    return user10
  }
}

const neo10 = new User10('Neo')
// User10 class에 name10 : 'Neo' 할당 후 instance로 neo10에 할당
const evan10 = new User10('Evan', neo10)
const lewis10 = new User10('Lewis', evan10)
const amy10 = new User10('amy', lewis10)

console.log(User10.getRootUser10(amy10)) // User10 {name10: 'Neo', parent10: undefined}