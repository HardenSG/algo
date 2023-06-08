# MST

![Prim求解MST](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/26/171b4c899d46a744~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

Prim算法求解MST需要利用顶点集合和边的集合，并且不断的更新集合的内容，直到全部迭代完毕
例如，在查找最小值的时候，查找出当前值之后，更新k和min。k会标记出当前顶点的位置，然后能在k行去找元素，遍历此行元素，如果元素的值小于lowCost原始边的集合并且lowCost不等于0（未完成）的情况下更新lowCost对应的索引的位置上的元素。
Prim算法就是利用不断的遍历不断地找边集合中最短的边，更新边集合的值最终遍历结束的时候值都是1
