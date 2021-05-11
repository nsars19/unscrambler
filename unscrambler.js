const buildTree = require("./buildTree");
const list = require("an-array-of-english-words");

module.exports = function unscrambler(str) {
  // Prevent passing of non-string type or empty string as arg.
  const err = {};
  if (typeof str !== "string") {
    err.error = "You must pass a string into this function.";
    return err;
  } else if (str.length === 0) {
    err.error = "You can't pass an empty string.";
    return err;
  }

  // Will hold 2..n-letter word values by letter length. Single letter words are skipped.
  const words = {};

  const tree = buildTree(str.toLowerCase());
  const wordsAry = [];
  const stack = [...tree.children];

  // Do a BFS and add each node's value to the words object
  while (stack.length) {
    let curr = stack.shift();
    wordsAry.push(curr.val);
    stack.push(...curr.children);

    if (curr.val.length < 2) continue;

    if (list.includes(curr.val)) {
      // Create hash table to store word values by length
      const lengthLetter = curr.val.length + " letters";
      if (words.hasOwnProperty(lengthLetter)) {
        words[lengthLetter].push(curr.val);
      } else {
        words[lengthLetter] = [];
      }
    }
  }

  return words;
};
