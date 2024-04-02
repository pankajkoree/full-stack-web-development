class Queue {
  Data;
  CurrentSize;
  MaxSize;
  deqItem;

  //initializing the constructor
  constructor() {
    this.Data = [];
    this.CurrentSize = this.Data.length;
  }

  //inserting element to Queue
  enQueue(QueueVal) {
    console.log("enQueue");
    if (this.CurrentSize == this.MaxSize) {
      console.log("Queue is full, can't insert element to the Queue...");
    } else {
      this.Data[this.CurrentSize] = QueueVal;
      this.CurrentSize += 1;
    }
  }

  //removing the element from the Queue
  deQueue() {
    console.log("deQueue");
    if (this.CurrentSize <= 0) {
      console.log("Queue is empty, can't remove element from the Queue...");
    } else {
      this.deqItem = this.Data[0];
      for (let i = 0; i < this.Data.length; i++) {
        this.Data[i] = this.Data[i + 1];
      }
      this.CurrentSize -= 1;
      this.Data.length = this.CurrentSize;
    }
  }

  // front function in Queue
  front() {
    console.log("front");
    if (this.CurrentSize > 0) {
      return this.Data[0];
    } else {
      return "Empty";
    }
  }

  // rear function in Queue
  rear() {
    console.log("rear");
    if (this.CurrentSize > 0) {
      return this.Data[this.CurrentSize - 1];
    } else {
      return "Empty";
    }
  }

  // mediocre function - front and rear value becomes same at length = 1
  same() {
    console.log("same");
    if (this.CurrentSize == 1) {
      this.front();
      this.rear();
      return "front and rear value is same";
    } else {
      return "length > 1, so front and rear value is different...";
    }
  }

  isEmpty() {
    console.log("isEmpty");
    if (this.CurrentSize <= 0) {
      return true;
    } else {
      return false;
    }
  }
}
