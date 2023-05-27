// class TreeNode {
//     constructor(value) {
//       this.value = value;
//       this.children = [];
//     }
  
//     addChild(child) {
//       this.children.push(child);
//     }
//   }
  
//   class Tree {
//     constructor() {
//       this.root = null;
//     }
  
//     addRoot(value) {
//       this.root = new TreeNode(value);
//     }

    
//   printTree() {
//     if (this.root === null) {
//       console.log("Tree is empty.");
//       return;
//     }

//     this._printNode(this.root);
//   }

//   _printNode(node) {
//     console.log(node.value);

//     if (node.children.length > 0) {
//       for (const child of node.children) {
//         this._printNode(child);
//       }
//     }
  
//   }
// }
//   // Example usage
//   const tree = new Tree();
//   tree.addRoot(1);
  
//   const root = tree.root;
//   const child1 = new TreeNode(2);
//   const child2 = new TreeNode(3);
//   root.addChild(child1);
//   root.addChild(child2);
  
//   const child3 = new TreeNode(4);
//   const child4 = new TreeNode(5);
//   child1.addChild(child3);
//   child1.addChild(child4);
//   tree.printTree();
  

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.children = [];
//   }

//   addChild(value) {
//     const child = new TreeNode(value);
//     this.children.push(child);
//   }
// }

// // Example usage
// const root = new TreeNode(1);
// root.addChild(2);
// root.addChild(3);
// root.addChild(2);
// root.addChild(3);
// root.children[0].addChild(4);
// root.children[0].addChild(5);

// console.log(root);



// class treenode{
//   constructor(value){
//     this.value=value 
//     this.children=[]
//   }

//   addchild(value){
//     const child=new treenode(value)
//     this.children.push(child)
//   }
// }

// const root=new treenode(1)
// root.addchild(23)
// root.addchild(34)
// // root.children[0].addchild(4)
// // root.children[0].addchild(3)
// console.log(root);



class tree{
  constructor(value){
    this.value=value
    this.children=[]
  }

  addchild(value){
    let child=new tree(value)
    this.children.push(child)
  }
}

let root=new tree(1)
root.addchild(23)
root.addchild(24)
root.addchild(25)
root.addchild(26)
console.log(root);

