// String(문자) 표준 내장 객체(Built-in Object)
// .length - 문자의 길이(숫자)를 반환합니다.

const msg1 = "Hello world!"
//            012345678901
console.log(msg1.length) // 12
// msg1 변수의 문자길이

const msg2 = "The quick brown fox jumps over the lazy dog."
//            01234567890123456789012345678901234567890123
console.log(msg2.length) // 44

const h1El = document.querySelector("h1")
h1El.textContent = msg2.length > 20 ? `${msg2.slice(0, 20)}...` : msg2
//  삼항 연산자   문자길이가 20보다 크다 ? (참) 0~19번째 까지 출력후 ...  : (거짓) 전체출력

// .includes() - 문자에서 특정 문자가 포함되어 있는지 확인합니다.

const msg3 = "Hello world!";
const msg4 = "The quick brown fox jumps over the lazy dog."

console.log(msg1.includes("!")) // true
console.log(msg1.includes("?")) // false
console.log(msg2.includes("dog")) // true

// .replace() - 문자에서 특정 문자를 다른 문자로 바꾼 새로운 문자로 반환합니다.

const msg5 = "Hello world!"
const msg6 = "The quick brown fox jumps over the lazy dog."

console.log(msg5.replace("world", "earth")) // Hello earth!
// msg5에서 world를 earth로 반환되지만 실제 msg5 변수에서는 바뀌는것은 아니다
console.log(msg5) //Hello world!
console.log(msg6.replace("fox", "cat")) //The quick brown cat jumps over the lazy dog.
console.log(msg6) // The quick brown fox jumps over the lazy dog.
console.log(msg5.replace(' ', '')) //Helloworld!
console.log(msg6.replace(' ', '')) //Thequick brown fox jumps over the lazy dog.
// 모든 문자를 바꾸는것은 아니고 젤 첫번째 하나만 바꿈

// .replaceAll() - 문자에서 특정 문자를 다른 문자로 모두 바꾼 새로운 문자로 반환합니다.

const msg7 = "Hello world!"
const msg8 = "The quick brown fox jumps over the lazy dog."

console.log(msg7.replace(' ', '')) // Helloworld!
console.log(msg8.replace(' ', '')) // Thequick brown fox jumps over the lazy dog.

console.log(msg7.replaceAll(' ', '')) // Helloworld!
console.log(msg8.replaceAll(' ', '')) // Thequickbrownfoxjumpsoverthelazydog.
