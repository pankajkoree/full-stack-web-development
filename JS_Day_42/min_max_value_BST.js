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

        // checks if root is null, then makes root as newNode 
        if (this.root === null) {
            this.root = newNode;
        }
        // if root isn't null then with the help of insert function inserts newNode in either left or right
        else {
            this.insertNode(this.root, newNode);
        }
    }
    // method to insert the Node in the tree
    insertNode(root, newNode) {
        // checks whether the data to be inserted is less than root data or not, if yes , root counter goes to left
        if (root.value > newNode.value) {
            // if root's left is null, data is inserted here
            if (root.left === null) {
                root.left = newNode;
            }
            // if the root's left isn't null, through the recursion created another root's left node and insert the data
            else {
                this.insertNode(root.left, newNode);
            }
        }
        // this else part is when the data to be inserted is greater than root
        else {
            // this if part checks whether the root's right is null or not, if yes insertes new data here
            if (root.right === null) {
                root.right = newNode;
            }
            // recursively stores data in right node
            else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    // function to search a specific value in the tree using recursion method
    search(root, data) {
        // if the root value  is null, it returns false, means search isn't present in tree
        if (root === null) {
            return false;
        }
        // if root value is the value to be searched it returns true
        else if (root.value === data) {
            return true;
        }
        // if the data item is less than the root value, pointer moves to left of root
        else if (data < root.value) {
            return this.search(root.left, data);
        }
        // pointer moves right to the root, if data value is greater than root value
        else {
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

    // traversing the tree using Depth First Search (DFS)


    // using inOrder
    // rule : Lt R Rt  ----> Lt = left subtree  , R = Root  , Rt = Right subtree
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root);
            this.inOrder(root.right);
        }
    }

    // using preOrder
    // rule : R Lt Rt  ----> Lt = left subtree  , R = Root  , Rt = Right subtree
    preOrder(root) {
        if (root) {
            console.log(root);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    // using postOrder
    // rule : Lt Rt R  ----> Lt = left subtree  , R = Root  , Rt = Right subtree
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root);
        }
    }

    // traversing using BFS which traverses the node in order of the level wise
    bfs(root) {
        let queue = [];
        queue.push(root);
        while (queue.length) {
            let current = queue.shift();
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            console.log(current.value);
        }
    }

    // function to find the minimum value from the binary search tree
    minValue(root) {
        // if root's left value doesn't exist, returns roots's value
        if (!root.left) {
            return root.value;
        }
        // otherwise, recursively the minimum left value will be as root and returns root's value
        else {
            return this.minValue(root.left);
        }
    }

    // function to find the maximum value from the binary search tree
    maxValue(root) {
        // if root's right value doesn't exist, returns roots's value
        if (!root.right) {
            return root.value;
        }
        // otherwise, recursively the maximum right value will be as root and returns root's value
        else {
            return this.maxValue(root.right);
        }
    }

    // function to delete the node from the binary search tree
    removeNode() {
        // recursively call the deleteNode
        this.root = this.deleteNode(root, value);
    }

}

let ob = new BinaryTree();

ob.makeTree(20);
ob.makeTree(10);
ob.makeTree(5);
ob.makeTree(11);
ob.makeTree(30);
ob.makeTree(40);
ob.makeTree(23);

//console.log(ob.search(ob.root, 50));

//console.log(ob.searchData(ob.root, 5));

//ob.inOrder(ob.root);

//ob.preOrder(ob.root);

//ob.postOrder(ob.root);

//ob.bfs(ob.root);

//console.log(ob.minValue(ob.root));

//console.log(ob.maxValue(ob.root));

console.log(ob.deleteNode(ob.root, 20));