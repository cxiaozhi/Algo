/**
 * 力扣: https://github.com/sisterAn/JavaScript-Algorithms/issues/80
 */
const runBackward = () => {
    const res = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] ;
    const base = [];
    for (let i = 0; i < res.length; i++) {
        if (base.length) {
            const item = base.splice(base.length - 1, 1)[0];
            base.unshift(item);
        }
        base.unshift(res[i])
    }
    return base;
}

console.log(runBackward());

