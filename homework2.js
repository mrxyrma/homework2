//Задача 1
function add(a) {
  let sum = a

  function innerFunc(b) {
    sum += b
    return innerFunc
  }

  innerFunc.toString = () => {
    return sum
  }

  return innerFunc
}

const sum = add(2)(3)(5)

alert(sum) //реализация вывода
console.log(sum + 5) //реализация математической операции

//Задача 2
const str = 'one.two.three.four.five'
const arr = str.split('.').reverse()
const res = arr.reduce((acc, currentValue) => {
  return { [currentValue]: acc }
}, {})
console.log(res)
