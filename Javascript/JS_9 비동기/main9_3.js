// 비동기 - Promise
// 비동기 작업의 완료나 실패 시점을 지정하고 그 결과를 반환할 수 있습니다.
//  const promise = new Promise((resolve, reject) => {})
//  promise.then(() => {} )
// promise 비동기방식 : 어떠한 동작이 실행되면(이행되면) .then 메소드를 호출하겠다

// 기본형
function timer(callback) {
  setTimeout(() => {
    console.log(1)
    callback('1 is Done!')
  },2000)
}


timer(msg => {
  console.log(msg)
  console.log(2)
})

// promise 사용
function timer() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(1)
      resolve('1 is Done!')
      // resolve를 호출
      // resolve의 ('1 is Done!')은 msg의 인수로 들어감
    },2000)
  })
  return promise
}

timer()
  .then(msg => {
    // msg 매개변수가 resolve로 전달 됨
    console.log(msg)
    console.log(2)
    return timer()
    // 추가로 then 메소드를 사용하기 위해서 promise 인스턴스를 반환 해야함
  })
  
  .then(msg => {
    // msg 매개변수가 resolve로 전달 됨
    console.log(msg)
    console.log(2)
    return timer()
  })
  .then(msg => {
    // msg 매개변수가 resolve로 전달 됨
    console.log(msg)
    console.log(2)
    return timer()
  })

console.log('----구분선----')

// 기본형
function renderImage10() {
  return new Promise(resolve => {
    const imgEl10 = document.createElement('img')
    imgEl10.src = 'https://picsum.photos/3000/2000'
    imgEl10.addEventListener('load', () => {
      document.body.append(imgEl10)
      resolve()
    })
  })
}
renderImage10().then(() => {
  console.log('Done!')
})

// 확장성 추가
function loadImage10(src) {
  return new Promise(resolve => {
  // resolve함수의 값을 class Promise값이 반환함
    const imgEl10 = document.createElement('img')
    imgEl10.src = src
    // loadImage10의 매개변수값이 imgEl10.src속성으로 들어감
    imgEl10.addEventListener('load', () => {
      resolve(imgEl10)
      // resolve함수를 호출한 imgEl10의 값의 인수는 반환되는값
    })
  })
}
loadImage10('https://picsum.photos/3000/2000').then((imgEl10) => {
  // loadImage10의 인수가 loadImage10()의 매개변수로 들어감
  document.body.append(imgEl10)
  console.log('Done!')
})
loadImage10('https://picsum.photos/100/200').then((imgEl10) => {
  console.log(imgEl10)
})
