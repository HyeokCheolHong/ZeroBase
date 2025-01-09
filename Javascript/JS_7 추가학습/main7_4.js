// 모듈(Module) - import & export
// HTML에 연결되는 script에 type="module"을 추가 해야함

import { add, sub } from './main7_4/main7_4_calc.js'
import { getuserBrithYear } from './main7_4/main7_4_user.js'
import { fruits, addFruit } from './main7_4/main7_4_fruit.js'

console.log(add(2, 7)) // 9
console.log(sub(2, 7)) // -5

const neo = {
  name: 'Neo',
  age: 22
}
const lewis = {
  name: 'Lewis',
  age: 7
}
console.log(getuserBrithYear(neo)) // 2022
console.log(getuserBrithYear(lewis)) // 2017

addFruit('Orange')
addFruit('Mango')
console.log(fruits) // ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango']