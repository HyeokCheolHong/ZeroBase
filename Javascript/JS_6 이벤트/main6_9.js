// 이벤트(Evnet) / 양식(Form) 이벤트

const formEl = document.querySelector('#login')
const inputEls = formEl.querySelectorAll('input')
// formEl 요소에서 input을 찾아서 해당내용을 유사배열로 반환

inputEls.forEach(el => {
  // focus(focusin) - 요소가 포커스를 얻었을 때
  el.addEventListener('focus', () => {
    formEl.classList.add('active')
  })
  // blur(focusout) - 요소가 포커스를 잃었을 때
  el.addEventListener('blur', () => {
    formEl.classList.remove('active')
  })
  // input - 값이 변경되었을 때(입력값이 변할때 마다)
  el.addEventListener('input', event => {
    console.log(event.target.value)
  })
  // change - 상태가 변경되었을 때(상태가 변경 : Enter/Tab/blur)
  el.addEventListener('change', event => {
    console.log(event.target.value)
  })
})

// submit - 제출 버튼을 선택했을 때
formEl.addEventListener('submit', event => {
  event.preventDefault()
  // 기본동작 방지 / submit시 페이지 새로고침되는것을 방지
  const data = {
    id: event.target[0].value,
    pw: event.target[1].value
  }
  // fetch('https://...')
  // - 서버로 보내는 주소입력
  console.log('서버로 제출했습니다!', data)
})

// reset - 리셋 버튼을 선택했을 때
formEl.addEventListener('reset', event => {
  console.log('모든 값이 초기화되었습니다!')
})