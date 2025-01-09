export function timer(callback) {
  setTimeout(() => {
    console.log(1)
    callback()
  },2000)
  // 2초후에 콜백함수 실행 ( 콜백함수 console.log(1) 출력)
}

// callback 매개변수를 받은 후 callback()는 log 1이 출력되고 난 후 실행