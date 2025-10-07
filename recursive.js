class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function height(root) {
  if (root == null)
    return 0; 
  else {
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}



let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Height of the binary tree is:", height(root));
