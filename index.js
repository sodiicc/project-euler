const sum = num => {
  let res = 0;
  for (let i = 2; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      res += i;
    }
  }
  return res;
};
console.log("sum", sum(1000));

const febbonachi = num => {
  let res = [1];
  let even = [];
  let sumEven = 0;
  let a = 1;
  let b = 2;
  let sum = 1;
  let i = 3;
  while (b < num) {
    res.push(b);
    sum += b;
    b = b + a;
    a = b - a;
    i++;
  }
  res.forEach((item, index) => {
    if (item % 2 === 0) {
      sumEven += item;
      even.push(item)
    }
  });
  return [sum, res, sumEven, even];
};

console.log("febbonachi", febbonachi(4000000));

const prime = num => {
  let n = Math.sqrt(num);
  let m = 1;
  let res = [];

  nextPrime: for (m; m < n; m++) {
    for (let j = 2; j * j <= m; j++) {
      if (m % j == 0) continue nextPrime;
    }
    if (num % m === 0) {
      res.push(m);
    }
  }
  return res;
};

console.log("prime", prime(600851475143));

const polindrom = num => {
  let a = num;
  let b = num;
  let res = [];
  let biggest = [1, 1, 1];

  for (a; a > 900; a--) {
    let mult = a * b;
    if (
      mult.toString()[0] === mult.toString()[5] &&
      mult.toString()[1] === mult.toString()[4] &&
      mult.toString()[2] === mult.toString()[3]
    ) {
      res.push([mult, a, b]);
      if (mult > biggest[0]) {
        biggest = [mult, a, b];
      }
    }
    for (let i = b; i > 900; i--) {
      let mult = a * i;
      if (
        mult.toString()[0] === mult.toString()[5] &&
        mult.toString()[1] === mult.toString()[4] &&
        mult.toString()[2] === mult.toString()[3]
      ) {
        res.push([mult, a, i]);
        if (mult > biggest[0]) {
          biggest = [mult, a, i];
        }
      }
    }
  }
  return [res, biggest];
};
console.log("polindrom", polindrom(999));

// const smallestDiv = num => {
//   let res = [];

//   nextPrime: for (let i = 10000; i < i * num; i++) {
//     for (let j = num; j > 10; j--) {
//       if (i % j !== 0) {
//         continue nextPrime;
//       }
//       if (j <= 11) {
//         res.push(i);
//         return res;
//       }
//     }
//   }
//   return res;
// };
// console.log("smallestDiv", smallestDiv(20));

const diffSquare = num => {
  let sumSquare = 0;
  let squareSum = 0;
  for (let i = 1; i <= num; i++) {
    sumSquare += Math.pow(i, 2);
    squareSum += i;
  }
  return Math.pow(squareSum, 2) - sumSquare;
};
console.log("diffSquare", diffSquare(100));

const bigPrime = num => {
  let primes = [];
  nextPrime: for (let m = 2; m < num * 100; m++) {
    for (let j = 2; j * j <= m; j++) {
      if (m % j == 0) continue nextPrime;
    }
    primes.push(m);
    if (primes.length === num)
      return [primes.length, primes[primes.length - 1]];
  }
  // return [primes, primes.length]
};
console.log("bigPrime", bigPrime(10001));

const biggestMult = num => {
  let res = 0;
  let arrRes = [];
  let matrix =
    "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

  array: for (let i = 0; i < matrix.length; i++) {
    let arr = matrix.slice(i, i + num);
    let newRes = 1;
    let newArrRes = [];
    for (let j = 0; j < num; j++) {
      if (+arr[j] === 0) continue array;
      newRes *= arr[j];
      newArrRes.push(+arr[j]);
    }
    if (newRes > res) {
      res = newRes;
      arrRes = newArrRes;
    }
  }

  return [res, arrRes];
};
console.log("biggestMult", biggestMult(13));


const piphagor = () => {
  let a = 100;
  let b = 100;
  let c = 400;

  for (let i = a; i < 400; i++) {
    for (let j = i; j < 400; j++) {
      let res = Math.pow(Math.pow(i, 2) + Math.pow(j, 2), 0.5);
      if (Number.isInteger(res) && i + j + res === 1000) {
        return [i * j * res];
      }
    }
  }
};

console.log("piphagor", piphagor());

const sumPrime = num => {
  let resArr = []
  let m = 2;
  let res = 0;

  nextPrime: for (m; m < num; m++) {
    for (let j = 2; j * j <= m; j++) {
      if (m % j == 0) continue nextPrime;
    }
    if (m < num) {
      res += m
      resArr.push(m)
    }
  }
  return [res, resArr];
};

console.log("sumPrime", sumPrime(2000000));
