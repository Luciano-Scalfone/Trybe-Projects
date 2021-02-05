let string = "arara";

function verificaPalindrome(string) {
  let invert = string.split('').reverse().join('');
  let palindrome = false;
  if (string == invert) {
    palindrome = true;
  } else {
    palalindrome = false;
  }
  return palindrome;
}

console.log(verificaPalindrome(string));

function palindrome (string) {
  let name = "";
  let palindrome = false;
  for (let i = string.length-1; i >= 0; i -=1){
    name += string[i]; 
  }
  if (name === string) {
    palindrome = true;
  }
  return palindrome;
}

console.log(palindrome('arara'));