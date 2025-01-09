// for of 문
// for(const 아이템변수 of 배열) {}
const fruits = ['Apple', 'Banana', 'Cherry', 'Durian']
for(let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i]
  console.log(fruit)
}
console.log('====구분선====')
// ====for 상/하는 같은 의미====
for(const fruit of fruits) {
  // 배열 fruits에서 하나씩 실행하는데 그걸 fruit에 저장하는 방식
  if(fruit === 'Cherry') {
    // fruit에 Cherry가 일치한다면
    continue
    // 해당 반복을 무시하고 다음 반복으로 이동
  }
  console.log(fruit)
  // Html 작성 없이 Javascript로 웹페이지에 출력하는 방법
  const divEl_of = document.createElement('div')
  // div요소를 메모리상에서 생성함

  divEl_of.textContent = fruit
  // 해당 메모리요소에 fruit값을 지정한다.

  divEl_of.classList.add('fruit')
  // JavaScript divEl 요소에 Class 선택자를 추가하고 싶은경우
  // 변수.classList.add('Class 이름')
  // DOM(Document Object Model) 방식

  document.body.appendChild(divEl_of)
  // html에 body tag에 divEl_of 요소를 출력한다.
}

// for in 문
// for(const 키변수 in 객체){}
const user = {
  // 객체 데이터는 순서가 보장되지 않음
  name: 'Heropy',
  // key: 변수명[key]
  age: 85,
  isValid: true,
  email: 'thesecon@gmail.com'
}

for(const key in user) {
  if (key === 'age') {
    continue
  }
  console.log(key, user[key])
  const divEl_in = document.createElement('div')
    // div요소를 메모리상에서 생성함

  divEl_in.innerHTML = `<b>${key}</b>: ${user[key]}`
    // 백틱기호를 사용한 문자데이터를 divEl_in요소를 innerHTML(HTML로 해석하여) 출력한다

  document.body.appendChild(divEl_in)
    // html에 body tag에 divEl_in 요소를 출력한다.
}