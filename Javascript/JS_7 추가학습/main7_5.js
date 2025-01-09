// Module 가져오기(Import)
// - JS파일의 최상단에 위치해야 합니다!
// import { 가지고올 변수(함수) 명} from '경로'

// 기본 가져오기(Default export)
// import abc from './main7_5/main7_5_module.js'
// 가져올때 'abc'라는 이름을 지정해줘야함

// 이름 가져오기(Named export)
// import {a, b} from './main7_5/main7_5_module.js'
// import {a, b as banana} from './main7_5/main7_5_module.js'
// b라는 이름을 banana로 바꿔서 들고옴

// 각 변수마다 export
// import abc, {a, b, c as Cherry, D} from './main7_5/main7_5_module.js'
// export안에 변수를 묶음으로
import abc, {apple, banana, c as Cherry, D} from './main7_5/main7_5_module.js'
console.log(abc)
console.log(apple,banana)
console.log(Cherry)
console.log(D)

// import 전체 내용을 가져올때
import * as xyz from './main7_5/main7_5_module.js'
console.log(xyz)
console.log(xyz.apple)