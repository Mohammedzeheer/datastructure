class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children.has(char)) {
          currentNode.children.set(char, new TrieNode());
        }
        currentNode = currentNode.children.get(char);
      }
  
      currentNode.isEndOfWord = true;
    }
  
    search(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children.has(char)) {
          return false;
        }
        currentNode = currentNode.children.get(char);
      }
  
      return currentNode.isEndOfWord;
    }
  
    startsWith(prefix) {
      let currentNode = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!currentNode.children.has(char)) {
          return false;
        }
        currentNode = currentNode.children.get(char);
      }
  
      return true;
    }

   
  }
  
  // Example usage
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("orange");
  
  console.log(trie.search("apple")); // true
  console.log(trie.search("banana")); // true
  console.log(trie.search("orange")); // true
  console.log(trie.search("grape")); // false
  
  console.log(trie.startsWith("app")); // true
  console.log(trie.startsWith("ban")); // true
  console.log(trie.startsWith("ora")); // true
  console.log(trie.startsWith("gr")); // false
  


//   //-----------------Trie in array---------------------------------------

//   class TrieNode{ 
//     constructor(){ 
//         this.children=new Map(); 
//     } 
// } 
 
// class Trie{ 
//     constructor(str){ 
//         this.root=new TrieNode(); 
//         this.endSymbol='*'; 
//         this.populateSuffixTrie(str) 
//     } 
 
 
//     populateSuffixTrie(str){ 
//         for(let i=0;i<str.length;i++){ 
//             this.insertSubstring(i,str) 
//         } 
//     } 
 
 
//     insertSubstring(index,str){ 
//         let node=this.root; 
//         for(let i=index;i<str.length;i++){ 
//             const letter=str.charAt(i); 
//             if(!node.children.has(letter)){ 
//                 node.children.set(letter,new TrieNode()) 
//             } 
//             node=node.children.get(letter) 
//         } 
//         node.children.set(this.endSymbol,null); 
//     } 
 
//     contains(str){ 
//         let node=this.root; 
//         for(let i=0;i<str.length;i++){ 
//             const letter=str.charAt(i); 
//             if(!node.children.has(letter)){ 
//                 return false 
//             } 
//             node=node.children.get(letter) 
//         } 
//         return node.children.has(this.endSymbol) 
//     } 
 
// } 
 
// const tr=new Trie("tree"); 
// console.log(tr.contains("e"))