// 클래스 - 상속(Inheritance)
// - 클래스의 속성과 메소드를 다른 클래스에게 확장(Extends)해 재사용하는 기능을 말합니다.

class A {
  constructor(a) {
    this.a = a
  }
}

class B extends A {
  // A라는 class를 B로 확장해 사용하겠다
  constructor(a, b) {
    super(a)
    // super : 상위 (B의 상위클래스는 A인것이다)
    // super(a)가 class A의 constructor(a)의 매개변수로 들어간다
    this.b = b
  }
}

const a = new A(1)
const b = new B(1, 2)

console.log(a) // A {a: 1}
console.log(b) // B {a: 1, b: 2}

console.log(a instanceof A) // ture
console.log(b instanceof A) // true
// b는 class A를 상속받아 만들었기 때문에 A의 instance이다

console.log(a instanceof B) // false
// a는 class A로 따로 만들었기에 B의 instance가 아니다
console.log(b instanceof B) // true

console.log(a instanceof Object) // true
// 기본적으로 class는 Object에서 상속받아 만들어진 문장이다
console.log(b instanceof Object) // true

console.log('----구분선----')

class User10 {
  constructor(name10) {
    this.name10 = name10
  }
  getName10() {
    return this.name10
  }
}
class Guest10 extends User10 {
  constructor(name10) {
    super(name10)
  }
}
class Member10 extends User10 {
  constructor(name10) {
    super(name10)
    this.private10 = true
    // private10는 Member10 class 에서만 사용 가능함
  }
  getPrivate() {
    return this.private10
  }
}
class Admin10 extends Member10 {
  constructor(name10) {
    super(name10)
    this.admin10 = true
    // admin10은 Admin10 class 에서만 사용 가능함
  }
}

const neo10 = new Guest10('Neo')
const evan10 = new Member10('Evan')
const lewis10 = new Admin10('Lewis')

console.log(neo10) // Guest10 {name10: 'Neo'}
console.log(evan10) // Member10 {name10: 'Evan', private10: true}
console.log(lewis10) // Admin10 {name10: 'Lewis', private10: true, admin10: true}