// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function(root, data) {
      if (root === null) {
          this.root = new Node(data);
          
          return this.root;
      }
      
      if (data <= root.data) {
          if (root.left) {
              this.insert(root.left, data);
          } else {
              root.left = new Node(data);
          }
      } else {
          if (root.right) {
              this.insert(root.right, data);
          } else {
              root.right = new Node(data);
          }
      }
      
      return this.root;
  };
  
  // Start of function levelOrder
  this.levelOrder = function(root) {
      //Write your code here
      let queue = []
      
      if (root != null) {
        queue.unshift(root);
      }
      while (queue.length != 0) {
        let node = queue.pop();
        process.stdout.write(node.data + " ");
        if (node.left != null) {
          queue.unshift(node.left);
        }
        if (node.right != null) {
          queue.unshift(node.right);
        }
      }
    }
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
  _input += data;
});

process.stdin.on('end', function () {
  var tree = new BinarySearchTree();
  var root = null;
  
  var values = _input.split('\n').map(Number);
  
  for (var i = 1; i < values.length; i++) {
      root = tree.insert(root, values[i]);
  }
  
  tree.levelOrder(root);
});