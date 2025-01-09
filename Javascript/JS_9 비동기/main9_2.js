// 비동기 - 콜백과 콜백 지옥(Callback Hell)
// log 1이 먼저 출력된 후 log 2가 출력되는 방법

import {timer } from './main9_2/main9_2_timer.js'

timer(() => {
  console.log(2)
})
// console.log(2)는 timer의 매개변수로 들어가서 callback()의 실행은 log 1이 실행되고 난 후 진행

console.log('----구분선----')

function renderImage(callback10) {
  const imgEl10 = document.createElement('img')
  imgEl10.src = 'https://picsum.photos/3000/2000'
  imgEl10.addEventListener('load', () => {
    document.body.append(imgEl10)
    callback10()
    // callback 함수의 실행되는 위치를 보장해줌
  })
}

renderImage(() => {
  console.log('Done!')
  // Done!은 renderImage의 매개변수로 들어가서 이미지가 출력된후 callback10함수가 실행되어 출력된다
  // console.log('Done!')을 바로 callback10() 자리에 넣어도 되지만
  // 함수의 확장성을 고려할 때 콜백함수로 실행하는 것이 좋다
})
renderImage(() => {
  const h1El10 = document.querySelector('h1')
  h1El10.textContent = 'Done!'
  // 재사용이 가능
})
renderImage(() => {
  // ...
})

console.log('----구분선----')

// 콜백 지옥
function renderImage20(callback20) {
  const imgEl20 = document.createElement('img')
  imgEl20.src = 'https://picsum.photos/3000/2000'
  imgEl20.addEventListener('load', () => {
    document.body.append(imgEl20)
    callback20()
    // callback 함수의 실행되는 위치를 보장해줌
  })
}

renderImage20(() => {
  console.log('Done! 1')
})
renderImage20(() => {
  console.log('Done! 2')
})
renderImage20(() => {
  console.log('Done! 3')
})
renderImage20(() => {
  console.log('Done! 4')
})
// 실제 실행해보면 Done!이 순서대로 출력되지 않는것을 볼수 있다
// 각 renderImage의 함수로 실행을 하다보니 각 함수의 응답속도, 서버 처리상태 등이 달라 순서를 보장 받을수 없다.

// 동기방식 처리방법
renderImage20(() => {
  console.log('Done! 1')
  renderImage20(() => {
    console.log('Done! 2')
    renderImage30(() => {
      console.log('Done! 3')
      renderImage30(() => {
        console.log('Done! 4')
        console.log('----구분선----')
      })
    })
  })
})
// 비동기코드를 동기방식으로 사용할 수도 있는데 해당 방식은 가독성이 안좋고 유지보수가 어렵다 지양 해야함


console.log('----구분선----')

// 콜백 지옥을 방지하기위한 Promise 사용
function renderImage30() {
  return new Promise((callback30) => {
    const imgEl30 = document.createElement('img')
    imgEl30.src = 'https://picsum.photos/3000/2000'
    imgEl30.addEventListener('load', () => {
      document.body.append(imgEl30)
      callback30()
      // callback 함수의 실행되는 위치를 보장해줌
    }) 
  })
}
renderImage30()
  .then(() => {
    console.log('Done! 1')
    return renderImage30()
    // renderImage()가 호출된 결과를 반환 해주면 다음 .then()에서도 사용할 수 있다.
  })
  .then(() => {
    console.log('Done! 2')
    return renderImage30()
  })
  .then(() => {
    console.log('Done! 3')
    return renderImage30()
  })
  .then(() => {
    console.log('Done! 4')
    console.log('----구분선----')
  })
// renderImage() 함수가 호출되면서 Promise class의 생성자 함수 호출결과가 return된다
// return 값이 then()호출하게 되고 그 값이 callback30의 매개변수로 실행된다