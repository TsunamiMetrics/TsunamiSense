async function calculateFactorial(n) {
  if (n <= 1) return 1;
  return n * await calculateFactorial(n - 1);
}

async function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

async function generateRandomArray(length, min, max) {
  let arr = [];
  for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

async function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          result.push(arr1[i]);
          i++;
      } else {
          result.push(arr2[j]);
          j++;
      }
  }
  return result.concat(arr1.slice(i), arr2.slice(j));
}

async function findLongestString(arr) {
  let longest = '';
  arr.forEach(str => {
      if (str.length > longest.length) longest = str;
  });
  return longest;
}

async function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
  }, []);
}

async function reverseWordsInString(str) {
  return str.split(' ').reverse().join(' ');
}

function debounce(func, delay) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function throttle(func, delay) {
  let lastTime = 0;
  return function(...args) {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
          func.apply(this, args);
          lastTime = now;
      }
  };
}

async function calculateMatrixSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          sum += matrix[i][j];
      }
  }
  return sum;
}

async function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

async function runCalculations() {
  const factorialResult = await calculateFactorial(5);
  console.log(`Factorial of 5: ${factorialResult}`);

  const isPrimeResult = await isPrime(13);
  console.log(`Is 13 prime? ${isPrimeResult}`);

  const randomArray = await generateRandomArray(10, 1, 100);
  console.log(`Random array: ${randomArray}`);

  const mergedArray = await mergeSortedArrays([1, 3, 5], [2, 4, 6]);
  console.log(`Merged array: ${mergedArray}`);

  const longestString = await findLongestString(['apple', 'banana', 'kiwi']);
  console.log(`Longest string: ${longestString}`);

  const flattenedArray = await flattenArray([1, [2, 3], [4, [5, 6]]]);
  console.log(`Flattened array: ${flattenedArray}`);

  const reversedString = await reverseWordsInString('hello world');
  console.log(`Reversed words: ${reversedString}`);

  const debouncedFunc = debounce(() => console.log('Debounced'), 2000);
  debouncedFunc();

  const throttledFunc = throttle(() => console.log('Throttled'), 2000);
  throttledFunc();
  throttledFunc();

  const matrixSum = await calculateMatrixSum([[1, 2], [3, 4]]);
  console.log(`Matrix sum: ${matrixSum}`);

  const clonedObject = await deepClone({ name: 'John', age: 30 });
  console.log(`Cloned object: ${JSON.stringify(clonedObject)}`);
}

runCalculations();
