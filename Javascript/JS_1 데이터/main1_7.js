// 변수(Variable)란, 데이터(값)의 이름을 지정한 것입니다.
// 이름이 있으면, 그 이름으로 언제든지 데이터를 재사용할 수 있습니다.

// const 키워드는 상수(Consatant)를 의미하며, 한 번 선언하면 다른 값으로 바꿀 수 없습니다.
const c = 12
console.log(c)
// c = 34 // Error : Assignment to constant variable
// const로 할당된 변수는 변경하지 못합니다.
console.log(c)

// let 키워드는 선언한 값을 다른 값으로 바꿀 수 있습니다.
let l = 56
console.log(l)
console.log(l)
l = 78
console.log(l)
console.log(l)