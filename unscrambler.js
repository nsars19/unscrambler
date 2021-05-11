const buildTree = require("./buildTree");

function unscrambler(str) {
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

  // Add length properties to words object. Will hold up to `str.length` length words.
  for (let i = 2; i <= str.length; i++) {
    words[`${i}Letter`] = [];
  }

  const tree = buildTree(str);
  const wordsAry = [];
  let root = tree.children;
  const stack = [...root];

  while (stack.length) {
    let curr = stack.shift();
    wordsAry.push(curr.val);
    stack.push(...curr.children);
  }
}
