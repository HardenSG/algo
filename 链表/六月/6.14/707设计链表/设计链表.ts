import runTest from "../../../../runTestExample";

class LinkedNode {
    val: number;
    next: LinkedNode | null;
    constructor(val?: number, next?: LinkedNode | null) {
        this!.val = val!;
        this!.next = next!;
    }
}

class MyLinkedList {
    // 用来记录整条链表
    // 如果删除第一个元素，那么只需要将head指向第二个元素即可
    head: LinkedNode;
    // 记录链表长度
    size: number;
    constructor() {
        this.head = new LinkedNode();
        this.size = 0;
    }

    get(index: number): number {
        const targetElement = this.getTargetElement(index);
        if (!targetElement) return -1;
        return targetElement.val;
    }

    addAtHead(val: number): void {
        const isExistChild = this.head.next;
        // 直接覆盖head节点重新记录链表，将之前链表作为当前新添加节点的next
        this.head = new LinkedNode(
            undefined,
            new LinkedNode(val, isExistChild)
        );
        this.size++;
    }

    addAtTail(val: number): void {
        const lastElement = this.getTargetElement(this.size - 1);
        // 如果没有lastElement则表明当前链表还没有元素
        if (lastElement) {
            lastElement!.next = new LinkedNode(val, null);
        } else {
            this.head = new LinkedNode(
                undefined,
                new LinkedNode(val, lastElement)
            );
        }

        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size) return;
        if (index <= 0) {
            this.addAtHead(val);
        } else if (index == this.size) {
            this.addAtTail(val);
        } else {
            const prevElement = this.getTargetElement(index - 1);
            const nextElement = prevElement!.next;
            prevElement!.next = new LinkedNode(val, nextElement);
            this.size++;
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) return;

        const prevElement = this.getTargetElement(index == 0 ? 0 : index - 1);

        if (index === 0) {
            this.head.next = prevElement!.next;
        } else {
            const nextElement = prevElement!.next!.next;
            prevElement!.next = nextElement;
        }

        this.size--;
    }

    private getTargetElement(index: number): LinkedNode | null {
        let cur: LinkedNode | null = this.head.next;
        let i = 0;
        while (cur && i < index) {
            cur = cur.next;
            i++;
        }
        return cur;
    }
}

const list = [
    "addAtHead",
    "deleteAtIndex",
    "addAtHead",
    "addAtHead",
    "addAtHead",
    "addAtHead",
    "addAtHead",
    "addAtTail",
    "get",
    "deleteAtIndex",
    "deleteAtIndex",
];
const num = [[2], [1], [2], [7], [3], [2], [5], [5], [5], [6], [4]];
const obj = new MyLinkedList();

console.log(runTest(obj, list, num));
