class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.map(element => this.nodes.add(element));
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }


  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)

  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    let adjacentToRemove = vertex.adjacent
    adjacentToRemove.forEach(node => node.adjacent.delete(vertex))
    this.nodes.delete(vertex)
  }


  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let value = []
    let seen = new Set([start])

    function traverse(vertex) {
      if (!start) {
        return null
      }
      seen.add(vertex);
      value.push(vertex.value);
      vertex.adjacent.forEach(node => {
        if (!seen.has(node)) {
          return traverse(node)
        }
      })
    }
    traverse(start)

    return value

  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let queue = [start];
    let result = [];
    let visited = new Set([start])
    while (queue.length) {
      let current = queue.shift()
      result.push(current.value)
      current.adjacent.forEach(node => {
        if (!visited.has(node)) {
          visited.add(node);
          queue.push(node)
        }
      })
    }
    return result
  }


}

module.exports = { Graph, Node }