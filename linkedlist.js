//A linked list is a linear data structure similar to an array.
//sequence of elements , where each element links to the next element.
//elemenst acan be of any data type character , number or string 
//elements can be sorted or unsorted , can be duplicate or unique
//insert o(1) -quick , search o(n)-slow

/*class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}*/

//singly linked list - 

function Node(value){
    this.data = value;
    this.next = null;

}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

function printNode(h3){
 while(h3!=null){
    console.log(h3.data);
    h3 = h3.next
 }
}
console.log(head);

//doubly linked list-each node would have two links - one to the next node and another to the previous node

function Node(value){
    this.data = value;
    this.next = null;

}
