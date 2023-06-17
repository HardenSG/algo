/**
 *  19. 删除链表的倒数第 N 个结点
 */

/**
 *  运用技术：双指针 + 虚拟头节点
 *  1. 为什么要使用虚拟头节点，举个例子，如果链表有两个元素
 *      恰好删除的正是倒数第2个节点，那么阁下该如何应对呢？
 *  使用虚拟头节点可以轻松应对这种事情
 *  2. 双指针-快指针用来和慢指针拉开步幅，等到快指针到最后一个元素的时候
 *      慢指针刚刚好到倒数第n + 1节点，这时只需要slow.next = slow.next.next即可
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || (!head.next && n === 1)) return null;

    const visionHead = new ListNode(undefined, head);
    let fast: ListNode | null = visionHead;
    let slow: ListNode | null = visionHead;

    // 初始化快指针
    while (n--) {
        if (fast.next) {
            fast = fast?.next;
        }
    }

    // 开始移动指针至最后一个元素
    while (fast.next) {
        slow = slow?.next ?? null;
        fast = fast?.next;
    }

    // 移动至最后一个元素时，slow处于倒数第n + 1位置
    slow!.next = slow?.next?.next ?? null;

    // 返回虚拟头节点的next
    return visionHead.next;
}
