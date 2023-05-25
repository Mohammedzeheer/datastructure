// class Graph {
//     constructor() {
//         this.map = new Map();
//     }
//     addVertex(vertex) {
//         this.map.set(vertex, []);
//     }
//     insert(vertex, edge, isbidirection = false) {
//         if (!this.map.has(vertex)) {
//             this.addVertex(vertex);
//         }
//         if (!this.map.has(edge)) { 
//             this.addVertex(edge);
//         }
//         this.map.get(vertex).push(edge);
//         if (isbidirection) {
//             this.map.get(edge).push(vertex);
//         }
//     }

//     delete(vertex) {
//         if (this.map.has(vertex)) {

//           for (let [key, value] of this.map) {
//             let index = value.indexOf(vertex);
//             if (index >= 0) {
//               value.splice(index, 1);
//             }
//           }
//           this.map.delete(vertex)
//             // let edges = this.map.get(vertex);
//             // // console.log(edges);
//             // for (let edge of edges) {
//             //     const edgeArray = this.map.get(edge);
//             //     const index = edgeArray.indexOf(vertex);
//             //     if (index >= 0) {
//             //         edgeArray.splice(index, 1);
//             //     }
//             // }
//             // this.map.delete(vertex);
//         }
//     }

//     dfsTraversal(startVertex) {
//         const visited = new Set(); // Track visited vertices
//         this.dfsHelper(startVertex, visited);
//       }
      
//       dfsHelper(vertex, visited) {
//         visited.add(vertex);
//         console.log(vertex);
        
//         const edges = this.map.get(vertex);
//         for (const edge of edges) {
//           if (!visited.has(edge)) {
//             this.dfsHelper(edge, visited);
//           }
//         }
//       }

//       //=============================================

//       bfsTraversal(startVertex) {
//         const visited = new Set(); // Track visited vertices
//         const queue = []; // Queue for BFS traversal
//         queue.push(startVertex);
//         visited.add(startVertex);
        
//         while (queue.length > 0) {
//           const vertex = queue.shift();
//           console.log(vertex);
          
//           const edges = this.map.get(vertex);
//           for (const edge of edges) {
//             if (!visited.has(edge)) {
//               visited.add(edge);
//               queue.push(edge);
//             }
//           }
//         }
//       }
    
    
//     display() {
//         for (let vertex of this.map.keys()) {
//             let temp = this.map.get(vertex);
//             console.log(vertex, temp);
//         }
//     }
// }
// let obj = new Graph();
// obj.insert("A", 1);
// obj.insert("B", 2);
// obj.insert("C", 1,true);
// obj.insert("D", 'A',true);
// obj.display();
// console.log("================");
// obj.delete("A");
// obj.display();




/////  ------------------- my code

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, new Set());
  }

  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).add(vertex2);
    this.adjList.get(vertex2).add(vertex1);
  }

  delete(verte1,vertex2){
    this.adjList.get(verte1).delete(vertex2)
    this.adjList.get(vertex2).delete(verte1)
  }
  bfs(startVertex) {
    const visited = new Set();
    const queue = [];

    visited.add(startVertex);
    queue.push(startVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      const adjacentVertices = this.adjList.get(currentVertex);

      console.log(currentVertex);

      for (const neighbor of adjacentVertices) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }


  dfs1(startVertex) {
    const visited = new Set();

    this.dfsRecursive(startVertex, visited);
  }

  dfsRecursive(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);

    const neighbors = this.adjList.get(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsRecursive(neighbor, visited);
      }
    }
  }

  dfs(startVertex) {
    const visited = new Set();
    const stack = [];
  
    visited.add(startVertex);
    stack.push(startVertex);
  
    while (stack.length > 0) {
      const currentVertex = stack.pop();
      const adjacentVertices = this.adjList.get(currentVertex);
  
      console.log(currentVertex);
  
      for (const neighbor of adjacentVertices) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }
  
}

// Example usage:
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'E');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
// graph.delete('A', 'E')

console.log('BFS traversal starting from vertex A:');
graph.bfs('A');
console.log('DFS traversal starting from vertex A:');
graph.dfs('A');
