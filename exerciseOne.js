function fizzBuzz(str1, str2) {
  let strLength = (str1 + str2).length;
  if (strLength % 3 === 0 && strLength % 5 === 0) {
    return "FizzBuzz";
  } else if (strLength % 3 === 0) {
    return "Fizz";
  } else if (strLength % 5 === 0) {
    return "Buzz";
  }
}

console.log(fizzBuzz("abc", "xyzytf"));
