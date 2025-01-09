// 객체(Object) 데이터는 순서가 없는 Key(키)와 Value(값)의 쌍으로 이루어진 데이터의 집합입니다.
// 객체에 포함된 각 데이터를 속성(Property)라고 부르고,
// 만약 그 데이터가 함수인 경우에는, 메소드(Method)라고 부릅니다.

const user = {
    // Data의 집합(객체 데이터)
    // key : value
    name: 'Neo',
    age: 85,
    isValid: true,
    emails: ['neo@abc.com', 'neo@xyz.com'],
    hello: function() {
        return `My name is ${this.name}, I'm ${this.age}!`
    }
}

// 점 표기법(Dot Notation)을 사용해, 객체의 속성이나 메소드에 접근할 수 있다.
console.log(user.name)
console.log(user.age)
console.log(user.isValid)
console.log(user.emails)
console.log(user.hello())

const key = 'age'

// 대괄호 표기법(Bracket Notation)을 사용해, 객체의 속성이나 메소드에 접근할 수 있다.
// 장점 : 대괄호 사이에 문자데이터만 작성하면 되니까 동적인 방식
console.log(user['key'])
// 변수값을 적음으로써 변수의 값이 변하더라도 수정할  필요가 없음
console.log(user['name'])
console.log(user['age'])
console.log(user['isValid'])
console.log(user['emails'])
console.log(user['hello']())