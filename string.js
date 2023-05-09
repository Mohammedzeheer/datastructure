//// Reverse string ------------------------------------------------
const str = "Hello, World!";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str.charAt(i);
}
console.log(reversedStr); 



//capital letter --------------------------------------------------
function capitalizeFirstAndLastLetter(str) {
   
    const firstLetter = str[0].toUpperCase();
    const lastLetter = str[str.length - 1].toUpperCase();
    const middlePart = str.slice(1, str.length - 1);
    
    return firstLetter + middlePart + lastLetter;
  }
  console.log(capitalizeFirstAndLastLetter("zeheer"))



  // Testing ----------------------------------------------------






