/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表
 * 字母异位词 是由重新排列源单词的所有字母得到的一个新单词
 *  输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 *  输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * 遍历字符串数组，字母排序后拼接字符串来鉴别是否为相同的字符串
 * 将这个处理好的字符串作为key，当前遍历的元素用来构造数组set进哈希表中
 * 存在即扩展出来重新set即可
 * 最后返回迭代出来的values
 * 此方法效率不高.....纯工程解题思路
 */
function groupAnagrams(strs) {
    const map = new Map()

    strs.forEach((val) => {
        const valArr = val.split('').sort((a, b) => a.codePointAt() - b.codePointAt()).join('')
        const values = map.get(valArr)
        if(!values) {
            map.set(valArr, [val])
        } else{ 
            map.set(valArr, [...values, val])
        }
    })

    return [...map.values()]
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));