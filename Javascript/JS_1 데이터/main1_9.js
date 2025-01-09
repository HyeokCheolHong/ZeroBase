// '참'으로 평가되는 값(Truthy)
if (true) { console.log('참')}
if ({}) { console.log('참')}
if ([]) { console.log('참')}
if (42) { console.log('참')}
if ('0') { console.log('참')}
if ('false') { console.log('참')}
if (new Date()) { console.log('참')}
if (~42) { console.log('참')}
if (12n) { console.log('참')}
if (3.14) { console.log('참')}
if (-3.14) { console.log('참')}
if (Infinity) { console.log('참')}
if (-Infinity) { console.log('참')}
// ...

//'거짓'으로 평가되는 값(Falsy)
if (false) { console.log('거짓')}
if (null) { console.log('거짓')}
if (undefined) { console.log('거짓')}
if (0) { console.log('거짓')}
if (-0) { console.log('거짓')}
if (NaN) { console.log('거짓')}
if (0n) { console.log('거짓')}
// 빅인트
if ('') { console.log('거짓')}
// 빈문자 데이터

const fruits = ['Apple', 'Banana']
if (fruits.length) {
    // fruits 배열에 변수개수가 2개 존재함으로 참
    console.log('과일이 있어요!')
}

const h1El = document.querySelector('h1')
if (h1El) {
    console.log(h1El.textContent)
    if(!h1El.textContent) {
        console.log('내용이 없습니다.')
    }
}