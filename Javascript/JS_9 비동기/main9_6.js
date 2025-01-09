// 이행과 거부, 예외 처리

const h1El = document.querySelector('h1')
const ulEl = document.createElement('ul')
ulEl.classList.add('users')
document.body.append(ulEl)

h1El.addEventListener('click', async () => {
  const loaderEl = document.createElement('div')
  loaderEl.classList.add('loader')

  ulEl.innerHTML = ''
  ulEl.append(loaderEl)
  try {
    // try {예외상황이 발생할수 있는 코드}
    const res = await fetch('https://api.heropy.dev/v0/users')
    // 주소가 틀렸을 경우 계속 대기를 함으로써 문제가 발생 예외처리를 해야함
    const data = await res.json()
    console.log(data)
    const { users } = data
    const liEls = users.map(user => {
      const liEl = document.createElement('li')
      liEl.textContent = user.name
      liEl.dataset.photo = user.photo?.url || 'https://heropy.dev/favicon.png'
      if (!user.photo) {
        liEl.classList.add('no-photo')
      }
      const loaderEl = document.createElement('div')
      loaderEl.classList.add('loader')
      liEl.prepend(loaderEl)
      return liEl
    })
    loaderEl.remove()
    ulEl.append(...liEls)
    liEls.forEach(async liEl => {
      try {
        const imgEl = await loadImage(liEl.dataset.photo)
        // loadImage로 불러올 이미지가 문제가 발생 예외처리 해야 할때
        liEl.prepend(imgEl)
      } catch(error) {
        console.log(error)
      } finally {
        // try일때도 동작해야하고 catch일때도 동작해야 할때
        liEl.querySelector('.loader').remove()
      }
  })
  } catch (error) {
    // catch(매개변수) {예외 상황시 나타낼 코드}
      console.log(error)
      ulEl.textContent = '사용자 정보를 찾을 수 없어요...'
      loaderEl.remove()
  }
  
  
})

function loadImage(src) {
  return new Promise((resolve, rejcet) => {
    const imgEl = document.createElement('img')
    imgEl.src = src
    imgEl.addEventListener('load', () => {
      resolve(imgEl)
    })
    imgEl.addEventListener('error', () => {
      // 이미지를 로드하지 못했을 때
      rejcet(new Error('이미지를 로드할 수 없어요...'))
      // Error()라는 JS Class 생성자 함수 : Instance로 error가 반환
    })
  })
}