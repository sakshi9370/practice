class Node{
    constructor(data){
        this.value=data;
        this.next=null;
    }
}
class linkedlist{
    constructor(data){
        const newnode=new Node(data);
            this.head=newnode;
            this.tail=newnode;
            this.length=1;
    }

    insertatend(data){
        const newnode=new Node(data);
            if(!this.length){
                this.head=newnode;
                this.tail=newnode;
            }
            else{
            this.tail.next=newnode;
            this.tail=newnode;
          }
          this.length++;
          return this;
}
    insertatstart(data ){
        const newnode=new Node(data);
            if(!this.length){
                this.head=newnode;
                this.tail=newnode;
            }
            else{
            newnode.next=this.head;
            this.head=newnode;
            }
            this.length++;
            return this;
    }
    

    deleteatstart(){
        if(!this.length) 
            return undefined;
        let temp=this.head;
        if (this.length === 1){
            this.head=null;
            this.tail=null;
        }
        else{
            this.head=this.head.next;
            temp.next=null;
        }
        this.length--;
        return temp;
    }

    deleteatend(){
        if(!this.length) return undefined;
        let temp=this.tail;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        else{
            let temp=this.head;
            let prev=this.head;
            while(temp.next){
                prev=temp;
                temp=temp.next;
            }

            this.tail=prev;
            prev.next=null;
            
        }
            this.length--;
            return temp;
    }
}
const ll=new linkedlist(23);
ll.insertatend(40);
ll.insertatend(3);
ll.insertatend(30);
ll.insertatend(45);
ll.insertatstart(25);
ll.insertatstart(12);
console.log(JSON.stringify(ll))
let  p=ll.deleteatstart();
console.log(p);
let p2=ll.deleteatend();
console.log(p2);
console.log(JSON.stringify(ll))

