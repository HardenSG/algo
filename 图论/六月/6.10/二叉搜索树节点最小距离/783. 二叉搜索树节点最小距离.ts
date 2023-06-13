/** 783. 二叉搜索树节点最小距离 https://leetcode.cn/problems/minimum-distance-between-bst-nodes/
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
 * 差值是一个正数，其数值等于两值之差的绝对值。
 */

// BST中序遍历的结果是一个有序的序列
// 遇到在二叉搜索树上求什么最值啊，差值之类的，就把它想成在一个有序数组上求最值，求差值，这样就简单多了

/**
 *  槽点：可能会被误导为类似于滑动窗口求最小值，其实不然，最小差值就是相邻节点的最小差值
 *  同时配合上中序遍历，就可以直接在遍历的过程中获取到最小值
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 *  递归法
 * @param root
 * @returns
 */
function minDiffInBST(root: TreeNode | null): number {
    // if (!root) return null;
    let pre: TreeNode | null = null;
    let result = Number.MAX_VALUE;

    function getMinResult(node: TreeNode | null) {
        if (node) {
            getMinResult(node.left);
            if (!pre) {
                result = Math.min(result, Math.abs(result - node.val));
            }
            pre = node;
            getMinResult(node.right);
        }
    }

    getMinResult(root);
    return result;
}

/**
 *  非递归法
 * @param root
 * @returns
 */
function minDiffInBST(root: TreeNode | null): number {
    // if (!root) return null;
    let result = Number.MAX_VALUE;

    const stack: (TreeNode | null)[] = [];
    let cur: TreeNode | null = root;
    let pre: TreeNode | null = null;

    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }

        // 取出元素
        cur = stack.pop()!;

        // 中序遍历对比值
        if (pre) {
            result = Math.min(result, Math.abs(pre.val - cur.val));
        }
        pre = cur;
        cur = cur.right;
    }

    return result;
}

/**
 *  辅助数组法
 * @param root
 * @returns
 */
function minDiffInBST(root: TreeNode | null): number {
    // if (!root) return null;
    let result = Number.MAX_VALUE;

    const stack: (TreeNode | null)[] = [];

    // 中序遍历
    function traverse(node: TreeNode | null) {
        if (!node) return;
        traverse(node.left);
        stack.push(node);
        traverse(node.right);
    }
    traverse(root);

    for (let i = 1; i < stack.length; i++) {
        const v = stack[i] as TreeNode;
        const prev = stack[i - 1] as TreeNode;
        result = Math.min(result, Math.abs(v?.val - prev?.val));
    }

    return result;
}
