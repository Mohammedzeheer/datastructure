function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Example usage
  let num = 0;
  let result = factorial(num);
  console.log(`The factorial of ${num} is: ${result}`);


 ///// recursion fact simple way  -----------------------------------------------

  let fact = (num) => (num === 0 ? 1 : num * fact(num - 1));
  console.log(fact(3))



 ////recursion fibbonocci -----------------------------------------------
  function fibonacciRecursive(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
  const result1 = fibonacciRecursive(11);
  console.log(result1);
  


  //// RECURSION PALINDROME -----------------------------------------------
function isPalindromeRecursive(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindromeRecursive(str.slice(1, str.length - 1));
  }
  return false;
}
  
  // Example usage:
  console.log(isPalindromeRecursive("radar"));      // Output: true
  console.log(isPalindromeRecursive("level"));      // Output: true
  console.log(isPalindromeRecursive("hello"));      // Output: false
  console.log(isPalindromeRecursive("openai"));     // Output: false
  console.log(isPalindromeRecursive("madam"));      // Output: true
  

