/**
 * 59. 螺旋矩阵|| https://leetcode.cn/problems/spiral-matrix-ii/
 */

/**
 * 误区：
 * 1. new Array(n).fill(new Array(n))
 * 2. new Array(n).fill(1).map(() => new Array(n))
 * 是有区别的，眼看可能觉得没什么区别，但是事实上第一个的写法的fill所填充的数组都是引用相同的
 * 所以在更新数组内容的时候引用相同，就会导致所有item都被修改了
 */

function generateMatrix(n: number): number[][] {
    if (n < 0) return [];

    const arr = new Array(n).fill(1).map(() => new Array(n));

    // 定义步长，步长即每次渲染需要渲染的item数量
    let chunk = n - 1;
    // 定义循环次数，因为每次渲染都会走完一个完整的螺旋过程，所以n / 2
    let loopTime = Math.floor(n / 2);

    let startX = 0;
    let startY = 0;
    let value = 1;
    let x: number, y: number;

    // 执行循环
    while (loopTime--) {
        x = startX;
        y = startY;

        // 执行绘画
        // 上面
        while (x < startX + chunk) {
            arr[y][x] = value;
            value++;
            x++;
        }

        // 右面
        while (y < startX + chunk) {
            arr[y][x] = value;
            value++;
            y++;
        }

        // 下面
        while (x > startX) {
            arr[y][x] = value;
            value++;
            x--;
        }

        // 左面
        while (y > startY) {
            arr[y][x] = value;
            value++;
            y--;
        }

        startX++;
        startY++;
        chunk -= 2;
    }

    // 由于前面使用Math.floor()用来获取循环的次数
    // 由于是向下取整，如果所面对的是一个奇数，那么就意味着
    // 最中间会缺失一个覆盖的时机，因此进行补齐
    if (n % 2) {
        arr[startX][startY] = value;
    }

    return arr;
}

console.log(generateMatrix(3));
