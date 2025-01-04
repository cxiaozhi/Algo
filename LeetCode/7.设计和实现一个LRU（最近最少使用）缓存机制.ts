/**
 * 力扣：https://github.com/sisterAn/JavaScript-Algorithms/issues/7
 */
class LRU {
    private cache: Map<string, string> = new Map();
    max:number = 100
    get(k: string) {
        if (this.cache.has(k)) {
            return this.cache.get(k);
        }
        return -1;
    }
    put(k: string, v: string) {
        if (this.cache.size >= this.max) {
            const key = this.cache.keys().next().value
            this.cache.delete(key) // 删除第一个
        }
        this.cache.set(k,v)
    }
}

const lru = new LRU()

lru.put("1","-----")
console.log(lru.get("1"));

