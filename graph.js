const metrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(metrix[2][2]);

adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1].delete(v2);
    this.adjacencyList[v2].delete(v1);
  }

  removeVertex(ver) {
   if (!this.adjacencyList[ver]) {
    return
   }
   for (let adjacentVertex of this.adjacencyList[ver]) {
    this.removeEdge(ver,adjacentVertex)
   }
   delete this.adjacencyList[ver]
  }

//   display() {
//     for (let vertex in this.adjacencyList) {
//       console.log(vertex + "=>" + [...this.adjacencyList[vertex]]);
//     }
//   }

//   hasEdge(v1, v2) {
//     return this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1);
//   }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

// graph.addEdge("A", "B");
// graph.addEdge("B", "C");

// graph.display();
