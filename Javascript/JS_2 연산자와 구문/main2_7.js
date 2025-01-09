// switch (조건) {
//     case 값1:
//       // ...
//       break
//     case 값:
//         // ...
//         break
//     default:
//           // ...
//   }
  
  const prod = '노트북'
  switch (prod) {
    case '노트북':
      console.log((3000000).toLocaleString() + '원')
      break
    case '스마트폰':
      console.log((800000).toLocaleString() + '원')
      break
    case '키보드':
      // console.log((300000).toLocaleString() + '원')
      // break
    case '마우스':
      console.log((120000).toLocaleString() + '원')
      break
      default:
        console.log('-')
        // case에 해당하는 값이 없을 경우
  }

const inputEl = document.querySelector('input')  
const buttonEl = document.querySelector('button')
const h1El = document.querySelector('h1')

buttonEl.addEventListener('click', function() {
  const prod = inputEl.value
  switch (prod) {
    case '노트북':
      h1El.textContent = (3000000).toLocaleString() + '원'
      break
    case '스마트폰':
      h1El.textContent = ((800000).toLocaleString() + '원')
      break
    case '키보드':
      h1El.textContent = ((300000).toLocaleString() + '원')
      break
    case '마우스':
      h1El.textContent = ((120000).toLocaleString() + '원')
      break
    default:
      h1El.textContent = '-'
      // case에 해당하는 값이 없을 경우
  }
})