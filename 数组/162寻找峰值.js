/** 
 * 示例 1：
 *  输入：nums = [1,2,3,1]
 *  输出：2
 *  解释：3 是峰值元素，你的函数应该返回其索引 2。
 * 示例 2：
 *  输入：nums = [1,2,1,3,5,6,4]
 *  输出：1 或 5 
 *  解释：你的函数可以返回索引 1，其峰值元素为 2；
 *      或者返回索引 5， 其峰值元素为 6
 * nums[i] != nums[i + 1] important
 */

/** 
 * 题目使用二分法
 * 由于nums[i] != nums[i + 1]所以只有两种情况，一个是小于一个是大于
 * 前一个小于后一个很合理，正是我们需要的。因为后一个大于前一个并且再后一个小于当前的这个就是我们要找的峰值
 * 简单举例：[1,3,2]，nums[1] > nums[0] && nums[1] > nums[2]这就是一个峰值
 * 所以使用二分，当前的值小于后一个nums[i] < nums[i + 1]的时候就是为了指向后一个元素，如果满足，将l = mid + 1这样能确保当前l这个值大于l - 1
 * 如果不小于，那证明nums[i] > nums[i + 1] 也就说明当前的值是大于后一个值的
 * 首先前置保证了nums[i] > nums[i - 1]现在又能保证nums[i] > nums[i + 1]所以这就是一个峰值
 * 
 * 代码实现上，通过不断的压缩l和r的边界，l用来做步长，因为峰值通常是用来确认下一个元素的，所以l = mid + 1，后峰值又代表下一个元素，所以r不能跨过这个距离
 * 所以r = m，最后返回l即可，因为l = mid + 1，一定是当前元素的下一个元素也就是确定的峰值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
    let l = 0
    let r = nums.length - 1
    while(l < r) {
        const mid = (l + r) >> 1
        if(nums[mid] < nums[mid + 1]) {
            l = mid + 1
        } else {
            r = mid
        }
    }
    return l
};

findPeakElement([1,2,3,1])