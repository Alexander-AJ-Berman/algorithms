// An implementation of a Graph.
class Graph {
    constructor(nodeList) {
        this.nodeList = [];
        for (let i = 0; i < nodeList.length; i++) {
            let node = new GraphNode(nodeList[i], new Set());
            this.nodeList.push(node);
        }      
    }
    // Adds an edge from node1 to node2
    addEdge(node1, node2) {
        for (let i = 0; i < this.nodeList.length; i++) {
            if (this.nodeList[i].value == node1) this.nodeList[i].connections.add(node2);
        }
    }
    // Removes the edge from node1 to node2
    removeEdge(node1, node2) {
        for (let i = 0; i < this.nodeList.length; i++) {
            if (this.nodeList[i].value == node1) this.nodeList[i].connections.delete(node2);
        }
    }

    getConnections(value) {
        for (let i = 0; i < this.nodeList.length; i++) {
            if (this.nodeList[i].value == value) return this.nodeList[i].connections;
        }
    }
}

class GraphNode {
    constructor(value, connections) {
        this.value = value;
        this.connections = connections;
    }
}

module.exports = Graph;