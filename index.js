// function printEvery3() {
//   for (let i = 1; i <= 88; i += 3) {
//     console.log(i);
//   }
// }
// printEvery3();

// function table9to9() {
//   for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//       console.log(`${i}*${j}=${i * j}`);
//     }
//   }
// }
// table9to9();

// function isUpperCase(string) {
//   return string.split("")[0] === string.split("")[0].toUpperCase();
// }
// console.log(isUpperCase("abc"), isUpperCase("Xyz"));

// function isAllUpperCase(string) {
//   return string === string.toUpperCase();
// }
// console.log(isAllUpperCase("aBcD"), isAllUpperCase("XYZABCD"));

// function position(string) {
//   const char = string.split("");
//   for (let i = 0; i < string.length; i++) {
//     if (char[i] === char[i].toUpperCase()) {
//       return `${char[i]} ${i}`;
//     }
//   }
//   return -1;
// }

// console.log(position("abcDefg"));
// console.log(position("abcefg"));

// const sentence = "The quick brown fox jumps over the lazy dog.";
// const index = 6;

// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

// function findSmallCount(arr, int) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < int) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(findSmallCount([1, 2, 3], 4)); // returns 1
// console.log(findSmallCount([1, 2, 3, 4, 5], 6)); // returns 3

// function findSmallerTotal(arr, int) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < int) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// const a = findSmallerTotal([1, 2, 3], 3); // returns 3
// const b = findSmallerTotal([1, 2, 3], 1); // returns 0
// const c = findSmallerTotal([3, 2, 5, 8, 7], 999); // returns 25
// const d = findSmallerTotal([3, 2, 5, 8, 7], 0); // returns 0
// console.log(a, b, c, d);

// function stars(count) {
//   let string = "";
//   for (let i = 0; i < count; i++) {
//     string += `*`;
//     console.log(string);
//   }
// }
// console.log(stars(5));

// function star2(count) {
//   let result = "";
//   for (let i = 0; i < count; i++) {
//     let string = `*`.repeat(i);
//     result += string + `\n`;
//   }
//   for (let i = count; i > 0; i--) {
//     let string = `*`.repeat(i);
//     result += string + `\n`;
//   }
//   return result;
// }

// console.log(star2(9));

// function fib(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   }
//   let fib_array = [0, 1];
//   while (fib_array.length <= n) {
//     let theLastElement = fib_array[fib_array.length - 1];
//     let theSecondLastElement = fib_array[fib_array.length - 2];
//     fib_array.push(theLastElement + theSecondLastElement);
//   }
//   return fib_array[n];
// }

// console.log(fib(8));

// function reverse(str) {
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

// console.log(reverse("abcd"));// returns "dcba"
// console.log(reverse("I am a good guy."));// returns ".yug doog a ma I"

// function swap(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       result += str[i].toLowerCase();
//     } else if (str[i] === str[i].toLowerCase()) {
//       result += str[i].toUpperCase();
//     }
//   }
//   return result;
// }

// console.log(swap("Aloha")); // returns "aLOHA"
// console.log(swap("Love you.")); // returns "lOVE YOU."

// function isPrime(n) {
//   if (n === 1) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(1)); // returns false
// console.log(isPrime(2)); // returns true
// console.log(isPrime(5)); // returns true
// console.log(isPrime(91)); // returns false
// console.log(isPrime(10000000)); // returns false

// function palindrome(str) {
//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(palindrome("bearaeb")); // returns true
// console.log(palindrome("whatever revetahw")); // returns true
// console.log(palindrome("Aloha, how are you today?")); // returns false

// function pyramid(n) {
//   let result = "";
//   for (let i = 1; i <= n; i++) {
//     let spaces = " ".repeat(n - i);
//     let stars = "*".repeat(2 * i - 1);
//     let str = spaces + stars;
//     result += str + `\n`;
//   }
//   return result;
// }

// console.log(pyramid(5));

// function inversePyramid(n) {
//   let result = "";
//   for (let i = n; i > 0; i--) {
//     let spaces = " ".repeat(n - i);
//     let stars = "*".repeat(1 + 2 * (i - 1));
//     let str = spaces + stars;
//     result += str + `\n`;
//   }
//   return result;
// }

// console.log(inversePyramid(5));

// function factorPrime(n) {
//   let numList = [];
//   let s = n;
//   let p = 2;
//   while (p <= s) {
//     if (s % p === 0) {
//       s /= p;
//       numList.push(p);
//     } else {
//       p++;
//     }
//   }
//   return `${n}=` + numList.join(" X ");
// }

// console.log(factorPrime(120));
// console.log(factorPrime(373));

// function mySort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function mySort(arr) {
//   let workingIndex = arr.length - 1;
//   while (workingIndex >= 0) {
//     let biggest = arr[0];
//     let biggestIndex = 0;

//     for (let i = 0; i <= workingIndex; i++) {
//       if (arr[i] > biggest) {
//         biggest = arr[i];
//         biggestIndex = i;
//       }
//     }

//     let temp = arr[biggestIndex];
//     arr[biggestIndex] = arr[workingIndex];
//     arr[workingIndex] = temp;

//     workingIndex--;
//   }
//   return arr;
// }

// console.log(mySort([17, 0, -3, 2, 1, 0.5]));

// function distance(h, n) {
//   let m = h;
//   for (let i = 2; i <= n; i++) {
//     m += 2 * (h / Math.pow(2, i - 1));
//   }
//   return m;
// }

// console.log(distance(100, 4)); // 275
// console.log(distance(500, 7)); // 1484.375

// function PPDI() {
//   for (let i = 100; i <= 999; i++) {
//     let hundreds = Math.floor(i / 100) % 10;
//     let tens = Math.floor(i / 10) % 10;
//     let units = i % 10;
//     if (i === Math.pow(hundreds, 3) + Math.pow(tens, 3) + Math.pow(units, 3)) {
//       console.log(i);
//     }
//   }
// }

// PPDI();
// 153
// 370
// 371
// 407

// function calc(a, n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       sum += a * Math.pow(10, j);
//       console.log(sum);
//     }
//   }
//   console.log(sum);
// }

// calc(2, 3); // returns 246
// calc(8, 5); // returns 98760


