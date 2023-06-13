# 783 二叉搜索树节点最小距离

[二叉搜索树节点最小距离](https://leetcode.cn/problems/minimum-distance-between-bst-nodes/)

## 实现思路

1. 由于树结构为一个BST，对于一个BST来说中序遍历的结果集为一个有序的升序序列
2. 鉴于升序序列来说就可以遍历这个序列求元素间的最小差值

## 实现方式

### 借助辅助数组

实现方式则为中序遍历之后获取有序序列，遍历此序列实现

``` typescript
const stack = []
let result = Number.MAX_VALUE
traverse() // 拿到有序序列
for(let i = 1; i < stack.length; i++) {
    result = Math.min(result, Math.abs(stack[i] - stack[i - 1]))
}
```

### 不借助辅助数组

不借助辅助数组其实就是在中序遍历的同时进行比对
因为在中序遍历的时候也是有序的操作，最小差值就是存在于相邻的节点之间

因此对于中序遍历的实现方式就包括递归和非递归，除了此差别外，他们的最小值获取方式都是一致的

#### 递归型

``` typescript
function minDiffInBST(root: TreeNode | null) {
    let result = Number.MAX_VALUE
    let pre: TreeNode | null = null

    function getMinResult(node: TreeNode | null) {
        if(!node) return 

        getMinResult(node.left)
        if(pre) {
            result = Math.min(result, Math.abs(pre.val - node.val))
        }
        pre = node 
        getMinResult(node.right)
    }

    getMinResult(root)
    return result
}

```

#### 非递归型

``` typescript
function minDiffInBST(root: TreeNode | null) {
    let result = Number.MAX_VALUE
    let pre: TreeNode | null = null
    let cur: TreeNode | null = root 
    const stack: (TreeNode | null)[] = []

    while(cur || stack.length) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        }

        cur = stack.pop()
        if(pre) {
            result = Math.min(result, Math.abs(pre.val - cur.val))
        }
        pre = cur 
        cur = cur.right
    }
    
    return result
}

```
