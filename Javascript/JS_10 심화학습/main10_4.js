// Throttle
// - 정해진 시간 간격으로 함수를 실행하도록 제한합니다.
// https://lodash.com/ 외부라이브러리 도움을 받음
// _ : underbar, rowdash 라고도 부름
// 짧은주기로 함수를 계속 호출하면 브라우저에 문제가 발생할 수 있음

// _.throttle[함수, 시간] : 함수가 동작하는데 시간보다 짧은시간에 동작하는걸 방지함
window.addEventListener('scroll', _.throttle(function() {
  // 브라우저 화면에서 scroll 이벤트 실행시 핸들러(_.throttle(function()) 실행
  console.log('Scroll!')
}))

// Debounce
// - 정해진 시간 동안 함수가 실행되지 않으면, 함수를 실행합니다.(마지막에 한 번만 실행)
async function getMovies(movieName) {
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${movieName}`)
  return await res.json()
}


// _.debounce[함수, 시간] 시간동안 함수가 동작하지 않으면 함수를 한번만 동작함
const inputEl = document.querySelector('input')
inputEl.addEventListener('input', _.debounce(async function () {
  console.log(inputEl.value)
  console.log(await getMovies(inputEl.value))
}, 400))