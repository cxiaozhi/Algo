/**
 * 力扣：https://leetcode.cn/problems/insert-delete-getrandom-o1/description/
 */

class RandomizedSet {
    valArr: number[] | null = null;
    constructor() {
        this.valArr = [];
    }

    insert(val: number): boolean {
        if (this.valArr.includes(val)) {
            return false;
        } else {
            this.valArr.push(val);
        }
        return true;
    }

    remove(val: number): boolean {
        if (this.valArr.includes(val)) {
            let index = this.valArr.indexOf(val)
            this.valArr.splice(index, 1);
            return true;
        }
        return false;
    }

    getRandom(): number {
        let randomNum = Math.floor(Math.random() * this.valArr.length);
        return this.valArr[randomNum];
    }
}
let obj1 = new RandomizedSet();
let param_1 = obj1.insert(0);
let param_11 = obj1.insert(1);
let param_2 = obj1.remove(0);
let param_3 = obj1.insert(2);
let param_22 = obj1.remove(1);
let param_4 = obj1.getRandom();
console.log(param_1,param_11, param_2, param_3,param_22, param_4);
