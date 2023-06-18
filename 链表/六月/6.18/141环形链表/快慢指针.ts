/**
 * 141. 环形链表
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
 *  解法包括哈希表 + 快慢指针
 *  此解法为快慢指针
 */
function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    // 如果fast.next都为null了，那么肯定是到最后一个节点了，那么肯定是没有环了
    while (fast && fast.next) {
        slow = slow!.next;
        // 一步一步追是肯定追不上的
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}
// 让fast = fast.next.next 因为如果让fast = fast.next那就相当于和slow一样了悠闲地一次一个的移动
// 那是绝对不可能相遇的，即使不用形成环，一定是要让fast去追slow，因此每次移动的步长为2

export { ListNode };
