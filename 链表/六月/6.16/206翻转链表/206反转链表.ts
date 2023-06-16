/**
 *  206 翻转链表 https://leetcode.cn/problems/reverse-linked-list
 *  tags：【简单】
 *  实现方式：
 *      【while】迭代
 *      【递归】
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * 递归形式
 * @param head
 * @returns
 */
// function reverseList(head: ListNode | null): ListNode | null {
//     // 递归结束条件 - 递归将会截至到链表的倒数第二个元素
//     if (!head || !head.next) return head;

//     // 递归开始
//     const newHead = reverseList(head.next);

//     // 当前节点的下一个节点的next指向当前的节点实现反转
//     head.next.next = head;
//     // 当前节点的next指向null，在下一次递归中会再次修改next的指向
//     head.next = null;

//     return newHead;
// }

/**
 *  迭代形式
 * @param head
 * @returns
 */
function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let cur: ListNode | null = head;
    let prev: ListNode | null = null;

    while (cur) {
        // 提前将下一个节点取出来，因为next修改后指向就会发生变化
        const nextPoint = cur.next;

        // 将当前的节点的next指向为上一个节点
        cur.next = prev;
        // 存储上一个节点，为当前的节点
        prev = cur;

        cur = nextPoint;
    }

    return prev;
}

const head = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, null)))
);
console.log(reverseList(head));
