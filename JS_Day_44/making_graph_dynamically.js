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

}


let ob = new graph();
ob.addVertex('a');
ob.addVertex('b');
ob.addVertex('c');
ob.addVertex('d');
console.log(ob.graphData);
