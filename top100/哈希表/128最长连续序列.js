/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 *  输入：nums = [100,4,200,1,3,2]
 *  输出：4
 *  解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 * 
 * 
 * 题目解题方式采用哈希表，此题抓住问题核心：连续的序列的特点是当前元素 + 1等于下一个元素，借此去到hashSet中查找目标元素是否存在
 * 如果存在将计数器+1，否则此条序列断了，继续遍历其他的序列
 * 
 * 这个地方需要对遍历过的序列去重，怎么判断已经遍历过了呢？
 *      因为当前的元素如果被遍历过了那一定是满足某个元素+1等于当前元素的，那么这就证明当前元素和当前元素-1都是存在的
 *      所以判断当前元素-1是否存在，存在即代表肯定被遍历过了，不存在即需要从此处开始遍历
 */
function longestConsecutive(nums) {
    const set = new Set()
    // 全部push进去
    for(const num of nums) {
        set.add(num)
    }

    // 记录当前最长序列长度
    let longestLength = 0;
    for(const num of nums) {
        // 没必要再重新校验一遍已经校验过了，所以中间可能会跳过一堆元素
        if(!set.has(num - 1)) {
            let currentNum = num 
            let longLength = 1

            // while检测是否存在 大于1的递增元素
            while(set.has(currentNum + 1)) {
                currentNum += 1
                longLength += 1
            }

            // 由于一个数据集中连续的序列可能并不只是一个有可能是多个，取最长的那个
            longestLength = Math.max(longestLength, longLength)
        }
    }

    return longestLength
}

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));