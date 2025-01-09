// 문자(String)은 따옴표를 사용합니다.
// const = 변수(Variable)를 선언(Declaration) 함
const s1 = "Neo"
// s1 = "Neo" 의 경우 Neo를 s1의 =을 통해 할당(Assignment)한다라고 표현
const s2 = '123'

// 리터럴(Literal) : 특정한 기호(',",`)등으로 만드는 Data
// ${} 안에 데이터를 보간(Interpolation[채워넣는다])합니다 [보간법]
// 템플릿 리터럴(Literal)은 백틱(`[숫자1옆])을 사용하며
const s3 = `My name is ${s1}, I'm ${s2}.`
// 템플릿은 하나의 문자로 표현되며 (` ~ `) 까지가 하나의 문자임

console.log(s3)
// console 창에 기록을 남김