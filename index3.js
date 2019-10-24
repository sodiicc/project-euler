let names = ["MARY", "LONG", "KOREY", "JOSPEH", "COLTON", "WAYLON", "VON", "HOSEA"]
const namesSort = () => {
  let sumArr = []
  names.sort().map((name, index) => {
    let letterSum = 0
    for (let i = 0; i < name.length; i++) {
      letterSum += ((name[i].charCodeAt() - 64))
    }
    sumArr.push(letterSum * (index + 1))
  })
  let res = sumArr.reduce((acc, n) => acc += n, 0)
  return console.log('sumArr', sumArr, res)
}
// namesSort()

const abundant = num => {
  let arrAbundant = [];
  let arrAbundantNonDivisors = [];

  for (let i = 4; i <= num; i++) {
    let divisorsArr = [];

    for (let j = Math.floor(i / 2) + 1; j > 0; j--) {
      if (i % j === 0) {
        divisorsArr.push(j);
      }
    }
    let sum = 0;
    divisorsArr.forEach(n => (sum += n));

    if (sum > i) {
      arrAbundant.push(i)
    }
  }

  for (let i = num; i > 0; i--) {
    for (let j = arrAbundant.length - 1; j >= 0; j--) {
      if (i > arrAbundant[j] + 11) {
        if (arrAbundant.includes(i - arrAbundant[j])) {
          break
        }
      }
      if (j === 0) {
        arrAbundantNonDivisors.push(i)
        break
      }
    }
  }
  let res = arrAbundantNonDivisors.reduce((acc, n) => acc += n, 0)
  return res
};
// console.log('abundant', abundant(20162))

const factorial = n => {
  let res = 1
  for(let i = 1; i<=n; i++){
    res *= i
  }
  return res 
}

const permutation = (index, numb) => {
  let n = 1
  let sum
  let numbers = numb.toString().split('')
  console.log('numbers', numbers)

  

  
  // for(let i = 1; i<=numb *10; i++) {
  //   sum = numbers + i
  //   let split = sum.toString().split('')
  //   if(split.length < 10){
  //     split.unshift('0')
  //   }
  //   if(split.includes('0') && split.includes('1') && split.includes('2') && split.includes('3') && split.includes('4') && split.includes('5') && split.includes('6') && split.includes('7') && split.includes('8') && split.includes('9')){
  //     n += 1
  //   }
  //   if(n === index) return console.log('sum', sum, n)
  // }  
  // return  console.log('sum', sum, n)
}

permutation(500, 1234567890)

console.log('test', 999999 % 362880 % 40320 % 5040 % 720 % 120 % 24)