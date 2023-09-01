class Node{
    constructor(data) {
        this.value=data;
        this.next=null;
        this.prev=null;
    }
}

class linkedlist{
    constructor(data){
        const newnode=new Node(data);
        this.head=newnode;
        this.tail=newnode;
        this.length=1;
    }

    push_start(data){
        const newnode=new Node(data);
        if(!this.length){
            this.head=newnode;
            this.tail=newnode;
        }
        else{
            newnode.next=this.head;
            this.head.prev=newnode;
            this.head=newnode;
        }
        this.length++;

    }
    
}


const ll=new linkedlist(45);
ll.push_start(12);
ll.push_start(20);
console.log(ll);