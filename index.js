function isPalindrome(word) {
  // Convert the word to lowercase to handle case-insensitive comparisons
  word = word.toLowerCase();
  
  // Get the length of the word
  const length = word.length;
  
  // Compare characters from start and end moving towards center
  for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false;
    }
  }
  
  return true;
}

/* 
  1. Convert the input word to lowercase to handle case-insensitive comparisons
  2. Get the length of the word
  3. Loop through the first half of the word
  4. For each character at position i:
     - Compare it with the corresponding character from the end (length - 1 - i)
     - If they don't match, return false (not a palindrome)
  5. If all characters match, return true (is a palindrome)
*/

/*
  This solution checks if a word is a palindrome by comparing characters from
  the start and end of the word, moving towards the center. It handles both
  even and odd length words by only iterating through half of the word length.
  The function is case-insensitive by converting the input to lowercase.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // Test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("A man a plan a canal Panama"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("javascript"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));  // empty string is technically a palindrome

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));  // single character is a palindrome
}

module.exports = isPalindrome;
