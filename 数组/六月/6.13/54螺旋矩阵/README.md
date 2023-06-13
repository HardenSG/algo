# 54 螺旋矩阵

[螺旋矩阵](https://leetcode.cn/problems/spiral-matrix/)

该题目相比 [59. 螺旋矩阵||](https://leetcode.cn/problems/spiral-matrix-ii/)有些许不同，并不是因为传参和返回值不同，而是因为矩阵并非是一个正方形的，这时候就需要妥善处理边的问题和chunk的问题

循环的次数以什么为主呢？
要以最短的边的除以2为基准

其余实现的思路和59是一样的
