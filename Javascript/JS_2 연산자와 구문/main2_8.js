// for 문
// for (초기화; 조건; 증감) {}
for (let i = 0; i < 10; i += 1) {
  // if (i > 5) {
    //   // break
    //   //  for문의 반복문을 정지 시킴
    //   continue
    //   // 현재 반복을 건너뛰고 다음 증감으로 이동
    // }
    if(i % 2 === 0) {
      continue
      // i === 2 일치하면 참이기 때문에 for의 현재 반복은 건너뛰고 다음 증감으로 이동
    }
    
    console.log(i)
  }
  // console.log(i) Error : i is not defined
  // for안에서 만든 i변수의 경우 for구문 안에서만 사용이 가능하다