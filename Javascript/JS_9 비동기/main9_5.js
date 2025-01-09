// Async & Await 사용형
const h1El = document.querySelector('h1')
const ulEl = document.createElement('ul')
ulEl.classList.add('users')
document.body.append(ulEl)

h1El.addEventListener('click', async () => {
  // ulEl.textContent = 'Loading...'
  // 글자 대신 loading animation을 보여주려함
  const loaderEl = document.createElement('div')
  loaderEl.classList.add('loader')

  ulEl.innerHTML = ''
  // ulEl의 HTML요소를 비워버림 으로써 h1 tag를 누를 때 마다 새로운 정보를 불러옴
  ulEl.append(loaderEl)

  const res = await fetch('https://api.heropy.dev/v0/users')
  // await : fetch함수가 호출되는걸 기다린다
  // await는 promise 인스턴스에서만 사용가능
  // res : fetch의 결과를 res로 할당한다
  const data = await res.json()
  // data : res의 json화된걸 분석하여 JS화 시킨다
  console.log(data)
  const { users } = data
  const liEls = users.map(user => {
    const liEl = document.createElement('li')
    liEl.textContent = user.name
    // const imgEl = document.createElement('img')
    liEl.dataset.photo = user.photo?.url || 'https://heropy.dev/favicon.png'
    // dataset : data를 임시 보관
    if (!user.photo) {
      liEl.classList.add('no-photo')
    }
    const loaderEl = document.createElement('div')
    loaderEl.classList.add('loader')
    liEl.prepend(loaderEl)
    // liEl.prepend(imgEl)
    return liEl
  })
  // ulEl.textContent = ''
  loaderEl.remove()

  ulEl.append(...liEls)
  liEls.forEach(async liEl => {
    const imgEl = await loadImage(liEl.dataset.photo)
    liEl.prepend(imgEl)
    liEl.querySelector('.loader').remove()
  })
})

// 각 name의 이미지가 로딩되는 시간동안에도 loader animation 작동
function loadImage(src) {
  return new Promise(resolve => {
    const imgEl = document.createElement('img')
    imgEl.src = src
    imgEl.addEventListener('load', () => {
      resolve(imgEl)
    })
  })
}