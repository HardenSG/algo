/**
 *  977. 有序数组的平方 https://leetcode.cn/problems/squares-of-a-sorted-array
 */
// 题目仍然是采用双指针写法
// 我将指针分别指向两侧，然后在遍历的同时分别计算数值的平方
// 对比左侧和右侧的平方大小，较大者按顺序从尾巴放置到结果集数组中
function sortedSquares(nums: number[]): number[] {
    if (!nums.length) return [];

    // 要求时间复杂度为O(n) 因此只能有一次遍历
    let i = 0;
    let j = nums.length - 1;
    let k = j;
    const resultSet: number[] = [];
    while (i <= j) {
        const l = nums[i] * nums[i];
        const r = nums[j] * nums[j];

        // 右侧大于左侧，将r更新到集合中
        if (l < r) {
            resultSet[k--] = r;
            // 继续计算右侧的前一个的值继续进行比较
            j--;
        } else {
            resultSet[k--] = l;
            i++;
        }
    }

    return resultSet;
}
