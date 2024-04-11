class LinkedList {

    // constructor to automatically invoking this function
    constructor(data) {
        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
    }

    // function to add a newnode to the linkedlist
    appendNode(appendValue) {
        let newNode = {
            value: appendValue,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    // function to traverse the linkedList
    traverse() {
        let counter = 0;
        let CurrentNode = this.head;
        while (counter < this.size) {
            console.warn(CurrentNode);
            CurrentNode = CurrentNode.next;
            counter++;
        }
    }
}

let ob = new LinkedList(100);
ob.appendNode(200);
ob.appendNode(300);
ob.appendNode(400);
ob.appendNode(500);
ob.appendNode(600);

ob.traverse();

//console.log(ob);