const data = {
    string: '123',
    number: 123,
    boolean: true,
    null: null,
    undefined: undefined,
    array: [1, 2, 3],
    object: {a: 1, b: 2},
    function: function() {}
}

console.log('typeof 데이터')
console.log(typeof data.string === 'string')
// string의 데이터 타입은 뭐니?
console.log(typeof data.number === 'number')
console.log(typeof data.boolean === 'boolean')
console.log(typeof data.null === 'object')
// object는 객체 데이터이므로 null은 객체 데이터로 True지만 정확하지않다.
// object내부에는 null과 array, object등이 있기때문에
console.log(typeof data.undefined === 'undefined')
console.log(typeof data.array === 'object')
console.log(typeof data.object === 'object')
console.log(typeof data.function === 'function')


console.log('데이터.constructor')
console.log(data.string.constructor === String)
// 대문자 String은 Class로 인식
console.log(data.number.constructor === Number)
console.log(data.boolean.constructor === Boolean)
// console.log(data.null.constructor === Null) // Error : Cannot read properties of null
// console.log(data.undefined.constructor === Undefined) // Error : Cannot read properties of undefined
console.log(data.array.constructor === Array)
console.log(data.object.constructor === Object)
console.log(data.function.constructor === Function)