const characters = ["@", "#", "!", "$", "&", "%"];

const capLetters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I" ,"J", "K", "L", "M" ,"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const smallLetters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const formEl = document.querySelector('form');
const limitEl = document.querySelector('#length');
// #length : input요소이며 사용자가 입력할 공간
const numberRadioEl = document.querySelector("#numbers");
const slettersRadioEl = document.querySelector("#sletters");
const clettersRadioEl = document.querySelector("#cletters");
const symbolsRadioEl = document.querySelector("#symbols");
const showEl = document.querySelector(".show");
let choices = [];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  choices = [];
  if (numberRadioEl.checked == true) {
    // 넘버 라디오 박스가 체크되면 true
    choices.push(numbers);
    // choices 배열에 numbers를 추가
  }

  if (clettersRadioEl.checked == true) {
    // 대문자 라디오 박스가 체크되면 true
    choices.push(capLetters);
  }

  if (slettersRadioEl.checked == true) {
    //  소문자 라디오 박스가 체크되면 true
    choices.push(smallLetters);
  }

  if (symbolsRadioEl.checked == true) {
    //  심볼 라디오 박스가 체크되면 true
    choices.push(characters);
  }

  // 패스워드 생성하기
  const password = passwordGenerator(limitEl.value);
  // limitEl.value을 passwordGenerator() 함수의 limit 매개변수로 전환


  // 패스워드 보여주기
  showEl.innerText = password;
});

const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
  // limit : 0 ~ limit-1 0위의 limit-1의의 정수를 반환
}

// 패스워드 생성 함수
const passwordGenerator = (limit) => {
  let password = "";
  let choiceLength = choices.length;
  // choices.length : choices 배열(포함할 문자)의 선택 여부
  // console.log(randomNumber(choiceLength));
  for(let i = 0; i < limit; i++) {
    const randomArray = choices[randomNumber(choiceLength)];
    // console.log(randomArray);
    // 위의 로직과 아래 로직이 같음을 의미
    let length = randomArray.length;
    password += randomArray[randomNumber(length)];
  }
  return password;
}

const copyEl = document.querySelector('.copy');
const clickCopyEl = document.querySelector('.clickCopy');

clickCopyEl.addEventListener('click', (e) => {
  const password = showEl.innerText;
  // 비밀번호가 생성된 text를 가져온다

  navigator.clipboard.writeText(password);
  // 클림보드 복사 구현이 가능함
  copyEl.attributes[0].value = "assets/clipboard-check.svg";
  // clipboard-check.svg 이미지를 copyEl img src로 바뀐다.

  setTimeout(() => {
    copyEl.attributes[0].value = "assets/clipboard.svg";
    // 3초 후 clipboard.svg로 바꿉니다.
  }, 3000);
})
