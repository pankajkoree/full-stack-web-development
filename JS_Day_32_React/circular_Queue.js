// circular Queue

class CircularQueue {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.Data = new Array(maxSize);
        this.currentSize = 0;
        this.front = -1;
        this.rear = -1;
    }

    // inserting element to circular queue
    enQueue(val) {
        if (this.currentSize != this.maxSize) {
            if (this.rear == this.maxSize - 1) {
                this.rear = 0;
            } else {
                this.rear++;
            }
            this.Data[this.rear] = val;
            this.currentSize++;

            if (this.front == -1) {
                this.front = this.rear;
            }
        } else {
            console.log(
                "Circular queue is full, can't insert element until there's some empty space available..."
            );
        }
    }

    // removing elements from circular queue
    deQueue() {
        if (this.currentSize != 0) {
            this.Data[this.front] = null;
            if (this.front == this.maxSize - 1) {
                this.front = 0;
            } else {
                this.front++;
            }
            this.currentSize--;
        } else {
            this.front = -1;
            this.rear = -1;
            console.log(
                "Circular Queue is empty, can't removie elements from Circular Queue..."
            );
        }
    }
}

ob = new CircularQueue(5);
ob.enQueue(11);
ob.enQueue(21);
ob.enQueue(31);
ob.enQueue(41);
ob.enQueue(51);
console.log(ob.Data);
ob.enQueue(61);
ob.deQueue();
console.log(ob.Data);