/** 27. 移除元素 https://leetcode.cn/problems/remove-element
 *
 * @param nums
 * @param val
 * @returns
 */

function removeElement(nums: number[], val: number): number {
    // 快慢指针
    if (!nums.length) return 0;

    let fast = 0;
    let slow = 0;

    while (fast <= nums.length - 1) {
        const v = nums[fast];

        // 如果元素不一致就用快指针的值覆盖慢指针的值
        // 在过程中慢指针递增
        if (v !== val) {
            nums[slow++] = nums[fast];
        }

        // 如果相等的话这个值就不需要交换？
        // 因为最终需要返回的是慢指针的索引，只需要确保在不相等的时候覆盖数值即可
        // 实际上并不能完全覆盖掉target value，但是能保证慢指针所指向的索引前面都是OK的
        fast++;
    }

    return slow;
}

// 该题仅仅需要返回移除元素后的数组大小即可
// 如果换个题目需要返回数组移除元素后的数组也很简单，只需要拿到慢指针的索引去截取原数组即可
// 不需要使用额外的内存空间，但是截取字符串是需要遍历的，因此这部分也需要考虑
