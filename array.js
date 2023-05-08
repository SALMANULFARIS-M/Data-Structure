// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit 
// integer range [-231, 231 - 1], then return 0.
let reverse = function(x) {
  const sign = x < 0 ? -1 : 1;
  x *= sign;
  const xStr = x.toString();
  const xReverseStr = xStr.split('').reverse().join('');
  let xReverse = parseInt(xReverseStr) * sign;
  if (xReverse <-Math.pow(2, 31) || xReverse > Math.pow(2, 31) - 1) {
    return 0;
  }
  return xReverse;

};

reverse(321)

let multiply = function(num1, num2) {

  let sum = parseInt(num1) * parseInt(num2)
  return sum.toString()
};

console.log(multiply("123","456"));
