//Задача 1
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
console.log(add(2)(3)(5))

//Задача 2
const str = 'one.two.three.four.five'
const arr = str.split('.').reverse()
const res = arr.reduce((acc, currentValue) => {
  return { [currentValue]: acc }
}, {})
console.log(res)
