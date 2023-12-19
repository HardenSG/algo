/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作
 *  输入: nums = [0,1,0,3,12]
 *  输出: [1,3,12,0,0]
 * 
 * 
 * 很久以前做过的一道题，但是突然忘了.....
 * 快慢指针法：
 *  思想为：遍历一遍数组，目的在于想要将非零的元素移动到左侧，未零的不操作
 *  指针都初始化指向数组起始位置，慢指针用来交换元素、快指针用来寻找非零元素
 * 
 * gif演示可参考：https://pic.leetcode-cn.com/36d1ac5d689101cbf9947465e94753c626eab7fcb736ae2175f5d87ebc85fdf0-283_2.gif
 */

function moveZero(nums) {
    if(nums && nums.length < 2) return nums 

    let slow = 0;
    for(let fast = 0; fast < nums.length; fast++) {
        // 如果非零
        if(!!nums[fast]) {
            const temp = nums[slow]
            nums[slow++] = nums[fast]
            nums[fast] = temp
        }
    }
}

moveZero([1,2,0,4,0,1,0,4,0])