import { ListNode } from "../141环形链表/快慢指针";
/**
 * 142. 环形链表2
 */

// 此题无非就是141环形链表的一个变种

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null;

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if (fast === slow) {
            // 如果相等这说明一定是有环的，但是环的位置具体是哪里是不确定的，但是可以确定的是
            // 我们已经确定这个链表中是存在环的，并且现在快慢指针又重叠了，那么现在只需要两个指针分别各自遍历

            // 两个指针第一次相遇的时候根据f=2s，fast比slow多走了两倍，并且fast是比slow多走了n个环的长度所以f = s + nb（b为环的长度）
            // 那么两个式子列等式，现在的s = nb，也就是说现在慢指针已经走了nb的长度
            // 对于想要找到入口节点来说，我需要经历a + nb个长度（a为头节点到入口节点的长度，n >= 0）
            // 那么慢指针已经走了nb长度了，只需要再走a即可，因为让fast置为头节点，双方同时移动，移动a个长度即可第二次重合，这个位置就是入口节点
            // 为什么需要将fast置为头节点呢？因为a的值我们并不知道，根据公式都只需要再走a长度双方就可以重合，因此等到他们相等就是走了a长度，也就是入口节点
            fast = head;
            while (fast !== slow) {
                fast = fast?.next ?? null;
                slow = slow?.next ?? null;
            }

            return slow;
        }
    }

    return null;
}
