/** 美丽塔II
 * https://leetcode.cn/problems/beautiful-towers-ii/description/
 * 
 * 示例 1：
 *    [输入]：maxHeights = [5,3,4,1,1]
 *    [输出]：13
 *    [解释]：和最大的美丽塔方案为 heights = [5,3,3,1,1] ，这是一个美丽塔方案，因为：
 *      - 1 <= heights[i] <= maxHeights[i]  
 *      - heights 是个山脉数组，峰值在 i = 0 处。
 *    13 是所有美丽塔方案中的最大高度和。
 * 
 * 示例 3：
 *    [输入]：maxHeights = [3,2,5,5,2,3]
 *    [输出]：18
 *    [解释]：和最大的美丽塔方案为 heights = [2,2,5,5,2,2] ，这是一个美丽塔方案，因为：
 *      - 1 <= heights[i] <= maxHeights[i]
 *      - heights 是个山脉数组，最大值在 i = 2 处。
 *    注意，在这个方案中，i = 3 也是一个峰值。
 *    18 是所有美丽塔方案中的最大高度和。
 * 
 * 
 * 思路：{单调栈 + DP} 
 * level：middle but hard
 * 
 */

// 官方题解：
function maximumSumOfHeights(maxHeights) {
    const n = maxHeights.length;
    // 峰值前缀数组
    const prefix = new Array(n).fill(0);
    // 峰值后缀数组
    const suffix = new Array(n).fill(0);

    // 单调栈
    const stack1 = [];
    const stack2 = [];
    
    // 高度和
    let res = 0;

    // 处理前缀
    for (let i = 0; i < n; i++) {
        while (stack1.length > 0 && maxHeights[i] < maxHeights[stack1[stack1.length - 1]]) {
            stack1.pop();
        }
        if (stack1.length == 0) {
            prefix[i] = (i + 1) * maxHeights[i];
        } else {
            let last = stack1[stack1.length - 1];
            prefix[i] = prefix[last] + (i - last) * maxHeights[i]
        }
        stack1.push(i);
    }
    
    // 处理后缀
    for (let i = n - 1; i >= 0; i--) {
        while (stack2.length && maxHeights[i] < maxHeights[stack2[stack2.length - 1]]) {
            stack2.pop();
        }
        if (stack2.length == 0) {
            suffix[i] = (n - i) * maxHeights[i];
        } else {
            last = stack2[stack2.length - 1];
            suffix[i] = suffix[last] + (last - i) * maxHeights[i];
        }
        stack2.push(i);
        res = Math.max(res, prefix[i] + suffix[i] - maxHeights[i])
    }          
    return res
}


console.log(maximumSumOfHeights([6,5,3,9,2,7]));