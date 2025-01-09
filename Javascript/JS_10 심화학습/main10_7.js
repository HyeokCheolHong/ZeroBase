// 렉시컬 스코프(Lexcial Scope)는 정적 스코프(Static Scope)라고도 하며,
// 함수를 선언한 위치에서 유효하게 접근 가능한 유효 범위를 말합니다.

const a = {
  // 변수 a는 fnA()와 fnX()인 2개의 메소드가 존재한다

  // // 일반함수
  // fnA() {
  //   console.log('fnA', this) // {fnA: ƒ, fnX: ƒ}
  //   // a 객체데이터인 'fnA'와 this를 출력
  //   // this는 변수 a가 일반함수이기에 호출된 위치에서 정의됨
  //     // 호출된위치가 a.fnA()이므로 a의 객체데이터fnX()가 출력
  //   const b = {
  //     // 변수 b는 fnB()메소드가 존재한다.
  //     fnB() {
  //       console.log('fnB', this) // {fnB: ƒ}
  //       const c = {
  //         // 변수 c는 fnC()메소드가 존재한다
  //         // 일반함수
  //         fnC() {
  //           console.log('fnC', this) // {fnC: ƒ}
  //           console.log('a', a) // {fnA: ƒ, fnX: ƒ}
  //           console.log('b', b) // {fnB: ƒ}
  //           console.log('c', c) // {fnC: ƒ}
  //           console.log('x', x) // Error... x is not defined
  //           // c변수에서는 x읽을수 없다
  //           // fnC()는 fnB()와 fnA()는 유효범위이나, fnX()는 유효범위 밖이다
  //         }
  //       }
  //       return c
  //       // 호출된 메소드 fnC()가 종료될때 c(fnC())값을 반환한다.
  //     }
  //   }
  //   return b
  //   // 호출된 메소드 fnA() 종료될때 b값(fnB())을 반환한다
  //   // 즉 a.fnA()가 b값을 대신하게 된다.
  // },

  // // 화살표함수(b 와 c)
  // // 화살표함수에서 this키워드는 렉시컬스코프에서 만나는 일반함수의 this키워드와 같다
  // fnA () {
  //   console.log('fnA', this) // {fnA: ƒ, fnX: ƒ}
  //   const b = {
  //     fnB: () => {
  //       console.log('fnB', this) // {fnA: ƒ, fnX: ƒ}
  //       // 화살표함수 이므로 this키워드는 a.fnA()의 객체데이터값을 읽어옴
  //       const c = {
  //         fnC: () => {
  //           console.log('fnC', this) // {fnA: ƒ, fnX: ƒ}
  //           console.log('a', a) // {fnA: ƒ, fnX: ƒ}
  //           console.log('b', b) // {fnB: ƒ}
  //           console.log('c', c) // {fnC: ƒ}
  //           console.log('x', x) // Error... x is not defined
  //         }
  //       }
  //       return c
  //     }
  //   }
  //   return b
  // },

  // // 화살표함수(a와 b와 c)
  // fnA: () => {
  //   console.log('fnA', this) // fnA  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  //   // 화살표함수 이므로 this키워드는 상위 객체데이터인 Window값을 읽어옴
  //   const b = {
  //     fnB: () => {
  //       console.log('fnB', this) // fnB Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  //       const c = {
  //         fnC: () => {
  //           console.log('fnC', this) // fnC Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  //           console.log('a', a) // {fnA: ƒ, fnX: ƒ}
  //           console.log('b', b) // {fnB: ƒ}
  //           console.log('c', c) // {fnC: ƒ}
  //           console.log('x', x) // Error... x is not defined
  //         }
  //       }
  //       return c
  //     }
  //   }
  //   return b
  // },

  // 화살표함수 및 type=module
  fnA: () => {
    console.log('fnA', this) // fnA undefined
    // 화살표함수 이므로 this키워드는 상위 객체데이터를 읽어야 하나
    // type이 module이므로 js내부에서 찾을수 없으므로 undefined로 출력
    const b = {
      fnB: () => {
        console.log('fnB', this) // fnB undefined
        const c = {
          fnC: () => {
            console.log('fnC', this) // fnC undefined
            console.log('a', a) // {fnA: ƒ, fnX: ƒ}
            console.log('b', b) // {fnB: ƒ}
            console.log('c', c) // {fnC: ƒ}
            // console.log('x', x) // Error... x is not defined
          }
        }
        return c
      }
    }
    return b
  },

  fnX() {
    // 상위 객체인 a객체를 출력 가능함
    console.log('fnX', this)
    // console.log(b)
    // b객체를 직접적인 호출은 유효범위 밖이라서 불가능 하지만
    console.log(a.fnA()) // {fnB: ƒ}
    // 상위 객체인 a객체에서의 fnA()를 통해 b객체를 간접적으로 읽어올수 있다
    const x = {
      fnY() {
        console.log('fnY', this)
        console.log('a', a)
        console.log('b', b)
        console.log('x', x)
      }
    }
  }
}
a.fnA().fnB().fnC()
a.fnX()