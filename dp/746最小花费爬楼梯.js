/** 
 * # 1. 定义
 *  dp[i]的定义：到达第i台阶所花费的最少体力为dp[i]
 *  可以有两个途径得到dp[i]，一个是dp[i-1] 一个是dp[i-2]
 *      - dp[i - 1] 跳到 dp[i] 需要花费 dp[i - 1] + cost[i - 1]
 *      - dp[i - 2] 跳到 dp[i] 需要花费 dp[i - 2] + cost[i - 2]
 *  选最小的：dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
 * # 2. 确定dp初始化
 *  初始化全部的dp数组是不现实的，但是由于dp[i]=dp[i-1]/dp[i-2]推出，所以只初始化dp[0]、dp[1]即可
 *  并且题目给出：0、1台阶不需要花费，所以dp[0]=dp[1]=0
 * # 3. 遍历
 *  台阶问题，从头（dp初始化的下一个：2）到尾遍历cost即可
 */
/**
 * @param {Number[]} cost 
 * @returns {Number}
 */
function dpFunction(cost) {
    const dp = [0, 0]
    for(let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }
    return dp[cost.length]
}