class Node {
    constructor(data) {
      this.value = data;
      this.next = null;
    }
  }
  
  class Linkedlist {
    constructor(data) {
      //create a node
      const newnode = new Node(data);
      //initialize head and tail
      this.head = newnode;
      this.tail = newnode;
      //initialize lenth
      this.length = 1;
    }

    unshift(value) {    //  insert at start SLL
        const newNode = new Node(value);
        if (!this.length) {
          this.head = newNode;
          this.tail = this.head;
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
        this.length++;
        return this;
      }
    }
      const ll = new Linkedlist(2);
console.log(ll);
ll.unshift(10);
console.log(JSON.stringify(ll));