/**
 * 基于邻接矩阵实现的无向图类
 */
class GraphAdjMat {
    vertices: number[];
    adjMat: number[][];
    constructor(vertices: number[], edges: number[][]) {
        this.vertices = [];
        this.adjMat = [];
        // 添加顶点
        for (const val of vertices) {
            this.addVertex(val);
        }
        // 添加边
        for (const e of edges) {
            this.addEdge(e[0], e[1]);
        }
    }

    /**
     * 添加顶点
     */
    addVertex(val: number): void {
        const n: number = this.size();
        this.vertices.push(val);
        const newRow: number[] = [];
        for (let j = 0; j < n; j++) {
            newRow.push(0);
        }
        this.adjMat.push(newRow);
        for (const row of this.adjMat) {
            row.push(0);
        }
    }

    /**
     * 删除顶点
     */
    removeVertex(index: number): void {
        if (index >= this.size()) throw new RangeError("index out of bounds exception");
        this.vertices.splice(index, 1);
        this.adjMat.splice(index, 1);
        for (const row of this.adjMat) {
            row.splice(index, 1);
        }
    }

    /**
     * 添加边
     */
    addEdge(i: number, j: number): void {
        if (i < 0 || j < 0 || i >= this.size() || j >= this.size() || i === j) {
            throw new RangeError("index out of Bounds exception");
        }
        this.adjMat[i][j] = 1;
        this.adjMat[j][i] = 1;
    }

    // 获取顶点熟练
    size(): number {
        return this.vertices.length;
    }

    /**
     * 删除边
     */
    removeEdge(i: number, j: number): void {
        if (i < 0 || j < 0 || i >= this.size() || j >= this.size() || i === j) {
            throw new RangeError("index out of bounds exception");
        }

        this.adjMat[i][j] = 0;
        this.adjMat[j][i] = 0;
    }

    /**
     * 打印邻接矩阵
     */
    pirnt(): void {
        console.log("顶点列表 = ", this.vertices);
        console.log("邻接矩阵 = ", this.adjMat);
    }
}

/**
 * 基于邻接表实现的无向图类
 */
class GraphAdjList {
    adjList: Map<Vertex, Vertex[]>; // 邻接表
    constructor(edges: Vertex[][]) {
        this.adjList = new Map();
        // 添加所有顶点和边
        for (const edge of edges) {
            this.addVertex(edge[0]);
            this.addVertex(edge[1]);
            this.addEdge(edge[0], edge[1]);
        }
    }

    /**
     * 添加顶点
     */
    addVertex(vet: Vertex): void {
        if (this.adjList.has(vet)) {
            return;
        }
        this.adjList.set(vet, []);
    }

    /**
     * 删除顶点
     */
    removeVertex(vet: Vertex): void {
        if (!this.adjList.has(vet)) throw new RangeError("index out of bounds exception");
        this.adjList.delete(vet);
        for (const set of this.adjList.values()) {
            const index: number = set.indexOf(vet);
            if (index > -1) {
                set.splice(index, 1);
            }
        }
    }

    /**
     * 添加边
     */
    addEdge(vet1: Vertex, vet2: Vertex): void {
        if (!this.adjList.has(vet1) || !this.adjList.has(vet2) || vet1 === vet2) {
            throw new RangeError("index out of Bounds exception");
        }
        this.adjList.get(vet1).push(vet2);
        this.adjList.get(vet2).push(vet1);
    }

    // 获取顶点数量
    size(): number {
        return this.adjList.size;
    }

    /**
     * 删除边
     */
    removeEdge(vet1: Vertex, vet2: Vertex): void {
        if (!this.adjList.has(vet1) || !this.adjList.has(vet2) || vet1 === vet2) {
            throw new RangeError("index out of bounds exception");
        }

        this.adjList.get(vet1).splice(this.adjList.get(vet1).indexOf(vet2), 1);
        this.adjList.get(vet2).splice(this.adjList.get(vet2).indexOf(vet1), 1);
    }

    /**
     * 打印邻接矩阵
     */
    pirnt(): void {
        console.log("邻接表 = ");
        for (const [key, value] of this.adjList.entries()) {
            const temp = [];
            for (const vertex of value) {
                temp.push(vertex.val);
            }
            console.log(key.val + ": " + temp.join());
        }
    }
}

class Vertex {
    constructor(parameters) {}
    val: number;
}
/**
 * 广度优先遍历
 * 使用邻接表表示图 以便于获取指定顶点的所有邻接顶点
 */
function graphBFS(graph: GraphAdjList, startVet: Vertex): Vertex[] {
    const res: Vertex[] = [];
    const visited: Set<Vertex> = new Set();
    visited.add(startVet);
    const que = [startVet];
    while (que.length) {
        const vet = que.shift();
        res.push(vet); // 这里才是真正的遍历
        for (const adjVet of graph.adjList.get(vet)) {
            if (visited.has(adjVet)) continue;
            que.push(adjVet);
            visited.add(adjVet);
        }
    }
    return res;
}

/**
 * 深度优先遍历
 */
function dfs(graph: GraphAdjList, visited: Set<Vertex>, res: Vertex[], vet: Vertex) {
    res.push(vet); // 记录访问顶点
    visited.add(vet);
    for (const adjVet of graph.adjList.get(vet)) {
        if (visited.has(adjVet)) continue;
        dfs(graph, visited, res, adjVet);
    }
}

function graphDFS(graph: GraphAdjList, startVet: Vertex): Vertex[] {
    const res: Vertex[] = [];
    const visited: Set<Vertex> = new Set();
    dfs(graph, visited, res, startVet);
    return res;
}
