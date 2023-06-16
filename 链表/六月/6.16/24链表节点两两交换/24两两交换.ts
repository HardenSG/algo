/**
 *  24. 两两交换链表中的节点 https://leetcode.cn/problems/swap-nodes-in-pairs/
 *  给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你
 *  必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
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
 *  非递归型
 * @param head
 * @returns
 */
// function swapPairs(head: ListNode | null): ListNode | null {
//     if (!head || !head.next) return head;

//     // 虚拟节点
//     const visionPoint = new ListNode(undefined, head);
//     let cur: ListNode | null = visionPoint;

//     // 循环交换
//     while (cur && cur.next && cur.next.next) {
//         const firNode: ListNode | null = cur.next;
//         const secNode: ListNode | null = cur.next.next;
//         const thiNode: ListNode | null = cur.next.next.next;

//         // 交换位置
//         cur.next = secNode;

//         // 节点的next指针交换引用
//         secNode.next = firNode;
//         firNode.next = thiNode;

//         // 赋值节点为firNode，但实际上下一次循环的时候firNode的next值就是第三个元素的值
//         // 因为在交换的过程中已经被我们交换了
//         cur = firNode;
//     }

//     return visionPoint.next;
// }

/**
 *  递归型
 */
function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    const next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;

    return next;
}

const head = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);

console.log(swapPairs(head)?.next?.next);

export {};
