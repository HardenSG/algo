/**
 *  160. 相交链表
 */

/**
 *  由于链表的长度可能是不一样的，因此为了表示相交的链表
 *  那就需要保证交点链表后的长度都一致，因此需要先消除长度差
 *  也就是要让链表右对齐
 *  通过遍历，让PA遍历到最后为null的时候赋值为headB
 *  PB遍历到最后赋值为headA。等到PA为headB头节点的时候，PB的指针恰好等于headB的头节点对齐的位置
 *  然后继续遍历，直到双方的指针相同而不是val相同
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null
): ListNode | null {
    if (!headA || !headB) return null;

    let PA: ListNode | null = headA;
    let PB: ListNode | null = headB;
    while (PA !== PB) {
        PA = PA === null ? headB : PA.next;
        PB = PB === null ? headA : PB.next;
    }

    return PA;
}
