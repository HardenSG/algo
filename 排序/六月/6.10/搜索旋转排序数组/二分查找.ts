/** 33 搜索旋转排序数组 https://leetcode.cn/problems/search-in-rotated-sorted-array
 *  整数数组 nums 按升序排列，数组中的值 互不相同
 *  在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转
 *  例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2]
 *  给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1
 */

/**
 *  你必须设计一个时间复杂度为 O(log n) 的算法解决此问题 -> 二分查收
 */

// 由于数组会经过旋转不会像普通的二分查找题目那样，所以需要分别讨论
// 数组可能会在某个节点进行翻转如[1,2,3,4,5] -> [4,5,1,2,3] 这样的话mid取值为1
// 由于mid小于start的4，所以这就表明数组的左侧无序，从mid开始右侧是有序的

function search(nums: number[], target: number): number {
    if (!nums.length) return -1;

    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        const mid = (i + j) >> 1;
        if (nums[mid] === target) return mid;

        if (nums[mid] >= nums[i]) {
            // 表明左侧有序
            if (target >= nums[i] && target < nums[mid]) {
                // 这个条件要保证一致
                // 如果target >= nums[i] 这就表明左侧是有序增大的，因此也必然需要去左侧找
                // target < nums[mid] 表明mid大于target要去左侧找
                // 所以之前没有理解为什么这么写，这个地方就需要保证顺序的一致性
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        } else {
            // 表明右侧有序
            if (target <= nums[j] && target > nums[mid]) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
    }

    return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
