// @ts-nocheck
export default function runTest(
    obj: Object | Function,
    tokenList: string[],
    numList: number[][]
) {
    const res: any = [];
    if (typeof obj === "function") {
        tokenList.forEach((v, i) => {
            const fnRes = obj.apply(null, ...numList[i]);
            res.push(fnRes ?? null);
        });
    } else {
        tokenList.forEach((v, i) => {
            const objRes = obj[v]!(...numList[i]);
            res.push(objRes ?? null);
        });
    }

    return res;
}
