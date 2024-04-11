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

    deleteNode(index) {
        let counter = 1;
        let lead = this.head;
        if (index == 1) {
            this.head = this.head.next;
            this.size--;
        } else {
            while (counter < index - 1) {
                lead = lead.next;
                counter++;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
            this.size--;
            console.log(lead);
        }
    }
}

let ob = new LinkedList(100);
ob.appendNode(200);
ob.appendNode(300);
ob.appendNode(400);
ob.appendNode(500);
ob.appendNode(600);

//ob.traverse();

//console.log(ob);

ob.deleteNode(1);
console.log(ob);