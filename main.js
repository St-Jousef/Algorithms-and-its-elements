// Here is the algorithm to read a sentence character by character and determine its length, number of words, and number of
// vowels:

// 1. Initialize three variables: length_counter = 0, word_counter = 1, vowel_counter = 0.

var length_counter = 0;
var word_counter = 1;
var vowel_counter = 0;

// 2. Ask the user to input a sentence ending with a point.

var sentence = prompt('write a sentence with a full stop "." ');
console.log(sentence);

// 3. Iterate over each character in the sentence:
// a. Increment the length_counter by 1 for each character.

var length_counter = 0;
sentence = prompt('write a sentence with a full stop "." ');
for (var i = 0; i < sentence.length; i++) {
  var char = sentence[i];
  length_counter++;
  console.log(length_counter);
}
// b. If the current character is a space, increment the word_counter by 1.

var word_counter = 0;
sentence = prompt('write a sentence with a full stop "." ');
for (var i = 0; i < sentence.length; i++) {
  var char = sentence[i];
  // Check if the current character is a space
  if (char === " ") {
    // Increment word_counter by 1
    word_counter++;
  }
}
console.log(word_counter);

// c. If the current character is a vowel (a, e, i, o, u), increment the vowel_counter by 1. Ignore case sensitivity.

var vowel_counter = 0;
var sentence = prompt('Write a sentence with a full stop "." ');
var vowels = new Set(["a", "e", "i", "o", "u"]);

// Loop through each character in the sentence
for (var i = 0; i < sentence.length; i++) {
  var char = sentence[i];
  // Check if the current character is a vowel
  if (vowels.has(char)) {
    // Increment vowel_counter by 1
    vowel_counter++;
  }
}

console.log(vowel_counter);
