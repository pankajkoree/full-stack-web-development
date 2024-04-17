// making graph
class graph {
    constructor() {
        this.graphData = {};
    }

    // adding the vertices
    addVertex(vertex) {
        if (!this.graphData[vertex]) {
            this.graphData[vertex] = [];
        }
    }


    // adding the edges
    addEdges(v1, v2) {
        if (!this.graphData[v1]) {
            this.addVertex(v1);
        }
        if (!this.graphData[v2]) {
            this.addVertex(v2);
        }
        this.graphData[v1].push(v2);
        this.graphData[v2].push(v1);
    }
}


let ob = new graph();
// dynamic vertices
ob.addVertex('a');
ob.addVertex('b');
ob.addVertex('c');
ob.addVertex('d');

// dynamic edges as pair of vertices
ob.addEdges('a', 'b');
ob.addEdges('a', 'c');
ob.addEdges('b', 'c');
ob.addEdges('b', 'd');
console.log(ob.graphData);
