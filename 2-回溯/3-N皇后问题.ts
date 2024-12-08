/**
 * 根据国际象棋的规则，皇后可以攻击与同处一行、一列或一条斜线上的棋子。给定个皇后和一个大小的棋盘，寻找使得所有皇后之间无法相互攻击的摆放方案。
 */
function backtrack(row: number, n: number, state: string[][], res: string[][][], cols: boolean[], diags1: boolean[], diags2: boolean[]): void {
    if (row === n) {
        res.push(state.map((row) => row.slice()));
        return;
    }
    for (let col = 0; col < n; col++) {
        const diag1 = row - col + n -1;
        const diag2 = row + col;
        if (!cols[col] && !diags1[diag1] && !diags2[diag2]) {
            state[row][col] = "Q"
            cols[col] = diags1[diag1] = diags2[diag2] = true
            backtrack(row+1,n,state,res,cols,diags1,diags2)
            state[row][col] = "#"
            cols[col] = diags1[diag1] = diags2[diag2] = false
        }
    }
}

function nQueen(n:number):string[][][] {
    const state = Array.from({length:n},()=>Array(n).fill("#"))
    const cols = Array(n).fill(false)
    const diags1 = Array(2*n - 1).fill(false)
    const diags2 = Array(2*n -1).fill(false)
    const res:string[][][] = []
    backtrack(0,n,state,res,cols,diags1,diags2)
    return res
}

console.log(nQueen(4));

