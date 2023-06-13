function minSubArrayLen(target: number, nums: number[]): number {
    if (!nums.length) return 0;
    // 首先需要保证最小的元素和是相邻的元素

    let begin = 0;
    let end = 0;
    let minRes = nums.length + 1;
    let winSum = nums[begin];

    while (end <= nums.length) {
        winSum += nums[end];
        if (winSum >= target) {
            // 不断移动左指针
            while (winSum - nums[begin] >= target) {
                winSum -= nums[begin++];
            }
            // 在索引值中取出最小的
            minRes = Math.min(minRes, end - begin + 1);
        }
        end++;
    }
    return minRes;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
