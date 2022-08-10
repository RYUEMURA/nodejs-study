'use strict';
const number = process.argv[2] || 0;//左の値が有効であれば、左の値を使用する。
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);