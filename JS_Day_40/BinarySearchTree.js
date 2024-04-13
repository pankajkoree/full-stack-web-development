// node class
class Node{
    constructor(){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}


// binary tree)
class BinaryTree{
    constructor(){
        this.root = null;
    }

    isTreeEmpty(){
        return this.root === null;
    }
}


let ob = new BinaryTree();
console.log(ob.isTreeEmpty());