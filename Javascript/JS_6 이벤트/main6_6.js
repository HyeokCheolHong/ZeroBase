// 이벤트(Event) / 한글 입력 이벤트 중복
// 브라우저 입력기(IME)의 CJK(중국어, 일본어, 한글) 문자 구성 중에는 이벤트 핸들러가 2번 실행될 수 있습니다.
// MAC 운영체제에서 주로 발생함
// evnet.isComposing - 한글 입력 중인지 여부를 확인합니다.

const inputEl = document.querySelector('input')
inputEl.addEventListener('keydown', event => {
  // if (event.isComposing) 
  //   return
  if (event.key === 'Enter') {
    const h1El = document.createElement('h1')
    h1El.textContent = inputEl.value
    document.body.append(h1El)
  }
})