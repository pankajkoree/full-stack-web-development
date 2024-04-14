// node class
class Node {
    // constructor to initialize the values in the tree, in initial phase everything is empty
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

// binary tree)
class BinaryTree {
    // constructor to initialize the root as null
    constructor() {
        this.root = null;
    }

    //checking whether the tree is empty or not
    isTreeEmpty() {
        return this.root === null;
    }

    // making the tree structure
    makeTree(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    // method to insert the Node in the tree
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
    }

    // function to search a specific value in the tree
    search(root, data) {
        if (root === null) {
            return false;
        } else if (root.value === data) {
            return true;
        } else if (data < root.value) {
            return this.search(root.left, data);
        } else {
            return this.search(root.right, data);
        }
    }

    // another way to search a data in BST without using recursion
    searchData(root, data) {
        while (root !== null) {
            if (root.value === data) {
                return true;
            } else if (data < root.value) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return false;
    }


}

let ob = new BinaryTree();

ob.makeTree(20);
ob.makeTree(10);
ob.makeTree(5);
ob.makeTree(30);
ob.makeTree(40);
ob.makeTree(15);
ob.makeTree(25);

ob.makeTree(7);
ob.makeTree(35);

//console.log(ob.search(ob.root, 50));

console.log(ob.searchData(ob.root, 5));