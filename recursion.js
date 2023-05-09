// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
  
//   // Example usage
//   let num = 0;
//   let result = factorial(num);
//   console.log(`The factorial of ${num} is: ${result}`);

  let fact = (num) => (num === 0 ? 1 : num * fact(num - 1));
  console.log(fact(3))


