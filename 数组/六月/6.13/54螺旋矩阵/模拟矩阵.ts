/**
 * 54 螺旋矩阵  https://leetcode.cn/problems/spiral-matrix/
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */

/**
 * 测试用例：[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 *      结果：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 测试用例：[[1,2,3],[4,5,6],[7,8,9]]
 *      结果：[1,2,3,6,9,8,7,4,5]
 */

function spiralOrder(matrix: number[][]): number[] {
    if (!matrix.length) return [];

    const arr: number[] = [];
    const h = matrix.length;
    const w = matrix[0].length;
    // 循环次数是最短边对2的除法结果
    let loopTime = Math.ceil(Math.min(h, w) / 2);

    // 步长需要分别根据两个边长分别处理
    let chunkX = w - 1;
    let chunkY = h - 1;
    let startX = 0;
    let startY = 0;
    let x: number, y: number;

    // 如果只有一行
    if (h === 1) {
        return matrix[0];
    } else if (w === 1) {
        // 如果只有一列
        let i = 0;
        while (i < h) {
            arr.push(matrix[i++][0]);
        }
        return arr;
    } else {
        while (loopTime--) {
            x = startX;
            y = startY;

            while (x < chunkX + startX && arr.length < h * w) {
                arr.push(matrix[y][x]);
                x++;
            }
            while (y < chunkY + startY && arr.length < h * w) {
                arr.push(matrix[y][x]);
                y++;
            }
            while (x > startX && arr.length < h * w) {
                arr.push(matrix[y][x]);
                x--;
            }
            while (y > startY && arr.length < h * w) {
                arr.push(matrix[y][x]);
                y--;
            }

            startX++;
            startY++;
            chunkX -= 2;
            chunkY -= 2;
        }
    }

    if (w % 2 && arr.length < h * w) {
        arr.push(matrix[--startY][--startX]);
    }

    return arr;
}

// console.log(spiralOrder([[1, 2, 3, 4]]));

// console.log(
//     spiralOrder([
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//         [17, 18, 19, 20],
//         [21, 22, 23, 24],
//     ])
// );

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);

console.log(
    spiralOrder([
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, 10],
        [11, 12, 13],
    ])
);

console.log(
    spiralOrder([
        [1, 2, 3, 4, 5, 6, 7],
        [9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22],
    ])
);
