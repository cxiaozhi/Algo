class MergeSort {
    constructor(parameters) {}
    /**
     * 归并排序
     */
    merge(nums: number[], left: number, mid: number, right: number): void {
        const temp = new Array(right - left + 1);
        let i = left,
            j = mid + 1,
            k = 0;
        while (i <= mid && j <= right) {
            if (nums[i] <= nums[j]) {
                temp[k++] = nums[i++];
            } else {
                temp[k++] = nums[j++];
            }
        }

        while (i <= mid) {
            temp[k++] = nums[i++];
        }

        while (j <= right) {
            temp[k++] = nums[j++];
        }

        // 复制数组
        for (let k = 0; k < temp.length; k++) {
            nums[left + k] = temp[k];
        }
    }

    mergeSort(nums: number[], left: number, right: number): void {
        if (left >= right) return; // 当数组长度为1 终止递归
        let mid = Math.floor(left + (right - left) / 2);
        this.mergeSort(nums, left, mid);
        this.mergeSort(nums, mid + 1, right);
        this.merge(nums, left, mid, right);
    }
}
