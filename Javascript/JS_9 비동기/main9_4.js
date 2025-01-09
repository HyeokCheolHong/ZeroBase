// 비동기 - Async & Await

// 기본형
const h1El = document.querySelector('h1')
const ulEl = document.createElement('ul')
ulEl.classList.add('users')
document.body.append(ulEl)

h1El.addEventListener('click', () => {
  ulEl.textContent = 'Loading...'
  fetch('https://api.heropy.dev/v0/users') // 지금 사용하는 API의 자세한 정보 : https://heropy.dev/p/5PlgxB
  // fetch : 네트워크 통신 함수
  // promise instance가 반환이 됨
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const { users } = data
      // 객체 구조 분해 할당 방식
      const liEls = users.map(user => {
        const liEl = document.createElement('li')
        liEl.textContent = user.name
        const imgEl = document.createElement('img')
        imgEl.src = user.photo?.url || 'https://heropy.dev/favicon.png'
        // imgEl.src에 매개변수로 받는 user.photo.url속성이 있다면 해당 url을 할당
        //                           user.photo.url속성이 없다면 'https://heropy.dev/favicon.png' 할당
        if (!user.photo) {
          liEl.classList.add('no-photo')
          // photo 속성이 없다고 표시를 남겨둠
        }
        liEl.prepend(imgEl)
        // liEl 가장 앞쪽에 imgEl 요소를 추가한다
        return liEl
        // liEl 값을 users.map으로 반환
      })
      ulEl.textContent = ''
      // 기존에 'Loading...' 이라는 문자가 들어가 있으므로 초기화
      ulEl.append(...liEls)
    })
})

console.log('----구분선----')

// Async & Await 사용형
const h1El10 = document.querySelector('h1')
const ulEl10 = document.createElement('ul')
ulEl10.classList.add('users')
document.body.append(ulEl10)

h1El10.addEventListener('click', async () => {
  ulEl10.textContent = 'Loading...'
  const res10 = await fetch('https://api.heropy.dev/v0/users')
  // await : fetch함수가 호출되는걸 기다린다
  // await는 promise 인스턴스에서만 사용가능
  // res : fetch의 결과를 res로 할당한다
  const data10 = await res10.json()
  // data : res의 json화된걸 분석하여 JS화 시킨다
  console.log(data10)
  const { users } = data10
  const liEls10 = users.map(user => {
    const liEl10 = document.createElement('li')
    liEl10.textContent = user.name
    const imgEl10 = document.createElement('img')
    imgEl10.src = user.photo?.url || 'https://heropy.dev/favicon.png'
    if (!user.photo) {
      liEl10.classList.add('no-photo')
    }
    liEl10.prepend(imgEl10)
    return liEl10
  })
  ulEl10.textContent = ''
  ulEl10.append(...liEls10)
})
