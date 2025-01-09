// 이벤트(Event) / 키보드 이벤트

const inputEl = document.querySelector('input')

// keydown - 키를 누를 때
// keyup - 키를 (누른 후) 땔 때
// keypress : Deprecated/ 더이상 사용되지 않음
// 일반적으론 keydown사용하며 눌럿다 땔때가 명확히 필요하다면 keyup 사용
inputEl.addEventListener('keydown', event => {
  console.log(event.key)
  if (event.key === 'Enter') {
    console.log('Enter')
  }
  if (event.key === 'Escape') {
    console.log('ESC!')
  }
  if (event.key === ' ') {
    console.log('Space!')
  }
})