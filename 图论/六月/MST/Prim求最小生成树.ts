// 给定图求它的最小生成树
class Graph {
    public vertexes: number[];
    public adjList: number[][];
}

function PrimResolveMST(G: Graph, start: number) {
    // 边的集合，用不同的值表示不同的状态。0表示已被加入顶点集合、无穷表示没有边的连接
    const lowCost: number[] = [];
    // 用于表示已加入树的顶点
    const adjVex: number[] = [];

    // 初始化用于遍历和比对的变量
    // min用于和最短的边进行比对、i、j用于遍历操作、k用于存储当前循环最短路径所处于的索引
    let min, i, j, k;

    // 初始化已定的元素已被加入集合
    adjVex[start] = start;
    lowCost[start] = 0;

    const vertexLength = G.vertexes.length;

    // 初始化集合操作
    // 将你选定的顶点的邻接矩阵那一行作为边的集合
    for (i = 1; i < vertexLength; i++) {
        lowCost[i] = G.adjList[start][i];
        adjVex[i] = start;
    }

    // 解决此过程
    for (i = 1; i < vertexLength; i++) {
        // 界定为最大值，如此可以和边的长度作比较
        min = Number.MAX_VALUE;
        // 值的比对从第二个元素开始进行
        j = 1;
        k = 0;

        // 找当前边集合中最小的边
        while (j < vertexLength) {
            if (lowCost[j] !== 0 && lowCost[j] < min) {
                min = lowCost[j];
                k = j;
            }
            j++;
        }

        // 将当前的这个边置为0，表示已经完成了此顶点寻找最小边的操作
        for (j = 1; j < vertexLength; j++) {
            // 如果当前的边不为0（因为为0的边代表已经完成了此顶点的寻边操作）
            // 并且图中邻接矩阵的此位置的元素是小于当前的此位置的lowCost时候，更新集合的值
            if (lowCost[j] !== 0 && G.adjList[k][j] < lowCost[j]) {
                // 将边的值进行更新，方便继续寻找其他节点的值。
                lowCost[j] = G.adjList[k][j];
                // 将最小值的位置索引写入顶点集合，因为最小值的索引就是顶点的名字如V0、V1，所以效果是一样的
                adjVex[j] = k;
            }
        }
    }
}
