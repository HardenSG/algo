/**
 * 203. 移除链表元素 https://leetcode.cn/problems/remove-linked-list-elements
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点
 */

// 测试用例：head = [7,7,7,7], val = 7
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) return null;

    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
}
