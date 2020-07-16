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