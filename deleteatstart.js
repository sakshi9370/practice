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
    shift() {   //delete from start SLL
        if (!this.length) return undefined;
        let temp = this.head;
        if (this.length === 1) {
          this.head = null; // this will beak pointer which head is pointing
          this.tail = null;
        } else {
          this.head = this.head.next;
          temp.next = null;
        }
        this.length--;
        return temp;
      }
    }

    const ll = new Linkedlist(2);
    
console.log(ll);




let p1 = ll.shift();
console.log(JSON.stringify(ll));

console.log(p1);