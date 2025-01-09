const neo = {
  name: 'Neo'
}

const amy = {
  name: 'Amy',
  getInfo(age, city) {
    return `${this.name}는 ${age}세이고, ${city}에 삽니다.`
  }
}
console.log(amy.getInfo(22, '서울')) // Amy는 22세이고, 서울에 삽니다.

// getInfo는 amy객체에만 존재하는 메소드
// neo도 getInfo로 표현하려고 함

// .call(this, 인수1, 인수2, ...)
// 대상 함수를 주어진 객체(this)의 메소드로 실행합니다.
// 인수 : call 메소드에 전달할 인수들을 작성
console.log(
  amy.getInfo.call(neo, 85, '서울') // Neo는 85세이고, 서울에 삽니다.
)
  
// .apply(this. [인수1, 인수2, ...])
// 대상 함수를 주어진 객체(this)의 메소드로 실행합니다.
// call 메소드에 전달할 인수를 배열([])로 묶어서 전달
console.log(
  amy.getInfo.apply(neo, [85, '서울']) // Neo는 85세이고, 서울에 삽니다.
)

// .bind(this)
// 대상 함수를 주어진 객체(this)의 메소드로 실행할 수 있는 새로운 함수를 반환합니다.
const neoGetInfo = amy.getInfo.bind(neo)
// neo라는 객체를 amy의 getInfo메소드 내용을 복사하여 neoGetInfo에 할당
setTimeout(() => {
  console.log(neoGetInfo(85, '서울')) // Neo는 85세이고, 서울에 삽니다.
}, 1000)

 