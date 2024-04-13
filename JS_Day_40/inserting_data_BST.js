// node class
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

// binary tree)
class BinaryTree {
    constructor() {
        this.root = null;
    }

    //checking whether the tree is empty or not
    isTreeEmpty() {
        return this.root === null;
    }

    // making the tree
    makeTree(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }

        // if(root.value>newNode){
        //     if(root.left==null){
        //         this.left = newNode;
        //     }
        //     else{
        //         this.insertNode(root.left,newNode);
        //     }
        // }else{
        //     if(root.right==null){
        //         this.right = newNode;
        //     }
        //     else{
        //         this.insertNode(root.right,newNode);
        //     }
        // }
    }
}

let ob = new BinaryTree();
//console.log(ob.isTreeEmpty());

ob.makeTree(20);
ob.makeTree(10);
ob.makeTree(5);
ob.makeTree(30);
ob.makeTree(40);
ob.makeTree(15);
ob.makeTree(25);

ob.makeTree(7);
ob.makeTree(35);
console.warn(ob);
