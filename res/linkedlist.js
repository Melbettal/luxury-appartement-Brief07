class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
class linkedlist {
    constructor() {
        this.head = this.tail = null;
    }
    addasfirst(data) {
        if (this.head === null) {
            this.head = this.tail = new Node(data);
        } else {
            let temp = this.head;
            this.head = new Node(data);
            this.prev = this.head;
            this.head.next = temp;
        }
    }
    addaslast(data) {
        if (this.head === null) {
            this.head = this.tail = new Node(data);
        } else {
            let temp = this.tail;
            this.tail = new Node(data);
            this.next = this.tail;
            this.head.prev = temp;
        }
    }
    removeasfirst() {
        if (this.head != null) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            console.log = "error";
        }
    }
    InsertByIndex(Insert, data) {
        this.size = 0;
        this.size++;
        if ()
    }
    showlist() {
        let cursor = this.head;
        while (cursor != null) {
            console.log(cursor.data);
            cursor = cursor.next;
        }
    }
}
let list = new linkedlist();
list.addasfirst("ijiv");
list.addasfirst("koko");
list.addasfirst("kefds");
list.addasfirst("desx");
list.removeasfirst();

list.showlist();