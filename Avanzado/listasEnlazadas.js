class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    getLast() {
        let lastNode = this.head;

        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }

        return lastNode;
    }

    size() {
        let count = 0
        let node = this.head;

        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.nextId = null;
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let list = new LinkedList(node1);