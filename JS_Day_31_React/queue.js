class Queue {
  QueueData;
  QSize;
  QMaxSize;
  QdqItem;

  constructor() {
    this.QueueData = [];
    this.QSize = this.QueueData.length;
    this.QMaxSize = 10;
  }

  enQueue() {
    let queueVal = Number(document.getElementById("queueVal").value);
    if (this.QSize == this.QMaxSize) {
      console.log("Queue is full, can't insert element in Queue...");
    } else {
      this.QueueData[this.QSize] = queueVal;
      this.QSize += 1;
    }
  }
  // when not getting the input from html file
  //   enQueue(queueVal) {
  //     if (this.QSize == this.QMaxSize) {
  //       console.log("Queue is full, can't insert element in Queue...");
  //     } else {
  //       this.QueueData[this.QSize] = queueVal;
  //       this.QSize += 1;
  //     }
  //   }

  deQueue() {
    if (this.QSize != 0) {
      this.QdqItem = this.QueueData[0];
      for (let i = 0; i < this.QueueData.length; i++) {
        this.QueueData[i] = this.QueueData[i + 1];
      }

      this.QSize -= 1;
      this.QueueData.length = this.QSize;
    } else {
      console.log("Queue is empty, can't remove element from Queue...");
    }
  }
}

ob = new Queue();
// ob.enQueue(10);
// ob.enQueue(20);
// ob.enQueue(30);
// ob.enQueue(40);
// ob.enQueue(50);
// ob.enQueue(60);
// ob.enQueue(70);
// ob.enQueue(80);
// ob.enQueue(90);

// console.log(ob.QueueData);
// console.log(ob.QSize);
// console.log(ob.QMaxSize);

// ob.deQueue();
// console.log(ob.QueueData);
// console.log(ob.QSize);
// console.log(ob.QMaxSize);
