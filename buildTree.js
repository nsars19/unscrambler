const Tree = require("./tree");
const TreeNode = require("./treeNode");

module.exports = function buildTree(str, root = new Tree(), baseStr = str) {
  const strAry = baseStr.split("");

  // Populate first level of children if root is the Tree object
  if (root instanceof Tree && root.children.length === 0) {
    for (let ltr of baseStr) {
      root.children.push(new TreeNode(ltr));
    }
  }

  for (let child of root.children) {
    // Remove child value letters from main string to prevent duplicate values being placed in the tree.
    // The index array is sorted highest to lowest, so that when an item is spliced via index, the highest index value is used first.
    // This is to prevent smaller index values from 'shifting' a higher index value down, and having the wrong letter be removed
    // when it comes time to remove the value at that index.
    const letters = child.val.split("");
    const workAry = [...strAry];

    letters.forEach((ltr) => {
      const idx = workAry.indexOf(ltr);
      workAry.splice(idx, 1);
    });

    // Add new TreeNodes for letters that have not yet been used, and attach them as children to the current child.
    // Recursively call this function with each child as the root to build the tree.
    const newNodes = workAry.map((ltr) => new TreeNode(child.val + ltr));

    child.children = newNodes;

    buildTree(child.val, child, baseStr);
  }

  return root;
};
